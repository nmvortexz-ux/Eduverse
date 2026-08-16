'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

// ─── Types ────────────────────────────────────────────────────────────────────
type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Mixed';
type Mode = 'practice' | 'exam';

// ─── Data (Dark Retro-Pop Colors) ─────────────────────────────────────────────
const difficulties: {
  key: Difficulty;
  label: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
  count: number | string;
  desc: string;
}[] = [
  {
    key: 'Easy',
    label: 'Easy',
    emoji: '🟢',
    color: '#34D399',
    bg: '#064E3B',
    border: '#10B981',
    count: 50,
    desc: 'Foundational concepts',
  },
  {
    key: 'Medium',
    label: 'Medium',
    emoji: '🟡',
    color: '#FBBF24',
    bg: '#78350F',
    border: '#F59E0B',
    count: 50,
    desc: 'Applied understanding',
  },
  {
    key: 'Hard',
    label: 'Hard',
    emoji: '🟠',
    color: '#FB923C',
    bg: '#7C2D12',
    border: '#EA580C',
    count: 50,
    desc: 'Deep problem solving',
  },
  {
    key: 'Very Hard',
    label: 'Very Hard',
    emoji: '🔴',
    color: '#FB7185',
    bg: '#881337',
    border: '#F43F5E',
    count: 50,
    desc: 'Expert level challenge',
  },
  {
    key: 'Mixed',
    label: 'Mixed',
    emoji: '🎲',
    color: '#C084FC',
    bg: '#581C87',
    border: '#A855F7',
    count: '∞',
    desc: 'Random from all levels',
  },
];

const modes: {
  key: Mode;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  bullets: string[];
  color: string;
  bg: string;
  badgeBg: string;
}[] = [
  {
    key: 'practice',
    label: 'Practice Mode',
    tagline: 'Learn at your own pace',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    bullets: ['No timer pressure', 'Instant answer explanations', 'Bookmark questions', 'Retake failed questions'],
    color: '#2DD4BF',
    bg: '#134E4A',
    badgeBg: '#0D9488',
  },
  {
    key: 'exam',
    label: 'Exam Mode',
    tagline: 'Simulate real test conditions',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    bullets: ['Countdown timer running', 'No hints or explanations', 'Leaderboard submission', 'Results revealed at end'],
    color: '#60A5FA',
    bg: '#1E3A8A',
    badgeBg: '#2563EB',
  },
];

// ─── Framer variants ──────────────────────────────────────────────────────────
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-slate-950 flex-shrink-0"
        style={{
          background: '#14B8A6',
          boxShadow: '2px 2px 0 #FFFFFF',
        }}
      >
        {step}
      </span>
      <h2
        className="text-lg font-black text-white"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {label}
      </h2>
    </div>
  );
}

// ─── Main content (wrapped in Suspense) ───────────────────────────────────────
function ConfigureContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedClass   = searchParams.get('class')   ?? 'Class 9';
  const selectedSubject = searchParams.get('subject')  ?? 'Science';

  const [difficulty, setDifficulty] = useState<Difficulty>('Mixed');
  const [mode, setMode]             = useState<Mode>('practice');
  const [selectedChapter, setSelectedChapter] = useState<string>('All Chapters');
  const [availableChapters, setAvailableChapters] = useState<string[]>([]);
  const [loadingChapters, setLoadingChapters] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchChapters = async () => {
      if (!selectedClass || !selectedSubject) return;
      setLoadingChapters(true);
      try {
        const res = await fetch(`/api/meta?class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(selectedSubject)}`);
        const data = await res.json();
        if (data.success && data.data?.chapters) {
          setAvailableChapters(data.data.chapters);
        }
      } catch (err) {
        console.error("Failed to fetch chapters from meta endpoint:", err);
      } finally {
        setLoadingChapters(false);
      }
    };
    fetchChapters();
    setSelectedChapter('All Chapters');
  }, [selectedClass, selectedSubject]);

  const handleBegin = () => {
    const params = new URLSearchParams({
      class:      selectedClass,
      subject:    selectedSubject,
      difficulty,
      mode,
    });
    if (selectedChapter !== 'All Chapters') {
      params.append('chapter', selectedChapter);
    }
    router.push(`/quiz?${params.toString()}`);
  };

  return (
    <div className="min-h-screen text-slate-100" style={{ background: '#0B0F19', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 pt-10 pb-24">
        <motion.div variants={pageVariants} initial="hidden" animate="visible" className="space-y-10">

          {/* ── Page header ── */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3"
              style={{
                background: '#1E293B',
                border: '2px solid #FFFFFF',
                boxShadow: '3px 3px 0 #FFFFFF',
              }}
            >
              <span
                className="text-xs font-black text-teal-400"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {selectedClass}
              </span>
              <span style={{ color: '#94A3B8' }}>•</span>
              <span
                className="text-xs font-black text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {selectedSubject}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-black text-white"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Configure Your Quiz
            </motion.h1>
            <p className="text-sm font-semibold mt-1 text-slate-400">
              Tailor difficulty, NCERT chapter, and mode before you begin.
            </p>
          </div>

          {/* ── Difficulty selection ── */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionLabel step="1" label="Select Difficulty" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {difficulties.map((d) => {
                const isSelected = difficulty === d.key;
                return (
                  <motion.button
                    key={d.key}
                    id={`difficulty-${d.key.toLowerCase().replace(/\s+/g, '-')}`}
                    variants={itemVariants}
                    onClick={() => setDifficulty(d.key)}
                    className="p-4 rounded-2xl text-left flex flex-col gap-1 transition-all"
                    style={{
                      background: isSelected ? d.bg : '#1E293B',
                      border: isSelected ? `2.5px solid ${d.border}` : '2px solid #FFFFFF',
                      boxShadow: isSelected ? '4px 4px 0 #FFFFFF' : '2px 2px 0 #FFFFFF',
                      transform: isSelected ? 'translate(-2px, -2px)' : 'none',
                    }}
                    aria-pressed={isSelected}
                    aria-label={`Select ${d.label} difficulty`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl">{d.emoji}</span>
                      <span
                        className="text-xs font-black px-2 py-0.5 rounded-full"
                        style={{
                          background: '#0F172A',
                          color: d.color,
                          border: '1px solid #FFFFFF',
                        }}
                      >
                        {d.count} Qs
                      </span>
                    </div>

                    <span
                      className="text-base font-black"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: isSelected ? d.color : '#FFFFFF',
                      }}
                    >
                      {d.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {d.desc}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.section>

          {/* ── NCERT Sequential Chapter Selection ── */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionLabel step="2" label="Select Chapter" />
            
            {loadingChapters ? (
              <div className="p-6 text-center text-xs font-bold text-slate-400">
                Loading NCERT chapters for {selectedClass} {selectedSubject}...
              </div>
            ) : availableChapters.length === 0 ? (
              <div className="p-4 rounded-xl text-xs font-bold text-center bg-slate-800 border-2 border-white text-slate-200">
                All questions in this subject will be included in the quiz.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-80 overflow-y-auto p-1 scroll-strip">
                {['All Chapters', ...availableChapters].map((chap) => {
                  const isSelected = selectedChapter === chap;
                  return (
                    <motion.button
                      key={chap}
                      variants={itemVariants}
                      onClick={() => setSelectedChapter(chap)}
                      className="px-4 py-3 rounded-xl text-xs font-black text-left flex items-center justify-between transition-all"
                      style={{
                        background: isSelected ? '#0D9488' : '#1E293B',
                        color: '#FFFFFF',
                        border: isSelected ? '2px solid #5EEAD4' : '2px solid #FFFFFF',
                        boxShadow: isSelected ? '3px 3px 0 #FFFFFF' : '2px 2px 0 #FFFFFF',
                        transform: isSelected ? 'translate(-1px, -1px)' : 'none',
                      }}
                    >
                      <span className="truncate pr-2" title={chap}>{chap}</span>
                      {isSelected && <span className="flex-shrink-0 text-sm text-teal-200">✓</span>}
                    </motion.button>
                  );
                })}
              </div>
            )}
          </motion.section>

          {/* ── Quiz Mode Selection ── */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionLabel step="3" label="Select Quiz Mode" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modes.map((m) => {
                const isSelected = mode === m.key;
                return (
                  <motion.button
                    key={m.key}
                    id={`mode-${m.key}`}
                    variants={itemVariants}
                    onClick={() => setMode(m.key)}
                    className="p-5 rounded-2xl text-left transition-all"
                    style={{
                      background: isSelected ? m.bg : '#1E293B',
                      border: '3px solid #FFFFFF',
                      boxShadow: isSelected ? '5px 5px 0 #FFFFFF' : '3px 3px 0 #FFFFFF',
                      transform: isSelected ? 'translate(-2px, -2px)' : 'none',
                    }}
                    aria-pressed={isSelected}
                    aria-label={`Select ${m.label}`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                        style={{
                          background: m.badgeBg,
                          border: '2px solid #FFFFFF',
                          boxShadow: '2px 2px 0 #FFFFFF',
                        }}
                      >
                        {m.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-base font-black mb-0.5 text-white"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          {m.label}
                        </h3>
                        <p className="text-xs font-semibold text-slate-300">
                          {m.tagline}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-1.5 pl-1">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs font-bold text-slate-300">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: m.color }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                );
              })}
            </div>
          </motion.section>

          {/* ── Summary & Begin Button ── */}
          <div className="p-6 rounded-3xl bg-slate-900 border-3 border-white shadow-[6px_6px_0px_0px_#FFFFFF] flex flex-col items-center gap-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-300">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600">
                Class: <strong className="text-white">{selectedClass}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600">
                Subject: <strong className="text-white">{selectedSubject}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600">
                Chapter: <strong className="text-teal-400">{selectedChapter}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600">
                Difficulty: <strong className="text-amber-400">{difficulty}</strong>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600">
                Mode: <strong className="text-white">{mode === 'practice' ? 'Practice' : 'Exam'}</strong>
              </span>
            </div>

            <button
              id="begin-quiz-btn"
              onClick={handleBegin}
              className="btn-pill btn-teal w-full max-w-md py-4 text-base font-black tracking-wide"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: '4px 4px 0 #FFFFFF',
                borderColor: '#FFFFFF',
              }}
              aria-label="Begin Quiz"
            >
              🚀 Begin Quiz Now
            </button>

            <button
              onClick={() => router.back()}
              className="text-xs font-bold underline transition-all text-slate-400 hover:text-white"
              aria-label="Go back"
            >
              ← Back to selection
            </button>
          </div>

        </motion.div>
      </main>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function ConfigurePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ background: '#0B0F19' }}>
          <div className="w-8 h-8 rounded-full animate-spin border-3 border-white border-t-teal-400" />
        </div>
      }
    >
      <ConfigureContent />
    </Suspense>
  );
}
