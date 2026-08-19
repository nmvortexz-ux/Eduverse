'use client';

import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#0B0F19] px-4 py-12 relative overflow-hidden text-slate-100"
      style={{
        backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(13, 148, 136, 0.2), rgba(255, 255, 255, 0))',
      }}
    >
      {/* Background Decorative Retro Grid / Dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Branding Header */}
      <div className="mb-8 text-center relative z-10 space-y-2">
        <Link href="/" className="inline-block transition-transform hover:scale-105">
          <div className="flex items-center justify-center gap-0 select-none">
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2.2rem',
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
                  borderRadius: '0.45rem',
                  padding: '0 8px 3px',
                  marginLeft: '4px',
                  display: 'inline-block',
                  boxShadow: '3px 3px 0px 0px #14B8A6',
                }}
              >
                Verse
              </span>
            </span>
          </div>
        </Link>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Create Your Student Account
        </p>
      </div>

      {/* Clerk SignUp Component with Dark Retro-Pop Styling */}
      <div className="relative z-10">
        <SignUp
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: '#0D9488',
              colorBackground: '#0F172A',
              colorText: '#FFFFFF',
              colorTextSecondary: '#94A3B8',
              colorInputBackground: '#020617',
              colorInputText: '#FFFFFF',
              borderRadius: '0.75rem',
            } as any,
            elements: {
              rootBox: 'mx-auto',
              card: 'bg-slate-900 border-2 border-slate-600 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-2xl p-6 sm:p-8',
              headerTitle: 'text-2xl font-black text-white tracking-tight',
              headerSubtitle: 'text-xs font-semibold text-slate-300',
              socialButtonsBlockButton:
                'bg-slate-800 border-2 border-slate-600 hover:border-teal-400 text-white transition-all shadow-md hover:-translate-y-0.5 rounded-xl font-bold py-2.5',
              socialButtonsBlockButtonText: 'font-bold text-white text-xs',
              dividerLine: 'bg-slate-700',
              dividerText: 'text-xs font-bold text-slate-400 uppercase tracking-wider',
              formFieldLabel: 'text-xs font-black uppercase tracking-wide text-slate-200 mb-1',
              formFieldInput:
                '!bg-slate-950 !text-white !border-2 !border-slate-700 focus:!border-teal-400 !placeholder-slate-500 rounded-xl py-3 px-3.5 text-sm font-semibold transition-colors',
              formFieldInputShowPasswordButton: '!text-slate-300 hover:!text-white',
              formFieldInputShowPasswordIcon: '!w-5 !h-5 !text-slate-300',
              otpCodeField: 'my-4 flex flex-col items-center justify-center',
              otpCodeFieldInputs: 'flex flex-row items-center justify-center gap-2',
              otpCodeFieldInput:
                '!w-11 !h-14 !text-xl !font-black !text-center !bg-slate-950 !text-white !border-2 !border-slate-700 focus:!border-teal-400 !rounded-xl !p-0 shadow-sm transition-all',
              formResendCodeLink: '!text-teal-400 hover:!text-teal-300 !font-bold !text-xs !underline !mt-2',
              formButtonPrimary:
                'btn-pill bg-[#0D9488] hover:bg-[#0F766E] border-2 border-white shadow-[3px_3px_0px_0px_#FFFFFF] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-white font-black text-sm py-3 rounded-full mt-3',
              footerActionLink: 'text-teal-400 hover:text-teal-300 font-black text-xs underline underline-offset-4',
              footerActionText: 'text-xs font-semibold text-slate-300',
              identityPreview: 'bg-slate-800 border border-slate-700 rounded-xl p-2.5',
              identityPreviewText: 'text-slate-100 font-bold',
              identityPreviewEditButton: 'text-teal-400 hover:text-teal-300 font-bold',
            },
          } as any}
        />
      </div>

      {/* Back to Home Link */}
      <div className="mt-8 text-center relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors underline"
        >
          ← Back to EduVerse Home
        </Link>
      </div>
    </div>
  );
}
