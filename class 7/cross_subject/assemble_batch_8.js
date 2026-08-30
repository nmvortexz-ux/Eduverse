import fs from 'fs';
import path from 'path';

const dir = 'C:/EduVerse/class 7/cross_subject';

import('./gen_science_ch8.js').then(() => {
import('./gen_math_ch8.js').then(() => {
import('./gen_english_ch8.js').then(() => {
import('./gen_gk_ch8.js').then(() => {
import('./gen_social_ch8.js').then(() => {
import('./gen_hindi_ch8.js').then(() => {
  const sci = JSON.parse(fs.readFileSync(path.join(dir, 'science_ch8.json'), 'utf8'));
  const mat = JSON.parse(fs.readFileSync(path.join(dir, 'math_ch8.json'), 'utf8'));
  const eng = JSON.parse(fs.readFileSync(path.join(dir, 'english_ch8.json'), 'utf8'));
  const gk  = JSON.parse(fs.readFileSync(path.join(dir, 'gk_ch8.json'), 'utf8'));
  const soc = JSON.parse(fs.readFileSync(path.join(dir, 'social_ch8.json'), 'utf8'));
  const hin = JSON.parse(fs.readFileSync(path.join(dir, 'hindi_ch8.json'), 'utf8'));

  const allQuestions = [...sci, ...mat, ...eng, ...gk, ...soc, ...hin];

  console.log('Total Assembled Questions in Class 7 Batch 8:', allQuestions.length);

  // Validate
  let errors = [];
  const seen = new Set();
  const subjectBreakdown = {};

  allQuestions.forEach((q, idx) => {
    if (q.classLevel !== 7) errors.push(`[${idx}] Invalid classLevel: ${q.classLevel}`);
    if (!q.subject) errors.push(`[${idx}] Missing subject`);
    if (!q.chapter) errors.push(`[${idx}] Missing chapter`);
    if (!q.question || typeof q.question !== 'string') errors.push(`[${idx}] Invalid question`);
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`[${idx}] Options must have 4 items`);
    if (![0, 1, 2, 3].includes(q.correctAnswer)) errors.push(`[${idx}] Invalid correctAnswer index`);
    if (!['EASY', 'MEDIUM', 'HARD'].includes(q.difficulty)) errors.push(`[${idx}] Invalid difficulty`);
    if (q.difficulty === 'EASY' && q.damage !== 150) errors.push(`[${idx}] EASY damage != 150`);
    if (q.difficulty === 'MEDIUM' && q.damage !== 250) errors.push(`[${idx}] MEDIUM damage != 250`);
    if (q.difficulty === 'HARD' && q.damage !== 350) errors.push(`[${idx}] HARD damage != 350`);
    if (!q.explanation || q.explanation.length < 10) errors.push(`[${idx}] Short explanation`);

    const norm = q.question.trim().toLowerCase();
    if (seen.has(norm)) {
      errors.push(`[${idx}] DUPLICATE: ${q.question.substring(0, 40)}`);
    }
    seen.add(norm);

    if (!subjectBreakdown[q.subject]) {
      subjectBreakdown[q.subject] = { EASY: 0, MEDIUM: 0, HARD: 0, total: 0 };
    }
    subjectBreakdown[q.subject][q.difficulty]++;
    subjectBreakdown[q.subject].total++;
  });

  console.log('\n📊 Class 7 Batch 8 Subject & Difficulty Breakdown:');
  console.table(subjectBreakdown);

  console.log('Total Validation Errors:', errors.length);
  if (errors.length === 0 && allQuestions.length === 240) {
    const finalFile = path.join(dir, 'batch_8.json');
    fs.writeFileSync(finalFile, JSON.stringify(allQuestions, null, 2), 'utf8');
    console.log(`\n🎉 SUCCESS! Saved 240 validated questions to ${finalFile}`);
  } else {
    console.error('Validation failed with errors:', errors);
  }
});
});
});
});
});
});
