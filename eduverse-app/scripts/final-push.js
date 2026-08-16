import fs from 'fs';
import path from 'path';

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
} catch (e) {}

import { prisma } from '../lib/prisma.js';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FINAL_PUSH = [
  { class: 'Class 11', subject: 'English', chapter: 'Ch 1: Hornbill - Prose Analysis', count: 12, topics: 'Deep textual understanding, author commentary' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 3: Snapshots - Supplementary Stories', count: 12, topics: 'Supplementary stories character insights' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary', count: 12, topics: 'Reading comprehension tone, main idea, vocabulary' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 5: Creative Writing Skills', count: 12, topics: 'Writing formats, posters, speeches, debate' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Transformations', count: 12, topics: 'Active passive, speech, error spotting' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 1: Indian Polity & Constitution', count: 10, topics: 'Constitution, articles, parliament' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 4: Science, Space & Technology', count: 10, topics: 'ISRO, scientific research, AI' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 1: Indian Polity & Governance', count: 15, topics: 'Governance, judiciary, election commission' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 3: Global Affairs & International Organisations', count: 15, topics: 'UN, international relations, summits' }
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
            { role: 'system', content: 'You are an expert CBSE/NCERT educator. Output valid json only with a "questions" key containing the array of MCQs.' },
            { role: 'user', content: prompt + '\nRespond strictly with a valid json object with a "questions" key containing the array.' }
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
    } catch (e) {}
  }
  throw new Error('Groq failed');
}

async function main() {
  console.log('🚀 Final Push to Cross 300 on Every Subject...');
  for (const cfg of FINAL_PUSH) {
    const prompt = `Generate exactly ${cfg.count} unique exam-level MCQs based on NCERT for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Topics: ${cfg.topics}.
4 options, one correctAnswer, KaTeX formulas, detailed explanation.
JSON Structure: { "questions": [{ "text": "...", "options": ["A","B","C","D"], "correctAnswer": "A", "explanation": "...", "difficulty": "Medium", "class": "${cfg.class}", "subject": "${cfg.subject}", "chapter": "${cfg.chapter}" }] }`;

    try {
      const questions = await callGroq(prompt);
      if (!Array.isArray(questions)) continue;
      for (const q of questions) {
        const cleanText = (q.text || '').trim();
        if (!cleanText) continue;
        const exists = await prisma.question.findFirst({ where: { text: cleanText }, select: { id: true } });
        if (exists) continue;
        const opts = q.options.map(opt => ({ text: opt.trim(), isCorrect: opt.trim() === (q.correctAnswer || '').trim() }));
        if (opts.length !== 4) continue;
        await prisma.question.create({
          data: {
            text: cleanText,
            class: cfg.class,
            subject: cfg.subject,
            chapter: cfg.chapter,
            difficulty: q.difficulty || 'Medium',
            explanation: q.explanation || 'Official NCERT explanation.',
            options: { create: opts }
          }
        });
      }
      await delay(800);
    } catch (e) {}
  }
  const total = await prisma.question.count();
  console.log('🎉 Done! Final DB Count:', total);
}

main().finally(() => prisma.$disconnect().catch(() => {}));
