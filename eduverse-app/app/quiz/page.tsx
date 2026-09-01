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
  remaining?: number;
  elapsed?: number;
}

// ─── Inline Icons ─────────────────────────────────────────────────────────────
const IconClock = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconArrowLeft = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const IconArrowRight = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const IconGrid = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>;
const IconCheck = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const IconX = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const IconFlag = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>;
const IconVolume2 = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
const IconVolumeX = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" x2="17" y1="9" y2="15"/><line x1="17" x2="23" y1="9" y2="15"/></svg>;
const IconLogOut = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;

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

// ─── Difficulty badge styles ──────────────────────────────────────────
const difficultyStyle: Record<string, string> = {
  Easy:       'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  Medium:     'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  Hard:       'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'Very Hard':'bg-rose-500/10 text-rose-500 border-rose-500/20',
};

// ─── Quiz Content ─────────────────────────────────────────────────────────────
function QuizContent() {
  const searchParams = useSearchParams();
  const router       = useRouter();

  const cls        = searchParams.get('class')      ?? 'Class 9';
  const subject    = searchParams.get('subject')    ?? 'Science';
  const chapter    = searchParams.get('chapter');
  const difficulty = searchParams.get('difficulty') ?? 'Mixed';
  const mode       = searchParams.get('mode')       ?? 'practice';
  const isExam     = mode === 'exam';

  const storageKey = `eduverse_quiz_${cls}_${subject}_${chapter || 'all'}_${mode}`;

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
        let url = `/api/questions?class=${encodeURIComponent(cls)}&subject=${encodeURIComponent(subject)}&limit=200`;
        if (chapter && chapter !== 'All Chapters') {
          url += `&chapter=${encodeURIComponent(chapter)}`;
        }
        
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
  }, [cls, subject, chapter, difficulty, mode, storageKey]);

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
    center: { x: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' as const } },
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
  const diffStyle    = difficultyStyle[q.difficulty] ?? 'bg-emerald-900/40 text-emerald-400 border-emerald-800';

  return (
    <div className="min-h-screen flex flex-col text-slate-100 bg-[#0B0F19] font-sans">
      <Navbar />

      {/* Top Header */}
      <header className="sticky top-0 z-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Exit & Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 font-medium text-sm"
              title="Exit Quiz"
            >
              <IconLogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Exit</span>
            </button>
            
            <div className="h-4 w-px bg-slate-700 hidden sm:block" />
            
            <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 hidden sm:inline-flex items-center gap-1.5">
              {subject} <span className="text-slate-500">•</span> {cls}
            </span>
          </div>

          {/* Center: Question Counter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-300 bg-slate-800/50 px-3 py-1 rounded-md">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
          </div>

          {/* Right: Sound, Timer & Submit */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleToggleMute}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              title={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? <IconVolumeX className="w-4 h-4" /> : <IconVolume2 className="w-4 h-4" />}
            </button>

            <div className="px-3 py-1.5 rounded-md text-sm font-mono font-medium flex items-center gap-2 bg-slate-800 border border-slate-700 text-slate-300">
              <IconClock className="w-4 h-4 text-slate-400" />
              {isExam ? formatTime(remaining) : formatTime(elapsed)}
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="hidden sm:inline-flex px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Submit Quiz
            </button>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="max-w-5xl mx-auto mt-3 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-3xl w-full mx-auto px-4 py-8 flex-1 flex flex-col">
        {/* Palette Drawer */}
        <AnimatePresence>
          {showPaletteDrawer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-6 rounded-xl bg-slate-900 border border-slate-800 p-4 shadow-lg overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Question Palette ({answeredCount}/{totalQuestions} Answered)
                </span>
                <div className="flex items-center gap-3 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Answered
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Flagged
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span> Unanswered
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {questions.map((qq, i) => {
                  const ans    = selected[qq.id];
                  const isCurr = i === currentIndex;
                  const isBk   = bookmarked.has(qq.id);

                  let bgClass = 'bg-slate-800 text-slate-400 hover:bg-slate-700';
                  let ringClass = isCurr ? 'ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-900' : '';

                  if (ans) {
                    bgClass = 'bg-emerald-900/40 text-emerald-400 border border-emerald-800';
                    if (isCurr) ringClass = 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-slate-900';
                  } else if (isBk) {
                    bgClass = 'bg-amber-900/40 text-amber-400 border border-amber-800';
                    if (isCurr) ringClass = 'ring-2 ring-amber-500 ring-offset-2 ring-offset-slate-900';
                  }

                  return (
                    <button
                      key={qq.id}
                      onClick={() => {
                        goTo(i);
                        setShowPaletteDrawer(false);
                      }}
                      className={`h-10 rounded-lg text-sm font-semibold transition-all relative flex items-center justify-center ${bgClass} ${ringClass}`}
                      title={`Q${i + 1}: ${ans ? 'Answered' : isBk ? 'Flagged' : 'Unanswered'}`}
                    >
                      {i + 1}
                      {isBk && (
                        <IconFlag className="absolute top-1 right-1 w-2.5 h-2.5 text-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={q.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-6 flex-1 flex flex-col"
          >
            {/* Question Card */}
            <div className="rounded-2xl p-6 md:p-8 bg-slate-900 border border-slate-800 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className={`px-2.5 py-1 rounded-md text-xs uppercase tracking-wide font-semibold border ${diffStyle}`}>
                  {q.difficulty}
                </span>

                <button
                  onClick={() => toggleBookmark(q.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border ${
                    isBookmarked 
                      ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' 
                      : 'bg-slate-800 text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  <IconFlag className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                  {isBookmarked ? 'Flagged' : 'Flag for Review'}
                </button>
              </div>

              <div className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed">
                <MathText text={q.text} />
              </div>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {q.options.map((opt, oi) => {
                const isSelected = chosenId === opt.id;
                const showResult = !isExam && isAnswered;
                const isCorrect  = opt.isCorrect;
                const label      = String.fromCharCode(65 + oi);

                let cardClass = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-800';
                let avatarClass = 'bg-slate-800 border-slate-700 text-slate-400';
                let resultIcon = null;

                if (isExam && isSelected) {
                  cardClass = 'bg-emerald-500/5 border-emerald-500 ring-1 ring-emerald-500 text-emerald-50';
                  avatarClass = 'bg-emerald-600 border-emerald-500 text-white';
                } else if (showResult && isCorrect) {
                  cardClass = 'bg-emerald-900/20 border-emerald-500/50 text-emerald-100 ring-1 ring-emerald-500/50';
                  avatarClass = 'bg-emerald-600 border-emerald-500 text-white';
                  resultIcon = <IconCheck className="w-5 h-5 text-emerald-500 shrink-0" />;
                } else if (showResult && isSelected && !isCorrect) {
                  cardClass = 'bg-rose-900/20 border-rose-500/50 text-rose-100 ring-1 ring-rose-500/50';
                  avatarClass = 'bg-rose-600 border-rose-500 text-white';
                  resultIcon = <IconX className="w-5 h-5 text-rose-500 shrink-0" />;
                } else if (!isExam && isSelected) {
                  cardClass = 'bg-emerald-500/5 border-emerald-500 ring-1 ring-emerald-500 text-emerald-50';
                  avatarClass = 'bg-emerald-600 border-emerald-500 text-white';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(q.id, opt.id)}
                    disabled={isExam && !!chosenId}
                    className={`w-full text-left rounded-xl p-4 flex items-center gap-4 transition-all duration-200 border cursor-pointer disabled:cursor-default ${cardClass}`}
                    aria-label={`Option ${label}`}
                  >
                    <span className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-colors border ${avatarClass}`}>
                      {label}
                    </span>
                    <span className="text-base font-medium flex-1 leading-snug">
                      <MathText text={opt.text} />
                    </span>
                    {resultIcon}
                  </button>
                );
              })}
            </div>

            {/* Explanation Toggle */}
            {!isExam && revealed.has(q.id) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-5 bg-slate-900 border border-slate-800 shadow-sm mt-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-500">
                    <IconCheck className="w-4 h-4" />
                  </span>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Explanation
                  </h4>
                </div>
                <div className="text-sm text-slate-400 leading-relaxed">
                  <MathText text={q.explanation} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <footer className="sticky bottom-0 z-20 bg-[#0B0F19]/90 backdrop-blur-md border-t border-slate-800 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="px-4 py-3 min-h-[44px] rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800"
          >
            <IconArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            onClick={() => setShowPaletteDrawer(!showPaletteDrawer)}
            className="px-4 py-3 min-h-[44px] rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800"
          >
            <IconGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Palette ({answeredCount}/{totalQuestions})</span>
          </button>

          {currentIndex === totalQuestions - 1 ? (
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-3 min-h-[44px] rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors bg-emerald-600 text-white hover:bg-emerald-500"
            >
              Submit
              <IconCheck className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={goNext}
              className="px-6 py-3 min-h-[44px] rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors bg-emerald-600 text-white hover:bg-emerald-500"
            >
              Next
              <IconArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="rounded-2xl p-6 sm:p-8 max-w-md w-full space-y-6 text-center bg-slate-900 border border-slate-800 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center bg-slate-800 border border-slate-700 text-slate-300">
                <IconClock className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-100">
                  Resume Session?
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We found an unfinished quiz attempt for <span className="font-semibold text-emerald-400">{subject}</span>. Would you like to resume your progress?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handleStartFresh}
                  className="w-full px-4 py-3 min-h-[44px] rounded-lg text-sm font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  Start Fresh
                </button>
                <button
                  onClick={handleResumeSession}
                  className="w-full px-4 py-3 min-h-[44px] rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                >
                  Resume Attempt
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="rounded-2xl p-6 sm:p-8 max-w-md w-full space-y-6 text-center bg-slate-900 border border-slate-800 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center bg-emerald-900/30 border border-emerald-500/30 text-emerald-500">
                <IconCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-100">
                  Submit Assessment?
                </h3>
                <p className="text-sm text-slate-400">
                  Review your answers breakdown before confirming:
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-center space-y-1">
                  <p className="text-xl font-semibold text-emerald-400">{answeredCount}</p>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Answered</p>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-xl font-semibold text-amber-400">{flaggedCount}</p>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Flagged</p>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-xl font-semibold text-rose-400">{unansweredCount}</p>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Empty</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="w-full px-4 py-3 min-h-[44px] rounded-lg text-sm font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  Go Back
                </button>
                <button
                  onClick={() => handleSubmit()}
                  className="w-full px-4 py-3 min-h-[44px] rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                >
                  Confirm Submit
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
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#0B0F19]">
      <div className="relative flex items-center justify-center w-16 h-16">
        <div className="absolute inset-0 rounded-full border-t-2 border-emerald-500 animate-spin"></div>
        <IconClock className="w-6 h-6 text-emerald-500" />
      </div>
      <p className="text-sm font-semibold text-slate-400 tracking-wide uppercase">
        Loading Questions...
      </p>
    </div>
  );
}

// ─── Error Screen ────────────────────────────────────────────────────────────
function ErrorScreen({ message, onBack }: { message: string; onBack: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4 text-center bg-[#0B0F19]">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-rose-900/20 border border-rose-500/20 text-rose-500">
        <IconX className="w-8 h-8" />
      </div>
      <p className="text-base font-medium text-rose-400 max-w-sm">
        {message}
      </p>
      <button 
        onClick={onBack} 
        className="px-6 py-3 min-h-[44px] rounded-lg text-sm font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors flex items-center gap-2"
      >
        <IconArrowLeft className="w-4 h-4" />
        Go Back
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
