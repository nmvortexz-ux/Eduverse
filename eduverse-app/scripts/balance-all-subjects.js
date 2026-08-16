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

const BALANCING_CHAPTERS = [
  // ─── CLASS 11 ENGLISH (6 Modules x 50 Qs = 300 Qs) ───
  { class: 'Class 11', subject: 'English', chapter: 'Ch 1: Hornbill - Prose Analysis', count: 50, topics: 'The Portrait of a Lady (Khushwant Singh), We\'re Not Afraid to Die, Discovering Tut, The Ailing Planet, The Browning Version, Silk Road' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 2: Hornbill - Poetry & Poetic Devices', count: 50, topics: 'A Photograph (Shirley Toulson), The Laburnum Top (Ted Hughes), The Voice of the Rain (Walt Whitman), Childhood (Markus Natten), Father to Son' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 3: Snapshots - Supplementary Stories', count: 50, topics: 'The Summer of the Beautiful White Horse (William Saroyan), The Address (Marga Minco), Mother\'s Day (J.B. Priestley), Birth (A.J. Cronin), The Tale of Melon City' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary', count: 50, topics: 'Factual, descriptive, and literary unseen passage comprehension, note making and summarization techniques, vocabulary in context' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 5: Creative Writing Skills', count: 50, topics: 'Poster Making, Classified Advertisements, Speech Writing, Debate Writing formats and drafting' },
  { class: 'Class 11', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Transformations', count: 50, topics: 'Determiners, Tenses, Clauses, Modals, Voice, Reported Speech, Error spotting and sentence reordering' },

  // ─── CLASS 11 GK (6 Modules x 50 Qs = 300 Qs) ───
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 1: Indian Polity & Constitution', count: 50, topics: 'Fundamental Rights, Directive Principles, Preamble, Parliament, Supreme Court, Constitutional Amendments, President and PM roles' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 2: Indian & World Geography', count: 50, topics: 'Physical features of India, Rivers, Climate, Continents, Oceans, Mountain ranges, National Parks, Major straits and capitals' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 3: Business, Banking & Financial Awareness', count: 50, topics: 'RBI history and functions, Stock markets (BSE, NSE, Sensex, Nifty), Top global brands, Fintech, Cryptocurrencies, WTO, World Bank' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 4: Science, Space & Technology', count: 50, topics: 'ISRO space missions (Chandrayaan, Aditya-L1, Gaganyaan), AI developments, Renewable energy, Famous scientists and inventions' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 5: History, Culture & Heritage', count: 50, topics: 'Indus Valley Civilisation, Maurya & Gupta Dynasties, Freedom Struggle (1857-1947), Classical dances, UNESCO heritage sites of India' },
  { class: 'Class 11', subject: 'GK', chapter: 'Ch 6: Sports, Awards & Current Affairs', count: 50, topics: 'Olympic Games, Cricket World Cups, Grand Slams, Nobel Prizes, Bharat Ratna, Padma Awards, International summits (G20, BRICS)' },

  // ─── CLASS 11 ECONOMICS (Remaining ~101 Qs across 8 Chapters) ───
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 1: Introduction to Microeconomics', count: 13, topics: 'Central problems, PPC shifts, Opportunity cost numericals' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 2: Consumer\'s Equilibrium and Demand', count: 13, topics: 'Equi-marginal utility, Budget line, Elasticity of demand numericals' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 3: Producer Behaviour and Supply', count: 13, topics: 'Returns to factor, Cost curves relationship, Supply elasticity' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 4: Forms of Market and Price Determination', count: 13, topics: 'Price ceiling, Price floor, Market equilibrium shifts' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 5: Introduction to Statistics', count: 12, topics: 'Meaning, scope, and limitations of statistics' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 6: Collection, Organisation and Presentation of Data', count: 13, topics: 'Sampling methods, Tabulation, Histogram, Ogive' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 7: Measures of Central Tendency and Dispersion', count: 13, topics: 'Arithmetic mean, Median, Mode, Standard deviation calculation' },
  { class: 'Class 11', subject: 'Economics', chapter: 'Ch 8: Correlation and Index Numbers', count: 12, topics: 'Karl Pearson correlation, Spearman rank, Laspeyres and Paasche index' },

  // ─── CLASS 12 GK (6 Modules x 50 Qs = 300 Qs) ───
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 1: Indian Polity & Governance', count: 50, topics: 'Constitutional bodies (Election Commission, UPSC, CAG), Federalism, Panchayati Raj, Key Supreme Court landmark judgements' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 2: Indian & International Economy', count: 50, topics: 'Union Budget concepts, Monetary policy tools, Inflation indices, Foreign trade, Trade corridors, Multilateral financial institutions' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 3: Global Affairs & International Organisations', count: 50, topics: 'UN agencies (UNICEF, WHO, UNESCO), Geopolitics, Quad, ASEAN, SCO, Global climate summits (COP28, Paris Agreement)' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 4: Science, Innovation & Defence', count: 50, topics: 'DRDO missile systems, Indian Navy assets, Quantum computing, Biotechnology, Green hydrogen initiatives' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 5: Art, Literature & World Heritage', count: 50, topics: 'Major literary awards (Jnanpith, Booker Prize), Indian architecture styles, Ancient trade routes, Folk traditions' },
  { class: 'Class 12', subject: 'GK', chapter: 'Ch 6: Modern Current Affairs & Sports Trivia', count: 50, topics: 'Major global sporting tournaments, National Games, Important days & themes, Famous world leaders and heads of state' },

  // ─── CLASS 12 ENGLISH (Remaining ~192 Qs across 6 Modules) ───
  { class: 'Class 12', subject: 'English', chapter: 'Ch 1: Flamingo - Prose Analysis', count: 32, topics: 'In-depth character analysis, author perspectives, thematic motifs in Last Lesson, Lost Spring, Deep Water, Rattrap, Indigo' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 2: Flamingo - Poetry and Literary Devices', count: 32, topics: 'Stanza comprehension, poetic techniques, symbolism in My Mother at 66, Keeping Quiet, Thing of Beauty, Roadside Stand, Aunt Jennifer' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 3: Vistas - Supplementary Reader', count: 32, topics: 'Plot nuances, dramatic irony, climax analysis in Third Level, Tiger King, Enemy, On the Face of It, Memories of Childhood' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 4: Reading Comprehension & Vocabulary in Context', count: 32, topics: 'Case-based comprehension passages, rhetorical device identification, vocabulary synonyms and antonyms in context' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 5: Advanced Creative Writing Skills', count: 32, topics: 'Letter to Editor on social issues, Job Application with Resume drafting, Article on modern technology, Event report writing' },
  { class: 'Class 12', subject: 'English', chapter: 'Ch 6: Grammar & Sentence Syntax Mechanics', count: 32, topics: 'Subjunctive mood, Inversions, Complex sentence synthesis, Dangling modifiers, Punctuation and style precision' },

  // ─── CLASS 12 ACCOUNTANCY (Remaining ~114 Qs across 11 Chapters) ───
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 1: Accounting for Not-for-Profit Organisation', count: 11, topics: 'Specific donation vs general donation, Tournament fund calculations' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 2: Accounting for Partnership: Basic Concepts', count: 11, topics: 'P&L appropriation, Interest on capital out of profits vs charge' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 3: Reconstitution - Admission of a Partner', count: 11, topics: 'Goodwill brought in cash vs not brought in cash, Hidden goodwill' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 4: Reconstitution - Retirement/Death of a Partner', count: 11, topics: 'Settlement of deceased partner executor account with interest' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 5: Dissolution of Partnership Firm', count: 10, topics: 'Realisation account profit/loss sharing on dissolution' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 6: Accounting for Share Capital', count: 11, topics: 'Pro-rata allotment table, Capital reserve on reissue of shares' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 7: Issue and Redemption of Debentures', count: 10, topics: 'Collateral security debentures balance sheet disclosure' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 8: Financial Statements of a Company', count: 10, topics: 'Schedule III balance sheet head and subhead classification' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 9: Analysis of Financial Statements', count: 10, topics: 'Comparative and Common size statement percentages' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 10: Accounting Ratios', count: 10, topics: 'Solvency and activity ratio formula application and effects' },
  { class: 'Class 12', subject: 'Accountancy', chapter: 'Ch 11: Cash Flow Statement', count: 10, topics: 'Cash flow from operating, investing, and financing activities' },

  // ─── CLASS 12 ECONOMICS (Remaining ~75 Qs across 10 Chapters) ───
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 1: National Income and Related Aggregates', count: 8, topics: 'GDP deflator, Real GDP vs Nominal GDP, Double counting' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 2: Money and Banking', count: 8, topics: 'Money multiplier $1/LRR$, Repo rate and Reverse repo mechanism' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 3: Determination of Income and Employment', count: 8, topics: 'Investment multiplier $k$, Deflationary gap and Inflationary gap' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 4: Government Budget and the Economy', count: 7, topics: 'Fiscal deficit and Primary deficit calculations' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 5: Balance of Payments and Foreign Exchange', count: 7, topics: 'Current vs Capital account, Autonomous vs Accommodating' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 6: Indian Economy on the Eve of Independence', count: 7, topics: 'Zamindari system, Suez canal opening 1869, Drain of wealth' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 7: Indian Economy (1950-1990)', count: 7, topics: 'Land ceiling, Green revolution phases, IPR 1956 classification' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 8: Economic Reforms Since 1991 (LPG)', count: 8, topics: 'FDI, Disinvestment, Tariffs, WTO role in Indian reforms' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 9: Current Challenges Facing Indian Economy', count: 8, topics: 'Human capital formation, Rural credit, Organic farming, SHGs' },
  { class: 'Class 12', subject: 'Economics', chapter: 'Ch 10: Comparative Development Experiences of India and its Neighbours', count: 7, topics: 'Great Leap Forward, Sectoral employment in India, China, Pakistan' },

  // ─── CLASS 12 BUSINESS STUDIES (Remaining ~36 Qs across 12 Chapters) ───
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 1: Nature and Significance of Management', count: 3, topics: 'Coordination, Levels of management' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 2: Principles of Management', count: 3, topics: 'Fayol principles vs Taylor techniques' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 3: Business Environment', count: 3, topics: 'Dimensions of business environment' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 4: Planning', count: 3, topics: 'Planning process, Types of plans' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 5: Organising', count: 3, topics: 'Functional vs Divisional structure' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 6: Staffing', count: 3, topics: 'Selection process, Training methods' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 7: Directing', count: 3, topics: 'Maslow hierarchy, Leadership styles' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 8: Controlling', count: 3, topics: 'Critical Point Control, Management by Exception' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 9: Financial Management', count: 3, topics: 'Capital structure, Trading on equity' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 10: Financial Markets', count: 3, topics: 'Money market instruments, SEBI functions' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 11: Marketing Management', count: 3, topics: '4 Ps, Advertising vs Personal Selling' },
  { class: 'Class 12', subject: 'Business Studies', chapter: 'Ch 12: Consumer Protection', count: 3, topics: 'CPA 2019 Redressal machinery' }
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
  console.log('🚀 Starting Complete Subject Equalization for Class 11 & Class 12 (Target: 300+ Qs per Subject)...');
  const startTime = Date.now();

  const dataDir = path.resolve(process.cwd(), 'data/balanced');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  let totalAdded = 0;

  for (let i = 0; i < BALANCING_CHAPTERS.length; i++) {
    const cfg = BALANCING_CHAPTERS[i];
    console.log(`\n======================================================`);
    console.log(`📌 [${cfg.class} ${cfg.subject}] Generating ${cfg.count} Qs for "${cfg.chapter}" (${i + 1}/${BALANCING_CHAPTERS.length})...`);

    const prompt = `Generate exactly ${cfg.count} unique exam-level MCQs based strictly on the official NCERT textbook/syllabus for ${cfg.class} ${cfg.subject}, chapter "${cfg.chapter}".
Key Topics: ${cfg.topics}.

Requirements:
1. Exactly 4 options per question.
2. Exactly ONE option must match "correctAnswer".
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
      console.log(`✅ Saved ${insertedCount} new questions for [${cfg.class} ${cfg.subject}] "${cfg.chapter}". (Total added: ${totalAdded})`);

      // Save local backup file
      const safeName = `${cfg.class.replace(/\s+/g, '').toLowerCase()}_${cfg.subject.replace(/\s+/g, '').toLowerCase()}_bal_${i + 1}.json`;
      fs.writeFileSync(path.join(dataDir, safeName), JSON.stringify(questions, null, 2), 'utf8');

      await delay(1200);

    } catch (err) {
      console.error(`❌ Error on ${cfg.chapter}:`, err.message);
      await delay(2000);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const finalDbCount = await prisma.question.count();

  console.log(`\n======================================================`);
  console.log(`🎉 Subject Equalization Complete in ${duration}s!`);
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
