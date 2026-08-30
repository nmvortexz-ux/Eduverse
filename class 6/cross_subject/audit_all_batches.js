import fs from 'fs';
import path from 'path';

const dir = 'C:/EduVerse/class 6/cross_subject';

let grandTotal = 0;
let totalErrors = 0;
const globalSubjectCounts = {};
const globalDifficultyCounts = { EASY: 0, MEDIUM: 0, HARD: 0 };
const batchSummaries = [];

for (let b = 1; b <= 12; b++) {
  const batchFile = path.join(dir, `batch_${b}.json`);
  if (!fs.existsSync(batchFile)) {
    console.error(`❌ Batch ${b} file missing: ${batchFile}`);
    totalErrors++;
    continue;
  }

  const raw = fs.readFileSync(batchFile, 'utf8');
  const questions = JSON.parse(raw);
  grandTotal += questions.length;

  const bStats = { batch: b, total: questions.length, subjects: {} };

  questions.forEach((q, idx) => {
    if (q.classLevel !== 6) totalErrors++;
    if (!q.subject) totalErrors++;
    if (!q.chapter) totalErrors++;
    if (!Array.isArray(q.options) || q.options.length !== 4) totalErrors++;
    if (![0, 1, 2, 3].includes(q.correctAnswer)) totalErrors++;
    if (!['EASY', 'MEDIUM', 'HARD'].includes(q.difficulty)) totalErrors++;
    if (q.difficulty === 'EASY' && q.damage !== 150) totalErrors++;
    if (q.difficulty === 'MEDIUM' && q.damage !== 250) totalErrors++;
    if (q.difficulty === 'HARD' && q.damage !== 350) totalErrors++;
    if (!q.explanation || q.explanation.length < 10) totalErrors++;

    globalSubjectCounts[q.subject] = (globalSubjectCounts[q.subject] || 0) + 1;
    globalDifficultyCounts[q.difficulty] = (globalDifficultyCounts[q.difficulty] || 0) + 1;
    bStats.subjects[q.subject] = (bStats.subjects[q.subject] || 0) + 1;
  });

  batchSummaries.push(bStats);
}

console.log('====================================================');
console.log('🏆 EDUVERSE NCERT CLASS 6 COMPLETE DATABASE AUDIT 🏆');
console.log('====================================================');
console.log(`Total Batches Generated: ${batchSummaries.length} / 12`);
console.log(`Grand Total MCQs: ${grandTotal} / 2,880`);
console.log(`Total Validation Errors Across All 12 Batches: ${totalErrors}`);
console.log('\n📊 Subject Totals (Target: 480 each across 6 subjects):');
console.table(globalSubjectCounts);
console.log('\n⚡ Difficulty Breakdown (Target: 864 Easy / 1152 Med / 864 Hard):');
console.table(globalDifficultyCounts);
