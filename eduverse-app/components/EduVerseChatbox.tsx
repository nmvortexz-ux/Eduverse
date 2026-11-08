'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import MathText from '@/components/MathText';
import { getAcademicMentorResponse } from '@/lib/academicCompanion';

// ─── Interfaces ──────────────────────────────────────────────────────────────
export interface ChatAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  actions?: ChatAction[];
  quickReplies?: string[];
  isStreaming?: boolean;
}

// ─── Inline Clean SVGs ───────────────────────────────────────────────────────
function IconBot({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function IconSparkles({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function IconX({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function IconRotateCcw({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function IconSend({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function IconArrowRight({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// ─── Friendly Academic Mentor Response Engine ────────────────────────────────
function handleLocalAssistantResponse(rawInput: string): {
  text: string;
  action: ChatAction | null;
} {
  const res = getAcademicMentorResponse(rawInput);
  return {
    text: res.text,
    action: res.action,
  };
}

// ─── Message Parsing Helper ──────────────────────────────────────────────────
function parseMessageContent(rawText: string): { text: string; action: ChatAction | null } {
  // Guard against any raw JSON errors sneaking into the display
  if (rawText.trim().startsWith('{') && (rawText.includes('"error"') || rawText.includes('"code"'))) {
    return {
      text: "I'm right here with you! 😊 Let's explore your studies together. What subject or chapter would you like to practice today?",
      action: { label: "Explore Subjects & Quizzes", href: "/select" }
    };
  }

  // Hide partial/pending ACTION_LINK token while text is actively streaming
  const pendingStripped = rawText.replace(/ACTION_LINK:?\{?[^}\n]*$/s, '').trimEnd();

  const match = rawText.match(/ACTION_LINK:(\{.*?\})/);
  if (match) {
    try {
      const action = JSON.parse(match[1]);
      const cleanText = rawText.replace(/ACTION_LINK:\{.*?\}/, '').trim();
      return { text: cleanText, action };
    } catch {
      return { text: pendingStripped, action: null };
    }
  }
  return { text: pendingStripped, action: null };
}

// ─── Default Greeting State ──────────────────────────────────────────────────
const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'assistant',
    text: "Hey there! 😊 I'm your EduVerse companion. Whether you're stuck on a tricky concept, preparing for a test, or want to practice some MCQs, I'm right here with you. What are we studying today?",
    timestamp: 'Just now',
    actions: [
      { label: 'Start Class 10 Science Practice', href: '/select?class=Class%2010' },
      { label: 'View Leaderboard', href: '/leaderboard' },
    ],
    quickReplies: [
      'Practice Class 7 Science',
      'Explain Photosynthesis Formula',
      'Class 10 Math Practice',
      'Show Leaderboard',
    ],
  },
];

const DEFAULT_SUGGESTION_CHIPS = [
  'Practice Class 7 Science',
  'Explain Newton\'s Second Law',
  'Help with Quadratic Equations',
  'Show Leaderboard',
  'Open My Dashboard',
];

// ─── Main Component ──────────────────────────────────────────────────────────
export default function EduVerseChatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const { isSignedIn } = useUser();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages]);

  const handleClearChat = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages(INITIAL_MESSAGES);
  };

  // ── Dispatch Message via Gemini Streaming Route ──
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputValue('');
    setIsTyping(true);

    const assistantMessageId = `assistant-${Date.now()}`;
    const assistantPlaceholder: ChatMessage = {
      id: assistantMessageId,
      sender: 'assistant',
      text: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, assistantPlaceholder]);

    try {
      abortControllerRef.current = new AbortController();

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.sender === 'assistant' ? 'assistant' : 'user',
            content: m.text,
          })),
        }),
        signal: abortControllerRef.current.signal,
      });

      if (response.status === 401) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  text: "I'd love to chat and help you study! 😊 Please sign in to your EduVerse account so we can get started:",
                  isStreaming: false,
                  actions: [
                    { label: 'Sign In to EduVerse', href: '/sign-in' },
                    { label: 'Create an Account', href: '/sign-up' },
                  ],
                }
              : msg
          )
        );
        setIsTyping(false);
        return;
      }

      if (response.status === 429) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  text: "The study room is a bit crowded right now! 🏃💨 Please give it a few seconds and send your message again.",
                  isStreaming: false,
                }
              : msg
          )
        );
        setIsTyping(false);
        return;
      }

      if (!response.ok || !response.body) {
        const fallback = handleLocalAssistantResponse(text);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  text: fallback.text,
                  actions: fallback.action ? [fallback.action] : undefined,
                  isStreaming: false,
                }
              : msg
          )
        );
        setIsTyping(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;

        const { text: cleanText, action } = parseMessageContent(accumulatedText);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  text: cleanText,
                  actions: action ? [action] : undefined,
                  isStreaming: true,
                }
              : msg
          )
        );
      }

      // Final pass after stream concludes
      const finalParsed = parseMessageContent(accumulatedText);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                text: finalParsed.text,
                actions: finalParsed.action ? [finalParsed.action] : undefined,
                isStreaming: false,
              }
            : msg
        )
      );
    } catch (err: any) {
      if (err.name === 'AbortError') return;

      console.warn('Gemini chat streaming fallback:', err);

      const fallback = handleLocalAssistantResponse(text);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                text: fallback.text,
                actions: fallback.action ? [fallback.action] : undefined,
                isStreaming: false,
              }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* ── 1. Floating Launcher Icon ───────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close EduVerse AI Mentor' : 'Open EduVerse AI Mentor'}
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0b1329]"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <IconX className="w-6 h-6 stroke-[2.5]" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative"
              >
                <IconSparkles className="w-6 h-6 stroke-[2.2] group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active / Unread Notification Pulse */}
          {!isOpen && hasUnread && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-[#0b1329]" />
            </span>
          )}
        </button>
      </div>

      {/* ── 2. Chatbox Drawer / Modal UI ───────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[82vh] bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden text-slate-100 ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-sm shadow-emerald-500/30">
                  <IconBot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white tracking-wide">EduVerse Companion</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">Your Friendly Academic Mentor</p>
                </div>
              </div>

              {/* Header Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearChat}
                  title="Clear conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 transition-colors"
                >
                  <IconRotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Assistant"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 transition-colors"
                >
                  <IconX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Suggestion Chips Carousel */}
            <div className="px-3 py-2 bg-slate-950/30 border-b border-slate-800/40 overflow-x-auto no-scrollbar flex items-center gap-1.5 flex-nowrap scrollbar-none">
              {DEFAULT_SUGGESTION_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-slate-700/60 hover:border-emerald-500/40 transition-all font-medium flex-shrink-0"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed break-words shadow-sm text-xs sm:text-sm ${
                        isUser
                          ? 'bg-emerald-500 text-slate-950 font-medium rounded-tr-xs'
                          : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-xs'
                      }`}
                    >
                      {/* Math & Text Rendering */}
                      {isUser ? (
                        <p>{msg.text}</p>
                      ) : (
                        <div className="space-y-1.5 whitespace-pre-wrap leading-relaxed">
                          <MathText text={msg.text} />
                          {msg.isStreaming && (
                            <span className="inline-block w-1.5 h-3.5 ml-1 bg-emerald-400 animate-pulse align-middle" />
                          )}
                        </div>
                      )}

                      {/* Gentle Action Pill Beneath Assistant Message */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="pt-2 flex flex-col gap-1.5">
                          {msg.actions.map((action, aIdx) => (
                            <Link
                              key={aIdx}
                              href={action.href}
                              onClick={() => setIsOpen(false)}
                              className="mt-1 inline-flex items-center justify-between gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-all group"
                            >
                              <span>{action.label}</span>
                              <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] text-slate-400 px-1 font-mono">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {/* Typing / Waiting Indicator */}
              {isTyping && messages[messages.length - 1]?.text === '' && (
                <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                    <IconBot className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex items-center gap-1 bg-slate-800/80 px-3 py-2 rounded-2xl border border-slate-700/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-slate-950/90 border-t border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 focus-within:border-emerald-400 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isSignedIn
                      ? "Ask me anything or say 'take me to class 10 math'..."
                      : "Ask a doubt or type a command..."
                  }
                  className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                  className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500 text-slate-950 transition-all flex items-center justify-center flex-shrink-0"
                >
                  <IconSend className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
