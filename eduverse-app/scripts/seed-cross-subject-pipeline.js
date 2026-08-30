import fs from 'fs';
import path from 'path';
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
// 2. Command Line Arguments Parsing
// ─────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isForce = args.includes('--force');
const targetClassArg = args.find(a => a.startsWith('--class='))?.split('=')[1] || (args.includes('--class') ? args[args.indexOf('--class') + 1] : null);

// ─────────────────────────────────────────────────────────────
// 3. Helper Functions
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

// ─────────────────────────────────────────────────────────────
// 4. Main Ingestion Pipeline
// ─────────────────────────────────────────────────────────────
async function main() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('🚀 EduVerse Cross-Subject Data Seeding Pipeline (PostgreSQL/Neon)');
  console.log(`📌 Mode: ${isDryRun ? '🔍 DRY RUN (Local Batch Verification)' : '⚡ LIVE DATABASE INGESTION'}`);
  if (targetClassArg) console.log(`🎯 Filter: Target Class ${targetClassArg}`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  const startTime = Date.now();

  // Define cross-subject target root directories
  const targetRoots = [
    { classLevel: 6, dir: path.resolve(__dirname, '../../class 6/cross_subject') },
    { classLevel: 7, dir: path.resolve(__dirname, '../../class 7/cross_subject') }
  ];

  const activeRoots = targetClassArg
    ? targetRoots.filter(r => String(r.classLevel) === String(targetClassArg))
    : targetRoots;

  const batchQueue = [];

  for (const root of activeRoots) {
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

  console.log(`📁 Discovered ${batchQueue.length} Cross-Subject Batch Files across ${activeRoots.length} classes.\n`);

  if (batchQueue.length === 0) {
    console.log('❌ No batch files found to ingest. Exiting.');
    return;
  }

  let prisma = null;
  const existingMap = new Map();

  if (!isDryRun) {
    const { PrismaClient } = await import('@prisma/client');
    prisma = new PrismaClient();

    console.log('🔄 Connecting to Neon PostgreSQL & loading existing question indices...');
    try {
      const existingQuestions = await prisma.question.findMany({
        select: { id: true, class: true, subject: true, text: true }
      });

      existingQuestions.forEach(q => {
        const k = normalizeKey(q.class, q.subject, q.text);
        existingMap.set(k, q.id);
      });
      console.log(`📊 Found ${existingQuestions.length} pre-existing questions in database.\n`);
    } catch (dbErr) {
      console.error(`❌ Could not connect to Neon DB: ${dbErr.message}`);
      console.log('💡 Note: Check your internet connection / Neon compute state.');
      process.exit(1);
    }
  } else {
    console.log('🔍 DRY RUN: Simulating extraction, schema transformation, and verification without database network calls...\n');
  }

  let totalQuestionsRead = 0;
  let totalValidQuestions = 0;
  let totalInserted = 0;
  let totalSkipped = 0;
  let totalErrors = 0;

  const summaryStats = {};

  for (const item of batchQueue) {
    const rawData = fs.readFileSync(item.filePath, 'utf8');
    let questions;
    try {
      questions = JSON.parse(rawData);
    } catch (e) {
      console.error(`❌ JSON Parse Error in ${item.fileName}: ${e.message}`);
      totalErrors++;
      continue;
    }

    totalQuestionsRead += questions.length;
    let batchValid = 0;
    let batchSkipped = 0;
    const toInsert = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const classLevelNum = q.classLevel || item.classLevel;
      const className = `Class ${classLevelNum}`;
      const subject = (q.subject || 'General Knowledge').trim();
      const chapter = q.chapter ? String(q.chapter).trim() : null;
      const questionText = (q.question || q.text || '').trim();
      const difficulty = normalizeDifficulty(q.difficulty);
      const explanation = (q.explanation || 'Refer to official NCERT curriculum.').trim();

      if (!questionText) continue;

      const key = normalizeKey(className, subject, questionText);

      if (existingMap.has(key) && !isForce) {
        batchSkipped++;
        totalSkipped++;
        continue;
      }

      // Format options
      let formattedOptions = [];
      if (Array.isArray(q.options)) {
        if (typeof q.options[0] === 'string') {
          const optStrings = q.options.map(o => String(o).trim());
          let correctIdx = 0;
          if (typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < optStrings.length) {
            correctIdx = q.correctAnswer;
          } else if (typeof q.correctAnswer === 'string') {
            const parsed = parseInt(q.correctAnswer, 10);
            if (!isNaN(parsed) && parsed >= 0 && parsed < optStrings.length) {
              correctIdx = parsed;
            }
          }
          formattedOptions = optStrings.map((optText, idx) => ({
            text: optText,
            isCorrect: idx === correctIdx
          }));
        } else if (typeof q.options[0] === 'object') {
          formattedOptions = q.options.map(optObj => ({
            text: (optObj.text || '').trim(),
            isCorrect: Boolean(optObj.isCorrect)
          }));
        }
      }

      toInsert.push({
        payload: {
          class: className,
          subject,
          chapter,
          difficulty,
          text: questionText,
          explanation,
          options: {
            create: formattedOptions
          }
        },
        key
      });

      batchValid++;
      totalValidQuestions++;

      // Track summary statistics
      if (!summaryStats[className]) summaryStats[className] = {};
      if (!summaryStats[className][subject]) summaryStats[className][subject] = { Easy: 0, Medium: 0, Hard: 0, Total: 0 };
      summaryStats[className][subject][difficulty]++;
      summaryStats[className][subject].Total++;
    }

    if (!isDryRun && toInsert.length > 0 && prisma) {
      const CHUNK_SIZE = 25;
      for (let c = 0; c < toInsert.length; c += CHUNK_SIZE) {
        const chunk = toInsert.slice(c, c + CHUNK_SIZE);
        try {
          await prisma.$transaction(
            chunk.map(entry => prisma.question.create({ data: entry.payload })),
            { timeout: 30000 }
          );

          chunk.forEach(entry => {
            existingMap.set(entry.key, true);
          });
          totalInserted += chunk.length;
        } catch (txnError) {
          console.error(`❌ Transaction failed on chunk (${c}..${c + chunk.length}) of ${item.fileName}: ${txnError.message}`);
          for (const entry of chunk) {
            try {
              await prisma.question.create({ data: entry.payload });
              existingMap.set(entry.key, true);
              totalInserted++;
            } catch (singleErr) {
              console.error(`❌ Single insert error: ${singleErr.message}`);
              totalErrors++;
            }
          }
        }
      }
    } else if (isDryRun) {
      totalInserted += toInsert.length;
    }

    console.log(`✅ [Class ${item.classLevel}] ${item.fileName.padEnd(14)} -> ${batchValid.toString().padStart(3)} valid questions | Batch Total: ${questions.length}`);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`🎉 SEEDING PIPELINE ${isDryRun ? 'DRY-RUN' : 'INGESTION'} COMPLETED`);
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`⏱️  Elapsed Time          : ${duration} seconds`);
  console.log(`📖 Total Batches Processed : ${batchQueue.length} files`);
  console.log(`✨ Total Valid MCQs        : ${totalValidQuestions} MCQs`);
  console.log(`⏭️  Total Skipped (Dup)    : ${totalSkipped} MCQs`);
  console.log(`❌ Total Errors            : ${totalErrors}`);

  console.log('\n📊 Cross-Subject Curriculum Summary (Ready for Database):');
  for (const [cls, subjects] of Object.entries(summaryStats)) {
    console.log(`\n📌 ${cls}:`);
    console.table(subjects);
  }

  if (!isDryRun && prisma) {
    console.log('\n📊 Live Database Breakdown:');
    const dbBreakdown = await prisma.question.groupBy({
      by: ['class', 'subject'],
      _count: { id: true },
      orderBy: [{ class: 'asc' }, { subject: 'asc' }]
    });
    console.table(dbBreakdown);

    const totalInDb = await prisma.question.count();
    console.log(`\n🌟 Total Questions in Live Database: ${totalInDb}`);
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('❌ Fatal Pipeline Error:', e);
  process.exit(1);
});
