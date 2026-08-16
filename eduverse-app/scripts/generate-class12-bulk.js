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

import { prisma } from '../lib/prisma.js';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CLASS12_CONFIG = [
  // ═══════════════════════════════════════════════════════════════
  // 📊 SUBJECT 1: CLASS 12 ACCOUNTANCY (11 Chapters, ~28 Qs each = ~308 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 1: Accounting for Not-for-Profit Organisation', count: 28, topics: 'Receipts & Payments Account, Income & Expenditure Account, Subscription adjustments, Legacy, Specific funds, Balance Sheet' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 2: Accounting for Partnership: Basic Concepts', count: 28, topics: 'Partnership Deed, Profit & Loss Appropriation, Interest on Capital, Interest on Drawings (Average period method), Past adjustments, Guarantee of profit' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 3: Reconstitution - Admission of a Partner', count: 28, topics: 'New Profit Sharing Ratio, Sacrificing Ratio, Valuation of Goodwill (Average, Super profit, Capitalisation), Revaluation Account, Accumulated profits adjustments' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 4: Reconstitution - Retirement/Death of a Partner', count: 28, topics: 'Gaining Ratio, Hidden goodwill, Treatment of deceased partner profit till date of death (Profit & Loss Suspense), Executor account' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 5: Dissolution of Partnership Firm', count: 28, topics: 'Realisation Account preparation, Settlement of accounts (Section 48 of Partnership Act), Treatment of unrecorded assets and liabilities' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 6: Accounting for Share Capital', count: 28, topics: 'Issue of shares at Par, Premium, Pro-rata allotment, Calls in arrears, Calls in advance, Forfeiture of shares, Reissue of forfeited shares, Capital Reserve calculation' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 7: Issue and Redemption of Debentures', count: 28, topics: 'Types of Debentures, Issue of debentures as collateral security, Writing off discount/loss on issue of debentures, Terms of issue with redemption conditions' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 8: Financial Statements of a Company', count: 28, topics: 'Schedule III of Companies Act 2013, Major heads and sub-heads of Balance Sheet and Statement of Profit & Loss' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 9: Analysis of Financial Statements', count: 28, topics: 'Comparative Statements, Common Size Statements, Tools and objectives of Financial Statement Analysis' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 10: Accounting Ratios', count: 28, topics: 'Liquidity Ratios (Current, Quick), Solvency Ratios (Debt-Equity, Total Assets to Debt, Proprietary, Interest Coverage), Activity Ratios (Inventory Turnover, Trade Receivables Turnover), Profitability Ratios (Gross Profit, Operating, Net Profit, ROI)' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 11: Cash Flow Statement', count: 28, topics: 'AS-3 (Revised), Operating Activities (Indirect method), Investing Activities, Financing Activities, Non-cash transactions' },

  // ═══════════════════════════════════════════════════════════════
  // 💼 SUBJECT 2: CLASS 12 BUSINESS STUDIES (12 Chapters, ~25 Qs each = 300 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 1: Nature and Significance of Management', count: 25, topics: 'Effectiveness vs Efficiency, Levels of Management, Management as Science, Art, Profession, Coordination as the essence of management' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 2: Principles of Management', count: 25, topics: 'Fayol\'s 14 Principles of General Management, Taylor\'s Scientific Management (Techniques: Functional Foremanship, Time Study, Motion Study, Fatigue Study, Differential Piece Wage System)' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 3: Business Environment', count: 25, topics: 'Dimensions of Business Environment (Economic, Social, Technological, Political, Legal), Impact of Demonetization and Economic Policy changes' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 4: Planning', count: 25, topics: 'Planning process steps, Importance and Limitations of Planning, Types of Plans (Objectives, Strategy, Policy, Procedure, Rule, Method, Budget, Programme)' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 5: Organising', count: 25, topics: 'Organising process, Functional vs Divisional Structure, Formal vs Informal organisation, Delegation (Elements: Authority, Responsibility, Accountability), Decentralisation' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 6: Staffing', count: 25, topics: 'Staffing process, Recruitment sources (Internal vs External), Selection process and tests, Training methods (On-the-job vs Off-the-job, Vestibule training)' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 7: Directing', count: 25, topics: 'Elements of Directing: Supervision, Motivation (Maslow\'s Hierarchy of Needs, Financial vs Non-financial incentives), Leadership styles (Autocratic, Democratic, Laissez-faire), Communication barriers and overcoming them' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 8: Controlling', count: 25, topics: 'Controlling process, Critical Point Control (CPC), Management by Exception (MBE), Relationship between Planning and Controlling' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 9: Financial Management', count: 25, topics: 'Financial decisions (Investment/Capital Budgeting, Financing, Dividend decisions), Factors affecting Capital Structure, Trading on Equity, Working Capital factors' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 10: Financial Markets', count: 25, topics: 'Money Market instruments (Treasury Bill, Commercial Paper, Call Money, Certificate of Deposit, Commercial Bill), Primary Market vs Secondary Market, Stock Exchange, SEBI objectives and functions' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 11: Marketing Management', count: 25, topics: 'Marketing philosophies (Production, Product, Selling, Marketing, Societal), Marketing Mix (4 Ps: Product, Price, Place, Promotion - Advertising vs Personal Selling vs Sales Promotion vs Public Relations)' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 12: Consumer Protection', count: 25, topics: 'Consumer Protection Act 2019, Rights and Responsibilities of Consumers, Redressal Agencies (District Commission, State Commission, National Commission), Remedies available' },

  // ═══════════════════════════════════════════════════════════════
  // 📈 SUBJECT 3: CLASS 12 ECONOMICS (10 Chapters, 30 Qs each = 300 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 1: National Income and Related Aggregates', count: 30, topics: 'Circular flow of income, GDP, GNP, NNP at MP and FC, Value Added Method, Income Method, Expenditure Method, Nominal vs Real GDP, GDP Deflator' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 2: Money and Banking', count: 30, topics: 'Money supply ($M_1, M_2, M_3, M_4$), Credit creation by commercial banks (Money Multiplier $1/LRR$), Central Bank (RBI) quantitative and qualitative monetary tools (Repo Rate, Reverse Repo, CRR, SLR, Open Market Operations)' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 3: Determination of Income and Employment', count: 30, topics: 'Aggregate Demand (AD) and Aggregate Supply (AS), Propensity to Consume (APC, MPC) and Save (APS, MPS), Investment Multiplier $k = \\frac{1}{1-MPC}$, Deficient Demand (Deflationary Gap) and Excess Demand (Inflationary Gap) remedies' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 4: Government Budget and the Economy', count: 30, topics: 'Revenue Receipts vs Capital Receipts, Revenue Expenditure vs Capital Expenditure, Fiscal Deficit, Revenue Deficit, Primary Deficit ($FD - \\text{Interest Payments}$)' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 5: Balance of Payments and Foreign Exchange', count: 30, topics: 'Current Account vs Capital Account, Autonomous vs Accommodating items, Fixed vs Flexible vs Managed Floating exchange rate systems, Depreciation vs Devaluation' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 6: Indian Economy on the Eve of Independence', count: 30, topics: 'Colonial exploitation, Zamindari system, De-industrialization of handicrafts, Demographic transition (1921 Year of Great Divide), Occupational structure' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 7: Indian Economy (1950-1990)', count: 30, topics: 'Five Year Plans goals (Growth, Modernisation, Self-reliance, Equity), Land Reforms and Green Revolution, Industrial Policy Resolution 1956 (IPR 1956), Import Substitution policy' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 8: Economic Reforms Since 1991 (LPG)', count: 30, topics: 'Liberalisation, Privatisation, Globalisation (LPG), New Economic Policy 1991, Financial and Tax reforms, Disinvestment, WTO and Outsourcing' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 9: Current Challenges Facing Indian Economy', count: 30, topics: 'Human Capital Formation (Sources, Education & Health), Rural Development (Credit, Marketing, Organic Farming), Employment (Formal vs Informal sector, Jobless Growth), Sustainable Development and Environment' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 10: Comparative Development Experiences of India and its Neighbours', count: 30, topics: 'Comparison of India, China, and Pakistan on demographic indicators, GDP growth, Sectoral share, Human Development Index (HDI), One-child policy, Great Leap Forward' },

  // ═══════════════════════════════════════════════════════════════
  // 📖 SUBJECT 4: CLASS 12 ENGLISH (6 Key Units/Modules, 50 Qs each = 300 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'English', chapter: 'Ch 1: Flamingo - Prose Analysis', count: 50, topics: 'The Last Lesson (Alphonse Daudet), Lost Spring (Anees Jung), Deep Water (William Douglas), The Rattrap (Selma Lagerlof), Indigo (Louis Fischer), Poets and Pancakes, The Interview, Going Places' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 2: Flamingo - Poetry and Literary Devices', count: 50, topics: 'My Mother at Sixty-Six (Kamala Das), Keeping Quiet (Pablo Neruda), A Thing of Beauty (John Keats), A Roadside Stand (Robert Frost), Aunt Jennifer\'s Tigers (Adrienne Rich), Poetic devices (Metaphor, Simile, Personification, Alliteration, Imagery)' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 3: Vistas - Supplementary Reader', count: 50, topics: 'The Third Level (Jack Finney), The Tiger King (Kalki), Journey to the end of the Earth (Tishani Doshi), The Enemy (Pearl S. Buck), On the Face of It (Susan Hill), Memories of Childhood (Zitkala-Sa & Bama)' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary in Context', count: 50, topics: 'Unseen factual and discursive passages analysis, Vocabulary in context (Synonyms, Antonyms, Idiomatic usage, Contextual meanings), Inference-based questions' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 5: Advanced Creative Writing Skills', count: 50, topics: 'Notice Writing format & elements, Formal & Informal Invitations and Replies, Letters to the Editor & Job Applications with Bio-data, Article Writing and Report Writing formats' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Syntax Mechanics', count: 50, topics: 'Tenses and agreement, Active vs Passive transformations, Reported Speech conversions, Prepositions, Conjunctions, Error spotting, Editing and Omission tasks' }
];

async function callGroq(prompt) {
  const models = ['llama-3.1-8b-instant', 'llama-3.3-70b-versatile'];

  for (const model of models) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: 'system',
              content: 'You are an expert CBSE/NCERT Class 12 faculty member. Output valid json only with a "questions" key containing the array of MCQs.'
            },
            {
              role: 'user',
              content: prompt + '\nRespond strictly with a valid json object with a "questions" key containing the array.'
            }
          ],
          temperature: 0.2,
          response_format: { type: 'json_object' }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const content = data.choices[0]?.message?.content;
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) return parsed;
        if (Array.isArray(parsed.questions)) return parsed.questions;
        if (Array.isArray(parsed.data)) return parsed.data;
      }
    } catch (e) {
      console.warn(`Model ${model} error:`, e.message);
    }
  }

  // Fallback to Gemini if Groq exhausted
  if (GEMINI_API_KEY) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt + '\nReturn valid JSON object with key "questions": [...]' }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      });
      if (response.ok) {
        const data = await response.json();
        const text = data.candidates[0]?.content?.parts[0]?.text;
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) return parsed;
        if (Array.isArray(parsed.questions)) return parsed.questions;
      }
    } catch (e) {}
  }

  throw new Error('All AI models failed');
}

async function main() {
  console.log('🚀 Starting Class 12 Full Stream Batch Generation: 1,200 Questions (300 Qs x 4 Subjects)...');
  const startTime = Date.now();

  const class12DataDir = path.resolve(process.cwd(), 'data/class12');
  if (!fs.existsSync(class12DataDir)) {
    fs.mkdirSync(class12DataDir, { recursive: true });
  }

  let totalAdded = 0;
  const subjectCounts = { Accountancy: 0, 'Business Studies': 0, Economics: 0, English: 0 };

  for (let i = 0; i < CLASS12_CONFIG.length; i++) {
    const cfg = CLASS12_CONFIG[i];
    console.log(`\n======================================================`);
    console.log(`📌 [${cfg.class} ${cfg.subject}] Generating ${cfg.count} Qs for "${cfg.chapter}" (${i + 1}/${CLASS12_CONFIG.length})...`);

    // Check existing count in DB
    const existingCount = await prisma.question.count({
      where: {
        class: cfg.class,
        subject: cfg.subject,
        chapter: cfg.chapter
      }
    });

    if (existingCount >= cfg.count) {
      console.log(`✅ Already have ${existingCount} questions in DB. Skipping.`);
      continue;
    }

    const needed = Math.max(cfg.count - existingCount, 15);
    const prompt = `Generate exactly ${needed} unique exam-level MCQs based strictly on official NCERT textbook for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Key Topics covered: ${cfg.topics}.

Requirements:
1. Exactly 4 options per question.
2. Exactly ONE option must match "correctAnswer".
3. Use KaTeX/LaTeX ($...$) for any math formulas, accounting entries, or economic equations (e.g. $\\text{Capital Reserve}$, $k = \\frac{1}{1-MPC}$, $\\text{ROI} = \\frac{\\text{EBIT}}{\\text{Capital Employed}} \\times 100$).
4. Provide a clear, detailed NCERT textbook explanation.
5. Provide a realistic mix of Easy, Medium, and Hard questions.

JSON Structure:
{
  "questions": [
    {
      "text": "Question?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option A",
      "explanation": "NCERT explanation.",
      "difficulty": "Medium",
      "class": "${cfg.class}",
      "subject": "${cfg.subject}",
      "chapter": "${cfg.chapter}"
    }
  ]
}`;

    try {
      const questions = await callGroq(prompt);
      if (!Array.isArray(questions) || questions.length === 0) continue;

      let insertedCount = 0;
      for (const q of questions) {
        const cleanText = (q.text || '').trim();
        if (!cleanText) continue;

        const exists = await prisma.question.findFirst({
          where: { text: cleanText },
          select: { id: true }
        });
        if (exists) continue;

        let options = [];
        if (Array.isArray(q.options)) {
          if (typeof q.options[0] === 'string') {
            const correctVal = (q.correctAnswer || '').trim();
            options = q.options.map(opt => ({
              text: opt.trim(),
              isCorrect: opt.trim() === correctVal
            }));
          } else if (typeof q.options[0] === 'object') {
            options = q.options.map(opt => ({
              text: (opt.text || '').trim(),
              isCorrect: Boolean(opt.isCorrect)
            }));
          }
        }

        if (options.length !== 4) continue;

        await prisma.question.create({
          data: {
            text: cleanText,
            class: cfg.class,
            subject: cfg.subject,
            chapter: cfg.chapter,
            difficulty: q.difficulty || 'Medium',
            explanation: q.explanation || `According to the official NCERT ${cfg.subject} textbook.`,
            options: {
              create: options
            }
          }
        });
        insertedCount++;
      }

      totalAdded += insertedCount;
      subjectCounts[cfg.subject] = (subjectCounts[cfg.subject] || 0) + insertedCount;

      console.log(`✅ Saved ${insertedCount} new questions for "${cfg.chapter}". (Total added this run: ${totalAdded})`);

      // Save local backup JSON file
      const safeName = `class12_${cfg.subject.toLowerCase().replace(/\s+/g, '')}_ch${i + 1}.json`;
      fs.writeFileSync(path.join(class12DataDir, safeName), JSON.stringify(questions, null, 2), 'utf8');

      await delay(1200);

    } catch (err) {
      console.error(`❌ Error on ${cfg.chapter}:`, err.message);
      await delay(2000);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const finalDbCount = await prisma.question.count();

  console.log(`\n======================================================`);
  console.log(`🎉 Class 12 Batch Complete in ${duration}s!`);
  console.log(`📊 Subject Breakdown:`, subjectCounts);
  console.log(`📥 Total New Questions Inserted: ${totalAdded}`);
  console.log(`📊 Total Database Questions: ${finalDbCount.toLocaleString()}\n`);
}

main()
  .catch((e) => {
    console.error('❌ Script failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect().catch(() => {});
  });
