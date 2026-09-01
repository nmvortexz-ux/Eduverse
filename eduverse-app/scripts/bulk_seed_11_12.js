import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─────────────────────────────────────────────────────────────
// 1. Environment Variable Loader (.env)
// ─────────────────────────────────────────────────────────────
try {
  const envPath = path.resolve(__dirname, '../.env');
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
  console.warn('⚠️ Warning reading .env file:', e.message);
}

// ─────────────────────────────────────────────────────────────
// 2. Helpers
// ─────────────────────────────────────────────────────────────
function normalizeDifficulty(diff) {
  const str = String(diff || '').trim().toUpperCase();
  if (str.includes('EASY')) return 'Easy';
  if (str.includes('HARD') || str.includes('HIGH')) return 'Hard';
  return 'Medium';
}

function normalizeKey(cls, sub, text) {
  const cleanClass = String(cls).replace(/^class\s*/i, '').trim();
  const cleanSub = String(sub).trim().toLowerCase();
  const cleanText = String(text).trim().toLowerCase().replace(/\s+/g, ' ');
  return `${cleanClass}:::${cleanSub}:::${cleanText}`;
}

const prisma = new PrismaClient();

async function main() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('⚡ High-Speed Bulk Seed: Class 11 & 12 (Neon PostgreSQL)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const startTime = Date.now();

  const targetRoots = [
    { classLevel: 11, dir: 'C:\\EduVerse\\class 11\\cross_subject' },
    { classLevel: 12, dir: 'C:\\EduVerse\\class 12\\cross_subject' }
  ];

  const batchQueue = [];

  for (const root of targetRoots) {
    if (!fs.existsSync(root.dir)) {
      console.warn(`⚠️ Directory not found: ${root.dir}`);
      continue;
    }

    const files = fs.readdirSync(root.dir)
      .filter(f => /^batch_\d+\.json$/i.test(f))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0], 10);
        const numB = parseInt(b.match(/\d+/)[0], 10);
        return numA - numB;
      });

    files.forEach(f => {
      batchQueue.push({
        classLevel: root.classLevel,
        fileName: f,
        filePath: path.join(root.dir, f)
      });
    });
  }

  console.log(`📁 Discovered ${batchQueue.length} Cross-Subject Batch Files (Class 11 & 12).`);

  console.log('🔄 Loading existing questions from Neon DB...');
  const existingRecords = await prisma.question.findMany({
    select: { class: true, subject: true, text: true }
  });

  const existingSet = new Set();
  existingRecords.forEach(q => {
    existingSet.add(normalizeKey(q.class, q.subject, q.text));
  });
  console.log(`📊 Loaded ${existingRecords.length} existing questions from DB.\n`);

  let totalInsertedQuestions = 0;
  let totalInsertedOptions = 0;
  let totalSkippedQuestions = 0;

  for (const item of batchQueue) {
    const rawData = fs.readFileSync(item.filePath, 'utf8');
    const questions = JSON.parse(rawData);

    const questionRows = [];
    const optionRows = [];
    let batchSkipped = 0;

    for (const q of questions) {
      const classLevelNum = q.classLevel || item.classLevel;
      const className = `Class ${classLevelNum}`;
      const subject = (q.subject || 'General Knowledge').trim();
      const chapter = q.chapter ? String(q.chapter).trim() : null;
      const questionText = (q.question || q.text || '').trim();
      const difficulty = normalizeDifficulty(q.difficulty);
      const explanation = (q.explanation || 'Refer to official NCERT curriculum.').trim();

      if (!questionText) continue;

      const key = normalizeKey(className, subject, questionText);
      if (existingSet.has(key)) {
        batchSkipped++;
        totalSkippedQuestions++;
        continue;
      }

      const qId = crypto.randomUUID();
      existingSet.add(key);

      questionRows.push({
        id: qId,
        class: className,
        subject,
        chapter,
        difficulty,
        text: questionText,
        explanation
      });

      // Process options
      const optStrings = Array.isArray(q.options) ? q.options.map(o => String(o).trim()) : [];
      let correctIdx = 0;
      if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < optStrings.length) {
        correctIdx = q.correctAnswer;
      } else if (typeof q.correctAnswer === 'string') {
        const parsed = parseInt(q.correctAnswer, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < optStrings.length) {
          correctIdx = parsed;
        }
      }

      optStrings.forEach((optText, idx) => {
        optionRows.push({
          id: crypto.randomUUID(),
          text: optText,
          isCorrect: idx === correctIdx,
          questionId: qId
        });
      });
    }

    // Bulk insert with createMany
    if (questionRows.length > 0) {
      await prisma.question.createMany({
        data: questionRows
      });
      totalInsertedQuestions += questionRows.length;

      if (optionRows.length > 0) {
        await prisma.option.createMany({
          data: optionRows
        });
        totalInsertedOptions += optionRows.length;
      }
    }

    console.log(`✅ [Class ${item.classLevel}] ${item.fileName.padEnd(14)} -> Inserted: ${questionRows.length.toString().padStart(3)} MCQs (${optionRows.length.toString().padStart(4)} options) | Skipped: ${batchSkipped.toString().padStart(3)}`);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('🎉 BULK INGESTION COMPLETED IN ' + duration + 's');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`✨ Total New Questions Inserted : ${totalInsertedQuestions}`);
  console.log(`✨ Total New Options Inserted   : ${totalInsertedOptions}`);
  console.log(`⏭️  Total Skipped (Pre-existing) : ${totalSkippedQuestions}`);

  console.log('\n📊 Updated Live Database Breakdown:');
  const dbBreakdown = await prisma.question.groupBy({
    by: ['class', 'subject'],
    _count: { id: true },
    orderBy: [{ class: 'asc' }, { subject: 'asc' }]
  });
  console.table(dbBreakdown);

  const totalInDb = await prisma.question.count();
  console.log(`\n🌟 Grand Total Questions in Live Database: ${totalInDb}`);
  await prisma.$disconnect();
}

main().catch(err => {
  console.error('❌ Ingestion Error:', err);
  process.exit(1);
});
