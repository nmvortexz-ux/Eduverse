'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MathText from '@/components/MathText';

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  text: string;
  explanation: string;
  difficulty: string;
  options: Option[];
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

function getScoreTheme(pct: number): {
  color: string; bg: string; border: string; label: string; emoji: string;
} {
  if (pct >= 80) return { color: '#6EE7B7', bg: '#064E3B', border: '#10B981', label: 'Great Job! Excellent Performance', emoji: '🏆' };
  if (pct >= 60) return { color: '#7DD3FC', bg: '#0C4A6E', border: '#0284C7', label: 'Good Work! Solid Understanding', emoji: '👍' };
  if (pct >= 40) return { color: '#FDE68A', bg: '#78350F', border: '#F59E0B', label: 'Keep Practicing! Getting There', emoji: '💪' };
  return               { color: '#FDA4AF', bg: '#881337', border: '#F43F5E', label: 'Needs Focus! Review NCERT Notes', emoji: '📚' };
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const router       = useRouter();

  const score   = parseInt(searchParams.get('score')   ?? '0');
  const correct = parseInt(searchParams.get('correct') ?? '0');
  const wrong   = parseInt(searchParams.get('wrong')   ?? '0');
  const skipped = parseInt(searchParams.get('skipped') ?? '0');
  const total   = parseInt(searchParams.get('total')   ?? '1');
  const time    = parseInt(searchParams.get('time')    ?? '0');
  const cls     = searchParams.get('class')            ?? 'Class 9';
  const subject = searchParams.get('subject')          ?? 'Science';
  const mode    = searchParams.get('mode')             ?? 'practice';

  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;
  const theme   = getScoreTheme(pct);

  // Questions for detailed review breakdown
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  useEffect(() => {
    fetch(`/api/questions?class=${encodeURIComponent(cls)}&subject=${encodeURIComponent(subject)}&limit=${total}`)
      .then((r) => r.json())
      .then((json) => {
        if (json.success && json.data) {
          setQuestions(json.data.slice(0, total));
        }
      })
      .catch((err) => console.error('Failed to fetch questions for breakdown:', err))
      .finally(() => setLoadingQuestions(false));
  }, [cls, subject, total]);

  return (
    <div className="min-h-screen text-slate-100" style={{ background: '#0B0F19', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {/* ── Score Banner ── */}
        <section
          className="rounded-3xl p-6 sm:p-10 text-center space-y-5"
          style={{
            background: theme.bg,
            border: '3px solid #FFFFFF',
            boxShadow: '6px 6px 0px 0px #FFFFFF',
          }}
        >
          <div className="text-5xl">{theme.emoji}</div>

          <div className="space-y-1.5">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-900 text-white border border-white">
              {cls} · {subject} ({mode} mode)
            </span>
            <h1
              className="text-3xl sm:text-4xl font-black text-white pt-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {correct} / {total} Correct — {pct}% Score
            </h1>
            <p className="text-base sm:text-lg font-black" style={{ color: theme.color }}>
              {theme.label}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl mx-auto pt-2">
            <div className="rounded-2xl p-4 bg-slate-900 border-2 border-white shadow-[2px_2px_0_#FFFFFF]">
              <p className="text-2xl font-black text-emerald-400">{correct}</p>
              <p className="text-xs font-bold text-slate-400">Correct</p>
            </div>
            <div className="rounded-2xl p-4 bg-slate-900 border-2 border-white shadow-[2px_2px_0_#FFFFFF]">
              <p className="text-2xl font-black text-rose-400">{wrong}</p>
              <p className="text-xs font-bold text-slate-400">Wrong</p>
            </div>
            <div className="rounded-2xl p-4 bg-slate-900 border-2 border-white shadow-[2px_2px_0_#FFFFFF]">
              <p className="text-2xl font-black text-slate-300">{skipped}</p>
              <p className="text-xs font-bold text-slate-400">Skipped</p>
            </div>
            <div className="rounded-2xl p-4 bg-slate-900 border-2 border-white shadow-[2px_2px_0_#FFFFFF]">
              <p className="text-2xl font-black text-teal-400">{formatTime(time)}</p>
              <p className="text-xs font-bold text-slate-400">Time Spent</p>
            </div>
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Link
              href={`/quiz?class=${encodeURIComponent(cls)}&subject=${encodeURIComponent(subject)}&mode=${mode}`}
              className="btn-pill btn-teal text-sm py-2.5 px-6 font-black transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
              style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}
            >
              Retake Quiz 🔄
            </Link>

            <Link
              href="/"
              className="btn-pill btn-white text-sm py-2.5 px-6 font-black transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
              style={{ boxShadow: '3px 3px 0 #FFFFFF' }}
            >
              Select Another Subject 📚
            </Link>

            <Link
              href="/dashboard"
              className="btn-pill text-sm py-2.5 px-6 font-black transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
              style={{ background: '#78350F', color: '#FDE68A', border: '2px solid #FFFFFF', boxShadow: '3px 3px 0 #FFFFFF' }}
            >
              Student Dashboard 📊
            </Link>
          </div>
        </section>

        {/* ── Detailed Question Breakdown Section with KaTeX ── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="section-heading text-2xl text-white">
              Step-by-Step NCERT Explanations
            </h2>
            <span className="text-xs font-black text-slate-300 bg-slate-800 px-3.5 py-1 rounded-full border-2 border-white">
              {questions.length} Questions Reviewed
            </span>
          </div>

          {loadingQuestions ? (
            <div className="p-8 text-center text-sm font-bold text-slate-400 bg-slate-900 rounded-3xl border-2 border-white">
              Loading NCERT solutions breakdown…
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map((q, idx) => {
                const correctOpt = q.options.find((o) => o.isCorrect);

                return (
                  <div
                    key={q.id}
                    className="rounded-3xl p-6 sm:p-7 space-y-4 transition-all"
                    style={{
                      background: '#1E293B',
                      border: '3px solid #FFFFFF',
                      boxShadow: '5px 5px 0px 0px #FFFFFF',
                    }}
                  >
                    {/* Header line */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-500">
                        Question {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {q.difficulty}
                      </span>
                    </div>

                    {/* Question text with KaTeX */}
                    <div
                      className="text-base sm:text-lg font-bold text-white leading-relaxed"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <MathText text={q.text} />
                    </div>

                    {/* Options Breakdown Grid */}
                    <div className="grid grid-cols-1 gap-2.5 pt-1">
                      {q.options.map((opt, oi) => {
                        const label = String.fromCharCode(65 + oi);
                        const isCorrectOpt = opt.isCorrect;

                        let optBg = '#0F172A';
                        let borderCol = '#334155';
                        let textColor = '#CBD5E1';
                        let tagBadge = null;

                        if (isCorrectOpt) {
                          optBg = '#064E3B';
                          borderCol = '#10B981';
                          textColor = '#6EE7B7';
                          tagBadge = (
                            <span className="ml-auto text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-600 text-white border border-white">
                              ✓ Correct Answer
                            </span>
                          );
                        }

                        return (
                          <div
                            key={opt.id}
                            className="rounded-xl p-3 flex items-center gap-3 border-2"
                            style={{
                              background: optBg,
                              borderColor: borderCol,
                            }}
                          >
                            <span
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 border"
                              style={{
                                background: isCorrectOpt ? '#10B981' : '#1E293B',
                                color: '#FFFFFF',
                                borderColor: '#FFFFFF',
                              }}
                            >
                              {label}
                            </span>
                            <span className="text-sm font-bold flex-1" style={{ color: textColor }}>
                              <MathText text={opt.text} />
                            </span>
                            {tagBadge}
                          </div>
                        );
                      })}
                    </div>

                    {/* NCERT Step-by-Step Explanation Box with KaTeX */}
                    <div
                      className="rounded-2xl p-4 sm:p-5 space-y-1.5"
                      style={{
                        background: '#0F172A',
                        border: '2px solid #F59E0B',
                        boxShadow: '3px 3px 0px 0px #F59E0B',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">💡</span>
                        <h4
                          className="text-xs font-black uppercase tracking-wider text-amber-300"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          NCERT Textbook Explanation
                        </h4>
                      </div>
                      <div className="text-sm font-bold text-slate-200 leading-relaxed">
                        <MathText text={q.explanation || `According to the NCERT ${subject} curriculum, ${correctOpt?.text || 'this answer'} is the correct concept.`} />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </section>

      </main>

      {/* ── Reusable Multi-Column Footer ── */}
      <Footer />
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-bold text-slate-400">Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
