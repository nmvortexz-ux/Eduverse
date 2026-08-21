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

function IconLock({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconCheckCircle({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const SECTIONS = [
  { id: 'data-collection', label: '1. Information We Collect' },
  { id: 'data-usage', label: '2. Purpose of Data Processing' },
  { id: 'non-sale', label: '3. Zero-Sale & Student Protection' },
  { id: 'ai-processing', label: '4. Third-Party AI Services' },
  { id: 'dpdp-compliance', label: '5. Minor Safety & DPDP Act 2023' },
  { id: 'user-rights', label: '6. Data Rights & Account Erasure' },
  { id: 'privacy-contact', label: '7. Privacy Contact & Officer' },
];

export default function PrivacyPolicyPage() {
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
              <IconLock className="w-3.5 h-3.5" />
              <span>Student Privacy Protected · Zero Ad Tracking</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              Last Updated: August 2026 · Transparency & Data Security Commitment for EduVerse (<code className="text-slate-300">https://edustd.me</code>)
            </p>
          </div>
        </div>

        {/* ── 2-Column Responsive Layout (Sticky Sidebar + Main Content) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24">
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl shadow-black/20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Privacy Navigation
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
                  href="/terms"
                  className="block text-xs font-semibold text-slate-300 hover:text-[#00df9a] transition-colors"
                >
                  View Terms & Conditions →
                </Link>
                <a
                  href="mailto:nmvortexz@gmail.com"
                  className="block text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Request Data Deletion
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-10 text-slate-300 text-sm leading-relaxed shadow-xl shadow-black/20">
              
              {/* Core Commitment Badge */}
              <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-200/90 text-xs space-y-2">
                <div className="font-bold flex items-center gap-2 text-[#00df9a] text-sm">
                  <IconCheckCircle className="w-4 h-4" />
                  Our Privacy Principle:
                </div>
                <p className="leading-relaxed">
                  EduVerse is designed specifically for academic revision and self-study. We believe student data belongs solely to the student. We do not display intrusive third-party ads, we do not track browsing history across other sites, and we never sell personal information.
                </p>
              </div>

              {/* Section 1 */}
              <section id="data-collection" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">1.</span> Information We Collect
                </h2>
                <p>
                  To provide seamless quiz functionality and progress metrics, we collect minimal data:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-xs sm:text-sm">
                  <li>
                    <strong>Authentication Data:</strong> User identity, email, and display avatar managed via Clerk Authentication.
                  </li>
                  <li>
                    <strong>Academic Assessment Metrics:</strong> Quiz score, time taken per question, accuracy percentages, XP level, and chosen subject stream (e.g., Class 12 Accounts).
                  </li>
                  <li>
                    <strong>Technical Telemetry:</strong> Anonymized error logging and latency monitoring for platform uptime.
                  </li>
                </ul>
              </section>

              <hr className="border-slate-800" />

              {/* Section 2 */}
              <section id="data-usage" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">2.</span> Purpose of Data Processing
                </h2>
                <p>
                  We utilize the collected information strictly for legitimate educational functions:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-xs sm:text-sm">
                  <li>Generating your personal Student Analytics Dashboard.</li>
                  <li>Calculating XP progression, levels, and Hall of Fame Leaderboard rankings.</li>
                  <li>Providing dynamic difficulty adaptation during Chapter Boss Fights.</li>
                </ul>
              </section>

              <hr className="border-slate-800" />

              {/* Section 3 */}
              <section id="non-sale" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">3.</span> Zero-Sale of Student Information
                </h2>
                <p>
                  EduVerse enforces an absolute <strong>Zero-Sale Policy</strong>. We do not sell, license, broker, or trade student personal records or quiz performance histories to data brokers, commercial advertisers, or third-party recruiters.
                </p>
              </section>

              <hr className="border-slate-800" />

              {/* Section 4 */}
              <section id="ai-processing" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">4.</span> Third-Party AI Services & Boundaries
                </h2>
                <p>
                  When you request AI doubt explanations or conceptual hints, only the specific quiz question text and selected option are transmitted to LLM API providers (e.g., Groq / Google Gemini APIs).
                </p>
                <p className="text-xs text-slate-400">
                  Your personal identity, email address, and private student profile are <strong>never sent</strong> in AI prompt payloads.
                </p>
              </section>

              <hr className="border-slate-800" />

              {/* Section 5 */}
              <section id="dpdp-compliance" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">5.</span> Minor Safety & DPDP Act 2023 Alignment
                </h2>
                <p>
                  In alignment with India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act 2023)</strong>:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-xs sm:text-sm">
                  <li>We do not track behavioral profiling or serve targeted behavioral advertisements to minor students.</li>
                  <li>Parental and guardian consent is deemed established through verified account authentication via Clerk.</li>
                </ul>
              </section>

              <hr className="border-slate-800" />

              {/* Section 6 */}
              <section id="user-rights" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">6.</span> Data Rights & Account Erasure
                </h2>
                <p>
                  You have full control over your educational record:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-xs sm:text-sm">
                  <li><strong>Right to Access:</strong> View all your attempt histories anytime via the Student Dashboard.</li>
                  <li><strong>Right to Erasure:</strong> You may request complete deletion of your account and quiz records by emailing our team.</li>
                </ul>
              </section>

              <hr className="border-slate-800" />

              {/* Section 7 */}
              <section id="privacy-contact" className="space-y-3 scroll-mt-24">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-[#00df9a]">7.</span> Privacy Contact & Grievance Officer
                </h2>
                <p>
                  For privacy queries, data access requests, or deletion processing:
                </p>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-semibold text-white">EduVerse Privacy Officer</p>
                    <p className="text-slate-400">Official Inquiries: Data & Compliance</p>
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
