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

export default function HomePage() {
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
            The Intelligent Assessment Engine for Class 6–12
          </h1>

          <p className="text-sm sm:text-base font-medium text-slate-400 max-w-3xl mx-auto leading-relaxed">
            EduVerse goes beyond standard quizzes. Master your NCERT syllabus through structured assessments, chapter-wise practice modules, and real-time performance analytics designed to make learning highly effective.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            {['NCERT Aligned', 'AI-Powered Solutions', 'Adaptive Difficulty', 'Detailed Analytics'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-6">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-300 tracking-wider uppercase">{feature}</span>
                {i !== 3 && <span className="text-slate-700 font-bold">&middot;</span>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Main Assessment CTA Banner ── */}
        <section className="py-6 sm:py-8">
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Subtle emerald top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[540px] h-48 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Header Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-emerald-400 shadow-inner">
                <IconBarChart className="w-7 h-7" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Ready to start practicing?
                </h2>
                <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                  Access structured curriculum assessments for Classes 6 to 12. Complete with subject filtering, chapter selection, difficulty breakdowns, and instant explanations.
                </p>
              </div>

              {/* Primary Action Button */}
              <Link
                href="/select"
                className="group mt-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 active:scale-95 inline-flex items-center gap-2.5 text-base cursor-pointer"
              >
                <span>Start Assessment</span>
                <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Quick Jump Fast-Track Links */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Quick Jump:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {[
                    { label: 'Class 9', query: 'Class 9' },
                    { label: 'Class 10', query: 'Class 10' },
                    { label: 'Class 11', query: 'Class 11' },
                    { label: 'Class 12', query: 'Class 12' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={`/select?class=${encodeURIComponent(item.query)}`}
                      className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-600 transition-all cursor-pointer shadow-xs"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
