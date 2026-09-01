'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import EduVerseLogo from './EduVerseLogo';

export default function Navbar() {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const IconMenu = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
  const IconX = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Leaderboard', href: '/leaderboard' },
  ];

  const displayName = user ? (user.firstName || user.username || 'Learner') : 'Learner';

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0b1329]/95 border-b border-slate-800 transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-6xl mx-auto">
        {/* Left: Brand Logo */}
        <Link href="/" id="navbar-logo" aria-label="EduVerse home" className="group">
          <EduVerseLogo className="w-20 sm:w-24 h-auto text-[#00df9a] group-hover:text-emerald-400 transition-colors" />
        </Link>

        {/* Center: Clean Minimalist Nav Bar (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 bg-slate-900/80 px-6 py-2 rounded-full border border-slate-800/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#00df9a]'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00df9a] rounded-t-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth Controls */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <div className="flex items-center gap-3 pl-4 pr-2 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/50 hover:border-slate-700 transition-colors">
              <span className="text-xs font-semibold text-slate-300 hidden sm:inline select-none">
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
              className="bg-[#00df9a] hover:bg-emerald-400 text-[#0b1329] text-xs font-bold py-2 px-6 rounded-full transition-colors inline-flex items-center justify-center cursor-pointer select-none"
            >
              Sign In
            </Link>
          )}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-[#0b1329] border-b border-slate-800 space-y-2">
          <div className="flex flex-col gap-2 pt-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center min-h-[44px] p-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-slate-800/80 text-[#00df9a]'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
