'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';

// ─── Subject icon map (inline SVG components) ────────────────────────────────
const SubjectIcons: Record<string, React.ReactNode> = {
  Science: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <defs>
        <linearGradient id="sci-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M18 4v16L8 36a4 4 0 0 0 3.4 6h25.2A4 4 0 0 0 40 36L30 20V4" stroke="url(#sci-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 4h18" stroke="url(#sci-g)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="34" r="2.5" fill="url(#sci-g)" opacity="0.7" />
      <circle cx="28" cy="38" r="1.5" fill="url(#sci-g)" opacity="0.5" />
      <circle cx="33" cy="32" r="2" fill="url(#sci-g)" opacity="0.6" />
    </svg>
  ),
  Mathematics: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <defs>
        <linearGradient id="math-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path d="M12 12h24M24 12v24M12 36l24-24" stroke="url(#math-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  English: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <defs>
        <linearGradient id="eng-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M8 38V10a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4v26a3 3 0 0 0-3-3H10a2 2 0 0 0-2 3z" stroke="url(#eng-g)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M40 38V10a2 2 0 0 0-2-2H26a4 4 0 0 0-4 4v26a3 3 0 0 1 3-3h13a2 2 0 0 1 2 3z" stroke="url(#eng-g)" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  ),
  'Hindi Grammar': (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <defs>
        <linearGradient id="hin-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path d="M12 10h24M16 10v12c0 4 3 7 7 7s7-3 7-7V10M24 29v11M18 40h12" stroke="url(#hin-g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  GK: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <defs>
        <linearGradient id="gk-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="16" stroke="url(#gk-g)" strokeWidth="2.5" />
      <ellipse cx="24" cy="24" rx="7" ry="16" stroke="url(#gk-g)" strokeWidth="2" />
      <path d="M8 24h32" stroke="url(#gk-g)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'Social Studies': (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <defs>
        <linearGradient id="sst-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="18" r="8" stroke="url(#sst-g)" strokeWidth="2.5" />
      <path d="M8 40c0-8 7-12 16-12s16 4 16 12" stroke="url(#sst-g)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
};

// Fallback icon for unknown subjects
const DefaultIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <defs>
      <linearGradient id="def-g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="32" height="32" rx="8" stroke="url(#def-g)" strokeWidth="2.5" />
    <path d="M24 16v8l4 4" stroke="url(#def-g)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Subject accent colours
const subjectAccents: Record<string, { from: string; to: string; glow: string }> = {
  Science:         { from: '#a855f7', to: '#06b6d4', glow: 'rgba(168,85,247,0.3)' },
  Mathematics:     { from: '#f59e0b', to: '#a855f7', glow: 'rgba(245,158,11,0.3)' },
  English:         { from: '#10b981', to: '#06b6d4', glow: 'rgba(16,185,129,0.3)' },
  'Hindi Grammar': { from: '#ec4899', to: '#a855f7', glow: 'rgba(236,72,153,0.3)' },
  GK:              { from: '#06b6d4', to: '#10b981', glow: 'rgba(6,182,212,0.3)'  },
  'Social Studies':{ from: '#f59e0b', to: '#10b981', glow: 'rgba(245,158,11,0.25)'},
};

const defaultAccent = { from: '#a855f7', to: '#06b6d4', glow: 'rgba(168,85,247,0.3)' };

// ─── Framer Motion variants ───────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
};

const classVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.08, type: 'spring' as const, stiffness: 300, damping: 24 },
  }),
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface MetaData {
  classes: string[];
  subjects: string[];
}

interface QuestionCount {
  [key: string]: number;
}

// ─── Subject Card ─────────────────────────────────────────────────────────────
function SubjectCard({
  subject,
  selectedClass,
  questionCount,
  onConfigure,
}: {
  subject: string;
  selectedClass: string;
  questionCount: number;
  onConfigure: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const accent = subjectAccents[subject] ?? defaultAccent;
  const Icon = SubjectIcons[subject] ?? <DefaultIcon />;

  return (
    <motion.div
      variants={cardVariants}
      className="relative overflow-hidden rounded-2xl p-5 flex flex-col items-center text-center cursor-pointer group"
      style={{
        background: hovered
          ? `linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))`
          : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? accent.from + '55' : 'rgba(255,255,255,0.09)'}`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: hovered
          ? `0 12px 40px ${accent.glow}, 0 0 0 1px ${accent.from}33`
          : '0 4px 24px rgba(0,0,0,0.35)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow behind icon */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accent.from}22, transparent 70%)`,
          filter: 'blur(16px)',
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.3s',
        }}
      />

      {/* Icon */}
      <div
        className="relative z-10 mb-4 w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${accent.from}22, ${accent.to}22)`,
          border: `1px solid ${accent.from}33`,
          boxShadow: hovered ? `0 0 20px ${accent.glow}` : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        {Icon}
      </div>

      {/* Subject name */}
      <h3
        className="relative z-10 text-base font-bold mb-1 leading-tight"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          color: hovered ? '#f1f0ff' : '#c9c3e0',
          transition: 'color 0.2s',
        }}
      >
        {subject}
      </h3>

      {/* Question count */}
      <p
        className="relative z-10 text-xs mb-5"
        style={{ color: hovered ? accent.from : '#6b607e', transition: 'color 0.2s' }}
      >
        {questionCount > 0 ? `${questionCount} Questions` : 'Loading...'}
      </p>

      {/* Configure button */}
      <button
        id={`configure-${subject.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={(e) => { e.stopPropagation(); onConfigure(); }}
        className="relative z-10 w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
        style={{
          background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
          boxShadow: hovered ? `0 0 20px ${accent.glow}` : 'none',
          opacity: hovered ? 1 : 0.85,
          transition: 'all 0.3s',
        }}
        aria-label={`Configure quiz for ${subject}`}
      >
        Configure Quiz
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SelectPage() {
  const router = useRouter();
  const [meta, setMeta] = useState<MetaData>({ classes: [], subjects: [] });
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [questionCounts, setQuestionCounts] = useState<QuestionCount>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch meta data
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const res = await fetch('/api/meta');
        const data = await res.json();
        if (data.success) {
          setMeta(data.data);
          if (data.data.classes.length > 0) {
            setSelectedClass(data.data.classes[0]);
          }
        } else {
          setError('Failed to load subjects. Please try again.');
        }
      } catch {
        setError('Network error. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };
    fetchMeta();
  }, []);

  // Fetch question counts when class changes
  useEffect(() => {
    if (!selectedClass || meta.subjects.length === 0) return;

    const fetchCounts = async () => {
      const counts: QuestionCount = {};
      await Promise.all(
        meta.subjects.map(async (subject) => {
          try {
            const res = await fetch(
              `/api/questions?class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(subject)}&limit=1000`
            );
            const data = await res.json();
            counts[subject] = data.success ? data.data.length : 0;
          } catch {
            counts[subject] = 0;
          }
        })
      );
      setQuestionCounts(counts);
    };

    fetchCounts();
  }, [selectedClass, meta.subjects]);

  const handleConfigure = (subject: string) => {
    const params = new URLSearchParams({
      class: selectedClass,
      subject,
    });
    router.push(`/configure?${params.toString()}`);
  };

  return (
    <div className="relative min-h-screen" style={{ background: '#FAF7F2' }}>
      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20">

        {/* ── Page header ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--text-muted)', letterSpacing: '0.2em' }}
          >
            Step 1 of 3
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(135deg, #c084fc 0%, #67e8f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Select Your Class
          </h1>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Choose a class, then pick your subject to start practising.
          </p>
        </motion.div>

        {/* ── Class toggle ── */}
        {loading ? (
          <div className="flex justify-center mb-10">
            <ClassSkeleton />
          </div>
        ) : error ? (
          <ErrorBanner message={error} />
        ) : (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {meta.classes.map((cls, i) => (
              <motion.button
                key={cls}
                id={`class-btn-${cls.replace(/\s+/g, '-').toLowerCase()}`}
                custom={i}
                variants={classVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setSelectedClass(cls)}
                className="relative px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden"
                style={{
                  background: selectedClass === cls
                    ? 'linear-gradient(135deg, #7c3aed, #06b6d4)'
                    : 'rgba(255,255,255,0.05)',
                  border: selectedClass === cls
                    ? '1px solid rgba(168,85,247,0.6)'
                    : '1px solid rgba(255,255,255,0.1)',
                  color: selectedClass === cls ? '#fff' : 'var(--text-secondary)',
                  boxShadow: selectedClass === cls
                    ? '0 0 24px rgba(124,58,237,0.5), 0 0 48px rgba(6,182,212,0.2)'
                    : 'none',
                  transform: selectedClass === cls ? 'scale(1.05)' : 'scale(1)',
                }}
                aria-pressed={selectedClass === cls}
                aria-label={`Select ${cls}`}
              >
                {selectedClass === cls && (
                  <motion.span
                    layoutId="class-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #7c3aed33, #06b6d433)' }}
                  />
                )}
                <span className="relative z-10">{cls}</span>
              </motion.button>
            ))}
          </div>
        )}

        {/* ── Subject heading ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedClass}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
            >
              Choose a Subject
              {selectedClass && (
                <span
                  className="ml-2 text-lg font-normal"
                  style={{ color: 'var(--text-muted)' }}
                >
                  — {selectedClass}
                </span>
              )}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* ── Subject cards grid ── */}
        {loading ? (
          <SubjectSkeleton />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedClass}
              className="grid grid-cols-2 md:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {meta.subjects.map((subject) => (
                <SubjectCard
                  key={subject}
                  subject={subject}
                  selectedClass={selectedClass}
                  questionCount={questionCounts[subject] ?? 0}
                  onConfigure={() => handleConfigure(subject)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* ── Back link ── */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => router.push('/')}
            className="text-sm transition-all duration-200 hover:opacity-100 flex items-center gap-2 mx-auto"
            style={{ color: 'var(--text-muted)', opacity: 0.7 }}
            aria-label="Back to home"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </motion.div>
      </main>
    </div>
  );
}

// ─── Skeleton loaders ─────────────────────────────────────────────────────────
function ClassSkeleton() {
  return (
    <div className="flex gap-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-28 h-11 rounded-full animate-pulse"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />
      ))}
    </div>
  );
}

function SubjectSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="rounded-2xl p-5 flex flex-col items-center gap-3 animate-pulse"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            height: '220px',
          }}
        >
          <div className="w-16 h-16 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="w-20 h-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="w-14 h-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)' }} />
          <div className="w-full h-9 rounded-xl mt-auto" style={{ background: 'rgba(255,255,255,0.06)' }} />
        </div>
      ))}
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div
      className="text-center py-6 px-8 rounded-2xl mb-10"
      style={{
        background: 'rgba(239,68,68,0.08)',
        border: '1px solid rgba(239,68,68,0.25)',
      }}
    >
      <p className="text-sm" style={{ color: '#f87171' }}>⚠ {message}</p>
    </div>
  );
}
