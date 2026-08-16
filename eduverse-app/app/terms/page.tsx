'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen text-slate-100" style={{ background: '#0B0F19', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="badge" style={{ background: '#064E3B', color: '#6EE7B7', borderColor: '#10B981' }}>
            Legal Documentation
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Terms & Conditions and EULA
          </h1>
          <p className="text-xs font-bold text-slate-400">
            Last Updated: August 2026 · Governing Jurisdiction: Republic of India
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900 border-3 border-white shadow-[6px_6px_0px_0px_#FFFFFF] space-y-8 text-slate-300 leading-relaxed text-sm">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              1. Acceptance of Terms & Age Eligibility (DPDP Act 2023)
            </h2>
            <p>
              EduVerse provides educational assessment tools for students enrolled in Classes 8, 9, 10, 11, and 12. In compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act 2023)</strong> and the Indian Contract Act, 1872, any user under 18 years of age must review these Terms with a parent or legal guardian.
            </p>
            <p>
              Account creation and authentication via Clerk constitutes a binding declaration that <strong>verifiable parental or guardian consent has been obtained</strong> to access the platform and store practice analytics.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 p-5 rounded-2xl bg-amber-950/40 border-2 border-amber-500/80 shadow-[3px_3px_0px_0px_#F59E0B]">
            <h2 className="text-lg font-black text-amber-300 flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span>⚠️</span> 2. Absolute Government & Educational Board Disclaimer
            </h2>
            <p className="text-amber-100 font-bold">
              EduVerse is an entirely independent, privately developed educational technology platform. EduVerse is NOT affiliated with, endorsed by, sponsored by, or in any way officially connected to the Central Board of Secondary Education (CBSE), the National Council of Educational Research and Training (NCERT), the Ministry of Education, or the Government of India.
            </p>
            <p className="text-xs text-amber-200/90">
              Any reference to &quot;NCERT&quot;, &quot;CBSE&quot;, or chapter names is made strictly for nominative educational reference and syllabus alignment purposes under fair dealing provisions.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              3. Intellectual Property Rights & Anti-Scraping Policy
            </h2>
            <p>
              While academic concepts and syllabus outlines reside in the public domain, the specific compilation of <strong>8,800+ multiple-choice questions</strong>, proprietary step-by-step KaTeX solutions, the Dark Retro-Pop user interface, and Web Audio synthesizers are the exclusive intellectual property of EduVerse.
            </p>
            <p>
              Users are strictly prohibited from scraping, crawling, indexing, or redistributing the EduVerse question bank using automated scripts or AI models.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              4. Academic Disclaimer & ASCI Guidelines Compliance
            </h2>
            <p>
              In accordance with ASCI Guidelines for Educational Services, EduVerse is a formative revision and practice aid. EduVerse makes no representation or warranty that using this platform guarantees a specific grade, rank, board exam score, or admission.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              5. User Conduct & Leaderboard Integrity
            </h2>
            <p>
              To maintain fair play on the Hall of Fame Leaderboard, users agree not to exploit quiz timers, run automated bots, or share accounts. EduVerse reserves the right to audit quiz logs and disqualify manipulated attempts.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              6. B2C Personal Use vs. B2B Commercial Licensing
            </h2>
            <p>
              Standard student accounts are licensed exclusively for individual, non-commercial study. Commercial coaching chains and schools must acquire a separate B2B White-Label license to use EduVerse for their batches.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              7. Subscriptions, Payments & Refunds
            </h2>
            <p>
              All transactions comply with the Consumer Protection (E-Commerce) Rules, 2020. Pricing is displayed transparently in INR (₹) or USD ($). Subscriptions do not auto-debit without prior explicit consent.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              8. Grievance Redressal & Contact
            </h2>
            <p>
              For legal inquiries or grievances, contact our Grievance Officer at <code className="px-2 py-0.5 rounded bg-slate-800 text-teal-300 font-mono text-xs">grievance@eduverse.app</code>.
            </p>
          </section>

          {/* Back CTA */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="btn-pill btn-teal text-sm py-2.5 px-6 inline-flex items-center gap-2"
              style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}
            >
              ← Back to EduVerse Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
