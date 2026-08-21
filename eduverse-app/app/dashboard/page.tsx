'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Interfaces ──────────────────────────────────────────────────────────────
interface SubjectPerfItem {
  subject: string;
  avg: number;
  totalQuizzes: number;
  emoji: string;
  color: string;
  border: string;
}

interface RecentAttemptItem {
  id: string;
  subject: string;
  cls: string;
  score: number;
  total: number;
  mode: string;
  date: string;
  accuracy: number;
}

interface UserStatsData {
  totalClasses: number;
  totalSubjects: number;
  totalQuestions: number;
  totalStudents: number;
  leaderboardPercentile: number | null;
  recentQuizScore: number | null;
  overallAccuracy: number | null;
  totalQuizzes: number;
  totalCorrect: number;
  totalAttempted: number;
  totalXP: number;
  level: number;
  xpInLevel: number;
  xpForNextLevel: number;
  subjectPerformance: SubjectPerfItem[];
  recentAttempts: RecentAttemptItem[];
}

// ─── Inline SVG Icons ────────────────────────────────────────────────────────
function IconTarget({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconBookOpen({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconTrophy({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconZap({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconSwords({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" /><line x1="13" x2="19" y1="19" y2="13" /><line x1="16" x2="20" y1="16" y2="20" /><line x1="19" x2="21" y1="21" y2="19" /><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" /><line x1="5" x2="9" y1="14" y2="18" /><line x1="7" x2="4" y1="17" y2="20" /><line x1="3" x2="5" y1="19" y2="21" />
    </svg>
  );
}

function IconBarChart({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" />
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

// ─── Sleek Accuracy Bar ──────────────────────────────────────────────────────
function AccBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="flex items-center gap-2.5 mt-1">
      <div className="flex-1 h-2 rounded-full overflow-hidden bg-slate-800">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="text-xs font-semibold w-10 text-right" style={{ color }}>{pct}%</span>
    </div>
  );
}

// ─── Score Badge ─────────────────────────────────────────────────────────────
function ScoreBadge({ score }: { score: number }) {
  const color = score >= 80 ? '#34D399' : score >= 60 ? '#FBBF24' : '#FB7185';
  const bg = score >= 80 ? 'rgba(52,211,153,0.1)' : score >= 60 ? 'rgba(251,191,36,0.1)' : 'rgba(251,113,133,0.1)';
  return (
    <span
      className="text-xs font-bold px-2.5 py-1 rounded-lg"
      style={{ background: bg, color, border: `1px solid ${color}20` }}
    >
      {score}%
    </span>
  );
}

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const [stats, setStats] = useState<UserStatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setStats(json.data);
      })
      .catch((err) => console.error('Failed to load stats:', err))
      .finally(() => setLoading(false));
  }, []);

  const displayName = isLoaded && user ? (user.firstName || user.username || 'Learner') : 'Learner';
  const userInitial = displayName.charAt(0).toUpperCase();

  const totalQuizzes = stats?.totalQuizzes ?? 0;
  const overallAccuracy = stats?.overallAccuracy != null ? `${stats.overallAccuracy}%` : 'N/A';
  const leaderboardDisplay = stats?.leaderboardPercentile != null ? `Top ${stats.leaderboardPercentile}%` : 'N/A';
  const totalXP = stats?.totalXP ?? 0;
  const level = stats?.level ?? 1;
  const xpInLevel = stats?.xpInLevel ?? 0;
  const xpForNextLevel = stats?.xpForNextLevel ?? 500;
  const xpPercent = Math.min(100, Math.round((xpInLevel / xpForNextLevel) * 100));

  const subjectPerf = stats?.subjectPerformance ?? [];
  const sortedSubjectPerf = [...subjectPerf].sort((a, b) => b.avg - a.avg);
  const best = sortedSubjectPerf.length > 0 ? sortedSubjectPerf[0] : null;
  const weakest = sortedSubjectPerf.length > 1 ? sortedSubjectPerf[sortedSubjectPerf.length - 1] : null;

  const recentAttempts = stats?.recentAttempts ?? [];

  const statCards = [
    {
      id: 'accuracy',
      label: 'Overall Accuracy',
      value: overallAccuracy,
      icon: <IconTarget className="w-5 h-5" />,
      accentColor: '#3B82F6',
      iconBg: 'rgba(59,130,246,0.1)',
    },
    {
      id: 'quizzes',
      label: 'Quizzes Completed',
      value: String(totalQuizzes),
      icon: <IconBookOpen className="w-5 h-5" />,
      accentColor: '#F59E0B',
      iconBg: 'rgba(245,158,11,0.1)',
    },
    {
      id: 'rank',
      label: 'Rank Percentile',
      value: leaderboardDisplay,
      icon: <IconTrophy className="w-5 h-5" />,
      accentColor: '#F43F5E',
      iconBg: 'rgba(244,63,94,0.1)',
    },
    {
      id: 'xp',
      label: 'XP Earned',
      value: `${totalXP.toLocaleString()} XP`,
      icon: <IconZap className="w-5 h-5" />,
      accentColor: '#00df9a',
      iconBg: 'rgba(0,223,154,0.1)',
    },
  ];

  return (
    <div className="min-h-screen text-slate-100 bg-[#0b1329]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* ── User Header Card + Active Mission ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Main User Card (8 cols) */}
          <div
            className="lg:col-span-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl shadow-black/30"
            id="dashboard-user-header"
          >
            {user?.imageUrl ? (
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative ring-2 ring-slate-700">
                <Image
                  src={user.imageUrl}
                  alt={displayName}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-[#0b1329] flex-shrink-0 bg-[#00df9a] ring-2 ring-emerald-500/30">
                {userInitial}
              </div>
            )}

            <div className="flex-1 text-center sm:text-left space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Hello, {displayName}
                </h1>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Level {level} Scholar
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500">
                Class 8 to 12 · EduVerse Student Analytics
              </p>
              
              {/* Dynamic XP progress bar */}
              <div className="pt-1">
                <div className="flex justify-between text-[11px] font-medium mb-1.5">
                  <span className="text-slate-500">XP to Level {level + 1}</span>
                  <span className="text-[#00df9a]">{xpInLevel} / {xpForNextLevel} XP</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-slate-800">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-[#00df9a] to-emerald-300"
                    style={{ width: `${xpPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/"
                id="dashboard-start-quiz"
                className="bg-[#00df9a] hover:bg-emerald-400 text-[#0b1329] text-sm font-bold py-2.5 px-6 rounded-xl transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Quiz
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/leaderboard"
                id="dashboard-leaderboard"
                className="bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-semibold py-2.5 px-6 rounded-xl border border-white/10 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconTrophy className="w-4 h-4" />
                Leaderboard
              </Link>
            </div>
          </div>

          {/* Active Mission / Boss Fight Widget (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl p-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl shadow-black/30 relative overflow-hidden">
            {/* Subtle animated pulse glow */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-rose-500/10 blur-2xl animate-pulse" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400">Active Mission</span>
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-500">Current Target</p>
                <p className="text-base font-bold text-white leading-snug">
                  The Balance Sheet Boss
                </p>
                <p className="text-[11px] font-medium text-slate-400">Class 12 · Accountancy</p>
              </div>

              {/* Mini progress indicator */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-medium">
                  <span className="text-slate-500">Boss HP Remaining</span>
                  <span className="text-rose-400">1200 HP</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-rose-500 to-rose-400 w-full transition-all duration-700" />
                </div>
              </div>
            </div>

            <Link
              href="/boss-fight"
              className="relative z-10 mt-4 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 text-xs font-bold py-2.5 px-4 rounded-xl border border-rose-500/20 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <IconSwords className="w-4 h-4" />
              Enter Arena
            </Link>
          </div>
        </div>

        {/* ── Performance Stats Grid ── */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Your Performance Stats</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {statCards.map((g) => (
              <div
                key={g.id}
                id={`stat-${g.id}`}
                className="rounded-2xl flex flex-col gap-3 p-5 bg-slate-900/50 border border-slate-800 transition-all hover:border-slate-700 relative overflow-hidden"
              >
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: g.accentColor }} />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: g.iconBg, color: g.accentColor }}
                >
                  {g.icon}
                </div>
                <p className="text-2xl font-bold leading-none text-white tracking-tight">
                  {loading ? '...' : g.value}
                </p>
                <p className="text-xs font-medium text-slate-500">{g.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dynamic Subject Performance ── */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Subject Performance</h2>

          {loading ? (
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 text-center text-xs font-medium text-slate-500">
              Loading subject analytics...
            </div>
          ) : totalQuizzes === 0 || subjectPerf.length === 0 ? (
            <div className="rounded-2xl p-10 text-center space-y-4 bg-slate-900/50 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mx-auto text-slate-600">
                <IconBarChart className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-300">
                  No Subject Performance Data Yet
                </h3>
                <p className="text-sm font-medium text-slate-500 max-w-sm mx-auto">
                  Complete your first quiz to generate live accuracy analytics across Accountancy, Economics, Science, Math, and more.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/"
                  className="bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-semibold py-2.5 px-6 rounded-xl border border-white/10 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Take your first quiz
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {best && (
                  <div className="rounded-2xl p-5 flex items-center gap-4 bg-slate-900/50 border border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-emerald-500" />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-500/10 text-emerald-400">
                      <IconTrophy className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">Best Subject</p>
                      <p className="text-base font-bold text-white">{best.subject}</p>
                      <p className="text-sm font-medium text-slate-400">{best.avg}% avg accuracy</p>
                    </div>
                  </div>
                )}

                {weakest && (
                  <div className="rounded-2xl p-5 flex items-center gap-4 bg-slate-900/50 border border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-rose-500" />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-rose-500/10 text-rose-400">
                      <IconTarget className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">Needs Focus</p>
                      <p className="text-base font-bold text-white">{weakest.subject}</p>
                      <p className="text-sm font-medium text-slate-400">{weakest.avg}% avg accuracy</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-2xl p-6 bg-slate-900/50 border border-slate-800">
                <div className="space-y-4">
                  {subjectPerf.map((s) => (
                    <div key={s.subject}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-white">{s.subject}</span>
                        <span className="text-[11px] font-medium text-slate-500">
                          {s.totalQuizzes} {s.totalQuizzes === 1 ? 'quiz' : 'quizzes'}
                        </span>
                      </div>
                      <AccBar pct={s.avg} color={s.border} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        {/* ── Recent Attempts Table ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Recent Attempts</h2>
            <Link
              href="/"
              id="dashboard-new-quiz"
              className="bg-[#00df9a] hover:bg-emerald-400 text-[#0b1329] text-xs font-bold py-2 px-4 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              + New Quiz
            </Link>
          </div>

          {loading ? (
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 text-center text-xs font-medium text-slate-500">
              Loading recent attempt history...
            </div>
          ) : recentAttempts.length === 0 ? (
            <div className="rounded-2xl p-8 text-center space-y-3 bg-slate-900/50 border border-slate-800">
              <p className="text-sm font-medium text-slate-400">No recent quiz attempts found.</p>
              <Link
                href="/"
                className="bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold py-2 px-5 rounded-lg border border-white/10 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                Start Your First Quiz
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800">
              {/* Table Header */}
              <div
                className="hidden sm:grid text-[11px] font-semibold uppercase tracking-wider px-5 py-3 bg-slate-900 border-b border-slate-800 text-slate-500"
                style={{ gridTemplateColumns: '1fr 90px 80px 80px 90px 80px' }}
              >
                <span>Subject</span>
                <span className="text-center">Score</span>
                <span className="text-center">Mode</span>
                <span className="text-center">Accuracy</span>
                <span className="text-center">Date</span>
                <span className="text-center">Action</span>
              </div>

              {recentAttempts.map((a, i) => (
                <div
                  key={a.id}
                  id={`attempt-row-${a.id}`}
                  className="grid items-center px-5 py-3.5 border-b border-slate-800/50 last:border-b-0 hover:bg-slate-800/30 transition-colors"
                  style={{ gridTemplateColumns: '1fr 90px 80px 80px 90px 80px' }}
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{a.subject}</p>
                    <p className="text-[11px] font-medium text-slate-500">{a.cls}</p>
                  </div>
                  <div className="text-center">
                    <ScoreBadge score={a.score} />
                  </div>
                  <div className="text-center">
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                      style={{
                        background: a.mode === 'Exam' ? 'rgba(59,130,246,0.1)' : 'rgba(0,223,154,0.1)',
                        color: a.mode === 'Exam' ? '#60A5FA' : '#00df9a',
                      }}
                    >
                      {a.mode}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-white">{a.accuracy}%</span>
                  </div>
                  <div className="text-center text-[11px] font-medium text-slate-500">
                    {a.date}
                  </div>
                  <div className="text-center">
                    <Link
                      href={`/configure?class=${encodeURIComponent(a.cls)}&subject=${encodeURIComponent(a.subject)}`}
                      id={`retake-${a.id}`}
                      className="text-[11px] font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer"
                      aria-label={`Retake ${a.subject} quiz`}
                    >
                      Retake
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </main>

      {/* ── Reusable Multi-Column Footer ── */}
      <Footer />
    </div>
  );
}
