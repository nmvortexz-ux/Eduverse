'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';

function EduVerseLogo() {
  return (
    <Link href="/" id="navbar-logo" aria-label="EduVerse home" className="flex items-center gap-2.5 group">
      <div className="flex items-center select-none transition-transform group-hover:scale-105">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.6rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          <span className="text-teal-400">Edu</span>
          <span
            style={{
              color: '#0B0F19',
              background: '#FFFFFF',
              borderRadius: '0.4rem',
              padding: '1px 7px 3px',
              marginLeft: '3px',
              display: 'inline-block',
              boxShadow: '2px 2px 0px 0px #14B8A6',
            }}
          >
            Verse
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Leaderboard', href: '/leaderboard' },
  ];

  const displayName = user ? (user.firstName || user.username || 'Learner') : 'Learner';

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0B0F19]/95 border-b-2 border-slate-800 transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 max-w-6xl mx-auto">
        {/* Left: Brand Logo */}
        <EduVerseLogo />

        {/* Center: Clean Minimalist Nav Bar (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.06)]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 border-2 border-teal-400 shadow-[2px_2px_0px_0px_#FFFFFF] font-black'
                    : 'text-slate-300 border-2 border-transparent hover:text-white hover:border-slate-700 hover:bg-slate-800/80 hover:-translate-y-0.5'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth Controls */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <div className="flex items-center gap-2 pl-3 pr-1.5 py-1 rounded-2xl bg-slate-900 border-2 border-slate-700 shadow-[2px_2px_0px_0px_#FFFFFF] hover:border-teal-400 transition-all">
              <span className="text-xs font-bold text-slate-200 tracking-wide hidden sm:inline select-none">
                {displayName}
              </span>
              <div className="flex items-center">
                <UserButton />
              </div>
            </div>
          ) : (
            <Link
              href="/sign-in"
              id="navbar-sign-in"
              className="btn-pill btn-teal text-xs font-black py-2 px-5 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer select-none"
              style={{
                boxShadow: '2px 2px 0px 0px #FFFFFF',
                borderColor: '#FFFFFF',
                border: '2px solid #FFFFFF',
              }}
            >
              Sign In
            </Link>
          )}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border-2 border-slate-700 text-slate-300 hover:text-white hover:border-white transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="text-base">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-slate-950/95 border-b-2 border-slate-800 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-3 gap-2 pt-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center p-2.5 rounded-xl text-xs font-black transition-all ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 border-2 border-white shadow-[2px_2px_0px_0px_#FFFFFF]'
                      : 'bg-slate-900 text-slate-200 border-2 border-slate-700 hover:border-teal-400'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
