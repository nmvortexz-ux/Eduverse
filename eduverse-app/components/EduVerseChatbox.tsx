'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import MathText from '@/components/MathText';
// ─── Client-Side Fallback Intent Engine ──────────────────────────────────────
function handleLocalAssistantResponse(rawInput: string): {
  text: string;
  actions?: ChatAction[];
  quickReplies?: string[];
} {
  const query = rawInput.trim().toLowerCase();

  let detectedClass: string | null = null;
  const classMatch = query.match(/(?:class|grade|standard|std)\s*(\d{1,2})|(\d{1,2})(?:th|st|nd|rd)?\s*(?:class|grade)/i);
  if (classMatch) {
    const num = parseInt(classMatch[1] || classMatch[2], 10);
    if (num >= 6 && num <= 12) detectedClass = `Class ${num}`;
  } else {
    const directDigit = query.match(/\b(6|7|8|9|10|11|12)\b/);
    if (directDigit && (query.includes('mcq') || query.includes('quiz') || query.includes('test') || query.includes('chapter'))) {
      detectedClass = `Class ${directDigit[1]}`;
    }
  }

  let detectedSubject: string | null = null;
  if (/science|physics|chemistry|biology/.test(query)) detectedSubject = 'Science';
  else if (/math|mathematics|algebra|geometry|calculus/.test(query)) detectedSubject = 'Mathematics';
  else if (/social|history|geography|civics|sst|polity/.test(query)) detectedSubject = 'Social Studies';
  else if (/english|literature|prose|poetry/.test(query)) detectedSubject = 'English';
  else if (/hindi|vyakaran|grammar/.test(query)) detectedSubject = 'Hindi Grammar';
  else if (/account|accounts|accountancy|balance\s*sheet/.test(query)) detectedSubject = 'Accountancy';
  else if (/economics|eco|macro|micro|gdp/.test(query)) detectedSubject = 'Economics';
  else if (/commerce|business|bst/.test(query)) detectedSubject = 'Commerce';
  else if (/gk|general\s*knowledge|current\s*affairs/.test(query)) detectedSubject = 'GK';

  if (/boss|fight|arena|invigilator|sharma\s*ji|rival/.test(query)) {
    return {
      text: "Step into the EduVerse Boss Fight Arena! Challenge curriculum bosses like 'The Strict Invigilator' and 'Sharma Ji Ka Beta' in high-stakes conceptual battles.",
      actions: [{ label: '⚔️ Enter Boss Fight Arena', href: '/boss-fight', variant: 'accent' }],
      quickReplies: ['Take Class 10 Science Quiz', 'Show Leaderboard'],
    };
  }

  if (/leaderboard|rank|ranks|scoring|top\s*student|standing/.test(query)) {
    return {
      text: "Here is the EduVerse Live Leaderboard. You can view top performers, grade-level ranks, and scholar badges with minor privacy protections.",
      actions: [
        { label: '🏆 View Leaderboard', href: '/leaderboard', variant: 'primary' },
        { label: '📊 View My Dashboard Stats', href: '/dashboard', variant: 'secondary' },
      ],
      quickReplies: ['View Student Dashboard', 'Take Class 10 Science Quiz'],
    };
  }

  if (/dashboard|progress|profile|xp|stats|accuracy|my\s*score/.test(query)) {
    return {
      text: "Navigating to your Student Dashboard. Review your XP points, accuracy rate, subject mastery progress, and recent quiz attempts.",
      actions: [{ label: '📈 Open Student Dashboard', href: '/dashboard', variant: 'primary' }],
      quickReplies: ['Show Leaderboard', 'Open Class 7th MCQs'],
    };
  }

  if (detectedClass && detectedSubject) {
    const encodedClass = encodeURIComponent(detectedClass);
    const encodedSubject = encodeURIComponent(detectedSubject);
    return {
      text: `Great choice! Here are direct shortcuts for ${detectedClass} ${detectedSubject}:`,
      actions: [
        {
          label: `⚡ Configure ${detectedClass} ${detectedSubject} Quiz`,
          href: `/configure?class=${encodedClass}&subject=${encodedSubject}`,
          variant: 'primary',
        },
        {
          label: `📚 Browse ${detectedClass} Chapters`,
          href: `/select?class=${encodedClass}`,
          variant: 'secondary',
        },
      ],
      quickReplies: [`Take ${detectedClass} ${detectedSubject} Quiz`, 'Show Leaderboard'],
    };
  }

  if (detectedClass) {
    const encodedClass = encodeURIComponent(detectedClass);
    return {
      text: `Alright! I found all available chapter tests and subjects for ${detectedClass}:`,
      actions: [
        {
          label: `📂 Open ${detectedClass} Curriculum Hub`,
          href: `/select?class=${encodedClass}`,
          variant: 'primary',
        },
        {
          label: `🎯 Setup Custom ${detectedClass} Assessment`,
          href: `/configure?class=${encodedClass}`,
          variant: 'secondary',
        },
      ],
      quickReplies: ['Class 10 Science', 'Class 7 Math', 'Show Leaderboard'],
    };
  }

  if (detectedSubject) {
    return {
      text: `Looking for ${detectedSubject}? Select your grade tier or explore all chapters below:`,
      actions: [{ label: `🔍 Browse ${detectedSubject} by Grade`, href: `/select`, variant: 'primary' }],
      quickReplies: [`Class 10 ${detectedSubject}`, `Class 9 ${detectedSubject}`],
    };
  }

  if (/quiz|test|exam|practice|assessment|configure|mcq/.test(query)) {
    return {
      text: "You can customize any assessment by difficulty (Easy, Medium, Hard, Very Hard) and mode (Practice vs. Exam with timer).",
      actions: [
        { label: '⚙️ Open Assessment Wizard', href: '/configure', variant: 'primary' },
        { label: '📖 Browse Curriculum', href: '/select', variant: 'secondary' },
      ],
      quickReplies: ['Take Class 10 Science Quiz', 'Open Class 7th MCQs'],
    };
  }

  if (/^(hi|hello|hey|greetings|hola|sup|help|start)\b/i.test(query)) {
    return {
      text: "Hi there! I'm your EduVerse Navigation Copilot. Ask me to launch any grade or subject quiz (e.g., 'class 10 science' or 'open class 7th mcq'), or check your leaderboard rankings.",
      actions: [
        { label: '📚 Browse All Classes (6–12)', href: '/select', variant: 'primary' },
        { label: '🏆 View Leaderboard', href: '/leaderboard', variant: 'secondary' },
      ],
      quickReplies: ['Take Class 10 Science Quiz', 'Open Class 7th MCQs', 'Show Leaderboard'],
    };
  }

  return {
    text: `I'm ready to help you navigate EduVerse. You can ask for any class (6–12), specific subjects (Science, Math, Social Studies, Commerce, etc.), or platform features:`,
    actions: [
      { label: '📚 Open Curriculum Catalog', href: '/select', variant: 'primary' },
      { label: '🏆 Check Leaderboard', href: '/leaderboard', variant: 'secondary' },
      { label: '⚔️ Try Boss Fight Arena', href: '/boss-fight', variant: 'accent' },
    ],
    quickReplies: ['Take Class 10 Science Quiz', 'Open Class 7th MCQs', 'Show Leaderboard'],
  };
}

// ─── Interfaces ──────────────────────────────────────────────────────────────
export interface ChatAction {
  label: string;
  href: string;
  icon?: string;
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

function IconArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconBookOpen({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function IconTrophy({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconKey({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );
}

// ─── Default Greeting State ──────────────────────────────────────────────────
const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'assistant',
    text: "Hello! I'm your EduVerse AI Assistant powered by Google Gemini. Ask me any NCERT academic question with LaTeX formulas, or tell me where you'd like to practice!",
    timestamp: 'Just now',
    actions: [
      { label: 'Explore Class 10 Science', href: '/configure?class=Class%2010&subject=Science', icon: 'book' },
      { label: 'View Leaderboard', href: '/leaderboard', icon: 'trophy' },
    ],
    quickReplies: [
      'Take Class 10 Science Quiz',
      'Explain Photosynthesis Formula',
      'Open Class 7th MCQs',
      'Show Leaderboard',
    ],
  },
];

const DEFAULT_SUGGESTION_CHIPS = [
  'Take Class 10 Science Quiz',
  'Explain Newton\'s Second Law',
  'Open Class 7th MCQs',
  'Show Leaderboard',
  'Enter Boss Fight Arena',
];

// ─── Action Link Parser ──────────────────────────────────────────────────────
function parseActionLink(rawText: string): { cleanText: string; action?: ChatAction } {
  // If still streaming incomplete ACTION_LINK token, conceal the trailing marker
  const strippedPending = rawText.replace(/ACTION_LINK:?\{?[^}\n]*$/s, '').trimEnd();

  const match = rawText.match(/ACTION_LINK:\s*(\{.*?\})/);
  if (!match) {
    return { cleanText: strippedPending };
  }

  try {
    const parsed = JSON.parse(match[1]);
    if (parsed && typeof parsed.href === 'string' && typeof parsed.label === 'string') {
      const clean = rawText.replace(/ACTION_LINK:\s*\{.*?\}/g, '').trim();
      return {
        cleanText: clean,
        action: {
          label: parsed.label,
          href: parsed.href,
          variant: 'primary',
        },
      };
    }
  } catch {
    // Malformed JSON fallback
  }

  return { cleanText: rawText.replace(/ACTION_LINK:.*$/gm, '').trim() };
}

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

  // Auto-scroll on new messages or during streaming
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

    // Placeholder assistant message for live streaming
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
            sender: m.sender,
            text: m.text,
          })),
        }),
        signal: abortControllerRef.current.signal,
      });

      // ── Handle Specific Error Codes ──
      if (response.status === 401) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  text: 'Please sign in to chat with the EduVerse AI Assistant and access interactive study features.',
                  isStreaming: false,
                  actions: [
                    { label: '🔑 Sign In to EduVerse', href: '/sign-in', variant: 'primary' },
                    { label: '✨ Create an Account', href: '/sign-up', variant: 'secondary' },
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
                  text: 'The AI Assistant is currently experiencing high traffic. Please wait a few seconds before sending another message.',
                  isStreaming: false,
                }
              : msg
          )
        );
        setIsTyping(false);
        return;
      }

      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`);
      }

      // ── Stream Incoming Chunks into Message Bubble ──
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;

        // Parse any live action link tokens
        const { cleanText, action } = parseActionLink(accumulatedText);

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

      // Final pass after stream closes
      const finalParsed = parseActionLink(accumulatedText);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                text: finalParsed.cleanText,
                actions: finalParsed.action ? [finalParsed.action] : undefined,
                isStreaming: false,
              }
            : msg
        )
      );
    } catch (err: any) {
      if (err.name === 'AbortError') return;

      console.warn('Gemini chat streaming fallback triggered:', err);

      // Intelligent Client-Side Fallback via Local Intent Engine
      const fallback = handleLocalAssistantResponse(text);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                text: fallback.text,
                actions: fallback.actions,
                quickReplies: fallback.quickReplies,
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
          aria-label={isOpen ? 'Close EduVerse AI Assistant' : 'Open EduVerse AI Assistant'}
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
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 shadow-sm shadow-emerald-500/30">
                  <IconBot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white tracking-wide">EduVerse AI</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Gemini
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">NCERT Academic & Navigation Assistant</p>
                </div>
              </div>

              {/* Header Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearChat}
                  title="Clear chat history"
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

                      {/* Interactive Action Cards */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-slate-700/50 space-y-1.5">
                          {msg.actions.map((action, aIdx) => (
                            <Link
                              key={aIdx}
                              href={action.href}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 group border ${
                                action.variant === 'accent'
                                  ? 'bg-rose-950/40 border-rose-800/60 text-rose-200 hover:bg-rose-900/50 hover:border-rose-400'
                                  : action.variant === 'secondary'
                                  ? 'bg-slate-900/80 border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white'
                                  : 'bg-emerald-950/40 border-emerald-700/60 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400'
                              }`}
                            >
                              <span className="flex items-center gap-2 truncate">
                                {action.icon === 'trophy' ? (
                                  <IconTrophy className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                                ) : action.icon === 'book' ? (
                                  <IconBookOpen className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                ) : action.href.startsWith('/sign') ? (
                                  <IconKey className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                ) : (
                                  <IconSparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                )}
                                <span className="truncate">{action.label}</span>
                              </span>
                              <IconArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
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

              {/* Typing / Stream Initializing Indicator */}
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
                      ? "Ask an academic question or type 'open class 7th mcq'..."
                      : "Type a command or ask a question..."
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
