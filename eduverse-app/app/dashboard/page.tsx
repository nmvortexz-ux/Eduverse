'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Daily Study Thoughts / Quotes ───────────────────────────────────────────
const DAILY_THOUGHTS = [
  { quote: 'An investment in knowledge pays the best interest.', author: 'Benjamin Franklin', icon: '💡' },
  { quote: 'Master NCERT concepts one quiz at a time.', author: 'EduVerse Motto', icon: '🎯' },
  { quote: 'The secret of getting ahead is getting started.', author: 'Mark Twain', icon: '🚀' },
  { quote: 'Success is the sum of small efforts repeated day in and day out.', author: 'Robert Collier', icon: '⚡' },
  { quote: 'Education is the most powerful weapon which you can use to change the world.', author: 'Nelson Mandela', icon: '🌟' },
];

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

function AccBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: '#0F172A', border: '1.5px solid #FFFFFF' }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: color, transition: 'width 0.6s ease' }}
        />
      </div>
      <span className="text-xs font-black w-10 text-right" style={{ color }}>{pct}%</span>
    </div>
  );
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 80 ? '#34D399' : score >= 60 ? '#FBBF24' : '#FB7185';
  const bg    = score >= 80 ? '#064E3B' : score >= 60 ? '#78350F' : '#881337';
  return (
    <span
      className="text-xs font-black px-2.5 py-0.5 rounded-full"
      style={{ background: bg, color, border: '1.5px solid #FFFFFF' }}
    >
      {score}%
    </span>
  );
}

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const [quoteIndex, setQuoteIndex] = useState(0);
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

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % DAILY_THOUGHTS.length);
  };

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
  const currentThought = DAILY_THOUGHTS[quoteIndex];

  const gamCards = [
    { id: 'accuracy', label: 'Overall Accuracy', value: overallAccuracy, emoji: '🎯', bg: '#0C4A6E', iconBg: '#0284C7', color: '#7DD3FC' },
    { id: 'quizzes',  label: 'Quizzes Completed', value: String(totalQuizzes), emoji: '📚', bg: '#78350F', iconBg: '#F59E0B', color: '#FDE68A' },
    { id: 'rank',     label: 'Rank Percentile', value: leaderboardDisplay, emoji: '🏆', bg: '#881337', iconBg: '#F43F5E', color: '#FDA4AF' },
    { id: 'xp',       label: 'XP Earned', value: `${totalXP.toLocaleString()} XP`, emoji: '⚡', bg: '#064E3B', iconBg: '#10B981', color: '#6EE7B7' },
  ];

  return (
    <div className="min-h-screen text-slate-100" style={{ background: '#0B0F19', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* ── User Header Card + Daily Thought Banner ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main User Card (8 cols) */}
          <div
            className="lg:col-span-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 p-6"
            id="dashboard-user-header"
            style={{ background: '#1E293B', border: '3px solid #FFFFFF', boxShadow: '6px 6px 0px 0px #FFFFFF' }}
          >
            {user?.imageUrl ? (
              <div
                className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 relative"
                style={{
                  border: '3px solid #FFFFFF',
                  boxShadow: '4px 4px 0 #FFFFFF',
                }}
              >
                <Image
                  src={user.imageUrl}
                  alt={displayName}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black text-slate-950 flex-shrink-0"
                style={{
                  background: '#14B8A6',
                  border: '3px solid #FFFFFF',
                  boxShadow: '4px 4px 0 #FFFFFF',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {userInitial}
              </div>
            )}

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
                <h1
                  className="text-2xl sm:text-3xl font-black text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Hello, {displayName} 👋
                </h1>
                <span
                  className="badge"
                  style={{ background: '#78350F', color: '#FDE68A', borderColor: '#F59E0B' }}
                >
                  ⭐ Level {level} Scholar
                </span>
              </div>
              <p className="text-sm font-bold text-slate-300">
                Class 8 to 12 · EduVerse Student Analytics
              </p>
              
              {/* Dynamic XP progress bar */}
              <div className="pt-1">
                <div className="flex justify-between text-xs font-black mb-1 text-slate-300">
                  <span>XP to Level {level + 1}</span>
                  <span className="text-teal-400">{xpInLevel} / {xpForNextLevel} XP</span>
                </div>
                <div
                  className="h-3.5 rounded-full overflow-hidden"
                  style={{ background: '#0F172A', border: '2px solid #FFFFFF' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${xpPercent}%`, background: '#14B8A6' }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-shrink-0 w-full sm:w-auto">
              <Link href="/" id="dashboard-start-quiz" className="btn-pill btn-teal text-sm py-2.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5" style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}>
                🚀 Start Quiz
              </Link>
              <Link href="/leaderboard" id="dashboard-leaderboard" className="btn-pill btn-white text-sm py-2.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5" style={{ boxShadow: '3px 3px 0 #FFFFFF' }}>
                🏆 Leaderboard
              </Link>
            </div>
          </div>

          {/* Daily Thought Box (4 cols) */}
          <div
            className="lg:col-span-4 rounded-3xl p-5 flex flex-col justify-between"
            style={{ background: '#1E293B', border: '3px solid #F59E0B', boxShadow: '6px 6px 0px 0px #F59E0B' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <span>{currentThought.icon}</span> Daily Thought
              </span>
              <button
                onClick={nextQuote}
                className="text-xs font-black px-2 py-0.5 rounded-lg border-2 border-white transition-transform hover:scale-105 active:scale-95"
                style={{ background: '#0F172A', color: '#FFFFFF' }}
              >
                Next ✨
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="my-2"
              >
                <p className="text-sm font-bold italic leading-relaxed text-slate-200">
                  &ldquo;{currentThought.quote}&rdquo;
                </p>
                <p className="text-xs font-black text-amber-300 text-right mt-1">
                  — {currentThought.author}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-2 border-t border-slate-700 text-xs font-black text-slate-400 flex justify-between">
              <span>🔥 7d Streak</span>
              <span className="text-teal-300 bg-teal-950 px-2 py-0.5 rounded-full border border-teal-500">NCERT Aligned</span>
            </div>
          </div>
        </div>

        {/* ── Performance Stats Grid ── */}
        <section className="space-y-3">
          <h2 className="section-heading text-xl text-white">Your Performance Stats</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {gamCards.map((g) => (
              <div
                key={g.id}
                id={`stat-${g.id}`}
                className="rounded-2xl flex flex-col gap-2 p-4 transition-transform hover:-translate-y-1"
                style={{ background: g.bg, border: '2.5px solid #FFFFFF', boxShadow: '4px 4px 0px 0px #FFFFFF' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white shadow-[2px_2px_0_#0F172A]"
                  style={{ background: g.iconBg, border: '2px solid #FFFFFF' }}
                >
                  {g.emoji}
                </div>
                <p
                  className="text-2xl font-black leading-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: g.color }}
                >
                  {loading ? '...' : g.value}
                </p>
                <p className="text-xs font-bold text-slate-300">{g.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dynamic Subject Performance ── */}
        <section className="space-y-4">
          <h2 className="section-heading text-xl text-white">Subject Performance</h2>

          {loading ? (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xs font-bold text-slate-400">
              Loading subject analytics...
            </div>
          ) : totalQuizzes === 0 || subjectPerf.length === 0 ? (
            <div
              className="rounded-3xl p-8 text-center space-y-3 bg-slate-900 border-3 border-white shadow-[4px_4px_0px_0px_#FFFFFF]"
            >
              <div className="text-4xl">📊</div>
              <h3 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                No Subject Performance Data Yet
              </h3>
              <p className="text-sm font-semibold text-slate-400 max-w-sm mx-auto">
                Complete your first quiz to generate live accuracy analytics across Accountancy, Economics, Science, Math, and more!
              </p>
              <div className="pt-2">
                <Link href="/" className="btn-pill btn-teal text-sm py-2.5 px-6 inline-flex items-center gap-2" style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}>
                  Take Your First Quiz 🚀
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {best && (
                  <div
                    className="rounded-2xl p-4 flex items-center gap-4 transition-transform hover:-translate-y-1 bg-emerald-950 border-2 border-emerald-400 shadow-[4px_4px_0px_0px_#FFFFFF]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 text-white bg-emerald-600 border border-white"
                    >
                      {best.emoji}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wide text-emerald-300">🥇 Best Subject</p>
                      <p className="text-base font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {best.subject}
                      </p>
                      <p className="text-sm font-black text-emerald-400">{best.avg}% avg accuracy</p>
                    </div>
                  </div>
                )}

                {weakest && (
                  <div
                    className="rounded-2xl p-4 flex items-center gap-4 transition-transform hover:-translate-y-1 bg-rose-950 border-2 border-rose-400 shadow-[4px_4px_0px_0px_#FFFFFF]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 text-white bg-rose-600 border border-white"
                    >
                      {weakest.emoji}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wide text-rose-300">📉 Needs Focus</p>
                      <p className="text-base font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {weakest.subject}
                      </p>
                      <p className="text-sm font-black text-rose-400">{weakest.avg}% avg accuracy</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-3xl p-5 bg-slate-900 border-3 border-white shadow-[4px_4px_0px_0px_#FFFFFF]">
                <div className="space-y-3">
                  {subjectPerf.map((s) => (
                    <div key={s.subject}>
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-sm font-bold flex items-center gap-1.5 text-white">
                          {s.emoji} {s.subject}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
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
            <h2 className="section-heading text-xl text-white">Recent Attempts</h2>
            <Link href="/" id="dashboard-new-quiz" className="btn-pill btn-teal text-xs py-1.5 px-4" style={{ boxShadow: '2px 2px 0 #FFFFFF', borderColor: '#FFFFFF' }}>
              + New Quiz
            </Link>
          </div>

          {loading ? (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xs font-bold text-slate-400">
              Loading recent attempt history...
            </div>
          ) : recentAttempts.length === 0 ? (
            <div
              className="rounded-3xl p-6 text-center space-y-2 bg-slate-900 border-3 border-white shadow-[4px_4px_0px_0px_#FFFFFF]"
            >
              <p className="text-sm font-bold text-slate-300">No recent quiz attempts found in database.</p>
              <Link href="/" className="btn-pill btn-teal text-xs py-1.5 px-4 inline-block" style={{ boxShadow: '2px 2px 0 #FFFFFF', borderColor: '#FFFFFF' }}>
                Start Your First Quiz
              </Link>
            </div>
          ) : (
            <div
              className="rounded-3xl overflow-hidden bg-slate-900 border-3 border-white shadow-[4px_4px_0px_0px_#FFFFFF]"
            >
              <div
                className="grid text-xs font-black uppercase tracking-wide px-4 py-3 bg-slate-800 border-b-2 border-white text-slate-300"
                style={{
                  gridTemplateColumns: '1fr 90px 80px 80px 90px 80px',
                }}
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
                  className="grid items-center px-4 py-3 border-b border-slate-800"
                  style={{
                    gridTemplateColumns: '1fr 90px 80px 80px 90px 80px',
                    background: i % 2 === 0 ? '#1E293B' : '#0F172A',
                  }}
                >
                  <div>
                    <p className="text-sm font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {a.subject}
                    </p>
                    <p className="text-xs font-bold text-slate-400">{a.cls}</p>
                  </div>
                  <div className="text-center">
                    <ScoreBadge score={a.score} />
                  </div>
                  <div className="text-center">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: a.mode === 'Exam' ? '#1E3A8A' : '#064E3B',
                        color: a.mode === 'Exam' ? '#93C5FD' : '#86EFAC',
                        border: '1.5px solid #FFFFFF',
                      }}
                    >
                      {a.mode}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {a.accuracy}%
                    </span>
                  </div>
                  <div className="text-center text-xs font-bold text-slate-400">
                    {a.date}
                  </div>
                  <div className="text-center">
                    <Link
                      href={`/configure?class=${encodeURIComponent(a.cls)}&subject=${encodeURIComponent(a.subject)}`}
                      id={`retake-${a.id}`}
                      className="btn-pill btn-outline text-xs py-1 px-3"
                      style={{ boxShadow: '2px 2px 0 #FFFFFF' }}
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
