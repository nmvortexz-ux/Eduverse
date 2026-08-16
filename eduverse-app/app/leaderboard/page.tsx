'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

// ─── Student Avatar Bubble ───────────────────────────────────────────────────
function StudentAvatar({
  url,
  initial,
  size = 40,
  idx = 0,
}: {
  url?: string | null;
  initial: string;
  size?: number;
  idx?: number;
}) {
  if (url) {
    return (
      <div
        className="rounded-2xl overflow-hidden relative flex-shrink-0"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: '2.5px solid #FFFFFF',
          boxShadow: '2px 2px 0 #FFFFFF',
        }}
      >
        <Image src={url} alt={initial} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl flex items-center justify-center font-black text-white flex-shrink-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: avatarColors[idx % avatarColors.length],
        border: '2.5px solid #FFFFFF',
        boxShadow: '2px 2px 0 #FFFFFF',
        fontSize: size >= 48 ? '1.25rem' : '0.9rem',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {initial}
    </div>
  );
}

// ─── Skeletons ────────────────────────────────────────────────────────────────
function PodiumSkeleton() {
  return (
    <div className="flex items-end justify-center gap-3 my-8" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>
      {[120, 160, 100].map((h, i) => (
        <div key={i} className="flex-1 max-w-[170px] flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-800" />
          <div className="w-20 h-4 bg-slate-800 rounded" />
          <div className="w-full rounded-t-2xl bg-slate-800" style={{ height: `${h}px` }} />
        </div>
      ))}
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="p-4 space-y-3 bg-slate-900 rounded-3xl border border-slate-700" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-12 bg-slate-800 rounded-xl w-full" />
      ))}
    </div>
  );
}

// ─── Main Leaderboard Page ────────────────────────────────────────────────────
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
      .catch((err) => console.error('Failed to load leaderboard from API:', err))
      .finally(() => setLoading(false));
  }, [selectedClass, selectedTimeframe]);

  const totalEntries = topThree.length + rankings.length;

  return (
    <div className="min-h-screen text-slate-100" style={{ background: '#0B0F19', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* ── Page Header ── */}
        <div className="text-center space-y-2">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-1"
            style={{ background: '#78350F', color: '#FDE68A', border: '1.5px solid #F59E0B' }}
          >
            🏆 Official Rankings
          </div>
          <h1
            className="text-4xl font-black text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            EduVerse Leaderboard
          </h1>
          <p className="text-sm font-semibold text-slate-400 max-w-md mx-auto">
            Live rankings computed purely from real database quiz submissions. Complete quizzes to claim your spot!
          </p>
        </div>

        {/* ── Filter Bar ── */}
        <div className="rounded-3xl p-5 bg-slate-900 border-3 border-white shadow-[5px_5px_0px_0px_#FFFFFF] space-y-3.5">
          {/* Class Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-black uppercase tracking-wide text-slate-400 min-w-[70px]">
              Class:
            </span>
            {classes.map((cls) => {
              const isSelected = selectedClass === cls;
              return (
                <button
                  key={cls}
                  id={`filter-class-${cls.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setSelectedClass(cls)}
                  className="btn-pill text-xs py-1.5 px-4"
                  style={{
                    background: isSelected ? '#14B8A6' : '#1E293B',
                    color: isSelected ? '#0B0F19' : '#FFFFFF',
                    boxShadow: isSelected ? '3px 3px 0 #FFFFFF' : '2px 2px 0 #FFFFFF',
                    borderColor: '#FFFFFF',
                  }}
                  aria-pressed={isSelected}
                >
                  {cls}
                </button>
              );
            })}
          </div>

          {/* Timeframe Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-black uppercase tracking-wide text-slate-400 min-w-[70px]">
              Period:
            </span>
            {timeframes.map((tf) => {
              const isSelected = selectedTimeframe === tf;
              return (
                <button
                  key={tf}
                  id={`filter-timeframe-${tf.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setSelectedTimeframe(tf)}
                  className="btn-pill text-xs py-1.5 px-4"
                  style={{
                    background: isSelected ? '#0D9488' : '#1E293B',
                    color: '#FFFFFF',
                    boxShadow: isSelected ? '3px 3px 0 #FFFFFF' : '2px 2px 0 #FFFFFF',
                    borderColor: '#FFFFFF',
                  }}
                  aria-pressed={isSelected}
                >
                  {tf}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Content Area ── */}
        {loading ? (
          <>
            <PodiumSkeleton />
            <TableSkeleton />
          </>
        ) : totalEntries === 0 ? (
          /* Retro-Pop Empty State UI */
          <div
            className="rounded-3xl p-8 text-center space-y-4 bg-slate-900 border-3 border-white shadow-[6px_6px_0px_0px_#FFFFFF]"
          >
            <div className="text-5xl">🎯</div>
            <h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              No Quiz Submissions Yet!
            </h3>
            <p className="text-sm font-bold text-slate-400 max-w-md mx-auto leading-relaxed">
              No real quiz submissions exist for {selectedClass === 'All Classes' ? 'any class' : selectedClass} ({selectedTimeframe}). Complete a quiz to claim the #1 spot on the leaderboard!
            </p>
            <div className="pt-2">
              <Link href="/" id="empty-state-take-quiz" className="btn-pill btn-teal text-sm py-3 px-6 inline-flex items-center gap-2" style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}>
                Take a Quiz Now 🚀
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* ── Top 3 Podium Section ── */}
            {topThree.length > 0 && (
              <section className="space-y-4">
                <h2 className="section-heading text-center text-xl text-white">🎖️ Top Performers</h2>

                {/* Podium Columns (Order: 2nd, 1st, 3rd) */}
                <div className="flex items-end justify-center gap-3 pt-4">
                  {[1, 0, 2].map((podiumIdx) => {
                    const student = topThree[podiumIdx];
                    if (!student) return null;

                    const isFirst = podiumIdx === 0;
                    const configs = [
                      { rankLabel: '1st', bg: '#78350F', border: '#F59E0B', color: '#FDE68A', medal: '🥇', height: 'h-40' },
                      { rankLabel: '2nd', bg: '#1E293B', border: '#94A3B8', color: '#CBD5E1', medal: '🥈', height: 'h-32' },
                      { rankLabel: '3rd', bg: '#881337', border: '#FB7185', color: '#FDA4AF', medal: '🥉', height: 'h-24' },
                    ];
                    const cfg = configs[podiumIdx];

                    return (
                      <div key={student.id} className="flex flex-col items-center gap-2 flex-1 max-w-[170px]">
                        <div className="text-3xl">{cfg.medal}</div>
                        <StudentAvatar
                          url={student.avatar}
                          initial={student.initial}
                          size={isFirst ? 56 : 44}
                          idx={student.rank - 1}
                        />

                        {/* Name & Class */}
                        <div className="text-center px-1">
                          <p
                            className="text-sm font-black leading-tight truncate max-w-[130px] text-white"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            title={student.name}
                          >
                            {student.name}
                          </p>
                          <p className="text-xs font-bold text-slate-400">{student.className}</p>
                        </div>

                        {/* Badges preview */}
                        {student.badges.length > 0 && (
                          <div className="flex items-center justify-center gap-1 flex-wrap max-w-[140px]">
                            {student.badges.slice(0, 2).map((b) => (
                              <span
                                key={b.id}
                                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                                style={{ background: b.bg, color: b.color, border: `1px solid ${b.color}` }}
                                title={b.label}
                              >
                                {b.icon} {b.label}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Podium Block */}
                        <div
                          className={`w-full ${cfg.height} rounded-t-2xl flex flex-col items-center justify-center gap-1 p-2`}
                          style={{
                            background: cfg.bg,
                            border: `2.5px solid ${cfg.border}`,
                            borderBottom: 'none',
                            boxShadow: `3px 0 0 ${cfg.border}, -3px 0 0 ${cfg.border}`,
                          }}
                        >
                          <span
                            className="text-2xl font-black"
                            style={{ fontFamily: "'Space Grotesk', sans-serif", color: cfg.color }}
                          >
                            {student.avgAccuracy}%
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: cfg.color }}>
                            {student.totalQuizzes} {student.totalQuizzes === 1 ? 'Quiz' : 'Quizzes'}
                          </span>
                          <span
                            className="badge text-xs mt-1"
                            style={{ background: '#0F172A', color: cfg.color, borderColor: cfg.border }}
                          >
                            {cfg.rankLabel} Place
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ height: '6px', background: '#FFFFFF', borderRadius: '0 0 8px 8px' }} />
              </section>
            )}

            {/* ── Rankings Table (Rank 4+) ── */}
            {rankings.length > 0 && (
              <section className="space-y-4">
                <h2 className="section-heading text-xl text-white">Rankings</h2>
                <div className="rounded-3xl overflow-hidden bg-slate-900 border-3 border-white shadow-[5px_5px_0px_0px_#FFFFFF]">
                  {/* Table Header */}
                  <div
                    className="grid text-xs font-black uppercase tracking-wide px-4 py-3 bg-slate-800 border-b-2 border-white text-slate-300"
                    style={{
                      gridTemplateColumns: '50px 1fr 100px 100px 160px',
                    }}
                  >
                    <span>Rank</span>
                    <span>Student</span>
                    <span className="text-center">Quizzes</span>
                    <span className="text-center">Accuracy</span>
                    <span className="text-center">Badges</span>
                  </div>

                  {rankings.map((student, i) => {
                    const isMe = clerkUser && (student.id === clerkUser.id || student.name === (clerkUser.firstName || clerkUser.username));

                    return (
                      <div
                        key={student.id}
                        id={`rank-row-${student.rank}`}
                        className="grid items-center px-4 py-3 border-b border-slate-800"
                        style={{
                          gridTemplateColumns: '50px 1fr 100px 100px 160px',
                          background: isMe ? '#134E4A' : i % 2 === 0 ? '#1E293B' : '#0F172A',
                          borderLeft: isMe ? '4px solid #14B8A6' : undefined,
                        }}
                      >
                        {/* Rank Badge */}
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white bg-slate-800 border border-white"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          #{student.rank}
                        </div>

                        {/* Student Name + Avatar */}
                        <div className="flex items-center gap-3">
                          <StudentAvatar
                            url={student.avatar}
                            initial={student.initial}
                            size={36}
                            idx={student.rank - 1}
                          />
                          <div>
                            <p
                              className="text-sm font-black leading-tight flex items-center gap-1.5 text-white"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {student.name}
                              {isMe && (
                                <span
                                  className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500 text-slate-950"
                                >
                                  You
                                </span>
                              )}
                            </p>
                            <p className="text-xs font-semibold text-slate-400">{student.className}</p>
                          </div>
                        </div>

                        {/* Quizzes Taken */}
                        <div className="text-center font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {student.totalQuizzes}
                        </div>

                        {/* Accuracy */}
                        <div className="text-center">
                          <span
                            className="text-xs font-black px-2.5 py-1 rounded-full"
                            style={{
                              background: student.avgAccuracy >= 80 ? '#064E3B' : '#78350F',
                              color: student.avgAccuracy >= 80 ? '#6EE7B7' : '#FDE68A',
                              border: `1.5px solid ${student.avgAccuracy >= 80 ? '#10B981' : '#F59E0B'}`,
                            }}
                          >
                            {student.avgAccuracy}%
                          </span>
                        </div>

                        {/* Badges */}
                        <div className="flex items-center justify-center gap-1 flex-wrap">
                          {student.badges.map((b) => (
                            <span
                              key={b.id}
                              className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                              style={{ background: b.bg, color: b.color, border: `1px solid ${b.color}` }}
                              title={b.label}
                            >
                              {b.icon} {b.label}
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
              <div
                className="rounded-3xl flex flex-col sm:flex-row items-center gap-4 p-5 bg-teal-950 border-3 border-teal-400 shadow-[5px_5px_0px_0px_#FFFFFF]"
              >
                <div className="text-3xl">📍</div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-base font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Your Personal Rank: <span className="text-teal-300">#{currentUserRank.rank}</span> overall
                  </p>
                  <p className="text-xs font-bold text-slate-300 mt-1 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                    <span>Quizzes: <strong className="text-white">{currentUserRank.totalQuizzes}</strong></span>
                    <span>•</span>
                    <span>Accuracy: <strong className="text-white">{currentUserRank.avgAccuracy}%</strong></span>
                    <span>•</span>
                    <span>Badges: {currentUserRank.badges.map(b => b.icon).join(' ') || 'None yet'}</span>
                  </p>
                </div>
                <Link
                  href="/"
                  id="leaderboard-personal-cta"
                  className="btn-pill btn-teal text-sm flex-shrink-0"
                  style={{ boxShadow: '2px 2px 0 #FFFFFF', borderColor: '#FFFFFF' }}
                >
                  Keep Climbing 🚀
                </Link>
              </div>
            ) : (
              <div
                className="rounded-3xl flex flex-col sm:flex-row items-center gap-4 p-5 bg-slate-900 border-3 border-sky-400 shadow-[5px_5px_0px_0px_#FFFFFF]"
              >
                <div className="text-3xl">💡</div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-base font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Want your name on the Leaderboard?
                  </p>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5">
                    Sign in and attempt any quiz to claim your rank on the EduVerse Hall of Fame!
                  </p>
                </div>
                <Link
                  href="/"
                  id="leaderboard-join-cta"
                  className="btn-pill btn-mint text-sm flex-shrink-0"
                  style={{ boxShadow: '2px 2px 0 #FFFFFF', borderColor: '#FFFFFF' }}
                >
                  Start Quiz Now
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
