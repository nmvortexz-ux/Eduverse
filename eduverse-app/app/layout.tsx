import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
import "katex/dist/katex.min.css";
import "./globals.css";

// ─── Font Optimization (Zero CLS with next/font/google) ───────────────────────
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EduVerse – Your Intelligent Quiz Platform",
  description:
    "Practice Class 8 to 12 Commerce questions across all subjects with EduVerse. Adaptive chapter-wise quizzes, daily challenges, and real-time performance analytics.",
  keywords: "quiz, education, class 8, class 9, class 10, class 11, class 12, commerce, CBSE, NCERT, practice questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    "pk_live_Y2xlcmsuZWR1c3RkLm1lJA";

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#00df9a',          // Brand emerald accent
          colorBackground: '#0b1329',       // Deep navy/slate background
          colorText: '#FFFFFF',             // Crisp white for primary text
          colorTextSecondary: '#94a3b8',    // Muted slate text
          colorInputBackground: '#070d1e',  // Dark input background
          colorInputText: '#FFFFFF',        // Pure white input text
          borderRadius: '0.75rem',
        } as any,
        elements: {
          // Outer Modal Card
          card: 'bg-slate-900 border border-slate-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-2xl p-6',
          modalBackdrop: 'bg-black/80 backdrop-blur-sm',

          // Headers & Subtitles
          headerTitle: 'text-2xl font-bold !text-white tracking-wide',
          headerSubtitle: '!text-slate-400 text-sm font-medium mt-1',

          // Social Buttons (Google Sign In)
          socialButtonsBlockButton:
            'bg-slate-800/80 border border-slate-700 hover:border-emerald-400 !text-white font-semibold transition-all py-2.5',
          socialButtonsBlockButtonText: '!text-white font-medium',
          socialButtonsProviderIcon: 'mr-2',

          // Divider (OR line)
          dividerLine: 'bg-slate-800',
          dividerText: '!text-slate-500 font-bold uppercase text-xs tracking-wider',

          // Input Fields & Labels
          formFieldLabel: '!text-slate-300 font-semibold text-sm mb-1.5',
          formFieldInput:
            'bg-slate-950 border border-slate-700 !text-white placeholder-slate-500 rounded-lg focus:border-emerald-400 focus:ring-0 transition-colors py-2.5 px-3',

          // Primary CTA Button
          formButtonPrimary:
            'bg-[#00df9a] hover:bg-emerald-400 !text-[#0b1329] font-bold tracking-wide shadow-md transition-all py-3 rounded-lg',

          // Footer Links
          footer: 'bg-slate-950/60 border-t border-slate-800/80 rounded-b-2xl mt-4',
          footerActionText: '!text-slate-400 font-medium',
          footerActionLink: '!text-[#00df9a] hover:!text-emerald-300 font-semibold underline transition-colors',

          // Close Button
          modalCloseButton: '!text-slate-400 hover:!text-white hover:bg-slate-800 rounded-lg p-1.5 transition-colors',

          // UserButton Popover
          userButtonAvatarBox: 'border-2 border-emerald-400 shadow-sm',
          userButtonPopoverCard:
            'bg-slate-900 border border-slate-700 shadow-xl rounded-xl mt-2 p-1.5',
          userPreviewMainIdentifier: '!text-white font-bold text-base',
          userPreviewSecondaryIdentifier: '!text-slate-400 text-sm',
          userButtonPopoverActionButton:
            'hover:bg-slate-800 transition-colors p-2 rounded-lg mx-1',
          userButtonPopoverActionButtonText: '!text-slate-100 font-medium',
          userButtonPopoverActionButtonIcon: '!text-emerald-400',
          userButtonPopoverFooter: 'bg-slate-950/80 border-t border-slate-800 mt-1',
        },
      } as any}
    >
      <html lang="en" className={`dark ${plusJakartaSans.variable}`}>
        <body
          className={`${plusJakartaSans.className} bg-[#0b1329] text-white min-h-screen antialiased selection:bg-emerald-500 selection:text-white`}
        >
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </body>
      </html>
    </ClerkProvider>
  );
}