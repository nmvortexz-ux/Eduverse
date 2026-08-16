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

const CHAPTERS_CONFIG = [
  // ─── Class 11 Accountancy ───
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 1: Introduction to Accounting', topics: 'Meaning, Objectives, Process, Bookkeeping vs Accounting, Qualitative characteristics, Users of accounting information, Basic accounting terms' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 2: Theory Base of Accounting', topics: 'GAAP, Going Concern, Consistency, Accrual, Business Entity, Money Measurement, Accounting Period, Cost Concept, Dual Aspect, Prudence, Matching, Full Disclosure, Materiality, GST' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 3: Recording of Transactions - I', topics: 'Accounting Equation, Rules of Debit and Credit, Source Documents, Journalizing, Ledger Posting, Cash Discount vs Trade Discount' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 4: Recording of Transactions - II', topics: 'Cash Book (Single, Double Column, Petty Cash with Imprest System), Purchases Book, Sales Book, Return Books, Journal Proper' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 5: Bank Reconciliation Statement', topics: 'Need for BRS, Reasons for difference between Cash Book and Pass Book, Preparation with favorable and overdraft balances' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 6: Trial Balance and Rectification of Errors', topics: 'Objectives of Trial Balance, Errors not affecting Trial Balance (Omission, Commission, Principle, Compensating), Suspense Account, Rectification entries' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 7: Depreciation, Provisions and Reserves', topics: 'Depreciation causes, Straight Line Method (SLM), Written Down Value (WDV), Provisions vs Reserves, Revenue vs Capital Reserves' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 8: Financial Statements - I', topics: 'Trading Account, Gross Profit calculation, Cost of Goods Sold (COGS), Profit and Loss Account, Balance Sheet, Current vs Non-Current classification' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 9: Financial Statements - II', topics: 'Adjustments in Final Accounts: Closing Stock, Outstanding Expenses, Prepaid Expenses, Accrued Income, Unearned Income, Bad Debts, Provision for Doubtful Debts' },

  // ─── Class 11 Business Studies ───
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 1: Nature and Purpose of Business', topics: 'Economic vs Non-economic activities, Business, Profession, Employment, Objectives of Business, Business Risk, Industry (Primary, Secondary, Tertiary), Commerce and Auxiliaries to Trade' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 2: Forms of Business Organisation', topics: 'Sole Proprietorship, Joint Hindu Family (HUF - Karta, Coparceners), Partnership (Act 1932, Types of Partners, Partnership Deed), Cooperative Societies, Joint Stock Company (Private vs Public, MOA, AOA, Formation stages)' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 3: Private, Public and Global Enterprises', topics: 'Public Sector forms: Departmental Undertaking, Statutory Corporation, Government Company, Global Enterprises (MNCs), Joint Ventures, Public Private Partnership (PPP)' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 4: Business Services', topics: 'Banking (Commercial bank functions, RTGS, NEFT, e-banking), Insurance principles (Utmost good faith, Insurable interest, Indemnity, Proximate cause, Subrogation), Life/Fire/Marine insurance, Warehousing, Communication' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 5: Emerging Modes of Business', topics: 'e-Business vs e-Commerce, B2B, B2C, C2C transactions, Benefits and limitations of e-business, Online transaction security, Outsourcing (BPO, KPO)' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 6: Social Responsibilities of Business and Business Ethics', topics: 'Concept of Social Responsibility, Arguments for and against, Responsibility towards Investors, Employees, Consumers, Government, Community, Environmental Protection, Business Ethics' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 7: Sources of Business Finance', topics: 'Owner funds vs Borrowed funds, Equity Shares, Preference Shares, Retained Earnings, Debentures, Commercial Banks, Trade Credit, Factoring, ADR, GDR, IDR, Commercial Paper' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 8: Small Business', topics: 'MSME definition, Role of small business in India, Government assistance (NSIC, DIC, NABARD), Institutional support to rural and small scale industries' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 9: Internal Trade', topics: 'Wholesale Trade, Retail Trade, Itinerant vs Fixed shop retailers, Departmental Stores, Chain Stores, Mail Order, Consumer Cooperatives, GST impact on internal trade' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 10: International Business', topics: 'Internal vs International trade, Scope of International business, Export and Import procedures, Key documents (Letter of Credit, Bill of Lading, Shipping Bill), WTO, IMF, World Bank' },

  // ─── Class 11 Economics ───
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 1: Introduction to Microeconomics', topics: 'Economy, Scarcity, Choice, Central Problems of an Economy (What, How, For whom to produce), Production Possibility Curve (PPC/PPF), Opportunity Cost, Marginal Opportunity Cost (MOC), Positive vs Normative Economics' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 2: Consumer\'s Equilibrium and Demand', topics: 'Utility analysis (Total Utility, Marginal Utility, Law of Diminishing Marginal Utility), Indifference Curve analysis (Properties, Marginal Rate of Substitution, Budget Line, Consumer Equilibrium), Demand function, Law of Demand, Elasticity of Demand (Price Elasticity, Percentage method)' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 3: Producer Behaviour and Supply', topics: 'Production Function (Short run vs Long run, Total Product, Marginal Product, Law of Variable Proportions), Cost concepts (Total, Fixed, Variable, Marginal Cost), Revenue concepts (TR, AR, MR), Producer Equilibrium (MR = MC approach), Supply function, Law of Supply, Price Elasticity of Supply' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 4: Forms of Market and Price Determination', topics: 'Perfect Competition characteristics, Monopoly, Monopolistic Competition, Oligopoly features, Price determination under Perfect Competition, Shifts in demand and supply, Price Ceiling and Price Floor applications' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 5: Introduction to Statistics', topics: 'Meaning and definition of Statistics in singular and plural sense, Scope, Functions, and Limitations of Statistics in Economics' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 6: Collection, Organisation and Presentation of Data', topics: 'Primary vs Secondary data, Census vs Sample method, Sampling techniques, Classification of data, Frequency distribution, Tabulation of data, Diagrammatic presentation (Bar, Pie diagrams), Graphic presentation (Histogram, Ogive)' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 7: Measures of Central Tendency and Dispersion', topics: 'Arithmetic Mean (Direct, Short-cut, Step-deviation methods for raw, discrete, continuous series), Median, Mode, Range, Quartile Deviation, Mean Deviation, Standard Deviation, Variance, Coefficient of Variation' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 8: Correlation and Index Numbers', topics: 'Correlation meaning and types, Scatter diagram, Karl Pearson\'s coefficient of correlation, Spearman\'s Rank correlation, Index Numbers (Laspeyres, Paasche, Fisher Ideal Index), Consumer Price Index (CPI), Wholesale Price Index (WPI), Inflation' }
];

async function callGroqOrGemini(prompt) {
  if (GROQ_API_KEY) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: 'You are an expert CBSE/NCERT Commerce faculty member. You generate highly accurate exam-level NCERT multiple choice questions formatted strictly as a json object with a "questions" array. Output valid json only.'
            },
            {
              role: 'user',
              content: prompt + '\nRespond with a valid json object with a "questions" key containing the array.'
            }
          ],
          temperature: 0.2,
          response_format: { type: 'json_object' }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const content = data.choices[0]?.message?.content;
        let parsed = JSON.parse(content);
        if (Array.isArray(parsed)) return parsed;
        if (Array.isArray(parsed.questions)) return parsed.questions;
        if (Array.isArray(parsed.data)) return parsed.data;
      }
    } catch (e) {
      console.warn('Groq fetch error:', e.message);
    }
  }

  if (GEMINI_API_KEY) {
    const geminiModels = ['gemini-2.0-flash', 'gemini-1.5-flash'];
    for (const model of geminiModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
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
      } catch (err) {
        console.warn(`Gemini ${model} error:`, err.message);
      }
    }
  }

  throw new Error('All AI providers failed to generate batch.');
}

async function generateChapterQuestions(cfg, targetCount = 35) {
  console.log(`\n📚 [${cfg.class} ${cfg.subject}] Generating ${targetCount} Qs for "${cfg.chapter}"...`);

  const prompt = `Generate exactly ${targetCount} exam-level Multiple Choice Questions (MCQs) strictly based on the official NCERT textbook for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Key Topics covered: ${cfg.topics}.

Rules:
1. Every question must have exactly 4 options.
2. Exactly one option must match "correctAnswer".
3. Use KaTeX/LaTeX ($...$) for any math or accounting formulas, e.g. $\\text{Assets} = \\text{Liabilities} + \\text{Capital}$, $\\text{MR} = \\text{MC}$, $\\text{PPC}$, etc.
4. Include a detailed step-by-step NCERT textbook explanation.
5. Provide a realistic mix of Easy, Medium, and Hard questions.

JSON Structure:
{
  "questions": [
    {
      "text": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option A",
      "explanation": "NCERT explanation here.",
      "difficulty": "Medium",
      "class": "${cfg.class}",
      "subject": "${cfg.subject}",
      "chapter": "${cfg.chapter}"
    }
  ]
}`;

  const questions = await callGroqOrGemini(prompt);
  return questions;
}

async function main() {
  console.log('🚀 Starting Automated Bulk Generation & Ingestion for Class 11 Commerce (1,000 Questions)...');
  const startTime = Date.now();

  const commerceDataDir = path.resolve(process.cwd(), 'data/commerce');
  if (!fs.existsSync(commerceDataDir)) {
    fs.mkdirSync(commerceDataDir, { recursive: true });
  }

  let totalInsertedAll = 0;

  for (let i = 0; i < CHAPTERS_CONFIG.length; i++) {
    const cfg = CHAPTERS_CONFIG[i];
    console.log(`\n======================================================`);
    console.log(`📌 Progress: Chapter ${i + 1} of ${CHAPTERS_CONFIG.length}`);

    // Check existing count in DB for this chapter
    const existingCount = await prisma.question.count({
      where: {
        class: cfg.class,
        subject: cfg.subject,
        chapter: cfg.chapter
      }
    });

    if (existingCount >= 30) {
      console.log(`✅ Already have ${existingCount} questions in DB for "${cfg.chapter}". Skipping.`);
      continue;
    }

    try {
      const needed = Math.max(35 - existingCount, 30);
      const generated = await generateChapterQuestions(cfg, needed);

      if (!Array.isArray(generated) || generated.length === 0) {
        console.warn(`⚠️ No questions generated for ${cfg.chapter}. Retrying next iteration.`);
        continue;
      }

      console.log(`⚡ Received ${generated.length} questions from AI. Inserting into database...`);

      let insertedCount = 0;
      for (const q of generated) {
        const cleanText = (q.text || '').trim();
        if (!cleanText) continue;

        // Skip if already in DB
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

      totalInsertedAll += insertedCount;
      console.log(`✅ Successfully saved ${insertedCount} new questions for "${cfg.chapter}". (Total added: ${totalInsertedAll})`);

      // Save local backup JSON
      const safeFileName = `${cfg.class.replace(/\s+/g, '').toLowerCase()}_${cfg.subject.replace(/\s+/g, '').toLowerCase()}_ch${i + 1}.json`;
      const filePath = path.join(commerceDataDir, safeFileName);
      fs.writeFileSync(filePath, JSON.stringify(generated, null, 2), 'utf8');

      // Delay between calls
      await delay(1000);

    } catch (err) {
      console.error(`❌ Error on chapter ${cfg.chapter}:`, err.message);
      await delay(2000);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const finalDbCount = await prisma.question.count();

  console.log(`\n======================================================`);
  console.log(`🎉 Class 11 Commerce Batch Generation Complete in ${duration}s!`);
  console.log(`📥 Total New Questions Inserted: ${totalInsertedAll}`);
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
