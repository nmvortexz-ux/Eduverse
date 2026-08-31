import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

function generateSqlForClass(classLevel) {
  const dir = path.resolve(__dirname, `../../class ${classLevel}/cross_subject`);
  if (!fs.existsSync(dir)) return null;

  const sqlStatements = [
    '--',
    `-- EduVerse Class ${classLevel} Cross-Subject Seed Script`,
    '-- Total MCQs: 2,880 | Total Options: 11,520',
    `-- Generated At: ${new Date().toISOString()}`,
    '--',
    'BEGIN;',
    ''
  ];

  let totalQuestions = 0;
  let totalOptions = 0;

  const files = fs.readdirSync(dir)
    .filter(f => /^batch_\d+\.json$/i.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0], 10);
      const numB = parseInt(b.match(/\d+/)[0], 10);
      return numA - numB;
    });

  for (const file of files) {
    const filePath = path.join(dir, file);
    const questions = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    sqlStatements.push(`-- ─── Class ${classLevel} : ${file} (${questions.length} MCQs) ───`);

    for (const q of questions) {
      const qId = crypto.randomUUID();
      const className = `Class ${q.classLevel || classLevel}`;
      const subject = (q.subject || 'General Knowledge').trim();
      const chapter = q.chapter ? String(q.chapter).trim() : null;
      const text = (q.question || q.text || '').trim();
      const difficulty = normalizeDifficulty(q.difficulty);
      const explanation = (q.explanation || 'Refer to official NCERT curriculum.').trim();

      sqlStatements.push(
        `INSERT INTO "Question" ("id", "class", "subject", "chapter", "difficulty", "text", "explanation", "createdAt") VALUES (${escapeSql(qId)}, ${escapeSql(className)}, ${escapeSql(subject)}, ${escapeSql(chapter)}, ${escapeSql(difficulty)}, ${escapeSql(text)}, ${escapeSql(explanation)}, NOW()) ON CONFLICT DO NOTHING;`
      );
      totalQuestions++;

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
        sqlStatements.push(
          `INSERT INTO "Option" ("id", "text", "isCorrect", "questionId") VALUES (${escapeSql(optId)}, ${escapeSql(optText)}, ${isCorrect}, ${escapeSql(qId)});`
        );
        totalOptions++;
      });
    }
    sqlStatements.push('');
  }

  sqlStatements.push('COMMIT;');
  sqlStatements.push('');

  const outputFile = path.resolve(__dirname, `../prisma/seed_class_${classLevel}.sql`);
  fs.writeFileSync(outputFile, sqlStatements.join('\n'), 'utf8');

  const fileStats = fs.statSync(outputFile);
  const sizeMb = (fileStats.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Class ${classLevel} SQL: ${outputFile} (${sizeMb} MB)`);

  return sqlStatements;
}

function main() {
  console.log('⚡ Generating SQL seed files...');
  const c6 = generateSqlForClass(6);
  const c7 = generateSqlForClass(7);

  const allStatements = [
    '--',
    '-- EduVerse Master Cross-Subject Seed Script (Class 6 & Class 7)',
    '-- Total MCQs: 5,760 | Total Options: 23,040',
    `-- Generated At: ${new Date().toISOString()}`,
    '--',
    'BEGIN;',
    '',
    ...(c6 ? c6.slice(6, -2) : []),
    '',
    ...(c7 ? c7.slice(6, -2) : []),
    '',
    'COMMIT;'
  ];
  const masterOut = path.resolve(__dirname, '../prisma/seed_all_5760_questions.sql');
  fs.writeFileSync(masterOut, allStatements.join('\n'), 'utf8');
  console.log(`✅ Master SQL: ${masterOut} (${(fs.statSync(masterOut).size / (1024 * 1024)).toFixed(2)} MB)`);
}

main();
