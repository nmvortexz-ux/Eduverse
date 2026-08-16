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
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CHAPTERS_TARGET = [
  // ─── 150 Questions across 8 Economics Chapters (~19 each) ───
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 1: Introduction to Microeconomics', count: 19, topics: 'PPC shifts, Opportunity cost calculations, Positive vs Normative statements, Central problems' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 2: Consumer\'s Equilibrium and Demand', count: 19, topics: 'Law of Equi-Marginal Utility, Indifference Map, Budget Line slope $P_X/P_Y$, Price Elasticity percentage formula, Cross demand' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 3: Producer Behaviour and Supply', count: 19, topics: 'Law of Diminishing Returns, TC, TFC, TVC curves relationship, Marginal Cost U-shape, Producer Equilibrium conditions $MR=MC$, Elasticity of supply' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 4: Forms of Market and Price Determination', count: 19, topics: 'Monopoly barriers, Monopolistic differentiation, Price Ceiling (rationing, black market), Price Floor (MSP for farmers), Equilibrium price shifts' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 5: Introduction to Statistics', count: 18, topics: 'Plural vs singular sense definitions of statistics, Distrust of statistics, Statistical laws, Quantitative vs qualitative data' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 6: Collection, Organisation and Presentation of Data', count: 19, topics: 'NSSO and Census of India, Stratified vs Random sampling, Frequency polygon vs Histogram, Ogive curves (more than/less than to find Median)' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 7: Measures of Central Tendency and Dispersion', count: 19, topics: 'Properties of Mean (algebraic sum of deviations from mean is zero), Median in continuous series $L + \\frac{N/2 - cf}{f} \\times h$, Mode empirical relation $\\text{Mode} = 3\\text{Median} - 2\\text{Mean}$, Standard Deviation coefficient of variation' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 8: Correlation and Index Numbers', count: 18, topics: 'Scatter diagrams interpretation, Spearman\'s rank differences, Base shifting and splicing, CPI weights, Cost of living index calculation' },

  // ─── 100 Questions across 10 Business Studies Chapters (10 each) ───
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 1: Nature and Purpose of Business', count: 10, topics: 'Distinction between Business, Profession, Employment, Multiple objectives of business, Causes of business risks' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 2: Forms of Business Organisation', count: 10, topics: 'Secret Partner vs Nominal Partner, Minor in partnership, Stages of Company Formation (Promotion, Incorporation, Capital Subscription)' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 3: Private, Public and Global Enterprises', count: 10, topics: 'Difference between Departmental Undertaking, Statutory Corp, Govt Company, Disinvestment policy, Features of MNCs' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 4: Business Services', count: 10, topics: 'Principles of Insurance (Causa Proxima, Contribution, Mitigation of Loss), Bank Draft vs Cheque, Types of Warehouses (Bonded, Public)' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 5: Emerging Modes of Business', count: 10, topics: 'B2B, B2C, C2C models, Digital signatures, Payment gateways, Scope of BPO vs KPO services' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 6: Social Responsibilities of Business and Business Ethics', count: 10, topics: 'Corporate Social Responsibility (CSR), Environmental pollution types, Elements of business ethics' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 7: Sources of Business Finance', count: 10, topics: 'Equity vs Debentures, Cumulative Preference shares, Factoring (Recourse vs Non-recourse), Lease financing, Inter-Corporate Deposits (ICD)' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 8: Small Business', count: 10, topics: 'Revised MSME investment and turnover criteria, Schemes of NSIC, District Industries Centres (DIC), Rural entrepreneurship' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 9: Internal Trade', count: 10, topics: 'Services of Wholesaler to Manufacturer, Departmental store vs Multiple shops, Automatic Vending Machines, Chamber of Commerce' },
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 10: International Business', count: 10, topics: 'Sight Draft vs Usance Draft, Mate\'s Receipt, Letter of Credit mechanism, Functions of World Trade Organization (WTO)' }
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
              content: 'You are an expert CBSE/NCERT Commerce faculty. Output valid json only with a "questions" key containing the array of MCQs.'
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
  throw new Error('Groq failed');
}

async function main() {
  console.log('🚀 Starting targeted batch generation: 150 Economics + 100 Business Studies (250 New Questions)...');
  const startTime = Date.now();

  const commerceDataDir = path.resolve(process.cwd(), 'data/commerce');
  if (!fs.existsSync(commerceDataDir)) {
    fs.mkdirSync(commerceDataDir, { recursive: true });
  }

  let totalAdded = 0;
  let ecoAdded = 0;
  let bstAdded = 0;

  for (let i = 0; i < CHAPTERS_TARGET.length; i++) {
    const cfg = CHAPTERS_TARGET[i];
    console.log(`\n======================================================`);
    console.log(`📌 [${cfg.subject}] Generating ${cfg.count} Qs for "${cfg.chapter}" (${i + 1}/${CHAPTERS_TARGET.length})...`);

    const prompt = `Generate exactly ${cfg.count} unique exam-level MCQs based strictly on the official NCERT textbook for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Key Topics to cover: ${cfg.topics}.

Requirements:
1. Exactly 4 options per question.
2. One option matches "correctAnswer".
3. Use KaTeX ($...$) for any formulas or variables.
4. Clear step-by-step NCERT explanation.
5. Realistic difficulty mix.

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
      if (!Array.isArray(questions) || questions.length === 0) {
        console.warn(`⚠️ No questions generated for ${cfg.chapter}.`);
        continue;
      }

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
      if (cfg.subject === 'Economics') ecoAdded += insertedCount;
      if (cfg.subject === 'Business Studies') bstAdded += insertedCount;

      console.log(`✅ Inserted ${insertedCount} Qs for "${cfg.chapter}". (Total added: ${totalAdded} | Eco: ${ecoAdded}/150, BST: ${bstAdded}/100)`);

      // Save local backup file
      const safeName = `class11_${cfg.subject.toLowerCase().replace(/\s+/g, '')}_add_${i + 1}.json`;
      fs.writeFileSync(path.join(commerceDataDir, safeName), JSON.stringify(questions, null, 2), 'utf8');

      await delay(1200);

    } catch (err) {
      console.error(`❌ Error on ${cfg.chapter}:`, err.message);
      await delay(2000);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const finalDbCount = await prisma.question.count();

  console.log(`\n======================================================`);
  console.log(`🎉 250 Questions Batch Completed in ${duration}s!`);
  console.log(`📈 Economics Added: ${ecoAdded}`);
  console.log(`💼 Business Studies Added: ${bstAdded}`);
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
