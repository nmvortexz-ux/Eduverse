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
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ECONOMICS_CHAPTERS = [
  { class: 'Class 11', subject: 'Business Studies', chapter: 'Ch 10: International Business', topics: 'Internal vs International trade, Scope of International business, Export and Import procedures, Key documents (Letter of Credit, Bill of Lading, Shipping Bill), WTO, IMF, World Bank' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 1: Introduction to Microeconomics', topics: 'Economy, Scarcity, Choice, Central Problems of an Economy (What, How, For whom to produce), Production Possibility Curve (PPC/PPF), Opportunity Cost, Marginal Opportunity Cost (MOC), Positive vs Normative Economics' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 2: Consumer\'s Equilibrium and Demand', topics: 'Utility analysis (Total Utility, Marginal Utility, Law of Diminishing Marginal Utility), Indifference Curve analysis (Properties, Marginal Rate of Substitution, Budget Line, Consumer Equilibrium), Demand function, Law of Demand, Elasticity of Demand (Price Elasticity, Percentage method)' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 3: Producer Behaviour and Supply', topics: 'Production Function (Short run vs Long run, Total Product, Marginal Product, Law of Variable Proportions), Cost concepts (Total, Fixed, Variable, Marginal Cost), Revenue concepts (TR, AR, MR), Producer Equilibrium (MR = MC approach), Supply function, Law of Supply, Price Elasticity of Supply' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 4: Forms of Market and Price Determination', topics: 'Perfect Competition characteristics, Monopoly, Monopolistic Competition, Oligopoly features, Price determination under Perfect Competition, Shifts in demand and supply, Price Ceiling and Price Floor applications' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 5: Introduction to Statistics', topics: 'Meaning and definition of Statistics in singular and plural sense, Scope, Functions, and Limitations of Statistics in Economics' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 6: Collection, Organisation and Presentation of Data', topics: 'Primary vs Secondary data, Census vs Sample method, Sampling techniques, Classification of data, Frequency distribution, Tabulation of data, Diagrammatic presentation (Bar, Pie diagrams), Graphic presentation (Histogram, Ogive)' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 7: Measures of Central Tendency and Dispersion', topics: 'Arithmetic Mean (Direct, Short-cut, Step-deviation methods for raw, discrete, continuous series), Median, Mode, Range, Quartile Deviation, Mean Deviation, Standard Deviation, Variance, Coefficient of Variation' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 8: Correlation and Index Numbers', topics: 'Correlation meaning and types, Scatter diagram, Karl Pearson\'s coefficient of correlation, Spearman\'s Rank correlation, Index Numbers (Laspeyres, Paasche, Fisher Ideal Index), Consumer Price Index (CPI), Wholesale Price Index (WPI), Inflation' }
];

async function callGroqWithRotation(prompt) {
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
              content: 'You are an expert CBSE/NCERT Commerce & Economics faculty. Generate exam-level NCERT multiple choice questions in a valid json object with a "questions" array. No text outside JSON.'
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
      } else {
        console.warn(`Model ${model} returned status ${response.status}, trying next model...`);
      }
    } catch (e) {
      console.warn(`Groq error on ${model}:`, e.message);
    }
  }

  throw new Error('All Groq models failed.');
}

async function main() {
  console.log('🚀 Starting Class 11 Economics & International Business Ingestion...');
  const startTime = Date.now();

  const commerceDataDir = path.resolve(process.cwd(), 'data/commerce');
  if (!fs.existsSync(commerceDataDir)) {
    fs.mkdirSync(commerceDataDir, { recursive: true });
  }

  let totalAdded = 0;

  for (let i = 0; i < ECONOMICS_CHAPTERS.length; i++) {
    const cfg = ECONOMICS_CHAPTERS[i];
    console.log(`\n======================================================`);
    console.log(`📌 Processing: [${cfg.subject}] "${cfg.chapter}" (${i + 1}/${ECONOMICS_CHAPTERS.length})`);

    const existingCount = await prisma.question.count({
      where: {
        class: cfg.class,
        subject: cfg.subject,
        chapter: cfg.chapter
      }
    });

    if (existingCount >= 30) {
      console.log(`✅ Already have ${existingCount} questions in DB. Skipping.`);
      continue;
    }

    const needed = Math.max(35 - existingCount, 30);
    const prompt = `Generate exactly ${needed} exam-level Multiple Choice Questions (MCQs) strictly based on the official NCERT textbook for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Key Topics: ${cfg.topics}.

Rules:
1. Every question must have exactly 4 options.
2. Exactly one option must match "correctAnswer".
3. Use KaTeX/LaTeX ($...$) for any math or economic formulas, e.g. $\\text{Elasticity } (e_d) = \\frac{\\% \\Delta Q}{\\% \\Delta P}$, $\\text{MR} = \\text{MC}$, $\\bar{X} = \\frac{\\sum X}{N}$, $\\sigma = \\sqrt{\\frac{\\sum d^2}{N}}$.
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

    try {
      const questions = await callGroqWithRotation(prompt);
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
      console.log(`✅ Saved ${insertedCount} new questions for "${cfg.chapter}". (Total added this run: ${totalAdded})`);

      // Save local backup JSON
      const safeName = `class11_${cfg.subject.toLowerCase().replace(/\s+/g, '')}_${cfg.chapter.toLowerCase().replace(/[^a-z0-9]/g, '_')}.json`;
      fs.writeFileSync(path.join(commerceDataDir, safeName), JSON.stringify(questions, null, 2), 'utf8');

      await delay(1500);

    } catch (err) {
      console.error(`❌ Error on ${cfg.chapter}:`, err.message);
      await delay(3000);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const finalDbCount = await prisma.question.count();

  console.log(`\n======================================================`);
  console.log(`🎉 Economics & Business Studies Generation Finished in ${duration}s!`);
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
