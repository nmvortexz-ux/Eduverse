'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Inline SVG Icons ────────────────────────────────────────────────────────
function IconCrown({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.269a4 4 0 0 1-3.86 2.934H8.713a4 4 0 0 1-3.86-2.934L2.019 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  );
}

function IconTrophy({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconMedal({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function IconSparkles({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z" />
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

function IconFlame({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
    </svg>
  );
}

// ─── Interfaces ──────────────────────────────────────────────────────────────
interface Badge {
  id: string;
  label: string;
  icon: string;
  bg: string;
  color: string;
}

interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  avatar: string | null;
  initial: string;
  classNum: number;
  className: string;
  totalQuizzes: number;
  totalScore: number;
  avgAccuracy: number;
  badges: Badge[];
  isRealUser?: boolean;
}

const classes = ['All Classes', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
const timeframes = ['Daily', 'Weekly', 'Monthly', 'All Time'];

const avatarColors = [
  '#0D9488', '#FB7185', '#38BDF8', '#F59E0B',
  '#A855F7', '#34D399', '#F97316', '#0EA5E9',
  '#EC4899', '#84CC16',
];

// ─── Modern Student Avatar Bubble ─────────────────────────────────────────────
function StudentAvatar({
  url,
  initial,
  size = 40,
  idx = 0,
  ringClass = '',
}: {
  url?: string | null;
  initial: string;
  size?: number;
  idx?: number;
  ringClass?: string;
}) {
  if (url) {
    return (
      <div
        className={`rounded-full overflow-hidden relative flex-shrink-0 ${ringClass}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <Image src={url} alt={initial} fill className="object-cover rounded-full" />
      </div>
    );
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${ringClass}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: avatarColors[idx % avatarColors.length],
        fontSize: size >= 48 ? '1.25rem' : '0.875rem',
      }}
    >
      {initial}
    </div>
  );
}

// ─── Loading Skeletons ───────────────────────────────────────────────────────
function PodiumSkeleton() {
  return (
    <div className="flex items-end justify-center gap-4 my-8 animate-pulse">
      {[140, 180, 120].map((h, i) => (
        <div key={i} className="flex-1 max-w-[190px] flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-slate-800" />
          <div className="w-24 h-4 bg-slate-800 rounded-md" />
          <div className="w-full rounded-2xl bg-slate-800/60 border border-slate-700/50" style={{ height: `${h}px` }} />
        </div>
      ))}
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="p-4 space-y-3 bg-slate-900/40 rounded-2xl border border-slate-800 animate-pulse">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-14 bg-slate-800/50 rounded-xl w-full" />
      ))}
    </div>
  );
}

// ─── Main Leaderboard Component ──────────────────────────────────────────────
export default function LeaderboardPage() {
  const { user: clerkUser } = useUser();
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Weekly');

  const [topThree, setTopThree] = useState<LeaderboardUser[]>([]);
  const [rankings, setRankings] = useState<LeaderboardUser[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState<LeaderboardUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (selectedClass !== 'All Classes') params.set('class', selectedClass);
    if (selectedTimeframe !== 'All Time') params.set('timeframe', selectedTimeframe);

    fetch(`/api/leaderboard?${params.toString()}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setTopThree(json.topThree || []);
          setRankings(json.rankings || []);
          setCurrentUserRank(json.currentUserRank || null);
        }
      })
      .catch((err) => console.error('Failed to load leaderboard:', err))
      .finally(() => setLoading(false));
  }, [selectedClass, selectedTimeframe]);

  const totalEntries = topThree.length + rankings.length;

  return (
    <div className="min-h-screen text-slate-100 bg-[#0b1329]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">

        {/* ── Page Header ── */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <IconCrown className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Rankings</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            EduVerse <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400">Leaderboard</span>
          </h1>

          <p className="text-sm sm:text-base font-medium text-slate-400 max-w-md mx-auto leading-relaxed">
            Live rankings computed purely from verified quiz submissions. Complete quizzes to climb to the top!
          </p>
        </div>

        {/* ── Sleek Filter Bar ── */}
        <div className="rounded-2xl p-4 sm:p-5 bg-slate-900/50 backdrop-blur-md border border-slate-800 space-y-4 shadow-xl shadow-black/20">
          {/* Class Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 min-w-[65px]">
              Class:
            </span>
            <div className="flex flex-wrap gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
              {classes.map((cls) => {
                const isSelected = selectedClass === cls;
                return (
                  <button
                    key={cls}
                    id={`filter-class-${cls.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => setSelectedClass(cls)}
                    className={`text-xs font-semibold py-1.5 px-3.5 rounded-lg transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {cls}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeframe Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 min-w-[65px]">
              Period:
            </span>
            <div className="flex flex-wrap gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
              {timeframes.map((tf) => {
                const isSelected = selectedTimeframe === tf;
                return (
                  <button
                    key={tf}
                    id={`filter-timeframe-${tf.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => setSelectedTimeframe(tf)}
                    className={`text-xs font-semibold py-1.5 px-3.5 rounded-lg transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {tf}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Content Area ── */}
        {loading ? (
          <>
            <PodiumSkeleton />
            <TableSkeleton />
          </>
        ) : totalEntries === 0 ? (
          /* Sleek Dark Empty State */
          <div className="rounded-2xl p-10 text-center space-y-4 bg-slate-900/40 border border-slate-800 shadow-xl shadow-black/20">
            <div className="w-14 h-14 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-center justify-center mx-auto text-amber-400">
              <IconTrophy className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white">
                No Quiz Submissions Yet
              </h3>
              <p className="text-sm font-medium text-slate-400 max-w-md mx-auto leading-relaxed">
                No quiz entries found for {selectedClass === 'All Classes' ? 'any class' : selectedClass} ({selectedTimeframe}). Be the first to take a quiz and claim the #1 spot!
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/"
                id="empty-state-take-quiz"
                className="bg-[#00df9a] hover:bg-emerald-400 text-[#0b1329] text-xs font-bold py-2.5 px-6 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-900/20"
              >
                Take a Quiz Now
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* ── Top 3 Podium Section ── */}
            {topThree.length > 0 && (
              <section className="space-y-5">
                <div className="flex items-center justify-center gap-2">
                  <IconMedal className="w-4 h-4 text-amber-400" />
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Top Performers</h2>
                </div>

                {/* Podium Columns (Order: 2nd, 1st, 3rd) */}
                <div className="flex items-end justify-center gap-3 sm:gap-4 pt-6">
                  {[1, 0, 2].map((podiumIdx) => {
                    const student = topThree[podiumIdx];
                    if (!student) return null;

                    const isFirst = podiumIdx === 0;
                    const configs = [
                      {
                        rankLabel: '1st',
                        cardBg: 'bg-gradient-to-t from-slate-900 via-slate-900 to-amber-950/40 border-amber-500/40 shadow-amber-500/10',
                        accentColor: '#F59E0B',
                        badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
                        ringClass: 'p-[2px] bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_0_20px_rgba(245,158,11,0.3)]',
                        height: 'h-48 sm:h-52',
                        glow: true,
                      },
                      {
                        rankLabel: '2nd',
                        cardBg: 'bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800/50 border-slate-700 shadow-slate-900/20',
                        accentColor: '#94A3B8',
                        badgeBg: 'bg-slate-800 text-slate-300 border-slate-700',
                        ringClass: 'p-[2px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 shadow-[0_0_15px_rgba(148,163,184,0.2)]',
                        height: 'h-36 sm:h-40',
                        glow: false,
                      },
                      {
                        rankLabel: '3rd',
                        cardBg: 'bg-gradient-to-t from-slate-900 via-slate-900 to-rose-950/30 border-rose-800/40 shadow-rose-950/20',
                        accentColor: '#FB7185',
                        badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
                        ringClass: 'p-[2px] bg-gradient-to-b from-rose-300 via-rose-500 to-rose-700 shadow-[0_0_15px_rgba(251,113,133,0.2)]',
                        height: 'h-28 sm:h-32',
                        glow: false,
                      },
                    ];
                    const cfg = configs[podiumIdx];

                    return (
                      <div key={student.id} className="flex flex-col items-center gap-3 flex-1 max-w-[200px] relative group">
                        {/* Rank 1 Ambient Glow */}
                        {cfg.glow && (
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />
                        )}

                        {/* Rank Crown / Badge */}
                        <div className="relative">
                          {isFirst && (
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 animate-bounce">
                              <IconCrown className="w-5 h-5 text-amber-400" />
                            </div>
                          )}
                          <StudentAvatar
                            url={student.avatar}
                            initial={student.initial}
                            size={isFirst ? 58 : 46}
                            idx={student.rank - 1}
                            ringClass={cfg.ringClass}
                          />
                        </div>

                        {/* Name & Class */}
                        <div className="text-center px-1 space-y-0.5">
                          <p
                            className="text-xs sm:text-sm font-semibold text-slate-100 truncate max-w-[140px] group-hover:text-amber-400 transition-colors"
                            title={student.name}
                          >
                            {student.name}
                          </p>
                          <p className="text-[11px] font-medium text-slate-500">{student.className}</p>
                        </div>

                        {/* Badges Preview */}
                        {student.badges.length > 0 && (
                          <div className="flex items-center justify-center gap-1 flex-wrap max-w-[140px]">
                            {student.badges.slice(0, 2).map((b) => (
                              <span
                                key={b.id}
                                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                                title={b.label}
                              >
                                {b.label}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Glassmorphic Podium Card */}
                        <div
                          className={`w-full ${cfg.height} rounded-2xl flex flex-col items-center justify-center gap-1.5 p-3 border backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:border-slate-600 ${cfg.cardBg}`}
                        >
                          <span
                            className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                          >
                            {student.avgAccuracy}%
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                            {student.totalQuizzes} {student.totalQuizzes === 1 ? 'Quiz' : 'Quizzes'}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mt-1 ${cfg.badgeBg}`}
                          >
                            {cfg.rankLabel} Place
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* ── Rankings Table (Rank 4+) ── */}
            {rankings.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Rankings</h2>
                
                <div className="rounded-2xl overflow-hidden bg-slate-900/40 backdrop-blur-md border border-slate-800 shadow-xl shadow-black/20">
                  {/* Table Header */}
                  <div
                    className="grid text-[11px] font-semibold uppercase tracking-wider px-4 sm:px-6 py-3 bg-slate-900/80 border-b border-slate-800 text-slate-500"
                    style={{ gridTemplateColumns: '60px 1fr 90px 90px 120px' }}
                  >
                    <span>Rank</span>
                    <span>Student</span>
                    <span className="text-center">Quizzes</span>
                    <span className="text-center">Accuracy</span>
                    <span className="text-center hidden sm:block">Badges</span>
                  </div>

                  {rankings.map((student, i) => {
                    const isMe = clerkUser && (student.id === clerkUser.id || student.name === (clerkUser.firstName || clerkUser.username));

                    return (
                      <div
                        key={student.id}
                        id={`rank-row-${student.rank}`}
                        className={`grid items-center px-4 sm:px-6 py-3.5 border-b border-slate-800/60 last:border-b-0 transition-colors ${
                          isMe
                            ? 'bg-emerald-950/30 border-l-2 border-l-[#00df9a]'
                            : 'hover:bg-slate-800/30'
                        }`}
                        style={{ gridTemplateColumns: '60px 1fr 90px 90px 120px' }}
                      >
                        {/* Rank Badge */}
                        <div className="flex items-center">
                          <span className="text-xs font-mono font-bold text-slate-400 px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700/50">
                            #{student.rank}
                          </span>
                        </div>

                        {/* Student Name + Avatar */}
                        <div className="flex items-center gap-3">
                          <StudentAvatar
                            url={student.avatar}
                            initial={student.initial}
                            size={34}
                            idx={student.rank - 1}
                          />
                          <div>
                            <p className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                              {student.name}
                              {isMe && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00df9a]/15 text-[#00df9a] border border-[#00df9a]/30">
                                  You
                                </span>
                              )}
                            </p>
                            <p className="text-[11px] font-medium text-slate-500">{student.className}</p>
                          </div>
                        </div>

                        {/* Quizzes Taken */}
                        <div className="text-center text-xs font-semibold text-slate-300">
                          {student.totalQuizzes}
                        </div>

                        {/* Accuracy */}
                        <div className="text-center">
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                              student.avgAccuracy >= 80
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}
                          >
                            {student.avgAccuracy}%
                          </span>
                        </div>

                        {/* Badges */}
                        <div className="hidden sm:flex items-center justify-center gap-1 flex-wrap">
                          {student.badges.map((b) => (
                            <span
                              key={b.id}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
                              title={b.label}
                            >
                              {b.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* ── Personal Rank Banner / CTA ── */}
            {currentUserRank ? (
              <div className="rounded-2xl flex flex-col sm:flex-row items-center gap-4 p-5 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 shadow-xl shadow-black/20">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <IconFlame className="w-5 h-5" />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <p className="text-sm font-bold text-white">
                    Your Standing: <span className="text-[#00df9a]">#{currentUserRank.rank} Overall</span>
                  </p>
                  <p className="text-xs font-medium text-slate-400 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                    <span>Quizzes: <strong className="text-slate-200">{currentUserRank.totalQuizzes}</strong></span>
                    <span>&middot;</span>
                    <span>Accuracy: <strong className="text-slate-200">{currentUserRank.avgAccuracy}%</strong></span>
                    <span>&middot;</span>
                    <span>Badges: {currentUserRank.badges.map(b => b.label).join(', ') || 'None yet'}</span>
                  </p>
                </div>
                <Link
                  href="/"
                  id="leaderboard-personal-cta"
                  className="bg-[#00df9a] hover:bg-emerald-400 text-[#0b1329] text-xs font-bold py-2.5 px-5 rounded-xl transition-colors inline-flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-md"
                >
                  <span>Keep Climbing</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl flex flex-col sm:flex-row items-center gap-4 p-5 bg-slate-900/50 border border-slate-800 shadow-xl shadow-black/20">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 flex-shrink-0">
                  <IconSparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <p className="text-sm font-bold text-white">
                    Want your name on the Leaderboard?
                  </p>
                  <p className="text-xs font-medium text-slate-400">
                    Sign in and attempt any quiz to claim your rank on the EduVerse Hall of Fame!
                  </p>
                </div>
                <Link
                  href="/"
                  id="leaderboard-join-cta"
                  className="bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-semibold py-2.5 px-5 rounded-xl border border-white/10 transition-colors flex-shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Start Quiz</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </>
        )}

      </main>

      <Footer />
    </div>
  );
}
