'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MathText from '@/components/MathText';
import { soundManager } from '@/lib/sound';
import Link from 'next/link';

export interface BossQuestion {
  id: string;
  text: string;
  explanation: string;
  difficulty?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  damage?: number;
}

export interface BossProfile {
  name: string;
  title: string;
  subject: string;
  className: string;
  avatar: string;
  maxHp: number;
}

interface BossFightQuizProps {
  boss: BossProfile;
  questions: BossQuestion[];
  onExit?: () => void;
}

interface FloatingDamage {
  id: number;
  text: string;
  isCritical: boolean;
  isPlayerHurt: boolean;
}

export default function BossFightQuiz({ boss, questions, onExit }: BossFightQuizProps) {
  // ─── Game State ─────────────────────────────────────────────────────────────
  const [currentHp, setCurrentHp] = useState<number>(boss.maxHp);
  const [lives, setLives] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [combo, setCombo] = useState<number>(0);
  const [xpEarned, setXpEarned] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [gameState, setGameState] = useState<'BATTLE' | 'VICTORY' | 'DEFEAT'>('BATTLE');
  
  // Visual Effects State
  const [screenShake, setScreenShake] = useState<boolean>(false);
  const [bossExpression, setBossExpression] = useState<string>(boss.avatar);
  const [floatingDamages, setFloatingDamages] = useState<FloatingDamage[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(soundManager.isMuted);

  const currentQ = questions[currentIndex % questions.length];

  // ─── Reset timer on new question ────────────────────────────────────────────
  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentIndex]);

  // ─── Trigger Screen Shake Helper ────────────────────────────────────────────
  const triggerScreenShake = () => {
    setScreenShake(true);
    setTimeout(() => setScreenShake(false), 450);
  };

  // ─── Spawn Floating Damage Text ─────────────────────────────────────────────
  const spawnDamageText = (text: string, isCritical: boolean = false, isPlayerHurt: boolean = false) => {
    const newDamage: FloatingDamage = {
      id: Date.now() + Math.random(),
      text,
      isCritical,
      isPlayerHurt,
    };
    setFloatingDamages((prev) => [...prev, newDamage]);
    setTimeout(() => {
      setFloatingDamages((prev) => prev.filter((d) => d.id !== newDamage.id));
    }, 1200);
  };

  // ─── Option Click Handler (Combat Engine) ───────────────────────────────────
  const handleOptionClick = (optionId: string, isCorrect: boolean) => {
    if (isAnswered || gameState !== 'BATTLE') return;

    setSelectedOptionId(optionId);
    setIsAnswered(true);

    const timeTakenSec = (Date.now() - questionStartTime) / 1000;
    const isQuickAnswer = timeTakenSec < 6;

    if (isCorrect) {
      // Calculate damage dealt to Boss
      const baseDamage = currentQ.damage || 200;
      const isCritical = isQuickAnswer || combo >= 2;
      const damageMultiplier = isCritical ? 1.5 : 1.0;
      const damageDealt = Math.round(baseDamage * damageMultiplier);

      const newHp = Math.max(0, currentHp - damageDealt);
      setCurrentHp(newHp);
      setCombo((prev) => prev + 1);
      setCorrectCount((prev) => prev + 1);
      setXpEarned((prev) => prev + (isCritical ? 35 : 20));

      // Audio & Visual cues
      if (isCritical) {
        soundManager.playCriticalHitSound();
        spawnDamageText(`💥 CRITICAL! -${damageDealt} HP`, true, false);
      } else {
        soundManager.playBossHitSound();
        spawnDamageText(`-${damageDealt} HP ⚡`, false, false);
      }

      setBossExpression('💥');
      setTimeout(() => {
        if (newHp <= 0) {
          setBossExpression('💀');
        } else if (newHp < boss.maxHp * 0.35) {
          setBossExpression('😡');
        } else {
          setBossExpression(boss.avatar);
        }
      }, 500);

      // Check Victory Condition
      if (newHp <= 0) {
        setTimeout(() => {
          setGameState('VICTORY');
          soundManager.playBossDefeatFanfare();
        }, 900);
        return;
      }
    } else {
      // Player takes damage
      const newLives = lives - 1;
      setLives(newLives);
      setCombo(0);

      triggerScreenShake();
      soundManager.playPlayerDamageSound();
      spawnDamageText('💔 -1 HEART', false, true);

      setBossExpression('😈');
      setTimeout(() => {
        setBossExpression(currentHp < boss.maxHp * 0.35 ? '😡' : boss.avatar);
      }, 600);

      // Check Defeat Condition
      if (newLives <= 0) {
        setTimeout(() => {
          setGameState('DEFEAT');
          soundManager.playGameOverSound();
        }, 900);
        return;
      }
    }

    // Auto-advance after reading feedback
    setTimeout(() => {
      if (gameState === 'BATTLE') {
        setSelectedOptionId(null);
        setIsAnswered(false);
        setCurrentIndex((prev) => (prev + 1) % questions.length);
      }
    }, 2000);
  };

  // ─── Restart / Retry Battle ────────────────────────────────────────────────
  const handleRestart = () => {
    setCurrentHp(boss.maxHp);
    setLives(3);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setCombo(0);
    setXpEarned(0);
    setCorrectCount(0);
    setBossExpression(boss.avatar);
    setGameState('BATTLE');
  };

  // Boss HP Percentage
  const hpPercent = Math.max(0, Math.min(100, (currentHp / boss.maxHp) * 100));

  // Color transitions for HP bar
  const getHpBarColor = () => {
    if (hpPercent > 55) return 'from-emerald-500 to-teal-400';
    if (hpPercent > 25) return 'from-amber-500 to-yellow-400';
    return 'from-rose-600 to-red-500';
  };

  return (
    <motion.div
      animate={screenShake ? { x: [-12, 12, -8, 8, -4, 4, 0] } : {}}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#070A13] text-slate-100 flex flex-col items-center justify-between p-3 sm:p-6 select-none relative overflow-hidden"
    >
      {/* Background Retro Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#1E293B 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating Damage Text Container */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {floatingDamages.map((dmg) => (
            <motion.div
              key={dmg.id}
              initial={{ opacity: 1, y: 0, scale: dmg.isCritical ? 1.3 : 1 }}
              animate={{ opacity: 0, y: -90, scale: dmg.isCritical ? 1.6 : 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className={`absolute top-1/3 left-1/2 -translate-x-1/2 font-black text-2xl sm:text-4xl tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] ${
                dmg.isPlayerHurt
                  ? 'text-rose-400 border-2 border-rose-500 bg-rose-950/80 rounded-2xl px-4 py-1.5'
                  : dmg.isCritical
                  ? 'text-yellow-300 border-2 border-yellow-400 bg-amber-950/90 rounded-2xl px-5 py-2'
                  : 'text-teal-300 border-2 border-teal-400 bg-teal-950/80 rounded-2xl px-4 py-1.5'
              }`}
            >
              {dmg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ─── Top Arena HUD (Boss HP + Player Lives + Combo) ───────────────── */}
      <div className="w-full max-w-3xl z-10 space-y-4">
        {/* Navigation & Controls Bar */}
        <div className="flex items-center justify-between px-2">
          {onExit ? (
            <button
              onClick={onExit}
              className="text-xs font-black text-slate-400 hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-xl cursor-pointer"
            >
              ← Leave Arena
            </button>
          ) : (
            <Link
              href="/boss-fight"
              className="text-xs font-black text-slate-400 hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-xl"
            >
              ← Arena Hub
            </Link>
          )}

          <div className="flex items-center gap-3">
            {combo >= 2 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="bg-amber-500/20 text-amber-300 border-2 border-amber-400 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
              >
                ⚡ {combo}x Combo!
              </motion.div>
            )}

            {/* Mute/Unmute Toggle */}
            <button
              onClick={() => {
                const muted = soundManager.toggleMute();
                setIsSoundMuted(muted);
              }}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 transition-all cursor-pointer"
              title={isSoundMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isSoundMuted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>

        {/* 👹 BOSS PROFILE & HEALTH BAR CARD */}
        <div className="bg-slate-900/90 border-3 border-slate-700 rounded-3xl p-4 sm:p-5 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.12)] backdrop-blur-md relative overflow-hidden">
          {/* Top Boss Info Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <motion.div
                key={bossExpression}
                initial={{ scale: 1.4, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-950 border-2 border-slate-600 flex items-center justify-center text-3xl sm:text-4xl shadow-inner select-none"
              >
                {bossExpression}
              </motion.div>
              <div>
                <h2 className="text-base sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                  {boss.name}
                  <span className="text-[10px] uppercase font-extrabold bg-rose-950/80 text-rose-300 border border-rose-600/50 px-2 py-0.5 rounded-full">
                    BOSS
                  </span>
                </h2>
                <p className="text-xs text-slate-400 font-semibold">{boss.title}</p>
              </div>
            </div>

            {/* HP Digits Counter */}
            <div className="text-right">
              <div className="text-xs font-black uppercase tracking-wider text-slate-400">Boss HP</div>
              <div className="text-lg sm:text-2xl font-black text-white tracking-tight">
                <span className={hpPercent < 30 ? 'text-rose-400 animate-pulse' : 'text-teal-400'}>
                  {currentHp}
                </span>
                <span className="text-slate-500 text-sm"> / {boss.maxHp}</span>
              </div>
            </div>
          </div>

          {/* Dynamic Health Bar */}
          <div className="w-full h-5 sm:h-6 bg-slate-950 rounded-full p-1 border-2 border-slate-700 relative overflow-hidden">
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: `${hpPercent}%` }}
              transition={{ type: 'spring', damping: 18, stiffness: 120 }}
              className={`h-full rounded-full bg-gradient-to-r ${getHpBarColor()} shadow-[0_0_12px_rgba(20,184,166,0.5)]`}
            />
          </div>

          {/* Player Lives & Level HUD Bar */}
          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800 text-xs font-bold">
            {/* Player Lives (3 Hearts) */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 uppercase font-black tracking-wider mr-1">Player:</span>
              {[1, 2, 3].map((heartIndex) => (
                <motion.span
                  key={heartIndex}
                  animate={
                    heartIndex <= lives
                      ? { scale: [1, 1.15, 1] }
                      : { scale: 0.8, opacity: 0.3, filter: 'grayscale(100%)' }
                  }
                  transition={{ repeat: heartIndex <= lives ? Infinity : 0, duration: 2, delay: heartIndex * 0.2 }}
                  className="text-lg sm:text-xl inline-block"
                >
                  {heartIndex <= lives ? '❤️' : '🖤'}
                </motion.span>
              ))}
            </div>

            {/* Battle Stats */}
            <div className="flex items-center gap-3 text-slate-300">
              <span>🎯 Score: <strong className="text-white">{correctCount}</strong></span>
              <span>⚡ XP: <strong className="text-teal-400">+{xpEarned}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Center Question & Combat Options Area ────────────────────────── */}
      <div className="w-full max-w-3xl z-10 my-4 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ?.id || currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {/* Question Box */}
            <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl p-5 sm:p-7 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] relative">
              <div className="flex items-center justify-between mb-3 text-xs font-black text-slate-400 uppercase tracking-wider">
                <span>Question {currentIndex + 1}</span>
                {currentQ?.difficulty && (
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-teal-300">
                    {currentQ.difficulty}
                  </span>
                )}
              </div>

              <div className="text-base sm:text-xl font-bold text-white leading-relaxed">
                <MathText text={currentQ?.text || ''} />
              </div>
            </div>

            {/* Combat Options Grid (4 Options) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ?.options?.map((option, idx) => {
                const isSelected = selectedOptionId === option.id;
                let optionStyle =
                  'bg-slate-900 border-2 border-slate-700 text-slate-200 hover:border-teal-400 hover:bg-slate-800/90 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]';

                if (isAnswered) {
                  if (option.isCorrect) {
                    optionStyle =
                      'bg-emerald-950 border-2 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(52,211,153,0.4)] font-bold';
                  } else if (isSelected && !option.isCorrect) {
                    optionStyle =
                      'bg-rose-950 border-2 border-rose-500 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.4)] font-bold';
                  } else {
                    optionStyle = 'bg-slate-950/60 border-2 border-slate-800 text-slate-500 opacity-50';
                  }
                }

                return (
                  <motion.button
                    key={option.id}
                    whileHover={!isAnswered ? { y: -2 } : {}}
                    whileTap={!isAnswered ? { y: 1 } : {}}
                    onClick={() => handleOptionClick(option.id, option.isCorrect)}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl text-left text-sm font-semibold transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-xs text-white shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-snug">
                      <MathText text={option.text} />
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Instant Step-by-Step Explanation Banner on Response */}
            {isAnswered && currentQ?.explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-slate-900/95 border-2 border-teal-500/50 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed shadow-lg space-y-1"
              >
                <div className="font-black text-teal-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  💡 NCERT Combat Analysis:
                </div>
                <div>
                  <MathText text={currentQ.explanation} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── VICTORY / DEFEAT MODAL OVERLAYS ──────────────────────────────── */}
      <AnimatePresence>
        {gameState !== 'BATTLE' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`max-w-md w-full rounded-3xl p-6 sm:p-8 text-center border-3 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative ${
                gameState === 'VICTORY'
                  ? 'bg-slate-900 border-teal-400'
                  : 'bg-slate-900 border-rose-500'
              }`}
            >
              {/* Outcome Badge Icon */}
              <div className="text-6xl mb-3 animate-bounce">
                {gameState === 'VICTORY' ? '🏆' : '💀'}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1">
                {gameState === 'VICTORY' ? 'BOSS DEFEATED!' : 'DEFEATED IN BATTLE'}
              </h2>
              <p className="text-xs text-slate-300 mb-6 font-semibold">
                {gameState === 'VICTORY'
                  ? `You conquered ${boss.name} with master-level NCERT precision!`
                  : `Your hearts depleted. Study the concepts and challenge ${boss.name} again.`}
              </p>

              {/* Reward Statistics Box */}
              <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3.5 rounded-2xl border-2 border-slate-800 mb-6 text-center">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-400">Total XP</div>
                  <div className="text-lg font-black text-teal-400">+{xpEarned + (gameState === 'VICTORY' ? 100 : 0)}</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-400">Accuracy</div>
                  <div className="text-lg font-black text-white">
                    {Math.round((correctCount / Math.max(1, currentIndex + 1)) * 100)}%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-400">Hearts Left</div>
                  <div className="text-lg font-black text-rose-400">{lives} / 3</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={handleRestart}
                  className="w-full btn-pill bg-[#0D9488] hover:bg-[#0F766E] text-white font-black text-sm py-3 rounded-full border-2 border-white shadow-[3px_3px_0px_0px_#FFFFFF] cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  🔄 {gameState === 'VICTORY' ? 'Battle Again' : 'Revive & Retry'}
                </button>

                {onExit ? (
                  <button
                    onClick={onExit}
                    className="w-full btn-pill bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-2.5 rounded-full border-2 border-slate-600 cursor-pointer"
                  >
                    ← Select Another Boss
                  </button>
                ) : (
                  <Link
                    href="/boss-fight"
                    className="w-full btn-pill bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-2.5 rounded-full border-2 border-slate-600 inline-block text-center"
                  >
                    ← Select Another Boss
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
