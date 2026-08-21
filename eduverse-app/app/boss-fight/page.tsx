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

  // ─── SVG Icon Components ──────────────────────────────────────────────────────
  const IconSwords = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" /><line x1="13" x2="19" y1="19" y2="13" /><line x1="16" x2="20" y1="16" y2="20" /><line x1="19" x2="21" y1="21" y2="19" /><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" /><line x1="5" x2="9" y1="14" y2="18" /><line x1="7" x2="4" y1="17" y2="20" /><line x1="3" x2="5" y1="19" y2="21" />
    </svg>
  );

  const IconZap = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  const IconShield = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );

  const IconTrophy = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );

  // Map subjects to clean SVG icons
  const subjectIcons: Record<string, React.ReactNode> = {
    Science: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3v6l-4 8h14l-4-8V3" strokeLinecap="round" strokeLinejoin="round" /><line x1="8" x2="16" y1="3" y2="3" strokeLinecap="round" /><circle cx="12" cy="15" r="1" fill="currentColor" /></svg>,
    Mathematics: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 12h16M12 4v16M7 7l10 10M17 7 7 17" /></svg>,
    Accountancy: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="8" x2="8" y1="7" y2="17" /><line x1="16" x2="16" y1="7" y2="17" /><line x1="2" x2="22" y1="12" y2="12" /></svg>,
    Economics: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    English: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>,
    'Social Studies': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
  };

  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        {/* Arena Hero Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>High-Stakes Arcade Mode</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Chapter <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] via-emerald-400 to-cyan-300">Boss Fight Arena</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Standard MCQs are boring. Battle <strong className="text-slate-300">Chapter Bosses</strong> with your NCERT mastery. Deal critical damage with correct answers, protect your <strong className="text-slate-300">3 Hearts</strong>, and earn Mythic XP.
          </p>
        </div>

        {/* Boss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOSS_ROSTER.map((boss) => (
            <motion.div
              key={boss.name}
              whileHover={{ y: -4 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-[#00df9a]/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Ambient Glow */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: boss.color }}
              />

              <div className="space-y-4 relative z-10">
                {/* Boss Icon & Class Tag */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `${boss.color}15`, color: boss.color, border: `1px solid ${boss.color}30` }}
                  >
                    {subjectIcons[boss.subject] || <IconSwords className="w-6 h-6" />}
                  </div>
                  <div className="text-right space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-400">
                      {boss.className} · {boss.subject}
                    </span>
                    <div className="text-xs font-mono font-semibold text-rose-400 tracking-wide">
                      HP: {boss.maxHp}
                    </div>
                  </div>
                </div>

                {/* Boss Details */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#00df9a] transition-colors duration-300">
                    {boss.name}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">{boss.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{boss.description}</p>
                </div>

                {/* Mini HP Bar */}
                <div className="h-1 rounded-full overflow-hidden bg-slate-800">
                  <div
                    className="h-full rounded-full w-full transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${boss.color}, ${boss.color}80)` }}
                  />
                </div>
              </div>

              {/* Combat Launch Button */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 relative z-10">
                <button
                  onClick={() => startBossBattle(boss)}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs py-3 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <IconSwords className="w-4 h-4" />
                  <span>FIGHT BOSS</span>
                  <span className="text-emerald-200 font-mono">({boss.maxHp} HP)</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arena Rules & Rewards */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto space-y-5">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <IconZap className="w-4 h-4 text-[#00df9a]" />
            Combat Rules
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-400">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/50 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#00df9a]">
                <IconZap className="w-3.5 h-3.5" />
                Deal Critical Damage
              </div>
              <div className="leading-relaxed">Answer quickly (&lt;6s) or stack 2x+ Combos to deal up to <strong className="text-slate-300">-350 HP</strong> damage per question.</div>
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/50 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-rose-400">
                <IconShield className="w-3.5 h-3.5" />
                Protect Your Lives
              </div>
              <div className="leading-relaxed">Wrong answers trigger Boss counter-attacks and deplete 1 Heart. 3 mistakes = Defeat!</div>
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/50 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-amber-400">
                <IconTrophy className="w-3.5 h-3.5" />
                Boss Slayer Rewards
              </div>
              <div className="leading-relaxed">Defeating a boss awards <strong className="text-slate-300">+150 Bonus XP</strong> and elevates your Leaderboard standing.</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-6 text-center text-xs text-slate-500">
        EduVerse Boss Fight Engine · Class 8 to 12 NCERT Mastery
      </footer>
    </div>
  );
}
