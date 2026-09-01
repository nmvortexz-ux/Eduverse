import fs from 'fs';
import path from 'path';

// 1. Load .env manually FIRST
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.substring(0, eqIdx).trim();
        let val = trimmed.substring(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        process.env[key] = val;
      }
    });
  }
} catch (e) {
  console.warn('Warning loading .env file:', e);
}

// 2. Import PrismaClient
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

function getJsonFiles(dirPath) {
  let results = [];
  if (!fs.existsSync(dirPath)) return results;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(fullPath);
    }
  }
  return results;
}

function normalizeDifficulty(diff) {
  const str = String(diff || '').trim().toUpperCase();
  if (str.includes('EASY')) return 'Easy';
  if (str.includes('HARD') || str.includes('HIGH')) return 'Hard';
  return 'Medium';
}

async function seedFile(filePath) {
  console.log(`\n📂 Reading file: ${path.relative(process.cwd(), filePath)}`);

  let fileData;
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    fileData = JSON.parse(raw);
  } catch (err) {
    console.error(`❌ Failed to parse JSON from ${filePath}:`, err.message);
    return;
  }

  const questionsArray = Array.isArray(fileData) ? fileData : fileData.questions || [];
  if (questionsArray.length === 0) {
    console.log(`⚠️ No questions found in ${filePath}. Skipping.`);
    return;
  }

  console.log(`🔍 Found ${questionsArray.length} questions in file.`);

  let insertedCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < questionsArray.length; i++) {
    const q = questionsArray[i];
    const cleanText = (q.text || q.question || '').trim();

    if (!cleanText) {
      skippedCount++;
      continue;
    }

    const classLevel = q.classLevel
      ? `Class ${q.classLevel}`
      : q.class
      ? String(q.class).startsWith('Class')
        ? q.class
        : `Class ${q.class}`
      : 'Class 7';

    const subject = (q.subject || 'Science').trim();
    const chapter = q.chapter ? String(q.chapter).trim() : null;
    const difficulty = normalizeDifficulty(q.difficulty);
    const explanation = (q.explanation || 'Refer to official NCERT textbook.').trim();

    try {
      // Check duplicate
      const existing = await prisma.question.findFirst({
        where: {
          text: cleanText,
          class: classLevel,
        },
        select: { id: true },
      });

      if (existing) {
        skippedCount++;
        continue;
      }

      // Format options
      let formattedOptions = [];
      if (Array.isArray(q.options)) {
        if (typeof q.options[0] === 'string') {
          const optStrings = q.options.map((o) => String(o).trim());
          let correctIdx = -1;

          if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < optStrings.length) {
            correctIdx = q.correctAnswer;
          } else if (typeof q.correctAnswer === 'string') {
            const trimmedAns = q.correctAnswer.trim();
            correctIdx = optStrings.findIndex((o) => o === trimmedAns);
            if (correctIdx === -1 && /^[0-3]$/.test(trimmedAns)) {
              correctIdx = parseInt(trimmedAns, 10);
            }
          }

          formattedOptions = optStrings.map((text, idx) => ({
            text,
            isCorrect: idx === correctIdx,
          }));
        } else if (typeof q.options[0] === 'object') {
          formattedOptions = q.options.map((optObj) => ({
            text: (optObj.text || '').trim(),
            isCorrect: Boolean(optObj.isCorrect),
          }));
        }
      }

      await prisma.question.create({
        data: {
          text: cleanText,
          class: classLevel,
          subject,
          chapter,
          difficulty,
          explanation,
          options: {
            create: formattedOptions,
          },
        },
      });
      insertedCount++;
      process.stdout.write(`\r   ⏳ Progress: ${insertedCount} inserted, ${skippedCount} skipped / ${questionsArray.length}`);
    } catch (err) {
      console.error(`\n❌ Error on Q${i + 1}:`, err.message);
    }
  }

  console.log(`\n✅ File Completed! Inserted: ${insertedCount} new questions | Skipped (duplicates): ${skippedCount}`);
}

async function main() {
  console.log('🚀 Starting EduVerse JSON Question Ingestion & Prisma Seeding...');
  const startTime = Date.now();

  const targetArg = process.argv[2];
  let targetFiles = [];

  if (targetArg) {
    const fullPath = path.resolve(process.cwd(), targetArg);
    if (fs.existsSync(fullPath)) {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        targetFiles = getJsonFiles(fullPath);
      } else if (stat.isFile()) {
        targetFiles = [fullPath];
      }
    } else {
      console.error(`❌ Target path does not exist: ${targetArg}`);
      process.exit(1);
    }
  } else {
    // Default search paths
    const pathsToSearch = [
      path.resolve(process.cwd(), '../class 6'),
      path.resolve(process.cwd(), '../class 7'),
      path.resolve(process.cwd(), 'data/commerce'),
      path.resolve(process.cwd(), 'data'),
    ];

    for (const p of pathsToSearch) {
      if (fs.existsSync(p)) {
        targetFiles = targetFiles.concat(getJsonFiles(p));
      }
    }
  }

  if (targetFiles.length === 0) {
    console.log('⚠️ No JSON question files found.');
    return;
  }

  console.log(`📋 Found ${targetFiles.length} JSON question file(s) to process:`);
  targetFiles.forEach((f) => console.log(`   • ${path.relative(process.cwd(), f)}`));

  for (const file of targetFiles) {
    await seedFile(file);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const totalDbCount = await prisma.question.count();

  console.log(`\n🎉 All question seeding finished in ${duration}s!`);
  console.log(`📊 Total questions now in Neon PostgreSQL Database: ${totalDbCount.toLocaleString()}\n`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding process encountered an error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect().catch(() => {});
  });
