'use client';

import Link from 'next/link';
import EduVerseLogo from './EduVerseLogo';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* ── 4-Column Grid Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mb-12">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col space-y-4">
            <Link href="/" aria-label="EduVerse home" className="inline-block hover:text-white transition-colors text-slate-200">
              <EduVerseLogo className="w-24 h-auto" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering Class 8 to 12 Commerce students with chapter-wise interactive quizzes, step-by-step NCERT explanations, and real-time performance analytics.
            </p>
            <a 
              href="mailto:nmvortexz@gmail.com"
              className="text-sm font-medium hover:text-[#00df9a] transition-colors"
            >
              Contact / Support
            </a>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#00df9a] transition-colors">
                  Practice Quizzes
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-[#00df9a] transition-colors">
                  Hall of Fame Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#00df9a] transition-colors">
                  Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Classes */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Classes
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                <li key={cls}>
                  <Link href={`/?class=${cls.replace(' ', '')}`} className="hover:text-[#00df9a] transition-colors">
                    {cls}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subjects */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Subjects
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Accountancy',
                'Business Studies',
                'Economics',
                'Mathematics',
                'Science',
                'English',
                'Hindi Grammar',
                'Social Studies'
              ].map((subject) => (
                <li key={subject}>
                  <Link href={`/?subject=${encodeURIComponent(subject)}`} className="hover:text-[#00df9a] transition-colors">
                    {subject}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Polished Bottom Copyright Strip ── */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 EduVerse. All rights reserved.</p>
          <p className="hover:text-slate-300 transition-colors cursor-default">
            Designed & Developed by Ved
          </p>
        </div>

      </div>
    </footer>
  );
}
