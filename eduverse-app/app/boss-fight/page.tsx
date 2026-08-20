'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BossFightQuiz, { BossProfile, BossQuestion } from '@/components/BossFightQuiz';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ─── Boss Roster Presets ──────────────────────────────────────────────────────
const BOSS_ROSTER: (BossProfile & { description: string; difficulty: string; color: string; bgGlow: string })[] = [
  {
    name: 'The Strict Invigilator',
    title: 'Final Boss of Class 10 Science',
    subject: 'Science',
    className: 'Class 10',
    avatar: '👨‍🏫',
    maxHp: 1000,
    difficulty: 'Hard',
    description: 'Watches you like a hawk. You cannot pass without mastering Chemical Reactions and Electricity.',
    color: '#10B981',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    name: 'Sharma Ji Ka Beta',
    title: 'The Ultimate Math Rival',
    subject: 'Mathematics',
    className: 'Class 10',
    avatar: '🤓',
    maxHp: 1000,
    difficulty: 'Very Hard',
    description: 'He already solved the entire RD Sharma book twice. Can you beat his score in Algebra and Trigonometry?',
    color: '#F59E0B',
    bgGlow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    name: 'The Balance Sheet Boss',
    title: 'Master of Tally & Company Accounts',
    subject: 'Accountancy',
    className: 'Class 12',
    avatar: '💼',
    maxHp: 1200,
    difficulty: 'Expert',
    description: 'Your balance sheet won\'t tally unless you defeat him. He will test your Partnership and Goodwill concepts!',
    color: '#FB7185',
    bgGlow: 'rgba(251, 113, 133, 0.15)',
  },
  {
    name: 'The GDP Godfather',
    title: 'Controller of Macroeconomics',
    subject: 'Economics',
    className: 'Class 12',
    avatar: '📈',
    maxHp: 1000,
    difficulty: 'Hard',
    description: 'Controls the National Income and the RBI. You need perfect concepts to take him down.',
    color: '#A855F7',
    bgGlow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    name: 'The Grammar Guru',
    title: 'Linguistic Syntax Master',
    subject: 'English',
    className: 'Class 9',
    avatar: '🧐',
    maxHp: 900,
    difficulty: 'Medium',
    description: 'Finds a grammatical error in everything you say. Defeat him to prove your Tenses and Modals.',
    color: '#38BDF8',
    bgGlow: 'rgba(56, 189, 248, 0.15)',
  },
  {
    name: 'The Timeline Tyrant',
    title: 'Historical Strategies Expert',
    subject: 'Social Studies',
    className: 'Class 9',
    avatar: '🗺️',
    maxHp: 1000,
    difficulty: 'Medium',
    description: 'He remembers every single date from the French Revolution. Prepare for a fierce timeline battle!',
    color: '#34D399',
    bgGlow: 'rgba(52, 211, 153, 0.15)',
  },
];

// Utility to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Curated High-Yield Sample Questions Pool for instant offline/direct battle capability
const SAMPLE_QUESTIONS_BY_SUBJECT: Record<string, BossQuestion[]> = {
  Science: [
    {
      id: 'sci-1',
      text: 'Which chemical compound is known as "Bleaching Powder" and what is its chemical formula?',
      explanation: 'Bleaching powder is Calcium Oxychloride (CaOCl2), prepared by the action of chlorine on dry slaked lime Ca(OH)2.',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: 'Calcium Oxychloride (CaOCl₂)', isCorrect: true },
        { id: 'o2', text: 'Calcium Carbonate (CaCO₃)', isCorrect: false },
        { id: 'o3', text: 'Calcium Sulphate (CaSO₄)', isCorrect: false },
        { id: 'o4', text: 'Sodium Bicarbonate (NaHCO₃)', isCorrect: false },
      ],
    },
    {
      id: 'sci-2',
      text: 'An electric bulb is rated 220 V and 100 W. When it is operated on 110 V, the power consumed will be:',
      explanation: 'Resistance R = V²/P = (220)²/100 = 484 Ω. Power consumed at 110V is P = V²/R = (110)²/484 = 25 W.',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: '100 W', isCorrect: false },
        { id: 'o2', text: '75 W', isCorrect: false },
        { id: 'o3', text: '50 W', isCorrect: false },
        { id: 'o4', text: '25 W', isCorrect: true },
      ],
    },
    {
      id: 'sci-3',
      text: 'Which part of the human eye controls the amount of light entering into the retina?',
      explanation: 'The Iris controls the size of the pupil, which directly regulates the amount of light entering the eye.',
      difficulty: 'Easy',
      damage: 200,
      options: [
        { id: 'o1', text: 'Cornea', isCorrect: false },
        { id: 'o2', text: 'Iris', isCorrect: true },
        { id: 'o3', text: 'Ciliary Muscles', isCorrect: false },
        { id: 'o4', text: 'Optic Nerve', isCorrect: false },
      ],
    },
    {
      id: 'sci-4',
      text: 'What happens when dilute Hydrochloric Acid (HCl) is added to iron filings?',
      explanation: 'Fe + 2HCl → FeCl₂ + H₂↑. Hydrogen gas and Iron(II) chloride are produced.',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: 'Hydrogen gas and iron chloride are produced', isCorrect: true },
        { id: 'o2', text: 'Chlorine gas and iron hydroxide are produced', isCorrect: false },
        { id: 'o3', text: 'No reaction takes place', isCorrect: false },
        { id: 'o4', text: 'Iron salt and water are produced', isCorrect: false },
      ],
    },
    {
      id: 'sci-5',
      text: 'In Mendel\'s monohybrid cross of tall (TT) and dwarf (tt) pea plants, the phenotypic ratio in F2 generation is:',
      explanation: 'The phenotypic ratio in the F2 generation of a monohybrid cross is 3 Tall : 1 Dwarf (3:1).',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: '1:2:1', isCorrect: false },
        { id: 'o2', text: '3:1', isCorrect: true },
        { id: 'o3', text: '9:3:3:1', isCorrect: false },
        { id: 'o4', text: '2:1:1', isCorrect: false },
      ],
    },
  ],
  Accountancy: [
    {
      id: 'acc-1',
      text: 'In the absence of a Partnership Deed, what rate of interest is allowed on a partner\'s loan to the firm?',
      explanation: 'According to the Indian Partnership Act, 1932, in the absence of an agreement, interest on partner loan is provided at 6% p.a.',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: '6% per annum', isCorrect: true },
        { id: 'o2', text: '10% per annum', isCorrect: false },
        { id: 'o3', text: '12% per annum', isCorrect: false },
        { id: 'o4', text: 'No interest allowed', isCorrect: false },
      ],
    },
    {
      id: 'acc-2',
      text: 'At the time of admission of a new partner, General Reserve appearing in the Balance Sheet is transferred to:',
      explanation: 'General Reserve is an accumulated profit earned by old partners, so it is credited to Old Partners’ Capital Accounts in Old Profit Sharing Ratio.',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: 'Old Partners\' Capital A/cs in Old Ratio', isCorrect: true },
        { id: 'o2', text: 'All Partners\' Capital A/cs in New Ratio', isCorrect: false },
        { id: 'o3', text: 'Revaluation Account', isCorrect: false },
        { id: 'o4', text: 'Sacrificing Partners in Sacrificing Ratio', isCorrect: false },
      ],
    },
    {
      id: 'acc-3',
      text: 'Forfeited Shares Account balance after re-issue of forfeited shares is transferred to which reserve?',
      explanation: 'The net gain on forfeiture and re-issue of shares is a capital profit and transferred to Capital Reserve Account.',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: 'General Reserve', isCorrect: false },
        { id: 'o2', text: 'Capital Reserve', isCorrect: true },
        { id: 'o3', text: 'Securities Premium Account', isCorrect: false },
        { id: 'o4', text: 'Statement of Profit and Loss', isCorrect: false },
      ],
    },
    {
      id: 'acc-4',
      text: 'Which of the following is NOT a tool of Financial Statement Analysis?',
      explanation: 'Cash Budget is a short-term operational budgeting tool, not a historical financial statement analysis tool like Ratio Analysis or Cash Flow Statement.',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: 'Comparative Statements', isCorrect: false },
        { id: 'o2', text: 'Ratio Analysis', isCorrect: false },
        { id: 'o3', text: 'Cash Flow Statement', isCorrect: false },
        { id: 'o4', text: 'Cash Budget', isCorrect: true },
      ],
    },
    {
      id: 'acc-5',
      text: 'If Current Ratio is 2:1 and Quick Ratio is 1.5:1 with Current Liabilities of ₹1,00,000, what is the value of Inventory?',
      explanation: 'Current Assets = 2 × 1,00,000 = 2,00,000. Quick Assets = 1.5 × 1,00,000 = 1,50,000. Inventory = CA - QA = ₹50,000.',
      difficulty: 'Very Hard',
      damage: 350,
      options: [
        { id: 'o1', text: '₹50,000', isCorrect: true },
        { id: 'o2', text: '₹1,00,000', isCorrect: false },
        { id: 'o3', text: '₹75,000', isCorrect: false },
        { id: 'o4', text: '₹25,000', isCorrect: false },
      ],
    },
  ],
  Mathematics: [
    {
      id: 'math-1',
      text: 'If α and β are the zeroes of quadratic polynomial p(x) = x² - 5x + 6, find the value of (α² + β²):',
      explanation: 'α + β = 5, αβ = 6. α² + β² = (α + β)² - 2αβ = 5² - 2(6) = 25 - 12 = 13.',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: '13', isCorrect: true },
        { id: 'o2', text: '17', isCorrect: false },
        { id: 'o3', text: '25', isCorrect: false },
        { id: 'o4', text: '19', isCorrect: false },
      ],
    },
    {
      id: 'math-2',
      text: 'If sin θ + cos θ = √2 cos θ, then the value of (cos θ - sin θ) is:',
      explanation: 'Given sin θ = (√2 - 1)cos θ. Multiply both sides by (√2 + 1) to get (√2 + 1)sin θ = cos θ. Thus cos θ - sin θ = √2 sin θ.',
      difficulty: 'Very Hard',
      damage: 350,
      options: [
        { id: 'o1', text: '√2 sin θ', isCorrect: true },
        { id: 'o2', text: '√2 cos θ', isCorrect: false },
        { id: 'o3', text: 'sin θ', isCorrect: false },
        { id: 'o4', text: '2 sin θ', isCorrect: false },
      ],
    },
    {
      id: 'math-3',
      text: 'The discriminant of the quadratic equation 2x² - 4x + 3 = 0 is:',
      explanation: 'D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D < 0, roots are non-real.',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: '-8', isCorrect: true },
        { id: 'o2', text: '8', isCorrect: false },
        { id: 'o3', text: '16', isCorrect: false },
        { id: 'o4', text: '-16', isCorrect: false },
      ],
    },
    {
      id: 'math-4',
      text: 'The 10th term from the end of the A.P. 4, 9, 14, ..., 254 is:',
      explanation: 'Formula: l - (n - 1)d = 254 - (10 - 1)(5) = 254 - 45 = 209.',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: '209', isCorrect: true },
        { id: 'o2', text: '214', isCorrect: false },
        { id: 'o3', text: '199', isCorrect: false },
        { id: 'o4', text: '204', isCorrect: false },
      ],
    },
  ],
  Economics: [
    {
      id: 'eco-1',
      text: 'When Marginal Propensity to Consume (MPC) is 0.8, what is the value of the Investment Multiplier (k)?',
      explanation: 'Investment multiplier k = 1 / (1 - MPC) = 1 / (1 - 0.8) = 1 / 0.2 = 5.',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: '5', isCorrect: true },
        { id: 'o2', text: '4', isCorrect: false },
        { id: 'o3', text: '1.25', isCorrect: false },
        { id: 'o4', text: '8', isCorrect: false },
      ],
    },
    {
      id: 'eco-2',
      text: 'Which of the following is an example of a qualitative tool of Monetary Policy used by the RBI?',
      explanation: 'Margin Requirements is a selective/qualitative credit control tool, whereas Repo rate, CRR, and SLR are quantitative tools.',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: 'Margin Requirements', isCorrect: true },
        { id: 'o2', text: 'Cash Reserve Ratio (CRR)', isCorrect: false },
        { id: 'o3', text: 'Statutory Liquidity Ratio (SLR)', isCorrect: false },
        { id: 'o4', text: 'Repo Rate', isCorrect: false },
      ],
    },
    {
      id: 'eco-3',
      text: 'Which component is NOT included in Domestic Income (NDP_FC)?',
      explanation: 'Net Factor Income from Abroad (NFIA) is added to Domestic Income to arrive at National Income (NNP_FC). It is not part of Domestic Income.',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: 'Compensation of Employees', isCorrect: false },
        { id: 'o2', text: 'Operating Surplus', isCorrect: false },
        { id: 'o3', text: 'Net Factor Income from Abroad (NFIA)', isCorrect: true },
        { id: 'o4', text: 'Mixed Income of Self Employed', isCorrect: false },
      ],
    },
  ],
  English: [
    {
      id: 'eng-1',
      text: 'Identify the sentence with correct Subject-Verb Agreement:',
      explanation: 'When subjects are joined by "either...or" / "neither...nor", the verb agrees with the closer subject ("friends" -> "are").',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: 'Neither the teacher nor the students were present.', isCorrect: true },
        { id: 'o2', text: 'Neither the teacher nor the students was present.', isCorrect: false },
        { id: 'o3', text: 'Either of the boys are guilty.', isCorrect: false },
        { id: 'o4', text: 'Each of the participants have received a prize.', isCorrect: false },
      ],
    },
    {
      id: 'eng-2',
      text: 'Convert to Reported Speech: She said, "I have completed my assignment today."',
      explanation: '"Have completed" changes to "had completed", and "today" changes to "that day".',
      difficulty: 'Hard',
      damage: 300,
      options: [
        { id: 'o1', text: 'She said that she had completed her assignment that day.', isCorrect: true },
        { id: 'o2', text: 'She said that she has completed her assignment today.', isCorrect: false },
        { id: 'o3', text: 'She said that she completed her assignment that day.', isCorrect: false },
        { id: 'o4', text: 'She told that she had completed her assignment today.', isCorrect: false },
      ],
    },
  ],
  'Social Studies': [
    {
      id: 'sst-1',
      text: 'Who was proclaimed the first Emperor of unified Germany in 1871 at Versailles?',
      explanation: 'Kaiser William I of Prussia was proclaimed the German Emperor in the Hall of Mirrors at Versailles in January 1871.',
      difficulty: 'Medium',
      damage: 250,
      options: [
        { id: 'o1', text: 'Kaiser William I', isCorrect: true },
        { id: 'o2', text: 'Otto von Bismarck', isCorrect: false },
        { id: 'o3', text: 'Victor Emmanuel II', isCorrect: false },
        { id: 'o4', text: 'Giuseppe Garibaldi', isCorrect: false },
      ],
    },
    {
      id: 'sst-2',
      text: 'Which soil type is most widely spread in India and highly fertile for growing sugarcane and paddy?',
      explanation: 'Alluvial soil covers the entire northern plains and is the most fertile and widely spread soil in India.',
      difficulty: 'Easy',
      damage: 200,
      options: [
        { id: 'o1', text: 'Alluvial Soil', isCorrect: true },
        { id: 'o2', text: 'Black Soil', isCorrect: false },
        { id: 'o3', text: 'Laterite Soil', isCorrect: false },
        { id: 'o4', text: 'Red Soil', isCorrect: false },
      ],
    },
  ],
};

export default function BossFightArena() {
  const [activeBoss, setActiveBoss] = useState<BossProfile | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<BossQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // ─── Fetch questions dynamically or fallback to curated set ──────────────────
  const startBossBattle = async (boss: BossProfile) => {
    setLoading(true);
    setActiveBoss(boss);

    try {
      // Try fetching from internal questions API
      const res = await fetch(`/api/questions?class=${encodeURIComponent(boss.className)}&subject=${encodeURIComponent(boss.subject)}&limit=15`);
      if (res.ok) {
        const data = await res.json();
        if (data.questions && data.questions.length >= 3) {
          const mappedQuestions: BossQuestion[] = data.questions.map((q: any) => ({
            id: q.id,
            text: q.text,
            explanation: q.explanation,
            difficulty: q.difficulty || 'Hard',
            damage: q.difficulty === 'Very Hard' ? 350 : q.difficulty === 'Hard' ? 300 : 250,
            options: q.options.map((o: any) => ({
              id: o.id,
              text: o.text,
              isCorrect: o.isCorrect,
            })),
          }));
          setActiveQuestions(shuffleArray(mappedQuestions));
          setLoading(false);
          return;
        }
      }
    } catch {
      // API fallback
    }

    // Fallback to high-yield curated combat question pool
    const fallback = SAMPLE_QUESTIONS_BY_SUBJECT[boss.subject] || SAMPLE_QUESTIONS_BY_SUBJECT['Science'];
    setActiveQuestions(shuffleArray(fallback));
    setLoading(false);
  };

  // If a battle is currently active, render the Battle Engine
  if (activeBoss && !loading && activeQuestions.length > 0) {
    return (
      <BossFightQuiz
        boss={activeBoss}
        questions={activeQuestions}
        onExit={() => {
          setActiveBoss(null);
          setActiveQuestions([]);
        }}
        onRestart={() => startBossBattle(activeBoss)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        {/* Arena Hero Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border-2 border-rose-500/80 text-rose-300 text-xs font-black tracking-wider uppercase shadow-[0_0_15px_rgba(244,63,94,0.3)]">
            <span>👾 High-Stakes Arcade Mode</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Chapter <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300">Boss Fight Arena</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-medium">
            Standard MCQs are boring. Battle animated <strong>Chapter Bosses</strong> with your NCERT mastery. Deal critical damage with correct answers, protect your <strong>3 Hearts</strong>, and earn Mythic XP!
          </p>
        </div>

        {/* Boss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOSS_ROSTER.map((boss) => (
            <motion.div
              key={boss.name}
              whileHover={{ y: -4 }}
              className="bg-slate-900/90 border-2 border-slate-700 hover:border-white rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.08)] flex flex-col justify-between transition-all relative overflow-hidden group"
              style={{
                boxShadow: '4px 4px 0px 0px rgba(255,255,255,0.1)',
              }}
            >
              {/* Background Ambient Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
                style={{ backgroundColor: boss.color }}
              />

              <div className="space-y-4 relative z-10">
                {/* Boss Avatar & Class Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 border-2 border-slate-700 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    {boss.avatar}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 border border-slate-600 text-slate-300">
                      {boss.className} • {boss.subject}
                    </span>
                    <div className="text-xs font-bold text-rose-400 mt-1">HP: {boss.maxHp}</div>
                  </div>
                </div>

                {/* Boss Details */}
                <div>
                  <h3 className="text-lg font-black text-white tracking-tight group-hover:text-teal-300 transition-colors">
                    {boss.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-2">{boss.title}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{boss.description}</p>
                </div>
              </div>

              {/* Combat Launch Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 relative z-10">
                <button
                  onClick={() => startBossBattle(boss)}
                  disabled={loading}
                  className="w-full btn-pill bg-[#0D9488] hover:bg-[#0F766E] text-white font-black text-xs py-3 rounded-2xl border-2 border-white shadow-[2px_2px_0px_0px_#FFFFFF] cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>⚔️ FIGHT BOSS</span>
                  <span className="text-teal-200">({boss.maxHp} HP)</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arena Rules & Rewards Info Card */}
        <div className="mt-12 bg-slate-900/60 border-2 border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto space-y-4">
          <h4 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
            <span>⚡ Boss Fight Combat Rules:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-300">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
              <div className="font-black text-teal-400">💥 Deal Critical Damage:</div>
              <div>Answer quickly (&lt;6s) or stack 2x+ Combos to deal up to <strong>-350 HP</strong> damage per question.</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
              <div className="font-black text-rose-400">❤️❤️❤️ Protect Your Lives:</div>
              <div>Wrong answers trigger Boss counter-attacks and deplete 1 Heart. 3 mistakes = Defeat!</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
              <div className="font-black text-amber-400">🏆 Boss Slayer Rewards:</div>
              <div>Defeating a boss awards <strong>+150 Bonus XP</strong> and elevates your Leaderboard standing.</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        EduVerse Boss Fight Engine • Class 8 to 12 NCERT Mastery
      </footer>
    </div>
  );
}
