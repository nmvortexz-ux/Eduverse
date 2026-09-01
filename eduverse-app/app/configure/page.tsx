'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

// --- Inline SVGs (Bypassing lucide-react exports) ---
const Check = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const ArrowRight = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const CheckCircle2 = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;
const ShieldCheck = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.94 0 5.06 1.11 7 2a1 1 0 0 1 1 1v7z"/><path d="m9 12 2 2 4-4"/></svg>;
const Timer = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>;

// --- Types ---
type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Mixed';
type Mode = 'practice' | 'exam';

// --- Data ---
const difficulties: {
  key: Difficulty;
  label: string;
  dotColor: string;
  count: number | string;
  desc: string;
}[] = [
  {
    key: 'Easy',
    label: 'Easy',
    dotColor: 'bg-emerald-500',
    count: 50,
    desc: 'Foundational concepts',
  },
  {
    key: 'Medium',
    label: 'Medium',
    dotColor: 'bg-amber-500',
    count: 50,
    desc: 'Applied understanding',
  },
  {
    key: 'Hard',
    label: 'Hard',
    dotColor: 'bg-orange-500',
    count: 50,
    desc: 'Deep problem solving',
  },
  {
    key: 'Very Hard',
    label: 'Very Hard',
    dotColor: 'bg-rose-500',
    count: 50,
    desc: 'Advanced analytical mastery',
  },
  {
    key: 'Mixed',
    label: 'Mixed',
    dotColor: 'bg-indigo-500',
    count: '∞',
    desc: 'Balanced cross-difficulty pool',
  },
];

const modes: {
  key: Mode;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  bullets: string[];
}[] = [
  {
    key: 'practice',
    label: 'Practice Mode',
    tagline: 'Learn at your own pace',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    bullets: ['No timer pressure', 'Instant answer explanations', 'Bookmark questions', 'Retake failed questions'],
  },
  {
    key: 'exam',
    label: 'Exam Mode',
    tagline: 'Simulate real test conditions',
    icon: <Timer className="w-5 h-5 text-sky-500" />,
    bullets: ['Countdown timer running', 'No hints or explanations', 'Leaderboard submission', 'Results revealed at end'],
  },
];

// --- Framer variants ---
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

// --- Main component ---
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
    <div className="min-h-screen text-slate-100 bg-[#0B0F19] font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 pt-10 pb-24">
        <motion.div variants={pageVariants} initial="hidden" animate="visible" className="space-y-12">

          {/* Page header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              <span>{selectedClass}</span>
              <span className="text-slate-500">•</span>
              <span>{selectedSubject}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
            >
              Configure Your Assessment
            </motion.h1>
            <p className="text-sm text-slate-400">
              Tailor difficulty, NCERT chapter, and mode before you begin.
            </p>
          </div>

          {/* Difficulty selection */}
          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs text-slate-300">1</span>
              Select Difficulty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {difficulties.map((d) => {
                const isSelected = difficulty === d.key;
                return (
                  <motion.button
                    key={d.key}
                    variants={itemVariants}
                    onClick={() => setDifficulty(d.key)}
                    className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                      isSelected 
                        ? 'border-emerald-500/80 bg-emerald-500/5 ring-1 ring-emerald-500/50' 
                        : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${d.dotColor}`} />
                        <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {d.label}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 font-mono">
                        {d.count} Qs
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 block mt-1">
                      {d.desc}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.section>

          {/* Chapter Selection */}
          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs text-slate-300">2</span>
              Select Chapter
            </h2>
            
            {loadingChapters ? (
              <div className="p-6 text-center text-sm text-slate-400 bg-slate-900/20 rounded-xl border border-slate-800/50">
                Loading NCERT chapters for {selectedClass} {selectedSubject}...
              </div>
            ) : availableChapters.length === 0 ? (
              <div className="p-6 rounded-xl text-sm text-center bg-slate-800/50 border border-slate-700 text-slate-300">
                All questions in this subject will be included in the assessment.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                {['All Chapters', ...availableChapters].map((chap) => {
                  const isSelected = selectedChapter === chap;
                  return (
                    <motion.button
                      key={chap}
                      variants={itemVariants}
                      onClick={() => setSelectedChapter(chap)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all text-left flex items-center justify-between border ${
                        isSelected 
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 ring-1 ring-emerald-500/40' 
                          : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span className="truncate pr-2" title={chap}>{chap}</span>
                      {isSelected && <Check className="w-4 h-4 shrink-0 text-emerald-400" />}
                    </motion.button>
                  );
                })}
              </div>
            )}
          </motion.section>

          {/* Quiz Mode Selection */}
          <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs text-slate-300">3</span>
              Select Assessment Mode
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modes.map((m) => {
                const isSelected = mode === m.key;
                return (
                  <motion.button
                    key={m.key}
                    variants={itemVariants}
                    onClick={() => setMode(m.key)}
                    className={`p-5 rounded-xl text-left transition-all border ${
                      isSelected 
                        ? m.key === 'practice' 
                          ? 'border-emerald-500 bg-emerald-500/5 ring-1 ring-emerald-500/50' 
                          : 'border-sky-500 bg-sky-500/5 ring-1 ring-sky-500/50'
                        : 'border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                        isSelected 
                          ? m.key === 'practice' 
                            ? 'bg-emerald-900/30 border-emerald-500/30' 
                            : 'bg-sky-900/30 border-sky-500/30'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}>
                        {m.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {m.label}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {m.tagline}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${isSelected ? (m.key === 'practice' ? 'text-emerald-400' : 'text-sky-400') : 'text-slate-600'}`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                );
              })}
            </div>
          </motion.section>

          {/* Summary & Begin Button */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col items-center gap-6 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300">
                Class: <strong className="text-slate-100 font-medium">{selectedClass}</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300">
                Subject: <strong className="text-slate-100 font-medium">{selectedSubject}</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300">
                Chapter: <strong className="text-slate-100 font-medium">{selectedChapter}</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300">
                Difficulty: <strong className="text-slate-100 font-medium">{difficulty}</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300">
                Mode: <strong className="text-slate-100 font-medium">{mode === 'practice' ? 'Practice' : 'Exam'}</strong>
              </span>
            </div>

            <button
              onClick={handleBegin}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 px-8 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => router.back()}
              className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 min-h-[44px] py-3 px-4"
            >
              &larr; Back to Subject Selection
            </button>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}

// --- Export ---
export default function ConfigurePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
          <div className="w-8 h-8 rounded-full animate-spin border-t-2 border-emerald-500" />
        </div>
      }
    >
      <ConfigureContent />
    </Suspense>
  );
}
