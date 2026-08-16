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

const BOOST_LIST = [
  // Class 11 English (need ~120 to hit 300)
  { class: 'Class 11', subject: 'English', chapter: 'Ch 1: Hornbill - Prose Analysis', count: 20, topics: 'Prose themes, character motivations, linguistic choices in Hornbill' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 2: Hornbill - Poetry & Poetic Devices', count: 20, topics: 'Metaphor, personification, tone in Hornbill poems' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 3: Snapshots - Supplementary Stories', count: 20, topics: 'Snapshots plots, ethical questions, character sketches' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary', count: 20, topics: 'Unseen comprehension, inferential reasoning, antonyms/synonyms' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 5: Creative Writing Skills', count: 20, topics: 'Speech, debate, advertisement, poster writing' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Transformations', count: 20, topics: 'Determiners, active/passive, reported speech, tenses' },

  // Class 11 GK (need ~70 to hit 300)
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 1: Indian Polity & Constitution', count: 12, topics: 'Preamble, Fundamental Rights, Parliament' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 2: Indian & World Geography', count: 12, topics: 'Rivers, Mountains, Continents, Straits' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 3: Business, Banking & Financial Awareness', count: 12, topics: 'RBI, Sensex, Fintech, Banking systems' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 4: Science, Space & Technology', count: 12, topics: 'ISRO, AI, Space missions, Discoveries' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 5: History, Culture & Heritage', count: 12, topics: 'Freedom struggle, UNESCO sites, Classical dance' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 6: Sports, Awards & Current Affairs', count: 12, topics: 'Olympics, Cricket, Bharat Ratna, G20' },

  // Class 12 English (need ~35 to hit 300)
  { class: 'Class 12', subject: 'English', chapter: 'Ch 1: Flamingo - Prose Analysis', count: 7, topics: 'Flamingo prose themes and character arcs' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 2: Flamingo - Poetry and Literary Devices', count: 7, topics: 'Flamingo poetry imagery and poetic devices' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 3: Vistas - Supplementary Reader', count: 7, topics: 'Vistas stories dilemmas and character decisions' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary in Context', count: 7, topics: 'Analytical reading and contextual vocabulary' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 5: Advanced Creative Writing Skills', count: 7, topics: 'Job applications, notices, report formats' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Syntax Mechanics', count: 7, topics: 'Syntax inversion, conditionals, clauses' },

  // Class 12 GK (need ~86 to hit 300)
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 1: Indian Polity & Governance', count: 15, topics: 'Governance, Election commission, Supreme Court' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 2: Indian & International Economy', count: 15, topics: 'Global economic trends, Monetary policy' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 3: Global Affairs & International Organisations', count: 15, topics: 'UN, World Bank, Geopolitical summits' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 4: Science, Innovation & Defence', count: 15, topics: 'Defence systems, DRDO, Green technology' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 5: Art, Literature & World Heritage', count: 15, topics: 'Literary awards, Heritage monuments' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 6: Modern Current Affairs & Sports Trivia', count: 15, topics: 'Major global sports, International news' }
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
  throw new Error('All AI models failed');
}

async function main() {
  console.log('🚀 Starting Final 300+ Booster...');
  const startTime = Date.now();

  let totalAdded = 0;

  for (let i = 0; i < BOOST_LIST.length; i++) {
    const cfg = BOOST_LIST[i];
    console.log(`\n======================================================`);
    console.log(`📌 [${cfg.class} ${cfg.subject}] Generating ${cfg.count} Qs for "${cfg.chapter}" (${i + 1}/${BOOST_LIST.length})...`);

    const prompt = `Generate exactly ${cfg.count} unique exam-level MCQs based strictly on the official NCERT syllabus for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
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

      await delay(1000);

    } catch (err) {
      console.error(`❌ Error on ${cfg.chapter}:`, err.message);
      await delay(2000);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const finalDbCount = await prisma.question.count();

  console.log(`\n======================================================`);
  console.log(`🎉 300+ Parity Complete in ${duration}s!`);
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
