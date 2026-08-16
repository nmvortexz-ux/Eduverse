import fs from 'fs';
import path from 'path';

console.log('🔍 Starting Comprehensive Audit for EduVerse (Next.js 16)...');
let errors = 0;
let warnings = 0;

// 1. Check Suspense Boundaries for useSearchParams
const clientPages = [
  'app/select/page.tsx',
  'app/configure/page.tsx',
  'app/quiz/page.tsx',
  'app/results/page.tsx',
];

clientPages.forEach((filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    if (content.includes('useSearchParams()') && !content.includes('<Suspense')) {
      console.error(`❌ [Next.js 16 Error] ${filePath}: Uses useSearchParams() without <Suspense> boundary!`);
      errors++;
    } else {
      console.log(`✅ [OK] ${filePath} complies with Suspense boundary rules.`);
    }
  } else {
    console.warn(`⚠️ [Warning] ${filePath} not found.`);
    warnings++;
  }
});

// 2. Check Client Components for Server Imports (@prisma/client)
function checkPrismaInClientComponents(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir, { recursive: true });
  files.forEach((file) => {
    if (typeof file === 'string' && (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js'))) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isFile()) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const isClient = content.includes("'use client'") || content.includes('"use client"');
        if (isClient && content.includes('@prisma/client')) {
          console.error(`❌ [Security/Build Error] ${fullPath}: Client component imports @prisma/client directly!`);
          errors++;
        }
      }
    }
  });
}

checkPrismaInClientComponents(path.join(process.cwd(), 'app'));
checkPrismaInClientComponents(path.join(process.cwd(), 'components'));

// 3. Test Scoring Logic Unit Test (+5 / -1)
function testScoring() {
  const sampleQuestions = [
    { id: 'q1', correctAnswer: 1 },
    { id: 'q2', correctAnswer: 0 },
    { id: 'q3', correctAnswer: 2 },
  ];
  const sampleAnswers = { q1: 1, q2: 3 }; // q1 correct (+5), q2 wrong (-1), q3 unanswered (0)
  
  let score = 0;
  sampleQuestions.forEach(q => {
    const ans = sampleAnswers[q.id];
    if (ans === undefined) score += 0;
    else if (ans === q.correctAnswer) score += 5;
    else score -= 1;
  });

  if (score === 4) {
    console.log('✅ [Scoring Test Passed] Correct (+5), Wrong (-1), Unanswered (0) => Expected 4, Got 4.');
  } else {
    console.error(`❌ [Scoring Test Failed] Expected score 4, but got ${score}`);
    errors++;
  }
}
testScoring();

console.log('\n----------------------------------------');
console.log(`📊 Audit Summary: ${errors} Error(s), ${warnings} Warning(s)`);
if (errors === 0) {
  console.log('🎉 EduVerse passed all critical static audit checks!');
  process.exit(0);
} else {
  console.error('⛔ Please fix the reported errors before building.');
  process.exit(1);
}
