'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import {
  FlaskConical,
  Calculator,
  BookOpen,
  Languages,
  Globe2,
  Landmark,
  Scale,
  Briefcase,
  TrendingUp,
  Swords,
  Play,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Layers,
  GraduationCap,
  Zap,
  Target,
  Atom,
  Code,
} from 'lucide-react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ChapterInfo {
  name: string;
  count: number;
  easy: number;
  medium: number;
  hard: number;
}

export interface SubjectInfo {
  name: string;
  count: number;
  chapters: ChapterInfo[];
}

export interface ClassData {
  name: string;
  totalQuestions: number;
  subjects: SubjectInfo[];
}

export interface SubjectSelectionClientProps {
  classesData: ClassData[];
  defaultSelectedClass?: string;
}

// ─── Stream Classification ────────────────────────────────────────────────────

const SCIENCE_SUBJECTS = new Set([
  'Physics', 'Chemistry', 'Biology', 'Mathematics',
  'Hindi Core', 'Information Technology', 'Science',
]);
const COMMERCE_SUBJECTS = new Set([
  'Accountancy', 'Business Studies', 'Economics',
  'English', 'GK', 'Hindi Grammar', 'Social Studies',
]);

type StreamFilter = 'All' | 'Science' | 'Commerce';

// ─── Subject Styling Configuration ───────────────────────────────────────────

const SUBJECT_CONFIG: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    accent: string;
    glow: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    description: string;
  }
> = {
  // ── Senior Secondary — Science Stream ──
  Physics: {
    icon: Atom,
    accent: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.25)',
    badgeBg: 'bg-blue-500/10',
    badgeBorder: 'border-blue-500/30',
    badgeText: 'text-blue-400',
    description: 'Mechanics, Thermodynamics, Optics, Electrodynamics & Modern Physics.',
  },
  Chemistry: {
    icon: FlaskConical,
    accent: '#10B981',
    glow: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-400',
    description: 'Organic, Inorganic & Physical Chemistry with lab practicals.',
  },
  Biology: {
    icon: Zap,
    accent: '#22C55E',
    glow: 'rgba(34, 197, 94, 0.25)',
    badgeBg: 'bg-green-500/10',
    badgeBorder: 'border-green-500/30',
    badgeText: 'text-green-400',
    description: 'Botany, Zoology, Genetics, Evolution & Ecology.',
  },
  Mathematics: {
    icon: Calculator,
    accent: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.25)',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-400',
    description: 'Calculus, Algebra, Vectors, Probability & Statistics.',
  },
  'Hindi Core': {
    icon: Languages,
    accent: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.25)',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-400',
    description: 'Aroh, Vitan — prose, poetry & comprehension.',
  },
  'Information Technology': {
    icon: Code,
    accent: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.25)',
    badgeBg: 'bg-cyan-500/10',
    badgeBorder: 'border-cyan-500/30',
    badgeText: 'text-cyan-400',
    description: 'Python, SQL, Data Structures, Networking & Cyber Security.',
  },
  // ── Senior Secondary — Commerce Stream ──
  Accountancy: {
    icon: Scale,
    accent: '#6366F1',
    glow: 'rgba(99, 102, 241, 0.25)',
    badgeBg: 'bg-indigo-500/10',
    badgeBorder: 'border-indigo-500/30',
    badgeText: 'text-indigo-400',
    description: 'Journal entries, ledgers, trial balance, partnership deeds & company accounts.',
  },
  'Business Studies': {
    icon: Briefcase,
    accent: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.25)',
    badgeBg: 'bg-pink-500/10',
    badgeBorder: 'border-pink-500/30',
    badgeText: 'text-pink-400',
    description: 'Principles of management, marketing, financial planning & organizational structures.',
  },
  Economics: {
    icon: TrendingUp,
    accent: '#14B8A6',
    glow: 'rgba(20, 184, 166, 0.25)',
    badgeBg: 'bg-teal-500/10',
    badgeBorder: 'border-teal-500/30',
    badgeText: 'text-teal-400',
    description: 'Microeconomics, Macroeconomics, Indian Economic Development & GDP analytics.',
  },
  English: {
    icon: BookOpen,
    accent: '#EAB308',
    glow: 'rgba(234, 179, 8, 0.25)',
    badgeBg: 'bg-yellow-500/10',
    badgeBorder: 'border-yellow-500/30',
    badgeText: 'text-yellow-400',
    description: 'Reading comprehension, literary analysis, grammar rules & vocabulary.',
  },
  GK: {
    icon: Globe2,
    accent: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.25)',
    badgeBg: 'bg-violet-500/10',
    badgeBorder: 'border-violet-500/30',
    badgeText: 'text-violet-400',
    description: 'Current affairs, world geography, historical milestones & scientific discoveries.',
  },
  // ── Secondary (Class 6–10) ──
  Science: {
    icon: FlaskConical,
    accent: '#10B981',
    glow: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-400',
    description: 'Physics, Chemistry & Biology NCERT mastery with interactive boss challenges.',
  },
  'Hindi Grammar': {
    icon: Languages,
    accent: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.25)',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-400',
    description: 'Vyakaran, sandhi, samas, muhavare & Hindi prose conceptual clarity.',
  },
  'Social Studies': {
    icon: Landmark,
    accent: '#14B8A6',
    glow: 'rgba(20, 184, 166, 0.25)',
    badgeBg: 'bg-teal-500/10',
    badgeBorder: 'border-teal-500/30',
    badgeText: 'text-teal-400',
    description: 'History, Civics & Geography NCERT curriculum walkthroughs and maps.',
  },
};

const DEFAULT_SUBJECT_STYLE = {
  icon: GraduationCap,
  accent: '#A855F7',
  glow: 'rgba(168, 85, 247, 0.25)',
  badgeBg: 'bg-purple-500/10',
  badgeBorder: 'border-purple-500/30',
  badgeText: 'text-purple-400',
  description: 'Curated curriculum concepts and comprehensive self-assessment practice.',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function SubjectSelectionClient({
  classesData,
  defaultSelectedClass = 'Class 7',
}: SubjectSelectionClientProps) {
  const router = useRouter();

  const initialClass = useMemo(() => {
    return classesData.some((c) => c.name === defaultSelectedClass)
      ? defaultSelectedClass
      : classesData[0]?.name || 'Class 7';
  }, [classesData, defaultSelectedClass]);

  const [selectedClass, setSelectedClass] = useState(initialClass);
  const [selectedChapters, setSelectedChapters] = useState<Record<string, string>>({});
  const [streamFilter, setStreamFilter] = useState<StreamFilter>('All');

  const currentClassData = useMemo(
    () =>
      classesData.find((c) => c.name === selectedClass) || {
        name: selectedClass,
        totalQuestions: 0,
        subjects: [],
      },
    [classesData, selectedClass],
  );

  const isSenior = selectedClass === 'Class 11' || selectedClass === 'Class 12';

  // Filter subjects by stream (only meaningful for Class 11/12)
  const visibleSubjects = useMemo(() => {
    if (!isSenior || streamFilter === 'All') return currentClassData.subjects;
    if (streamFilter === 'Science') return currentClassData.subjects.filter((s) => SCIENCE_SUBJECTS.has(s.name));
    if (streamFilter === 'Commerce') return currentClassData.subjects.filter((s) => COMMERCE_SUBJECTS.has(s.name));
    return currentClassData.subjects;
  }, [currentClassData.subjects, isSenior, streamFilter]);

  const getSelectedChapter = (subjectName: string) =>
    selectedChapters[subjectName] || 'All Chapters';

  const handleSelectChapter = (subjectName: string, chapterName: string) =>
    setSelectedChapters((prev) => ({ ...prev, [subjectName]: chapterName }));

  const handleStartQuiz = (subjectName: string) => {
    const chapter = getSelectedChapter(subjectName);
    const params = new URLSearchParams({ class: selectedClass, subject: subjectName });
    if (chapter && chapter !== 'All Chapters') params.append('chapter', chapter);
    router.push(`/configure?${params.toString()}`);
  };

  const handleStartBossFight = (subjectName: string) => {
    const chapter = getSelectedChapter(subjectName);
    const params = new URLSearchParams({ class: selectedClass, subject: subjectName });
    if (chapter && chapter !== 'All Chapters') params.append('chapter', chapter);
    router.push(`/boss-fight?${params.toString()}`);
  };

  const streamButtons: { key: StreamFilter; label: string }[] = [
    { key: 'All', label: 'All Subjects' },
    { key: 'Science', label: '⚗️ Science' },
    { key: 'Commerce', label: '📊 Commerce' },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/3 w-[650px] h-[550px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[25%] right-[-5%] w-[550px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-10">

        {/* Hero Header */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            Curriculum Arena &bull; Class 6 to 12
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-400 tracking-tight leading-tight">
            Choose Your Grade &amp; Arena
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Select your class grade below to explore live NCERT question banks, configure customized practice rounds, or challenge Chapter Boss Fights.
          </p>
        </section>

        {/* Class Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-x-auto max-w-full">
            {classesData.map((cls) => {
              const isSelected = selectedClass === cls.name;
              return (
                <button
                  key={cls.name}
                  id={`class-tab-${cls.name.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => {
                    setSelectedClass(cls.name);
                    setStreamFilter('All');
                  }}
                  className={`relative text-xs sm:text-sm font-bold py-2.5 px-4 sm:px-5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shadow-lg shadow-emerald-950/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <span>{cls.name}</span>
                  {cls.totalQuestions > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                        isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {cls.totalQuestions}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grade Banner + Stream Filter Pills */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white tracking-tight">{selectedClass} Subjects</h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-700/40 font-medium">
                    {visibleSubjects.length} Subjects
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {currentClassData.totalQuestions > 0
                    ? `${currentClassData.totalQuestions.toLocaleString()} active questions across all verified chapters.`
                    : 'Curriculum modules ready for self-assessment.'}
                </p>
              </div>
            </div>

            <Link
              href="/configure"
              className="text-xs font-semibold text-slate-300 hover:text-purple-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
            >
              Custom Quiz Configurator
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
            </Link>
          </div>

          {/* Stream Filter Pills — only for Class 11 & 12 */}
          {isSenior && (
            <div className="flex items-center gap-2 flex-wrap">
              <Layers className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mr-1">Stream</span>
              {streamButtons.map(({ key, label }) => {
                const isActive = streamFilter === key;
                return (
                  <button
                    key={key}
                    onClick={() => setStreamFilter(key)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-inner'
                        : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Subject Cards Grid */}
        <motion.div
          key={`${selectedClass}-${streamFilter}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleSubjects.map((subject) => {
            const style = SUBJECT_CONFIG[subject.name] || DEFAULT_SUBJECT_STYLE;
            const IconComponent = style.icon;
            const selectedChapter = getSelectedChapter(subject.name);
            const hasChapters = subject.chapters && subject.chapters.length > 0;

            return (
              <div
                key={subject.name}
                className="group relative rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-slate-950/50"
              >
                {/* Top Accent Bar */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                  style={{ background: style.accent }}
                />

                {/* Hover Glow */}
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: style.accent }}
                />

                <div className="space-y-4 relative z-10">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-105"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${style.accent}25, rgba(15, 23, 42, 0.9))`,
                        borderColor: `${style.accent}40`,
                        color: style.accent,
                        boxShadow: `0 0 25px ${style.glow}`,
                      }}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono border ${style.badgeBg} ${style.badgeBorder} ${style.badgeText}`}
                      >
                        <Target className="w-3 h-3" />
                        {subject.count > 0 ? `${subject.count} Qs` : 'Active'}
                      </span>
                      {hasChapters && (
                        <span className="block text-[10px] text-slate-500 font-medium mt-1">
                          {subject.chapters.length} Chapters
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-slate-100">
                      {subject.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {style.description}
                    </p>
                  </div>

                  {/* Chapter Selector */}
                  {hasChapters && (
                    <div className="pt-2 space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3 text-purple-400" />
                          Target Chapter
                        </span>
                        {selectedChapter !== 'All Chapters' && (
                          <button
                            onClick={() => handleSelectChapter(subject.name, 'All Chapters')}
                            className="text-[10px] text-purple-400 hover:text-purple-300 lowercase"
                          >
                            reset
                          </button>
                        )}
                      </label>

                      <div className="relative">
                        <select
                          value={selectedChapter}
                          onChange={(e) => handleSelectChapter(subject.name, e.target.value)}
                          className="w-full appearance-none bg-slate-950/80 border border-slate-700/80 hover:border-slate-600 rounded-xl px-3 py-2 text-xs text-slate-200 font-medium focus:ring-1 focus:ring-purple-500 focus:outline-none pr-8 cursor-pointer truncate"
                        >
                          <option value="All Chapters">
                            ⚡ All Chapters ({subject.count} Questions)
                          </option>
                          {subject.chapters.map((ch) => (
                            <option key={ch.name} value={ch.name}>
                              {ch.name} ({ch.count} Qs • 🟢{ch.easy || 0} 🟡{ch.medium || 0} 🔴{ch.hard || 0})
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center gap-2 relative z-10">
                  <button
                    onClick={() => handleStartQuiz(subject.name)}
                    className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-1.5 shadow-md group/btn cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 group-hover/btn:translate-x-0.5 transition-transform" />
                    <span>Start Quiz</span>
                  </button>

                  <button
                    onClick={() => handleStartBossFight(subject.name)}
                    title={`Enter ${subject.name} Boss Fight Arena`}
                    className="py-2.5 px-3.5 rounded-xl font-bold text-xs text-purple-300 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/60 hover:border-purple-600 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-950/20 cursor-pointer"
                  >
                    <Swords className="w-4 h-4 text-purple-400" />
                    <span className="hidden sm:inline">Boss Fight</span>
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Admin Ingestion Portal Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950/30 to-slate-900 border border-purple-900/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Need to ingest more NCERT batches?</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Use the high-speed Admin Ingestion Portal with real-time Prisma batch transactions to seed JSON question files in seconds.
              </p>
            </div>
          </div>
          <Link
            href="/admin"
            className="px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-900/30 transition-all shrink-0 flex items-center gap-2"
          >
            Launch Ingestion Portal
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
