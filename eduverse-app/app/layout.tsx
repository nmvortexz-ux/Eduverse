import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

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
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#0D9488',          // Teal accent for buttons & focus
          colorBackground: '#0F172A',       // Slate-900 card background
          colorText: '#FFFFFF',             // Pure crisp white for primary text
          colorTextSecondary: '#CBD5E1',    // Slate-300 for readable secondary text
          colorInputBackground: '#020617',  // Slate-950 input background
          colorInputText: '#FFFFFF',        // Pure white input text
          borderRadius: '0.75rem',
        } as any,
        elements: {
          // Outer Modal Card with distinct outline
          card: 'bg-slate-900 border-2 border-slate-600 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-2xl p-6',
          modalBackdrop: 'bg-black/80 backdrop-blur-sm',

          // Headers & Subtitles (Force High Visibility)
          headerTitle: 'text-2xl font-bold !text-white tracking-wide',
          headerSubtitle: '!text-slate-300 text-sm font-medium mt-1',

          // Social Buttons (Google Sign In)
          socialButtonsBlockButton:
            'bg-slate-800 border border-slate-600 hover:border-teal-400 !text-white font-semibold transition-all hover:bg-slate-750 py-2.5',
          socialButtonsBlockButtonText: '!text-white font-medium',
          socialButtonsProviderIcon: 'mr-2',

          // Divider (OR line)
          dividerLine: 'bg-slate-700',
          dividerText: '!text-slate-400 font-bold uppercase text-xs tracking-wider',

          // Input Fields & Labels
          formFieldLabel: '!text-slate-200 font-semibold text-sm mb-1.5',
          formFieldInput:
            'bg-slate-950 border-2 border-slate-700 !text-white placeholder-slate-500 rounded-lg focus:border-teal-400 focus:ring-0 transition-colors py-2.5 px-3',

          // Primary CTA Button
          formButtonPrimary:
            'bg-[#0D9488] hover:bg-[#0F766E] !text-white font-bold tracking-wide shadow-md transition-all py-3 rounded-lg',

          // Footer Links
          footer: 'bg-slate-950/60 border-t border-slate-800/80 rounded-b-2xl mt-4',
          footerActionText: '!text-slate-300 font-medium',
          footerActionLink: '!text-teal-400 hover:!text-teal-300 font-bold underline transition-colors',

          // Close Button
          modalCloseButton: '!text-slate-400 hover:!text-white hover:bg-slate-800 rounded-lg p-1.5 transition-colors',

          // ─── UserButton Dropdown Popover Customizations ───
          userButtonAvatarBox: 'border-2 border-teal-400 shadow-sm',
          userButtonPopoverCard:
            'bg-slate-900 border-2 border-slate-600 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] rounded-xl mt-2 p-1.5',
          userPreviewMainIdentifier: '!text-white font-bold text-base',
          userPreviewSecondaryIdentifier: '!text-slate-300 text-sm',
          userButtonPopoverActionButton:
            'hover:bg-slate-800 transition-colors p-2 rounded-lg mx-1',
          userButtonPopoverActionButtonText: '!text-slate-100 font-medium',
          userButtonPopoverActionButtonIcon: '!text-teal-400',
          userButtonPopoverFooter: 'bg-slate-950/80 border-t border-slate-800 mt-1',

          // ─── User Profile ("Manage Account") Modal Overrides ───
          navbar: 'bg-slate-950 border-r border-slate-800',
          navbarTitle: '!text-white font-bold',
          navbarSubtitle: '!text-slate-400',
          navbarButton: '!text-slate-300 hover:!text-white hover:bg-slate-800 rounded-lg transition-colors',
          navbarButtonIcon: '!text-teal-400',
          pageScrollBox: 'bg-slate-900',
          profileSectionTitleText: '!text-white font-bold text-base',
          profileSectionTitle: '!text-slate-200 font-bold',
          profileSectionContent: '!text-slate-100',
          profileSectionPrimaryButton: '!text-teal-400 hover:!text-teal-300 font-bold',
          accordionTriggerButton: '!text-white font-bold hover:!text-teal-300',
          badge: '!text-slate-300 bg-slate-800 border border-slate-700',
        },
      } as any}
    >
      <html lang="en" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body
          className="bg-[#0B0F19] text-white min-h-screen antialiased selection:bg-teal-500 selection:text-white"
          style={{ background: '#0B0F19', color: '#F8FAFC' }}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}