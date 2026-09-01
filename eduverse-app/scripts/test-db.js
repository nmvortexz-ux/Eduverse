import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env
const envPath = path.resolve(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf8');
let dbUrl = '';
envContent.split('\n').forEach(line => {
  if (line.startsWith('DATABASE_URL=')) {
    dbUrl = line.split('=')[1].trim().replace(/^["']|["']$/g, '');
  }
});

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

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

async function seed() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('⚡ EduVerse Fast Direct HTTPS Seeder (Neon Serverless Driver)');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const startTime = Date.now();
  const sql = neon(dbUrl);

  // 1. Fetch existing questions to avoid duplicates
  console.log('🔄 Checking existing questions in Neon DB via HTTPS (Port 443)...');
  const existingRows = await sql`SELECT "id", "class", "subject", "text" FROM "Question";`;
  console.log(`📊 Found ${existingRows.length} existing questions in DB.\n`);

  const existingMap = new Set();
  existingRows.forEach(r => {
    existingMap.add(normalizeKey(r.class, r.subject, r.text));
  });

  const targetRoots = [
    { classLevel: 6, dir: path.resolve(__dirname, '../../class 6/cross_subject') },
    { classLevel: 7, dir: path.resolve(__dirname, '../../class 7/cross_subject') },
    { classLevel: 11, dir: path.resolve(__dirname, '../../class 11/cross_subject') }
  ];

  let totalInserted = 0;
  let totalSkipped = 0;

  for (const root of targetRoots) {
    if (!fs.existsSync(root.dir)) continue;

    const files = fs.readdirSync(root.dir)
      .filter(f => /^batch_\d+\.json$/i.test(f))
      .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));

    console.log(`\n🚀 Ingesting Class ${root.classLevel} (${files.length} batches)...`);

    for (const file of files) {
      const filePath = path.join(root.dir, file);
      const questions = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      const qValues = [];
      const optValues = [];

      for (const q of questions) {
        const className = `Class ${q.classLevel || root.classLevel}`;
        const subject = (q.subject || 'General Knowledge').trim();
        const chapter = q.chapter ? String(q.chapter).trim() : null;
        const text = (q.question || q.text || '').trim();
        const difficulty = normalizeDifficulty(q.difficulty);
        const explanation = (q.explanation || 'Refer to official NCERT curriculum.').trim();

        if (!text) continue;

        const key = normalizeKey(className, subject, text);
        if (existingMap.has(key)) {
          totalSkipped++;
          continue;
        }

        const qId = crypto.randomUUID();
        qValues.push(`(${escapeSql(qId)}, ${escapeSql(className)}, ${escapeSql(subject)}, ${escapeSql(chapter)}, ${escapeSql(difficulty)}, ${escapeSql(text)}, ${escapeSql(explanation)}, NOW())`);
        existingMap.add(key);

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
          const optId = crypto.randomUUID();
          const isCorrect = idx === correctIdx;
          optValues.push(`(${escapeSql(optId)}, ${escapeSql(optText)}, ${isCorrect}, ${escapeSql(qId)})`);
        });
      }

      if (qValues.length > 0) {
        // Execute batch insertion
        const insertQSql = `INSERT INTO "Question" ("id", "class", "subject", "chapter", "difficulty", "text", "explanation", "createdAt") VALUES ${qValues.join(',\n')} ON CONFLICT DO NOTHING;`;
        await sql.query(insertQSql);

        if (optValues.length > 0) {
          // Insert options in chunks of 500
          for (let i = 0; i < optValues.length; i += 500) {
            const chunk = optValues.slice(i, i + 500);
            const insertOptSql = `INSERT INTO "Option" ("id", "text", "isCorrect", "questionId") VALUES ${chunk.join(',\n')};`;
            await sql.query(insertOptSql);
          }
        }

        totalInserted += qValues.length;
        console.log(`  ✅ Class ${root.classLevel} ${file}: Ingested ${qValues.length} MCQs (${optValues.length} options)`);
      } else {
        console.log(`  ⏭️ Class ${root.classLevel} ${file}: All MCQs already exist (skipped)`);
      }
    }
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`🎉 COMPLETED IN ${durationSec}s!`);
  console.log(`✨ Total Newly Inserted: ${totalInserted}`);
  console.log(`⏭️ Total Skipped (Existing): ${totalSkipped}`);

  // Final count verification
  const totalCount = await sql`SELECT COUNT(*) as total FROM "Question";`;
  console.log(`📚 Total Questions in Database Now: ${totalCount[0].total}`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

seed().catch(err => {
  console.error('❌ Seeding Error:', err);
  process.exit(1);
});
