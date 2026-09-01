import fs from 'fs';
import path from 'path';

// 1. Load .env
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

async function fastSeed() {
  console.log('⚡ Starting High-Speed Batch Ingestion for Class 6 & Class 7...');
  const startTime = Date.now();

  const targetDirs = [
    path.resolve(process.cwd(), '../class 6/science'),
    path.resolve(process.cwd(), '../class 7/science')
  ];

  let files = [];
  targetDirs.forEach(d => {
    files = files.concat(getJsonFiles(d));
  });

  console.log(`📂 Found ${files.length} batch JSON files.`);

  // Load existing question texts for Class 6 & Class 7 into a Set for instantaneous duplicate check
  const existingRecords = await prisma.question.findMany({
    where: {
      class: { in: ['Class 6', 'Class 7', '6', '7'] }
    },
    select: { text: true, class: true }
  });

  const existingSet = new Set(existingRecords.map(r => `${r.class}:::${r.text}`));
  console.log(`📊 Loaded ${existingRecords.length} existing Class 6/7 questions in memory.`);

  let insertedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const questions = JSON.parse(raw);
    console.log(`\n⏳ Ingesting ${path.basename(file)} (${questions.length} questions)...`);

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const cleanText = (q.text || q.question || '').trim();
      if (!cleanText) continue;

      const classLevel = q.classLevel ? `Class ${q.classLevel}` : (q.class || 'Class 7');
      const key = `${classLevel}:::${cleanText}`;

      if (existingSet.has(key)) {
        skippedCount++;
        continue;
      }

      const subject = (q.subject || 'Science').trim();
      const chapter = q.chapter ? String(q.chapter).trim() : null;
      const difficulty = normalizeDifficulty(q.difficulty);
      const explanation = (q.explanation || 'Refer to official NCERT textbook.').trim();

      let formattedOptions = [];
      if (Array.isArray(q.options)) {
        if (typeof q.options[0] === 'string') {
          const optStrings = q.options.map(o => String(o).trim());
          let correctIdx = -1;
          if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < optStrings.length) {
            correctIdx = q.correctAnswer;
          } else if (typeof q.correctAnswer === 'string') {
            const trimmedAns = q.correctAnswer.trim();
            correctIdx = optStrings.findIndex(o => o === trimmedAns);
            if (correctIdx === -1 && /^[0-3]$/.test(trimmedAns)) {
              correctIdx = parseInt(trimmedAns, 10);
            }
          }
          formattedOptions = optStrings.map((text, idx) => ({
            text,
            isCorrect: idx === correctIdx,
          }));
        } else if (typeof q.options[0] === 'object') {
          formattedOptions = q.options.map(optObj => ({
            text: (optObj.text || '').trim(),
            isCorrect: Boolean(optObj.isCorrect),
          }));
        }
      }

      try {
        await prisma.question.create({
          data: {
            text: cleanText,
            class: classLevel,
            subject,
            chapter,
            difficulty,
            explanation,
            options: {
              create: formattedOptions
            }
          }
        });
        existingSet.add(key);
        insertedCount++;
      } catch (err) {
        console.error(`❌ Error inserting question: ${err.message}`);
      }
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n🎉 High-speed ingestion finished in ${duration}s!`);
  console.log(`✅ Total Inserted: ${insertedCount} | Skipped Duplicates: ${skippedCount}`);

  const breakdown = await prisma.question.groupBy({
    by: ['class', 'subject'],
    _count: { id: true },
    orderBy: [{ class: 'asc' }, { subject: 'asc' }]
  });
  console.log('\n📊 Real-Time Database Question Breakdown:');
  console.table(breakdown);
}

fastSeed()
  .catch(e => { console.error('Error:', e); process.exit(1); })
  .finally(() => prisma.$disconnect());
