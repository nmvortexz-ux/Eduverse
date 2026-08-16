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

const TOPUP_MODULES = [
  // ─── CLASS 11 ENGLISH (Target: +235 Qs across 6 Modules = ~39 each) ───
  { class: 'Class 11', subject: 'English', chapter: 'Ch 1: Hornbill - Prose Analysis', count: 39, topics: 'Portrait of a Lady, We are not afraid to die, Discovering Tut, Ailing Planet, Browning Version, Silk Road' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 2: Hornbill - Poetry & Poetic Devices', count: 39, topics: 'A Photograph, Laburnum Top, Voice of the Rain, Childhood, Father to Son' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 3: Snapshots - Supplementary Stories', count: 39, topics: 'Summer of Beautiful White Horse, The Address, Mother\'s Day, Birth, Tale of Melon City' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary', count: 39, topics: 'Unseen factual & discursive passages, note-making, contextual vocabulary' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 5: Creative Writing Skills', count: 39, topics: 'Posters, Classified ads, Speech writing, Debate drafting' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Transformations', count: 40, topics: 'Determiners, Tenses, Modals, Voice, Clauses, Error correction' },

  // ─── CLASS 11 GK (Target: +220 Qs across 6 Modules = ~37 each) ───
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 1: Indian Polity & Constitution', count: 37, topics: 'Preamble, Fundamental Rights & Duties, Parliament, Supreme Court' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 2: Indian & World Geography', count: 37, topics: 'Indian rivers, Mountain ranges, Continents, Straits, Climate zones' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 3: Business, Banking & Financial Awareness', count: 37, topics: 'RBI, Stock exchanges, Banking terms, Global economy, Fintech' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 4: Science, Space & Technology', count: 37, topics: 'ISRO missions, Artificial Intelligence, Renewable energy, Discoveries' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 5: History, Culture & Heritage', count: 36, topics: 'Indus Valley, Freedom movement 1857-1947, Classical dances, Heritage sites' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 6: Sports, Awards & Current Affairs', count: 36, topics: 'Olympics, Cricket world cup, Nobel prizes, Bharat Ratna, G20' },

  // ─── CLASS 12 ENGLISH (Target: +135 Qs across 6 Modules = ~23 each) ───
  { class: 'Class 12', subject: 'English', chapter: 'Ch 1: Flamingo - Prose Analysis', count: 23, topics: 'Last Lesson, Lost Spring, Deep Water, Rattrap, Indigo, Poets and Pancakes, Going Places' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 2: Flamingo - Poetry and Literary Devices', count: 23, topics: 'My Mother at 66, Keeping Quiet, Thing of Beauty, Roadside Stand, Aunt Jennifer' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 3: Vistas - Supplementary Reader', count: 23, topics: 'Third Level, Tiger King, Journey to End of Earth, Enemy, On the Face of It' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary in Context', count: 22, topics: 'Comprehension strategies, Synonyms/Antonyms in context, Inference skills' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 5: Advanced Creative Writing Skills', count: 22, topics: 'Notice, Invitations, Letters to Editor, Job application with Resume, Report writing' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Syntax Mechanics', count: 22, topics: 'Complex transformations, Conditional clauses, Inversions, Concord' },

  // ─── CLASS 12 GK (Target: +230 Qs across 6 Modules = ~38 each) ───
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 1: Indian Polity & Governance', count: 38, topics: 'Election Commission, UPSC, Constitutional amendments, Landmark Supreme Court verdicts' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 2: Indian & International Economy', count: 38, topics: 'Fiscal & monetary policy, World Bank, IMF, Global economic trends' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 3: Global Affairs & International Organisations', count: 38, topics: 'UN, UNICEF, WHO, Quad, BRICS, Global summits' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 4: Science, Innovation & Defence', count: 38, topics: 'DRDO, Space technologies, Green initiatives, Supercomputers' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 5: Art, Literature & World Heritage', count: 39, topics: 'Jnanpith, Booker, World monuments, Architecture styles' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 6: Modern Current Affairs & Sports Trivia', count: 39, topics: 'International championships, Leaders of world, Key national initiatives' },

  // ─── CLASS 11 ACCOUNTANCY (Target: +20 Qs to reach 300) ───
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 3: Recording of Transactions - I', count: 10, topics: 'Journal entries, Accounting equation formulas' },
  { class: 'Class 11', subject: 'Accountancy', chapter: 'Ch 8: Financial Statements - I', count: 10, topics: 'COGS calculations, Trading and P&L accounts' },

  // ─── CLASS 11 ECONOMICS (Target: +16 Qs to reach 300) ───
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 2: Consumer\'s Equilibrium and Demand', count: 8, topics: 'Elasticity numericals, Indifference curve slope' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 7: Measures of Central Tendency and Dispersion', count: 8, topics: 'Standard deviation and Mean calculations' },

  // ─── CLASS 12 ACCOUNTANCY (Target: +24 Qs to reach 300) ───
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 6: Accounting for Share Capital', count: 12, topics: 'Forfeiture, Pro-rata allotment, Capital reserve' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 10: Accounting Ratios', count: 12, topics: 'Current ratio, Debt-equity, ROI calculation' }
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
              content: 'You are an expert CBSE/NCERT educator. Output valid json only with a "questions" key containing the array of MCQs.'
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
  console.log('🚀 Starting Final Subject Top-Up (Every Class 11 & 12 Subject to 300+ Qs)...');
  const startTime = Date.now();

  let totalAdded = 0;

  for (let i = 0; i < TOPUP_MODULES.length; i++) {
    const cfg = TOPUP_MODULES[i];
    console.log(`\n======================================================`);
    console.log(`📌 [${cfg.class} ${cfg.subject}] Generating ${cfg.count} Qs for "${cfg.chapter}" (${i + 1}/${TOPUP_MODULES.length})...`);

    const prompt = `Generate exactly ${cfg.count} unique exam-level MCQs based strictly on the official NCERT textbook/syllabus for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Key Topics: ${cfg.topics}.

Requirements:
1. Exactly 4 options per question.
2. Exactly ONE option must match "correctAnswer".
3. Use KaTeX ($...$) for any formulas.
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
            explanation: q.explanation || `According to the official NCERT ${cfg.subject} syllabus.`,
            options: {
              create: options
            }
          }
        });
        insertedCount++;
      }

      totalAdded += insertedCount;
      console.log(`✅ Saved ${insertedCount} new questions for [${cfg.class} ${cfg.subject}] "${cfg.chapter}". (Total added this run: ${totalAdded})`);

      await delay(1200);

    } catch (err) {
      console.error(`❌ Error on ${cfg.chapter}:`, err.message);
      await delay(2000);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const finalDbCount = await prisma.question.count();

  console.log(`\n======================================================`);
  console.log(`🎉 Final Subject Equalization Complete in ${duration}s!`);
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
