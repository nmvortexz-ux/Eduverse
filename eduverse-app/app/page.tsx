'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Inline SVG Icons ────────────────────────────────────────────────────────
function IconFlask({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v6l-4 8h14l-4-8V3" /><line x1="8" x2="16" y1="3" y2="3" /><circle cx="12" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}
function IconCalculator({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="8" x2="8.01" y1="10" y2="10" /><line x1="12" x2="12.01" y1="10" y2="10" /><line x1="16" x2="16.01" y1="10" y2="10" /><line x1="8" x2="8.01" y1="14" y2="14" /><line x1="12" x2="12.01" y1="14" y2="14" /><line x1="16" x2="16.01" y1="14" y2="14" /><line x1="8" x2="8.01" y1="18" y2="18" /><line x1="12" x2="16" y1="18" y2="18" />
    </svg>
  );
}
function IconBookOpen({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function IconLanguages({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
    </svg>
  );
}
function IconGlobe({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  );
}
function IconLandmark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" x2="21" y1="22" y2="22" /><line x1="6" x2="6" y1="18" y2="11" /><line x1="10" x2="10" y1="18" y2="11" /><line x1="14" x2="14" y1="18" y2="11" /><line x1="18" x2="18" y1="18" y2="11" /><polygon points="12 2 20 7 4 7" />
    </svg>
  );
}
function IconLedger({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" /><line x1="8" x2="8" y1="7" y2="17" /><line x1="16" x2="16" y1="7" y2="17" /><line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
function IconBriefcase({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
function IconTrendingUp({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
function IconBarChart({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
function IconTrophy({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
function IconArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// ─── Class Toggle Options ──────────────────────────────────────────────────────
const classes = ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

// ─── Subject card data with accent colors and icon components ─────────────────
const defaultSubjects = [
  { id: 'science',  label: 'Science',       accent: '#10B981', icon: <IconFlask /> },
  { id: 'math',     label: 'Mathematics',   accent: '#F43F5E', icon: <IconCalculator /> },
  { id: 'english',  label: 'English',       accent: '#F59E0B', icon: <IconBookOpen /> },
  { id: 'hindi',    label: 'Hindi Grammar', accent: '#A855F7', icon: <IconLanguages /> },
  { id: 'gk',       label: 'GK',            accent: '#3B82F6', icon: <IconGlobe /> },
  { id: 'social',   label: 'Social Studies',accent: '#14B8A6', icon: <IconLandmark /> },
];

const commerceSubjects = [
  { id: 'accountancy', label: 'Accountancy',      accent: '#3B82F6', icon: <IconLedger /> },
  { id: 'business',    label: 'Business Studies',  accent: '#F97316', icon: <IconBriefcase /> },
  { id: 'economics',   label: 'Economics',         accent: '#10B981', icon: <IconTrendingUp /> },
  { id: 'english',     label: 'English',           accent: '#F59E0B', icon: <IconBookOpen /> },
  { id: 'gk',          label: 'GK',                accent: '#A855F7', icon: <IconGlobe /> },
];

export default function HomePage() {
  const [selectedClass, setSelectedClass] = useState('Class 9');

  // Live stats from DB
  const [platformStats, setPlatformStats] = useState<{
    totalClasses: number;
    totalSubjects: number;
    totalQuestions: number;
  } | null>(null);

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then((json) => {
        if (json.success) setPlatformStats(json.data);
      })
      .catch(() => {});
  }, []);

  const isCommerceClass = selectedClass === 'Class 11' || selectedClass === 'Class 12';
  const activeSubjects = isCommerceClass ? commerceSubjects : defaultSubjects;

  return (
    <div className="min-h-screen text-slate-100 bg-[#0b1329]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">

        {/* ── Modern Professional Hero Section ── */}
        <section className="rounded-2xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl shadow-emerald-900/10">
          
          {/* Header Pill */}
          <div className="inline-flex items-center justify-center">
            <span className="px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#00df9a] border border-[#00df9a]/30 bg-[#00df9a]/5">
              OVER {platformStats ? platformStats.totalQuestions.toLocaleString() : '8,800'}+ CURATED QUESTIONS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-100 max-w-4xl mx-auto tracking-tight">
            The Intelligent Assessment Engine for Class 8–12 Commerce
          </h1>

          <p className="text-sm sm:text-base font-medium text-slate-400 max-w-3xl mx-auto leading-relaxed">
            EduVerse goes beyond standard quizzes. Master your NCERT syllabus through AI-powered doubt solving, gamified chapter boss fights, and real-time performance analytics designed to make learning highly effective and engaging.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            {['NCERT Aligned', 'AI-Powered Solutions', 'Interactive Boss Fights', 'Detailed Analytics'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-6">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-300 tracking-wider uppercase">{feature}</span>
                {i !== 3 && <span className="text-slate-700 font-bold">&middot;</span>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Class Selection & Subject Cards Grid ── */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white tracking-tight">Select Your Subject</h2>
                {isCommerceClass && (
                  <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                    Commerce Stream
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-slate-500 mt-1">
                Click any subject card to configure &amp; start your quiz immediately.
              </p>
            </div>

            {/* Class Toggle Pills */}
            <div className="flex items-center gap-1.5 flex-wrap bg-slate-900/80 p-1 rounded-xl border border-slate-800/50">
              {classes.map((cls) => {
                const isSelected = selectedClass === cls;
                return (
                  <button
                    key={cls}
                    id={`class-toggle-${cls.replace(' ', '-').toLowerCase()}`}
                    onClick={() => setSelectedClass(cls)}
                    className={`text-xs font-semibold py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/30'
                        : 'bg-transparent text-slate-400 border border-transparent hover:bg-slate-800 hover:text-slate-200'
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`Filter by ${cls}`}
                  >
                    {cls}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {activeSubjects.map((s) => (
              <Link
                key={s.id}
                href={`/configure?class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(s.label)}`}
                id={`subject-card-${s.id}`}
                className="rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-600 bg-slate-900/60 backdrop-blur-sm border border-slate-800 group relative overflow-hidden"
                aria-label={`Practice ${s.label} for ${selectedClass}`}
              >
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: s.accent }} />
                
                {/* Subtle radial glow on hover */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: s.accent }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative z-10"
                  style={{ background: `${s.accent}10`, color: s.accent, border: `1px solid ${s.accent}25` }}
                >
                  {s.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-slate-100 leading-tight tracking-tight">
                    {s.label}
                  </h3>
                  <p className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-widest">
                    {selectedClass}
                  </p>
                </div>
                <span
                  className="relative z-10 text-xs font-semibold py-2 px-5 rounded-lg border border-slate-700 text-slate-400 transition-all duration-300 group-hover:text-white group-hover:border-slate-500 group-hover:bg-white/5 inline-flex items-center gap-1.5"
                >
                  Start Quiz
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/dashboard"
            className="rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-600 bg-slate-900/60 border border-slate-800 group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
              <IconBarChart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Student Dashboard
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Track accuracy, view XP progress, and retake previous attempts.
              </p>
            </div>
          </Link>

          <Link
            href="/leaderboard"
            className="rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-600 bg-slate-900/60 border border-slate-800 group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
              <IconTrophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Hall of Fame Leaderboard
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Compete with classmates and earn achievement badges.
              </p>
            </div>
          </Link>
        </section>

      </main>

      {/* ── Reusable Multi-Column Footer ── */}
      <Footer />
    </div>
  );
}
