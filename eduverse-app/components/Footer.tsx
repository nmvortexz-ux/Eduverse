'use client';

import Link from 'next/link';

function EduVerseLogo() {
  return (
    <Link href="/" id="footer-logo" aria-label="EduVerse home">
      <div className="flex items-center gap-2 select-none">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.6rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#14B8A6' }}>Edu</span>
          <span
            style={{
              color: '#0B0F19',
              background: '#FFFFFF',
              borderRadius: '0.35rem',
              padding: '0 6px 2px',
              marginLeft: '3px',
              display: 'inline-block',
              boxShadow: '2px 2px 0px 0px #14B8A6',
            }}
          >
            Verse
          </span>
        </span>
        <span
          className="text-xs font-black px-2.5 py-0.5 rounded-full"
          style={{ background: '#134E4A', color: '#5EEAD4', border: '1.5px solid #5EEAD4' }}
        >
          NCERT Portal
        </span>
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t-4 border-slate-700/80 transition-all text-slate-300"
      style={{ background: '#0F172A' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">

        {/* ── 3-Column Grid Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <EduVerseLogo />
            <p className="text-sm font-semibold text-slate-400 max-w-sm leading-relaxed">
              Empowering Class 8 to 12 Commerce students with chapter-wise interactive quizzes, step-by-step NCERT explanations, and real-time performance analytics.
            </p>
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/60">
                ✨ 8,880+ Questions
              </span>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-teal-950/80 text-teal-300 border border-teal-500/60">
                🎯 Instant Feedback
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4
              className="text-sm font-black uppercase tracking-wider text-slate-100"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-bold text-slate-400">
              <li>
                <Link href="/" className="hover:text-teal-300 hover:underline transition-colors flex items-center gap-1.5">
                  🚀 Practice Quizzes
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-teal-300 hover:underline transition-colors flex items-center gap-1.5">
                  🏆 Hall of Fame Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-teal-300 hover:underline transition-colors flex items-center gap-1.5">
                  📊 Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: NCERT Subjects & Classes (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4
              className="text-sm font-black uppercase tracking-wider text-slate-100"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              NCERT Coverage
            </h4>
            
            {/* Class Chips */}
            <div className="flex flex-wrap gap-1.5">
              {['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                <span
                  key={cls}
                  className="text-xs font-black px-2.5 py-0.5 rounded-full"
                  style={{ background: '#1E293B', color: '#FCD34D', border: '1.5px solid #F59E0B' }}
                >
                  {cls}
                </span>
              ))}
            </div>

            {/* Subject Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                { label: 'Science', emoji: '🔬', bg: '#064E3B', color: '#6EE7B7' },
                { label: 'Mathematics', emoji: '📐', bg: '#881337', color: '#FDA4AF' },
                { label: 'Accountancy', emoji: '📊', bg: '#0C4A6E', color: '#7DD3FC' },
                { label: 'Business Studies', emoji: '💼', bg: '#7C2D12', color: '#FDBA74' },
                { label: 'Economics', emoji: '📈', bg: '#064E3B', color: '#6EE7B7' },
                { label: 'English', emoji: '📖', bg: '#78350F', color: '#FDE68A' },
                { label: 'Hindi Grammar', emoji: '🅰️', bg: '#581C87', color: '#D8B4FE' },
                { label: 'Social Studies', emoji: '🏛️', bg: '#064E3B', color: '#6EE7B7' },
              ].map((s) => (
                <span
                  key={s.label}
                  className="text-xs font-bold px-2 py-0.5 rounded-lg border border-slate-700"
                  style={{ background: s.bg, color: s.color }}
                >
                  {s.emoji} {s.label}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ── Polished Bottom Copyright Strip ── */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
          <p>© 2026 EduVerse. All rights reserved.</p>

          <div className="inline-flex items-center gap-2 flex-wrap text-slate-400 font-bold">
            <span>Designed &amp; Developed with ❤️ by</span>
            <span
              className="font-bold text-xs tracking-wide text-white bg-[#0D9488] px-3.5 py-1 rounded-full border border-teal-400 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 transition-transform cursor-default"
            >
              Ved (EduVerse)
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
