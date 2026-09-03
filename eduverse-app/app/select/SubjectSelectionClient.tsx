'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
  ChevronRight,
  ChevronDown,
  Layers,
  GraduationCap,
  Zap,
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
    description: string;
  }
> = {
  Physics: {
    icon: Atom,
    description: 'Mechanics, Thermodynamics, Optics, Electrodynamics & Modern Physics.',
  },
  Chemistry: {
    icon: FlaskConical,
    description: 'Organic, Inorganic & Physical Chemistry.',
  },
  Biology: {
    icon: Zap,
    description: 'Botany, Zoology, Genetics & Ecology.',
  },
  'Hindi Core': {
    icon: Languages,
    description: 'Aroh, Vitan — prose, poetry & comprehension.',
  },
  'Information Technology': {
    icon: Code,
    description: 'Python, SQL, Data Structures, Networking & Cyber Security.',
  },
  Accountancy: {
    icon: Scale,
    description: 'Journal entries, ledgers, trial balance, partnership deeds & company accounts.',
  },
  'Business Studies': {
    icon: Briefcase,
    description: 'Principles of management, marketing, financial planning & organizational structures.',
  },
  Economics: {
    icon: TrendingUp,
    description: 'Microeconomics, Macroeconomics, Indian Economic Development & GDP analytics.',
  },
  English: {
    icon: BookOpen,
    description: 'Reading comprehension, literary analysis, grammar rules & vocabulary.',
  },
  GK: {
    icon: Globe2,
    description: 'Current affairs, world geography, historical milestones & scientific discoveries.',
  },
  Science: {
    icon: FlaskConical,
    description: 'Physics, Chemistry & Biology NCERT curriculum modules.',
  },
  'Hindi Grammar': {
    icon: Languages,
    description: 'Vyakaran, sandhi, samas, muhavare & Hindi prose conceptual clarity.',
  },
  'Social Studies': {
    icon: Landmark,
    description: 'History, Civics & Geography NCERT curriculum.',
  },
  Mathematics: {
    icon: Calculator,
    description: 'Arithmetic, geometry, algebra, and advanced calculus modules.',
  }
};

const DEFAULT_SUBJECT_STYLE = {
  icon: GraduationCap,
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

  useEffect(() => {
    if (defaultSelectedClass && classesData.some((c) => c.name === defaultSelectedClass)) {
      setSelectedClass(defaultSelectedClass);
    }
  }, [defaultSelectedClass, classesData]);

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

  const streamButtons: { key: StreamFilter; label: string }[] = [
    { key: 'All', label: 'All Subjects' },
    { key: 'Science', label: 'Science' },
    { key: 'Commerce', label: 'Commerce' },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#0b1329]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d40_1px,transparent_1px),linear-gradient(to_bottom,#1f293d40_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-slate-900/50 to-transparent" />
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-10">

        {/* Hero Header */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-300 text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            NCERT Curriculum &bull; Class 6 to 12
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Academic Assessment Portal
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Select your class grade below to access structured NCERT question banks, analyze your chapter-wise proficiency, and begin guided practice modules.
          </p>
        </section>

        {/* Class Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/50 border border-slate-800 overflow-x-auto max-w-full">
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
                  className={`relative text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? 'text-slate-100 bg-slate-800 border-slate-700 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border-transparent'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <span>{cls.name}</span>
                  {cls.totalQuestions > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded flex items-center justify-center font-mono font-medium ${
                        isSelected ? 'bg-slate-700 text-slate-300' : 'bg-slate-800/50 text-slate-500'
                      }`}
                    >
                      {cls.totalQuestions.toLocaleString()}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grade Banner + Stream Filter Pills */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-slate-100 tracking-tight">{selectedClass} Subjects</h2>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50 font-medium">
                    {visibleSubjects.length} Subjects
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentClassData.totalQuestions > 0
                    ? `${currentClassData.totalQuestions.toLocaleString()} active questions across verified chapters.`
                    : 'Curriculum modules ready for self-assessment.'}
                </p>
              </div>
            </div>

            <Link
              href="/configure"
              className="text-xs font-semibold text-slate-300 hover:text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              Advanced Practice Configurator
              <ChevronRight className="w-3.5 h-3.5" />
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
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 border-slate-200'
                        : 'bg-slate-900/40 border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
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
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-colors duration-300"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="text-right flex flex-col items-end">
                      <span className="text-xs text-slate-400 font-mono">
                        {subject.count > 0 ? `${subject.count.toLocaleString()} Questions` : 'Active'}
                      </span>
                      {hasChapters && (
                        <span className="text-[10px] text-slate-500 font-medium">
                          {subject.chapters.length} Chapters
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 tracking-tight">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {style.description}
                    </p>
                  </div>

                  {/* Chapter Selector */}
                  {hasChapters && (
                    <div className="pt-2 space-y-1.5">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          Select Topic
                        </span>
                        {selectedChapter !== 'All Chapters' && (
                          <button
                            onClick={() => handleSelectChapter(subject.name, 'All Chapters')}
                            className="text-[10px] text-slate-400 hover:text-slate-200 lowercase transition-colors"
                          >
                            reset
                          </button>
                        )}
                      </label>

                      <div className="relative">
                        <select
                          value={selectedChapter}
                          onChange={(e) => handleSelectChapter(subject.name, e.target.value)}
                          className="w-full appearance-none bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-lg px-3 py-3 text-xs text-slate-300 font-medium focus:ring-1 focus:ring-slate-600 focus:border-slate-600 focus:outline-none pr-8 cursor-pointer truncate transition-colors min-h-[44px]"
                        >
                          <option value="All Chapters">
                            All Chapters ({subject.count} Questions)
                          </option>
                          {subject.chapters.map((ch) => (
                            <option key={ch.name} value={ch.name}>
                              {ch.name} ({ch.count} Qs)
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center">
                  <button
                    onClick={() => handleStartQuiz(subject.name)}
                    className="w-full py-3 min-h-[44px] px-4 rounded-xl font-semibold text-sm text-slate-900 bg-slate-100 hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Start Practice</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>

      </main>
    </div>
  );
}
