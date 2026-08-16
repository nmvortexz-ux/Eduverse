'use client';

import { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MathText from '@/components/MathText';
import { soundManager } from '@/lib/sound';

// ─── Types ────────────────────────────────────────────────────────────────────
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

type SelectedAnswers = Record<string, string>; // questionId → optionId
type BookmarkedSet  = Set<string>;             // questionId

interface SavedQuizState {
  currentIndex: number;
  selected: SelectedAnswers;
  bookmarked: string[];
  remaining: number;
  elapsed: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function shuffleOptions(options: Option[]): Option[] {
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const EXAM_MINUTES = 30;

// ─── Difficulty badge styles (Dark Retro) ─────────────────────────────────────
const difficultyStyle: Record<string, { color: string; bg: string; border: string }> = {
  Easy:       { color: '#6EE7B7', bg: '#064E3B', border: '#10B981' },
  Medium:     { color: '#FDE68A', bg: '#78350F', border: '#F59E0B' },
  Hard:       { color: '#FDA4AF', bg: '#881337', border: '#F43F5E' },
  'Very Hard':{ color: '#D8B4FE', bg: '#581C87', border: '#A855F7' },
};

// ─── Quiz Content ─────────────────────────────────────────────────────────────
function QuizContent() {
  const searchParams = useSearchParams();
  const router       = useRouter();

  const cls        = searchParams.get('class')      ?? 'Class 9';
  const subject    = searchParams.get('subject')    ?? 'Science';
  const difficulty = searchParams.get('difficulty') ?? 'Mixed';
  const mode       = searchParams.get('mode')       ?? 'practice';
  const isExam     = mode === 'exam';

  const storageKey = `eduverse_quiz_${cls}_${subject}_${mode}`;

  // Data
  const [questions,     setQuestions]     = useState<Question[]>([]);
  const [loading,       setLoading]       = useState(true);
  const [error,         setError]         = useState('');

  // Quiz state
  const [currentIndex,  setCurrentIndex]  = useState(0);
  const [selected,      setSelected]      = useState<SelectedAnswers>({});
  const [bookmarked,    setBookmarked]    = useState<BookmarkedSet>(new Set());
  const [revealed,      setRevealed]      = useState<Set<string>>(new Set());
  const [direction,     setDirection]     = useState<1 | -1>(1);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showPaletteDrawer, setShowPaletteDrawer] = useState(false);
  const [showResumeModal, setShowResumeModal]   = useState(false);
  const [pendingSavedState, setPendingSavedState] = useState<SavedQuizState | null>(null);
  const [isMuted, setIsMuted]             = useState(false);

  // Timer
  const [elapsed,       setElapsed]       = useState(0);
  const [remaining,     setRemaining]     = useState(EXAM_MINUTES * 60);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize mute state
  useEffect(() => {
    setIsMuted(soundManager.isMuted);
  }, []);

  const handleToggleMute = () => {
    const nextMuted = soundManager.toggleMute();
    setIsMuted(nextMuted);
  };

  // Fetch questions and check localStorage
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const url = `/api/questions?class=${encodeURIComponent(cls)}&subject=${encodeURIComponent(subject)}&limit=200`;
        const res  = await fetch(url);
        const data = await res.json();
        if (!data.success) throw new Error('API error');

        let qs: Question[] = data.data.map((q: Question) => ({
          ...q,
          options: shuffleOptions(q.options),
        }));

        if (difficulty !== 'Mixed') {
          qs = qs.filter((q) => q.difficulty === difficulty);
        }

        const sliced = qs.slice(0, 50);
        setQuestions(sliced);

        // Check localStorage for previous active quiz session
        const rawSaved = localStorage.getItem(storageKey);
        if (rawSaved) {
          try {
            const parsed: SavedQuizState = JSON.parse(rawSaved);
            if (parsed && (Object.keys(parsed.selected || {}).length > 0 || parsed.currentIndex > 0)) {
              setPendingSavedState(parsed);
              setShowResumeModal(true);
            }
          } catch {
            localStorage.removeItem(storageKey);
          }
        }
      } catch {
        setError('Failed to load questions. Please go back and select a subject.');
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [cls, subject, difficulty, mode, storageKey]);

  // Resume saved session
  const handleResumeSession = () => {
    if (pendingSavedState) {
      setCurrentIndex(pendingSavedState.currentIndex || 0);
      setSelected(pendingSavedState.selected || {});
      setBookmarked(new Set(pendingSavedState.bookmarked || []));
      setRemaining(pendingSavedState.remaining ?? (EXAM_MINUTES * 60));
      setElapsed(pendingSavedState.elapsed ?? 0);
    }
    setShowResumeModal(false);
  };

  // Start fresh session
  const handleStartFresh = () => {
    localStorage.removeItem(storageKey);
    setShowResumeModal(false);
  };

  // Auto-save progress to localStorage
  useEffect(() => {
    if (loading || questions.length === 0 || showResumeModal) return;

    const stateToSave: SavedQuizState = {
      currentIndex,
      selected,
      bookmarked: Array.from(bookmarked),
      remaining,
      elapsed,
    };

    localStorage.setItem(storageKey, JSON.stringify(stateToSave));
  }, [currentIndex, selected, bookmarked, remaining, elapsed, loading, questions.length, showResumeModal, storageKey]);

  // Timer effect
  useEffect(() => {
    if (loading || questions.length === 0 || showResumeModal) return;
    timerRef.current = setInterval(() => {
      if (isExam) {
        setRemaining((r) => {
          if (r <= 1) {
            clearInterval(timerRef.current!);
            handleSubmit(true);
            return 0;
          }
          return r - 1;
        });
      } else {
        setElapsed((e) => e + 1);
      }
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [loading, questions.length, isExam, showResumeModal]);

  // Submit quiz handler
  const handleSubmit = useCallback((auto = false) => {
    clearInterval(timerRef.current!);
    soundManager.playSuccessSound();
    localStorage.removeItem(storageKey);

    let correct = 0, wrong = 0, skipped = 0;
    questions.forEach((q) => {
      const chosenId = selected[q.id];
      if (!chosenId) { skipped++; return; }
      const opt = q.options.find((o) => o.id === chosenId);
      if (opt?.isCorrect) correct++; else wrong++;
    });
    const score = correct * 5 - wrong * 1;
    const scorePct = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    const classNum = parseInt(cls.replace(/\D/g, '')) || 9;

    fetch('/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: subject || 'General',
        class: classNum,
        score: scorePct,
        totalQuestions: questions.length,
        correctAnswers: correct,
      }),
    }).catch((err) => console.error('Failed to save attempt to DB:', err));

    const params = new URLSearchParams({
      class:      cls,
      subject,
      difficulty,
      mode,
      score:      String(score),
      correct:    String(correct),
      wrong:      String(wrong),
      skipped:    String(skipped),
      total:      String(questions.length),
      time:       String(isExam ? EXAM_MINUTES * 60 - remaining : elapsed),
    });
    router.push(`/results?${params.toString()}`);
  }, [questions, selected, cls, subject, difficulty, mode, remaining, elapsed, isExam, router, storageKey]);

  // Navigation
  const goTo = (idx: number) => {
    soundManager.playClickSound();
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };
  const goPrev = () => { if (currentIndex > 0) goTo(currentIndex - 1); };
  const goNext = () => { if (currentIndex < questions.length - 1) goTo(currentIndex + 1); };

  const handleSelect = (questionId: string, optionId: string) => {
    if (isExam && selected[questionId]) return;
    soundManager.playClickSound();
    setSelected((prev) => ({ ...prev, [questionId]: optionId }));
    if (!isExam) setRevealed((prev) => new Set(prev).add(questionId));
  };

  const toggleBookmark = (questionId: string) => {
    soundManager.playFlagSound();
    setBookmarked((prev) => {
      const next = new Set(prev);
      next.has(questionId) ? next.delete(questionId) : next.add(questionId);
      return next;
    });
  };

  // Progress metrics
  const totalQuestions = questions.length;
  const answeredCount  = Object.keys(selected).length;
  const unansweredCount = totalQuestions - answeredCount;
  const flaggedCount   = bookmarked.size;
  const progress       = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  // Slide animation variants
  const slideVariants = {
    enter:  (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
    exit:   (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.15 } }),
  };

  if (loading) return <LoadingScreen />;
  if (error)   return <ErrorScreen message={error} onBack={() => router.back()} />;
  if (questions.length === 0) return (
    <ErrorScreen message="No questions found for this subject." onBack={() => router.back()} />
  );

  const q            = questions[currentIndex];
  const chosenId     = selected[q.id];
  const isAnswered   = !!chosenId;
  const isBookmarked = bookmarked.has(q.id);
  const diffStyle    = difficultyStyle[q.difficulty] ?? { color: '#6EE7B7', bg: '#064E3B', border: '#10B981' };

  return (
    <div className="min-h-screen flex flex-col text-slate-100" style={{ background: '#0B0F19', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      {/* ── Retro Dark Top Control Strip ── */}
      <div
        className="sticky top-0 z-20 border-b-2 border-slate-700/80 px-4 py-3"
        style={{ background: '#0F172A', boxShadow: '0 4px 0px 0px rgba(0,0,0,0.5)' }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Back & Subject Badge */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.back()}
              className="btn-pill btn-white text-xs py-1.5 px-3 flex items-center gap-1 font-black"
              style={{ boxShadow: '2px 2px 0 #FFFFFF' }}
            >
              ← Exit
            </button>
            <span
              className="px-3 py-1 rounded-full text-xs font-black hidden sm:inline-flex"
              style={{ background: '#134E4A', color: '#5EEAD4', border: '1.5px solid #2DD4BF' }}
            >
              {subject} · {cls}
            </span>
          </div>

          {/* Center: Question Counter & Quick Palette Toggle */}
          <button
            onClick={() => setShowPaletteDrawer(!showPaletteDrawer)}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black transition-all hover:scale-105"
            style={{ background: '#78350F', color: '#FDE68A', border: '1.5px solid #F59E0B', boxShadow: '2px 2px 0 #FFFFFF' }}
          >
            <span>Q {currentIndex + 1} / {totalQuestions}</span>
            <span className="text-white">🧭 Palette</span>
          </button>

          {/* Right: Sound Toggle, Timer, & Submit Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleMute}
              className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white transition-transform hover:scale-105"
              style={{ background: isMuted ? '#881337' : '#064E3B', boxShadow: '2px 2px 0 #FFFFFF' }}
              title={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              <span className="text-xs">{isMuted ? '🔇' : '🔊'}</span>
            </button>

            <div
              className="px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 font-mono"
              style={{
                background: isExam ? '#881337' : '#581C87',
                color: isExam ? '#FDA4AF' : '#E9D5FF',
                border: '1.5px solid #FFFFFF'
              }}
            >
              ⏱ {isExam ? formatTime(remaining) : formatTime(elapsed)}
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="btn-pill btn-teal text-xs py-1.5 px-4 font-black hidden sm:inline-flex"
              style={{ boxShadow: '2px 2px 0 #FFFFFF', borderColor: '#FFFFFF' }}
            >
              Submit Quiz 🚀
            </button>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="max-w-4xl mx-auto mt-2.5 flex items-center gap-2">
          <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: '#1E293B', border: '1.5px solid #FFFFFF' }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, background: '#14B8A6' }}
            />
          </div>
          <span className="text-xs font-black text-slate-300 w-10 text-right">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* ── Question Palette Drawer ── */}
      <AnimatePresence>
        {showPaletteDrawer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b-4 border-slate-700 overflow-hidden"
            style={{ background: '#0F172A' }}
          >
            <div className="max-w-4xl mx-auto p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Question Palette ({answeredCount}/{totalQuestions} Answered)
                </span>
                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 border border-white"></span> Answered
                  </span>
                  <span className="flex items-center gap-1 text-amber-300">
                    <span className="w-3 h-3 rounded-full bg-amber-500 border border-white"></span> Flagged
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-slate-800 border border-white"></span> Unanswered
                  </span>
                </div>
              </div>

              {/* Grid palette buttons */}
              <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-20 gap-1.5">
                {questions.map((qq, i) => {
                  const ans    = selected[qq.id];
                  const isCurr = i === currentIndex;
                  const isBk   = bookmarked.has(qq.id);

                  let bg = '#1E293B';
                  let textColor = '#F8FAFC';
                  let borderCol = '#475569';

                  if (ans) {
                    bg = '#064E3B';
                    textColor = '#6EE7B7';
                    borderCol = '#10B981';
                  } else if (isBk) {
                    bg = '#78350F';
                    textColor = '#FDE68A';
                    borderCol = '#F59E0B';
                  }

                  return (
                    <button
                      key={qq.id}
                      onClick={() => {
                        goTo(i);
                        setShowPaletteDrawer(false);
                      }}
                      className="h-8 rounded-lg text-xs font-black transition-all flex items-center justify-center relative"
                      style={{
                        background: bg,
                        color: textColor,
                        border: isCurr ? '2px solid #FFFFFF' : `1.5px solid ${borderCol}`,
                        boxShadow: isCurr ? '2px 2px 0 #14B8A6' : 'none',
                        transform: isCurr ? 'scale(1.1)' : 'scale(1)',
                      }}
                      title={`Q${i + 1}: ${ans ? 'Answered' : isBk ? 'Flagged' : 'Unanswered'}`}
                    >
                      {i + 1}
                      {isBk && (
                        <span className="absolute -top-1 -right-1 text-[9px]">🚩</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Single Question Card with KaTeX Math ── */}
      <main className="max-w-3xl w-full mx-auto px-4 py-8 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={q.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6"
          >
            {/* Question Text Box */}
            <div
              className="rounded-3xl p-6 sm:p-8"
              style={{
                background: '#1E293B',
                border: '3px solid #FFFFFF',
                boxShadow: '6px 6px 0px 0px #FFFFFF',
              }}
            >
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-black border"
                  style={{ background: diffStyle.bg, color: diffStyle.color, borderColor: diffStyle.border }}
                >
                  {q.difficulty}
                </span>

                <button
                  onClick={() => toggleBookmark(q.id)}
                  className="btn-pill text-xs py-1 px-3 font-black flex items-center gap-1.5 transition-transform hover:scale-105"
                  style={{
                    background: isBookmarked ? '#78350F' : '#0F172A',
                    color: isBookmarked ? '#FDE68A' : '#FFFFFF',
                    border: '2px solid #FFFFFF',
                    boxShadow: '2px 2px 0 #FFFFFF',
                  }}
                >
                  {isBookmarked ? '🚩 Flagged' : '🏳️ Flag for Review'}
                </button>
              </div>

              {/* Question Text with KaTeX Support */}
              <div
                className="text-lg sm:text-xl font-bold leading-relaxed text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <MathText text={q.text} />
              </div>
            </div>

            {/* 4 Large Clean Option Buttons with KaTeX Support */}
            <div className="space-y-3.5">
              {q.options.map((opt, oi) => {
                const isSelected = chosenId === opt.id;
                const showResult = !isExam && isAnswered;
                const isCorrect  = opt.isCorrect;

                let cardBg     = '#1E293B';
                let borderColor = '#475569';
                let textColor   = '#F8FAFC';
                let badgeBg     = '#0F172A';
                let badgeText   = '#FFFFFF';

                if (isExam && isSelected) {
                  cardBg     = '#134E4A';
                  borderColor = '#2DD4BF';
                  textColor   = '#5EEAD4';
                  badgeBg     = '#0D9488';
                  badgeText   = '#FFFFFF';
                } else if (showResult && isCorrect) {
                  cardBg     = '#064E3B';
                  borderColor = '#34D399';
                  textColor   = '#6EE7B7';
                  badgeBg     = '#10B981';
                  badgeText   = '#FFFFFF';
                } else if (showResult && isSelected && !isCorrect) {
                  cardBg     = '#881337';
                  borderColor = '#FB7185';
                  textColor   = '#FDA4AF';
                  badgeBg     = '#F43F5E';
                  badgeText   = '#FFFFFF';
                } else if (!isExam && isSelected) {
                  cardBg     = '#134E4A';
                }

                const label = String.fromCharCode(65 + oi);

                return (
                  <button
                    key={opt.id}
                    id={`option-${label.toLowerCase()}`}
                    onClick={() => handleSelect(q.id, opt.id)}
                    disabled={isExam && !!chosenId}
                    className="w-full text-left rounded-2xl p-4 flex items-center gap-4 transition-all duration-150 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 group"
                    style={{
                      background: cardBg,
                      border: `2.5px solid ${borderColor}`,
                      boxShadow: isSelected ? '4px 4px 0px 0px #FFFFFF' : '3px 3px 0px 0px rgba(255,255,255,0.7)',
                      transform: isSelected ? 'translateY(-2px)' : 'none',
                    }}
                    aria-label={`Option ${label}`}
                  >
                    {/* Letter Badge */}
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 transition-all"
                      style={{
                        background: badgeBg,
                        color: badgeText,
                        border: '2px solid #FFFFFF',
                      }}
                    >
                      {label}
                    </span>

                    {/* Option Text with KaTeX */}
                    <span className="text-base font-bold flex-1 leading-snug" style={{ color: textColor }}>
                      <MathText text={opt.text} />
                    </span>

                    {/* Result Icon */}
                    {showResult && isCorrect && (
                      <span className="text-xl font-black text-emerald-400">✓</span>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <span className="text-xl font-black text-rose-400">✗</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Practice Explanation Toggle Card with KaTeX */}
            {!isExam && revealed.has(q.id) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl p-5"
                style={{
                  background: '#1E293B',
                  border: '2.5px solid #F59E0B',
                  boxShadow: '4px 4px 0px 0px #F59E0B',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">💡</span>
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">
                    NCERT Answer Explanation
                  </h4>
                </div>
                <div className="text-sm font-bold text-slate-200 leading-relaxed">
                  <MathText text={q.explanation} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Fixed Bottom Navigation Bar ── */}
      <footer
        className="sticky bottom-0 z-20 border-t-2 border-slate-700/80 px-4 py-4"
        style={{ background: '#0F172A' }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          {/* Previous Button */}
          <button
            id="quiz-prev-btn"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="btn-pill btn-white text-sm py-2 px-5 font-black flex items-center gap-2 transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
            style={{ boxShadow: '3px 3px 0 #FFFFFF' }}
            aria-label="Previous question"
          >
            ← Previous
          </button>

          {/* Quick Palette Button */}
          <button
            onClick={() => setShowPaletteDrawer(!showPaletteDrawer)}
            className="btn-pill text-xs py-2 px-4 font-black hidden sm:inline-flex items-center gap-1.5"
            style={{ background: '#78350F', color: '#FDE68A', border: '2px solid #FFFFFF', boxShadow: '2px 2px 0 #FFFFFF' }}
          >
            🧭 Palette ({answeredCount}/{totalQuestions})
          </button>

          {/* Next or Submit Button */}
          {currentIndex === totalQuestions - 1 ? (
            <button
              id="quiz-submit-btn"
              onClick={() => setShowSubmitModal(true)}
              className="btn-pill btn-teal text-sm py-2 px-6 font-black flex items-center gap-2 transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
              style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}
              aria-label="Submit quiz"
            >
              Submit Quiz 🚀
            </button>
          ) : (
            <button
              id="quiz-next-btn"
              onClick={goNext}
              className="btn-pill btn-teal text-sm py-2 px-6 font-black flex items-center gap-2 transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
              style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}
              aria-label="Next question"
            >
              Next →
            </button>
          )}
        </div>
      </footer>

      {/* ── Resume Saved Session Toast/Modal ── */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 text-center"
              style={{
                background: '#1E293B',
                border: '3px solid #FFFFFF',
                boxShadow: '8px 8px 0px 0px #FFFFFF',
              }}
            >
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl bg-amber-950 border-2 border-white">
                💾
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Resume Saved Quiz Session?
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  We found an unfinished quiz attempt for <span className="font-black text-teal-400">{subject} ({cls})</span>. Would you like to resume your progress?
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleStartFresh}
                  className="btn-pill btn-white text-sm py-2.5 flex-1 font-black"
                  style={{ boxShadow: '3px 3px 0 #FFFFFF' }}
                >
                  Start Fresh 🔄
                </button>

                <button
                  onClick={handleResumeSession}
                  className="btn-pill btn-teal text-sm py-2.5 flex-1 font-black"
                  style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}
                >
                  Resume 🚀
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Quick Submit Confirmation Modal ── */}
      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-6 text-center"
              style={{
                background: '#1E293B',
                border: '3px solid #FFFFFF',
                boxShadow: '8px 8px 0px 0px #FFFFFF',
              }}
            >
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl bg-teal-950 border-2 border-white">
                🚀
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Ready to Submit Quiz?
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  Review your answers breakdown before confirming submission:
                </p>
              </div>

              {/* Status summary pill grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900 border-2 border-slate-700">
                <div className="text-center">
                  <p className="text-xl font-black text-emerald-400">{answeredCount}</p>
                  <p className="text-xs font-bold text-slate-400">Answered</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-black text-amber-400">{flaggedCount}</p>
                  <p className="text-xs font-bold text-slate-400">Flagged</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-black text-rose-400">{unansweredCount}</p>
                  <p className="text-xs font-bold text-slate-400">Unanswered</p>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="btn-pill btn-white text-sm py-2.5 flex-1 font-black"
                  style={{ boxShadow: '3px 3px 0 #FFFFFF' }}
                >
                  Continue
                </button>

                <button
                  onClick={() => handleSubmit()}
                  className="btn-pill btn-teal text-sm py-2.5 flex-1 font-black"
                  style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}
                >
                  Confirm Submit 🚀
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// ─── Loading Screen ───────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#0B0F19' }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-teal-950 border-3 border-white shadow-[4px_4px_0_#FFFFFF] animate-bounce">
        📖
      </div>
      <p className="text-base font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Loading NCERT Questions…
      </p>
    </div>
  );
}

// ─── Error Screen ────────────────────────────────────────────────────────────
function ErrorScreen({ message, onBack }: { message: string; onBack: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4 text-center" style={{ background: '#0B0F19' }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-rose-950 border-3 border-white shadow-[4px_4px_0_#FFFFFF]">
        ⚠️
      </div>
      <p className="text-base font-black text-rose-300 max-w-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {message}
      </p>
      <button onClick={onBack} className="btn-pill btn-teal text-sm py-2 px-6 font-black" style={{ boxShadow: '3px 3px 0 #FFFFFF', borderColor: '#FFFFFF' }}>
        ← Go Back
      </button>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function QuizPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <QuizContent />
    </Suspense>
  );
}
