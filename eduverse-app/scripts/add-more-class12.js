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

import { prisma } from '../lib/prisma.js';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CHAPTERS_TARGET = [
  // ═══════════════════════════════════════════════════════════════
  // 📊 SUBJECT 1: CLASS 12 ACCOUNTANCY (11 Chapters x 14 Qs = 154 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 1: Accounting for Not-for-Profit Organisation', count: 14, topics: 'Subscription arrears and advance calculations, Consumable items formula (Opening Stock + Purchases - Closing Stock), Life membership fee treatment' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 2: Accounting for Partnership: Basic Concepts', count: 14, topics: 'Interest on drawings in beginning/middle/end of quarters, Interest on partner loan @ 6% p.a., Manager commission before/after charging such commission' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 3: Reconstitution - Admission of a Partner', count: 14, topics: 'Sacrificing ratio formula $\\text{Old Ratio} - \\text{New Ratio}$, Premium for goodwill distributed to sacrificing partners, Revaluation gain/loss on old ratio' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 4: Reconstitution - Retirement/Death of a Partner', count: 14, topics: 'Gaining ratio $\\text{New Ratio} - \\text{Old Ratio}$, Payment to retiring partner in installments with interest, Section 37 of Indian Partnership Act' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 5: Dissolution of Partnership Firm', count: 14, topics: 'Transfer of partner loan vs firm loan, Realisation expenses borne by partner vs firm, Treatment of partner capital deficiency' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 6: Accounting for Share Capital', count: 14, topics: 'Securities Premium Account utilization under Section 52(2) of Companies Act 2013, Maximum discount on reissue of forfeited shares, Pro-rata refund calculations' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 7: Issue and Redemption of Debentures', count: 14, topics: 'Loss on issue of debentures accounting, Debenture Redemption Reserve (DRR), Debenture Redemption Investment (DRI) rules, Interest on debentures TDS' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 8: Financial Statements of a Company', count: 14, topics: 'Classification of items under Non-current liabilities, Current liabilities, Property Plant & Equipment, Other current assets as per Schedule III' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 9: Analysis of Financial Statements', count: 14, topics: 'Trend analysis, Cross-sectional analysis, Percentage change in comparative balance sheet, Common size revenue from operations as 100%' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 10: Accounting Ratios', count: 14, topics: 'Operating Ratio vs Operating Profit Ratio ($100 - \\text{Operating Ratio}$), Trade Payables Turnover Ratio, Return on Investment (ROI), Debt to Capital Employed' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 11: Cash Flow Statement', count: 14, topics: 'Interim dividend, Proposed dividend treatment as per AS-3, Purchase/Sale of fixed assets with accumulated depreciation, Cash and cash equivalents classification' },

  // ═══════════════════════════════════════════════════════════════
  // 💼 SUBJECT 2: CLASS 12 BUSINESS STUDIES (12 Chapters x 13 Qs = 156 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 1: Nature and Significance of Management', count: 13, topics: 'Top, Middle, Operational management functions, Interdependence of efficiency and effectiveness, Multi-dimensional nature of management' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 2: Principles of Management', count: 13, topics: 'Unity of Command vs Unity of Direction, Gang Plank concept in Scalar Chain, Taylor\'s Mental Revolution, Standardization and Simplification of work' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 3: Business Environment', count: 13, topics: 'Dynamic nature and uncertainty of business environment, Legal dimension (Court judgments, legislations), Technological disruptions in Indian market' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 4: Planning', count: 13, topics: 'Planning creates rigidity, Planning does not guarantee success, Single-use plans vs Standing plans (Policy vs Rule)' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 5: Organising', count: 13, topics: 'Span of Management, Advantages of Divisional structure for multi-product companies, Delegation vs Decentralisation comparison' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 6: Staffing', count: 13, topics: 'Employment exchange vs Placement agencies, Aptitude test vs Trade test vs Personality test, Vestibule school training benefits' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 7: Directing', count: 13, topics: 'Maslow\'s Esteem and Self-actualisation needs, Semantic barriers vs Psychological barriers vs Organisational barriers, Democratic leadership' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 8: Controlling', count: 13, topics: 'Taking corrective action in Controlling, Critical Point Control (CPC) vs Management by Exception (MBE), Forward-looking nature of controlling' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 9: Financial Management', count: 13, topics: 'Financial Leverage effect on EPS, Fixed Capital requirement determinants, Floatation costs, Dividend stability policy' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 10: Financial Markets', count: 13, topics: 'Dematerialisation (Demat) and Depository (NSDL, CDSL), Rights issue vs Private placement, SEBI protective and regulatory functions' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 11: Marketing Management', count: 13, topics: 'Packaging levels (Primary, Secondary, Transportation), Labelling functions, Channels of distribution (Zero level, One level, Two level), Sales promotion tools (Rebate, Discount, Refunds)' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 12: Consumer Protection', count: 13, topics: 'Right to Seek Redressal vs Right to be Heard, Pecuniary jurisdiction of District (up to ₹50L/₹1Cr), State, National Commissions under CPA 2019, Role of Consumer NGOs' },

  // ═══════════════════════════════════════════════════════════════
  // 📈 SUBJECT 3: CLASS 12 ECONOMICS (10 Chapters x 15 Qs = 150 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 1: National Income and Related Aggregates', count: 15, topics: 'Factor Income vs Transfer Income, Intermediate goods vs Final goods, Net Factor Income from Abroad (NFIA) components, Externalities and GDP as welfare index' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 2: Money and Banking', count: 15, topics: 'High-Powered Money ($H$), Statutory Liquidity Ratio (SLR) vs Cash Reserve Ratio (CRR), Margin requirements, Moral suasion by RBI' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 3: Determination of Income and Employment', count: 15, topics: 'Ex-ante vs Ex-post investment, Autonomous vs Induced investment, Multiplier mechanism table calculation, Fiscal and Monetary measures to correct Inflationary/Deflationary gaps' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 4: Government Budget and the Economy', count: 15, topics: 'Disinvestment receipts as Capital receipt, Subsidies as Revenue expenditure, Primary Deficit implications, Reallocation of resources objective' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 5: Balance of Payments and Foreign Exchange', count: 15, topics: 'Foreign Direct Investment (FDI) vs Foreign Institutional Investment (FII) in Capital Account, BoP surplus vs deficit, Clean float vs Dirty float' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 6: Indian Economy on the Eve of Independence', count: 15, topics: 'Commercialisation of Indian agriculture, Commercial railway development dual impact, Infant mortality rate and life expectancy in 1947, Drain of Indian wealth' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 7: Indian Economy (1950-1990)', count: 15, topics: 'Mahalanobis heavy industry model in 2nd Five Year Plan, Land ceiling laws, Karve Committee 1955 for small scale industries, Permit License Raj' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 8: Economic Reforms Since 1991 (LPG)', count: 15, topics: 'Navratnas and Maharatnas CPSEs, Foreign exchange reserve crisis of 1991, Reduction in tariff and non-tariff barriers, Financial sector reforms by Narasimham Committee' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 9: Current Challenges Facing Indian Economy', count: 15, topics: 'Human Development Index vs Human Capital, Kudumbashree women empowerment project, Operation Flood (White Revolution), Casualisation and informalisation of workforce' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 10: Comparative Development Experiences of India and its Neighbours', count: 15, topics: 'Commune system in China, Special Economic Zones (SEZs) in China, Sectoral structural changes in Pakistan, Comparison of Maternal Mortality Rate (MMR)' },

  // ═══════════════════════════════════════════════════════════════
  // 📖 SUBJECT 4: CLASS 12 ENGLISH (6 Key Units x 25 Qs = 150 Qs)
  // ═══════════════════════════════════════════════════════════════
  { class: 'Class 12', subject: 'English', chapter: 'Ch 1: Flamingo - Prose Analysis', count: 25, topics: 'Linguistic chauvinism in The Last Lesson, Mukesh\'s bangle-making plight in Firozabad, William Douglas overcoming fear in YMCA pool, Edla\'s compassion reforming the peddler, Champaran Satyagraha details in Indigo' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 2: Flamingo - Poetry and Literary Devices', count: 25, topics: 'Aging and mortality in My Mother at Sixty-Six, Universal silence in Keeping Quiet, Eternal joy in A Thing of Beauty, City vs rural indifference in A Roadside Stand, Feminist oppression and art immortality in Aunt Jennifer\'s Tigers' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 3: Vistas - Supplementary Reader', count: 25, topics: 'Psychological escapism at Grand Central in The Third Level, Irony of the 100th tiger in The Tiger King, Gondwana supercontinent in Journey to the End of the Earth, Dr. Sadao\'s medical ethics vs patriotism in The Enemy, Derry and Mr. Lamb in On the Face of It' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary in Context', count: 25, topics: 'Central idea extraction, Tone and mood of the author (Cynical, Objective, Laudatory, Reflective), Contextual vocabulary antonyms/synonyms, Logical deductions' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 5: Advanced Creative Writing Skills', count: 25, topics: 'Official 50-word box format for Notices, 3rd person perspective in Formal Invitations, Essential layout of Job Application (Covering letter + Resume), Objective headlines and bylines for Report Writing' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Syntax Mechanics', count: 25, topics: 'Reported speech with modal verbs, Conditional clauses (Zero, First, Second, Third conditionals), Parallel structure in complex sentences, Subject-verb inversion, Spotting grammatical discrepancies' }
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

  // Fallback to Gemini if needed
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
  console.log('🚀 Starting Class 12 Extension: 600 More Questions (150 Qs x 4 Subjects)...');
  const startTime = Date.now();

  const class12DataDir = path.resolve(process.cwd(), 'data/class12');
  if (!fs.existsSync(class12DataDir)) {
    fs.mkdirSync(class12DataDir, { recursive: true });
  }

  let totalAdded = 0;
  const subjectTotals = { Accountancy: 0, 'Business Studies': 0, Economics: 0, English: 0 };

  for (let i = 0; i < CHAPTERS_TARGET.length; i++) {
    const cfg = CHAPTERS_TARGET[i];
    console.log(`\n======================================================`);
    console.log(`📌 [${cfg.class} ${cfg.subject}] Generating ${cfg.count} Qs for "${cfg.chapter}" (${i + 1}/${CHAPTERS_TARGET.length})...`);

    const prompt = `Generate exactly ${cfg.count} new, advanced exam-level MCQs based strictly on the official NCERT textbook for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Key Topics covered: ${cfg.topics}.

Requirements:
1. Exactly 4 options per question.
2. Exactly ONE option must match "correctAnswer".
3. Use KaTeX/LaTeX ($...$) for any math formulas, accounting entries, or economic equations.
4. Provide a clear, detailed NCERT textbook explanation.
5. Provide a realistic mix of Conceptual, Factual, and Numerical/Case-based questions.

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
      subjectTotals[cfg.subject] = (subjectTotals[cfg.subject] || 0) + insertedCount;

      console.log(`✅ Saved ${insertedCount} new questions for "${cfg.chapter}". (Total added: ${totalAdded} | Acc: ${subjectTotals.Accountancy}, BST: ${subjectTotals['Business Studies']}, Eco: ${subjectTotals.Economics}, Eng: ${subjectTotals.English})`);

      // Save local backup JSON
      const safeName = `class12_${cfg.subject.toLowerCase().replace(/\s+/g, '')}_more_${i + 1}.json`;
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
  console.log(`🎉 Class 12 Extension Complete in ${duration}s!`);
  console.log(`📊 Subject Breakdown:`, subjectTotals);
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
