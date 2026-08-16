'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Class Toggle Options ──────────────────────────────────────────────────────
const classes = ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

// ─── Subject cards per class stream (Retro-Pop Vibrant Colors on Dark) ───────────
const defaultSubjects = [
  { id: 'science',  label: 'Science',        emoji: '🔬', bg: '#064E3B', border: '#34D399', textColor: '#A7F3D0', btnBg: '#059669' },
  { id: 'math',     label: 'Mathematics',    emoji: '📐', bg: '#881337', border: '#FB7185', textColor: '#FECDD3', btnBg: '#E11D48' },
  { id: 'english',  label: 'English',        emoji: '📖', bg: '#78350F', border: '#FBBF24', textColor: '#FDE68A', btnBg: '#D97706' },
  { id: 'hindi',    label: 'Hindi Grammar',  emoji: '🅰️', bg: '#581C87', border: '#C084FC', textColor: '#E9D5FF', btnBg: '#9333EA' },
  { id: 'gk',       label: 'GK',             emoji: '🌍', bg: '#0C4A6E', border: '#38BDF8', textColor: '#BAE6FD', btnBg: '#0284C7' },
  { id: 'social',   label: 'Social Studies', emoji: '🏛️', bg: '#064E3B', border: '#34D399', textColor: '#A7F3D0', btnBg: '#059669' },
];

const commerceSubjects = [
  { id: 'accountancy', label: 'Accountancy',      emoji: '📊', bg: '#0C4A6E', border: '#38BDF8', textColor: '#BAE6FD', btnBg: '#0284C7' },
  { id: 'business',    label: 'Business Studies', emoji: '💼', bg: '#7C2D12', border: '#FB923C', textColor: '#FED7AA', btnBg: '#EA580C' },
  { id: 'economics',   label: 'Economics',        emoji: '📈', bg: '#064E3B', border: '#34D399', textColor: '#A7F3D0', btnBg: '#059669' },
  { id: 'english',     label: 'English',          emoji: '📖', bg: '#78350F', border: '#FBBF24', textColor: '#FDE68A', btnBg: '#D97706' },
  { id: 'gk',          label: 'GK',               emoji: '🌍', bg: '#581C87', border: '#C084FC', textColor: '#E9D5FF', btnBg: '#9333EA' },
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

  const totalQuestionsDisplay = platformStats
    ? `${platformStats.totalQuestions.toLocaleString()}+ Questions`
    : '8,880+ Questions';

  return (
    <div className="min-h-screen text-slate-100" style={{ background: '#0B0F19', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">

        {/* ── Dark Retro-Pop Hero Section ── */}
        <section
          className="rounded-3xl p-8 sm:p-12 text-center space-y-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
            border: '3px solid #FFFFFF',
            boxShadow: '6px 6px 0px 0px #FFFFFF',
          }}
        >
          {/* Header Pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white"
            style={{ background: '#0D9488', border: '2px solid #FFFFFF', boxShadow: '2px 2px 0px 0px #FFFFFF' }}
          >
            ✨ {totalQuestionsDisplay} Available
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black leading-tight text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Master NCERT Class 8 to 12 Commerce
          </h1>

          <p className="text-base sm:text-lg font-bold text-slate-300 max-w-xl mx-auto leading-relaxed">
            Select your class &amp; subject below to practice chapter-wise quizzes with step-by-step NCERT solutions.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-black text-slate-200 bg-slate-800 border border-white shadow-[2px_2px_0px_0px_#FFFFFF]">
              📚 Sequential NCERT Chapters
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-black text-slate-200 bg-slate-800 border border-white shadow-[2px_2px_0px_0px_#FFFFFF]">
              🎯 Class 11 &amp; 12 Commerce Included
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-black text-slate-200 bg-slate-800 border border-white shadow-[2px_2px_0px_0px_#FFFFFF]">
              ⚡ 1-Click Instant Start
            </span>
          </div>
        </section>

        {/* ── Class Selection & Subject Cards Grid ── */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="section-heading text-2xl text-white">Select Your Subject</h2>
                {isCommerceClass && (
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-400">
                    Commerce Stream 💼
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-slate-400 mt-1">
                Click any subject card to configure &amp; start your quiz immediately.
              </p>
            </div>

            {/* Class Toggle Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {classes.map((cls) => {
                const isSelected = selectedClass === cls;
                return (
                  <button
                    key={cls}
                    id={`class-toggle-${cls.replace(' ', '-').toLowerCase()}`}
                    onClick={() => setSelectedClass(cls)}
                    className="btn-pill text-xs font-black py-2 px-4 transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    style={{
                      background: isSelected ? '#14B8A6' : '#1E293B',
                      color:      isSelected ? '#0B0F19' : '#F8FAFC',
                      boxShadow:  isSelected ? '3px 3px 0px 0px #FFFFFF' : '2px 2px 0px 0px #FFFFFF',
                      borderColor:'#FFFFFF',
                    }}
                    aria-pressed={isSelected}
                    aria-label={`Filter by ${cls}`}
                  >
                    {cls}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 1-Click Vibrant Subject Cards Grid with Retro Dark Shadows */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {activeSubjects.map((s) => (
              <Link
                key={s.id}
                href={`/configure?class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(s.label)}`}
                id={`subject-card-${s.id}`}
                className="rounded-3xl p-6 flex flex-col items-center text-center gap-3.5 transition-all duration-200 hover:-translate-y-1.5 group"
                style={{
                  background: s.bg,
                  border: `3px solid #FFFFFF`,
                  boxShadow: `5px 5px 0px 0px #FFFFFF`,
                }}
                aria-label={`Practice ${s.label} for ${selectedClass}`}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                  style={{ background: '#0F172A', border: `2px solid ${s.border}` }}
                >
                  {s.emoji}
                </div>
                <div>
                  <h3
                    className="text-lg font-black leading-tight text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.label}
                  </h3>
                  <p className="text-xs font-bold text-slate-300 mt-0.5">
                    {selectedClass}
                  </p>
                </div>
                <span
                  className="btn-pill text-xs py-1.5 px-5 font-black mt-1 text-white transition-all group-hover:scale-105"
                  style={{
                    background: s.btnBg,
                    border: '2px solid #FFFFFF',
                    boxShadow: '2px 2px 0px 0px #FFFFFF',
                  }}
                >
                  Start Quiz →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/dashboard"
            className="rounded-3xl p-6 flex items-center gap-4 transition-all hover:-translate-y-1"
            style={{ background: '#1E293B', border: '3px solid #FFFFFF', boxShadow: '5px 5px 0px 0px #FFFFFF' }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-white bg-blue-600 border-2 border-white flex-shrink-0 shadow-[2px_2px_0px_0px_#FFFFFF]">
              📊
            </div>
            <div>
              <h3 className="text-lg font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Student Dashboard
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1">
                Track accuracy, view XP progress, and retake previous attempts.
              </p>
            </div>
          </Link>

          <Link
            href="/leaderboard"
            className="rounded-3xl p-6 flex items-center gap-4 transition-all hover:-translate-y-1"
            style={{ background: '#1E293B', border: '3px solid #FFFFFF', boxShadow: '5px 5px 0px 0px #FFFFFF' }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-white bg-amber-500 border-2 border-white flex-shrink-0 shadow-[2px_2px_0px_0px_#FFFFFF]">
              🏆
            </div>
            <div>
              <h3 className="text-lg font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Hall of Fame Leaderboard
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1">
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
