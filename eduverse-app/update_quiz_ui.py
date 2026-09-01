import sys

def main():
    with open('app/quiz/page.tsx', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    start_idx = -1
    end_idx = -1
    
    for i, line in enumerate(lines):
        if "  return (" in line and start_idx == -1 and i > 250:
            start_idx = i
        if "function LoadingScreen()" in line:
            end_idx = i - 1
            break
            
    if start_idx == -1 or end_idx == -1:
        print("Could not find boundaries", start_idx, end_idx)
        return
        
    new_ui = """
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
              <LogOut className="w-4 h-4" />
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
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <div className="px-3 py-1.5 rounded-md text-sm font-mono font-medium flex items-center gap-2 bg-slate-800 border border-slate-700 text-slate-300">
              <Clock className="w-4 h-4 text-slate-400" />
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
            style={{ width: ${progress}% }}
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
                      className={h-10 rounded-lg text-sm font-semibold transition-all relative flex items-center justify-center  }
                      title={Q: }
                    >
                      {i + 1}
                      {isBk && (
                        <Flag className="absolute top-1 right-1 w-2.5 h-2.5 text-amber-400" />
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
                <span className={px-2.5 py-1 rounded-md text-xs uppercase tracking-wide font-semibold border }>
                  {q.difficulty}
                </span>

                <button
                  onClick={() => toggleBookmark(q.id)}
                  className={lex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border }
                >
                  <Flag className={w-3.5 h-3.5 } />
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
                  resultIcon = <Check className="w-5 h-5 text-emerald-500 shrink-0" />;
                } else if (showResult && isSelected && !isCorrect) {
                  cardClass = 'bg-rose-900/20 border-rose-500/50 text-rose-100 ring-1 ring-rose-500/50';
                  avatarClass = 'bg-rose-600 border-rose-500 text-white';
                  resultIcon = <X className="w-5 h-5 text-rose-500 shrink-0" />;
                } else if (!isExam && isSelected) {
                  // Catch all for non-exam selected if somehow showResult is false
                  cardClass = 'bg-emerald-500/5 border-emerald-500 ring-1 ring-emerald-500 text-emerald-50';
                  avatarClass = 'bg-emerald-600 border-emerald-500 text-white';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(q.id, opt.id)}
                    disabled={isExam && !!chosenId}
                    className={w-full text-left rounded-xl p-4 flex items-center gap-4 transition-all duration-200 border cursor-pointer disabled:cursor-default }
                    aria-label={Option }
                  >
                    <span className={w-8 h-8 rounded-md flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-colors border }>
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
                    <Check className="w-4 h-4" />
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
            className="px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={() => setShowPaletteDrawer(!showPaletteDrawer)}
            className="px-4 py-2 rounded-lg text-sm font-semibold hidden sm:flex items-center gap-2 transition-colors text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800"
          >
            <LayoutGrid className="w-4 h-4" />
            Palette ({answeredCount}/{totalQuestions})
          </button>

          {currentIndex === totalQuestions - 1 ? (
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors bg-emerald-600 text-white hover:bg-emerald-500"
            >
              Submit
              <Check className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={goNext}
              className="px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors bg-emerald-600 text-white hover:bg-emerald-500"
            >
              Next
              <ArrowRight className="w-4 h-4" />
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
                <Clock className="w-6 h-6" />
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
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  Start Fresh
                </button>
                <button
                  onClick={handleResumeSession}
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
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
                <Check className="w-6 h-6" />
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
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  Go Back
                </button>
                <button
                  onClick={() => handleSubmit()}
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
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
"""
    out = lines[:start_idx] + [new_ui + "\n}\n\n"] + lines[end_idx:]
    with open('app/quiz/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(out)

if __name__ == '__main__':
    main()
