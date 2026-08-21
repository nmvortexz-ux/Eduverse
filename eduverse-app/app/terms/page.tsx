'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Inline SVG Icons ────────────────────────────────────────────────────────
function IconArrowLeft({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  );
}

function IconShieldCheck({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconAlertTriangle({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

const SECTIONS = [
  { id: 'nature-scope', label: '1. Platform Nature & Scope' },
  { id: 'account-auth', label: '2. Account & Fair Usage' },
  { id: 'ai-disclaimer', label: '3. AI Content Disclaimer' },
  { id: 'intellectual-property', label: '4. Intellectual Property' },
  { id: 'privacy-telemetry', label: '5. Data Privacy & Student Protection' },
  { id: 'liability-modifications', label: '6. Limitation of Liability' },
  { id: 'grievance-contact', label: '7. Grievance Redressal & Contact' },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen text-slate-100 bg-[#0b1329]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Top Header & Breadcrumbs ── */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <IconArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00df9a] text-xs font-semibold">
              <IconShieldCheck className="w-3.5 h-3.5" />
              <span>Legal Compliance · DPDP Act 2023 Aligned</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              Last Updated: August 2026 · Official Terms of Service for EduVerse (<code className="text-slate-300">https://edustd.me</code>)
            </p>
          </div>
        </div>

        {/* ── 2-Column Responsive Layout (Sticky Sidebar + Main Content) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24">
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl shadow-black/20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Table of Contents
              </h3>
              <nav className="space-y-1.5">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs font-medium text-slate-400 hover:text-[#00df9a] hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all"
                  >
                    {sec.label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <Link
                  href="/privacy"
                  className="block text-xs font-semibold text-slate-300 hover:text-[#00df9a] transition-colors"
                >
                  View Privacy Policy →
                </Link>
                <a
                  href="mailto:nmvortexz@gmail.com"
                  className="block text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Contact Legal Support
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-10 text-slate-300 text-sm leading-relaxed shadow-xl shadow-black/20">
              
              {/* Introduction Note */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                Welcome to <strong>EduVerse</strong> (&quot;the Platform&quot;), hosted at <strong className="text-slate-200">https://edustd.me</strong>. By accessing our platform, registering an account, or attempting any educational quizzes, you agree to comply with and be bound by the following Terms and Conditions. Please read them thoroughly.
              </div>

              {/* Section 1 */}
              <section id="nature-scope" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">1.</span> Platform Nature & Scope
                </h2>
                <p>
                  EduVerse is an educational self-assessment platform designed to assist Class 8 to 12 Commerce and Secondary students in mastering curriculum concepts through interactive quizzes, gamified challenges (Chapter Boss Fights), and adaptive analytics.
                </p>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-xs space-y-2">
                  <div className="font-bold flex items-center gap-1.5 text-amber-300">
                    <IconAlertTriangle className="w-4 h-4" />
                    Official Institutional Disclaimer:
                  </div>
                  <p>
                    EduVerse is an independent digital study aid. EduVerse is <strong>NOT officially affiliated with, endorsed by, sponsored by, or operated by</strong> the National Council of Educational Research and Training (NCERT), the Central Board of Secondary Education (CBSE), the Ministry of Education, or any State Education Board. All syllabus references and book chapter titles are used nominatively under fair dealing for educational alignment.
                  </p>
                </div>
              </section>

              <hr className="border-slate-800" />

              {/* Section 2 */}
              <section id="account-auth" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">2.</span> Account Responsibility & Fair Usage
                </h2>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  <li>
                    <strong>Authentication:</strong> User authentication and session management are securely facilitated via Clerk. You are responsible for maintaining the confidentiality of your login credentials.
                  </li>
                  <li>
                    <strong>Eligibility:</strong> Students under 18 years of age should access EduVerse with the consent of a parent or legal guardian in compliance with applicable digital protection standards.
                  </li>
                  <li>
                    <strong>Fair Play Policy:</strong> Scripting, automated botting, artificial leaderboard manipulation, or scraping the question database is strictly prohibited. Accounts engaging in suspicious attempt patterns will be disqualified from official leaderboards.
                  </li>
                </ul>
              </section>

              <hr className="border-slate-800" />

              {/* Section 3 */}
              <section id="ai-disclaimer" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">3.</span> AI-Generated Content & Academic Disclaimer
                </h2>
                <p>
                  Certain explanatory features, doubt resolution prompts, and adaptive tips on EduVerse are augmented by third-party Large Language Model (LLM) interfaces (such as Groq, Gemini, and OpenAI APIs).
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  While our algorithms and prompts are tailored for high educational rigor, AI models may occasionally produce simplified phrasing or inadvertent nuances. Students are encouraged to use EduVerse as a revision companion alongside their prescribed official NCERT and board textbooks. EduVerse does not guarantee specific exam outcomes or percentage guarantees.
                </p>
              </section>

              <hr className="border-slate-800" />

              {/* Section 4 */}
              <section id="intellectual-property" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">4.</span> Intellectual Property Rights
                </h2>
                <p>
                  All proprietary user interface designs, the EduVerse monogram logo, custom question compilations, KaTeX mathematical formulas, and unique interactive gamification mechanics (such as Chapter Boss Fights) remain the intellectual property of EduVerse.
                </p>
                <p className="text-slate-400 text-xs">
                  Users are granted a personal, non-exclusive, non-transferable license to access and practice quiz modules for private study purposes only.
                </p>
              </section>

              <hr className="border-slate-800" />

              {/* Section 5 */}
              <section id="privacy-telemetry" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">5.</span> Data Privacy & Telemetry
                </h2>
                <p>
                  We prioritize data minimization. Telemetry collected is strictly restricted to quiz performance scores, XP points, selected subject streams, and anonymous ranking metrics.
                </p>
                <p className="text-slate-400 text-xs">
                  We <strong>never sell, rent, or lease</strong> student profile data to commercial third-party advertisers. For complete details, consult our dedicated <Link href="/privacy" className="text-[#00df9a] underline hover:text-emerald-300">Privacy Policy</Link>.
                </p>
              </section>

              <hr className="border-slate-800" />

              {/* Section 6 */}
              <section id="liability-modifications" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">6.</span> Limitation of Liability & Terms Modification
                </h2>
                <p>
                  EduVerse is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind regarding uninterrupted server availability, zero latency, or third-party cloud hosting disruptions.
                </p>
                <p className="text-slate-400 text-xs">
                  We reserve the right to modify or replace these Terms at our discretion. Any revisions will be reflected on this page with an updated timestamp. Continued usage of the platform post-publication constitutes acceptance of the amended terms.
                </p>
              </section>

              <hr className="border-slate-800" />

              {/* Section 7 */}
              <section id="grievance-contact" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">7.</span> Grievance Redressal & Contact Information
                </h2>
                <p>
                  If you have questions regarding these Terms, syllabus corrections, or feedback on question accuracy, please direct all communications to our administrative support desk:
                </p>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-semibold text-white">EduVerse Legal & Support Desk</p>
                    <p className="text-slate-400">Response Time: Within 24–48 business hours</p>
                  </div>
                  <a
                    href="mailto:nmvortexz@gmail.com"
                    className="px-4 py-2 rounded-lg bg-[#00df9a]/10 border border-[#00df9a]/30 text-[#00df9a] hover:bg-[#00df9a]/20 font-semibold transition-colors"
                  >
                    nmvortexz@gmail.com
                  </a>
                </div>
              </section>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
