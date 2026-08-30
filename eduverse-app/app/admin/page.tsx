'use client';

import React, { useState, useEffect, useTransition, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileCode2,
  RefreshCw,
  Sparkles,
  Trash2,
  Copy,
  Layers,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Clock,
  Check,
  Code,
  FileUp,
} from 'lucide-react';
import { batchInsertQuestions, getAdminDbStats, IngestionResponse, AdminDbStats } from './actions';
import Link from 'next/link';

const SAMPLE_TEMPLATE = `[
  {
    "classLevel": 7,
    "subject": "Science",
    "chapter": "Nutrition in Plants",
    "question": "The mode of nutrition in which organisms make food themselves from simple substances is called:",
    "options": [
      "Heterotrophic nutrition",
      "Autotrophic nutrition",
      "Saprotrophic nutrition",
      "Parasitic nutrition"
    ],
    "correctAnswer": 1,
    "difficulty": "EASY",
    "damage": 150,
    "explanation": "In autotrophic nutrition (auto = self, trophos = nourishment), green plants synthesize their own food using sunlight, water, and CO2."
  },
  {
    "classLevel": 7,
    "subject": "Science",
    "chapter": "Heat",
    "question": "What is the normal body temperature of a healthy human being on the Celsius scale?",
    "options": [
      "35°C",
      "37°C",
      "39°C",
      "98.6°C"
    ],
    "correctAnswer": 1,
    "difficulty": "EASY",
    "damage": 150,
    "explanation": "Normal human core temperature averages 37°C (corresponding to 98.6°F)."
  }
]`;

export default function AdminIngestionPage() {
  const [jsonInput, setJsonInput] = useState('');
  const [defaultClass, setDefaultClass] = useState('');
  const [defaultSubject, setDefaultSubject] = useState('');
  const [allowOverwrite, setAllowOverwrite] = useState(false);
  const [copied, setCopied] = useState(false);

  // Stats & Ingestion states
  const [dbStats, setDbStats] = useState<AdminDbStats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [response, setResponse] = useState<IngestionResponse | null>(null);
  const [isPending, startTransition] = useTransition();

  // Load initial DB stats
  const refreshStats = async () => {
    setIsLoadingStats(true);
    try {
      const stats = await getAdminDbStats();
      setDbStats(stats);
    } catch (err) {
      console.error('Failed to load DB stats:', err);
    } finally {
      setIsLoadingStats(false);
    }
  };

  useEffect(() => {
    refreshStats();
  }, []);

  // Live JSON validation and inspection
  const jsonAnalysis = useMemo(() => {
    if (!jsonInput.trim()) {
      return { isValid: null, count: 0, chapters: [], error: null };
    }
    try {
      const parsed = JSON.parse(jsonInput.trim());
      const arr = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.questions) ? parsed.questions : [parsed];
      const chaptersSet = new Set<string>();
      arr.forEach((item: any) => {
        if (item?.chapter) chaptersSet.add(String(item.chapter));
      });
      return {
        isValid: true,
        count: arr.length,
        chapters: Array.from(chaptersSet),
        error: null,
      };
    } catch (err: any) {
      return {
        isValid: false,
        count: 0,
        chapters: [],
        error: err.message,
      };
    }
  }, [jsonInput]);

  // Format / Beautify JSON
  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonInput.trim());
      setJsonInput(JSON.stringify(parsed, null, 2));
    } catch (err) {
      // Ignore format if invalid
    }
  };

  // Load Sample Template
  const handleLoadSample = () => {
    setJsonInput(SAMPLE_TEMPLATE);
    setResponse(null);
  };

  // Clear Input
  const handleClear = () => {
    setJsonInput('');
    setResponse(null);
  };

  // Copy sample to clipboard
  const handleCopySample = () => {
    navigator.clipboard.writeText(SAMPLE_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // File upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setJsonInput(content);
        setResponse(null);
      }
    };
    reader.readAsText(file);
  };

  // Execute Server Action
  const handleExecuteImport = () => {
    if (!jsonInput.trim() || jsonAnalysis.isValid === false) return;

    setResponse(null);
    startTransition(async () => {
      try {
        const res = await batchInsertQuestions(jsonInput, {
          defaultClass: defaultClass || undefined,
          defaultSubject: defaultSubject || undefined,
          allowOverwrite,
        });
        setResponse(res);
        if (res.success) {
          refreshStats();
        }
      } catch (err: any) {
        setResponse({
          success: false,
          message: err.message || 'An unexpected error occurred during database batch ingestion.',
          stats: {
            totalReceived: jsonAnalysis.count,
            inserted: 0,
            skippedDuplicates: 0,
            failed: jsonAnalysis.count,
            errors: [{ index: 0, questionSnippet: 'Batch Process', reason: err.message }],
            durationMs: 0,
          },
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Background Ambience Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/4 w-[600px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[-10%] w-[550px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 space-y-8">
        {/* Top Header & DB Stat Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              EduVerse Admin Portal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-purple-400">
              MCQ Batch Ingestion Engine
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl">
              Paste NCERT curriculum JSON batches to automatically validate, normalize, and bulk-seed into the PostgreSQL database.
            </p>
          </div>

          {/* Quick Database Status Summary Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-5 backdrop-blur-md shadow-lg shadow-purple-950/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 p-0.5 flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-wider flex items-center gap-2">
                Live Questions in DB
                <button
                  onClick={refreshStats}
                  title="Refresh Database Stats"
                  className="hover:text-purple-400 transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingStats ? 'animate-spin text-purple-400' : ''}`} />
                </button>
              </div>
              <div className="text-2xl font-black text-white tracking-tight">
                {isLoadingStats ? (
                  <span className="text-slate-600 text-lg font-normal">Loading...</span>
                ) : (
                  dbStats?.totalQuestions?.toLocaleString() ?? 0
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Database Breakdown Overview Grid */}
        {dbStats && dbStats.classBreakdown.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {dbStats.classBreakdown.map((item) => (
              <div
                key={item.class}
                className="bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/40 rounded-xl p-3 text-center transition-colors"
              >
                <span className="text-xs font-semibold text-slate-400 block">{item.class}</span>
                <span className="text-lg font-bold text-purple-300">{item.count} Qs</span>
              </div>
            ))}
          </div>
        )}

        {/* Main Ingestion Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left / Main Column: Textarea & Controls */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl">
              {/* Editor Header Toolbar */}
              <div className="px-5 py-3.5 bg-slate-950/70 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-bold text-slate-200">JSON Payload Editor</span>
                  {jsonAnalysis.isValid === true && (
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {jsonAnalysis.count} Valid Questions
                    </span>
                  )}
                  {jsonAnalysis.isValid === false && (
                    <span className="text-xs bg-rose-500/10 text-rose-400 border border-rose-500/30 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      Invalid Syntax
                    </span>
                  )}
                </div>

                {/* Toolbar Utility Buttons */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 border border-slate-700"
                  >
                    <FileUp className="w-3.5 h-3.5 text-cyan-400" />
                    Upload .json
                    <input
                      id="file-upload"
                      type="file"
                      accept=".json"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  <button
                    onClick={handleFormat}
                    disabled={!jsonInput.trim() || jsonAnalysis.isValid === false}
                    className="text-xs bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 border border-slate-700"
                  >
                    <Code className="w-3.5 h-3.5 text-purple-400" />
                    Prettify
                  </button>

                  <button
                    onClick={handleLoadSample}
                    className="text-xs bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 border border-purple-800/60"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                    Load Sample
                  </button>

                  <button
                    onClick={handleClear}
                    disabled={!jsonInput.trim()}
                    className="text-xs bg-slate-800 hover:bg-rose-950/80 hover:text-rose-300 disabled:opacity-40 text-slate-400 px-2.5 py-1.5 rounded-lg font-medium transition-colors border border-slate-700"
                    title="Clear Textarea"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Code Textarea Input */}
              <div className="relative">
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder={`[\n  {\n    "classLevel": 7,\n    "subject": "Science",\n    "chapter": "Chapter Name",\n    "question": "Question text here?",\n    "options": ["Option A", "Option B", "Option C", "Option D"],\n    "correctAnswer": 1,\n    "difficulty": "EASY",\n    "damage": 150,\n    "explanation": "Explanation text..."\n  }\n]`}
                  rows={18}
                  className="w-full bg-[#0b0e14] text-slate-200 font-mono text-sm p-4 focus:outline-none focus:ring-1 focus:ring-purple-500/50 resize-y leading-relaxed border-none selection:bg-purple-900"
                  spellCheck={false}
                />
              </div>

              {/* Detected Chapters Tag Bar */}
              {jsonAnalysis.chapters.length > 0 && (
                <div className="px-5 py-3 bg-slate-950/90 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 whitespace-nowrap flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    Detected Chapters ({jsonAnalysis.chapters.length}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {jsonAnalysis.chapters.map((ch, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-900/30 text-purple-200 border border-purple-700/40 px-2 py-0.5 rounded-md"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ingestion Override Options Card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                {/* Fallback Class Selector */}
                <div className="flex items-center gap-2">
                  <label className="text-slate-400 font-medium">Fallback Class:</label>
                  <select
                    value={defaultClass}
                    onChange={(e) => setDefaultClass(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 font-medium focus:ring-1 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="">Auto-Detect from JSON</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>

                {/* Fallback Subject Selector */}
                <div className="flex items-center gap-2">
                  <label className="text-slate-400 font-medium">Fallback Subject:</label>
                  <select
                    value={defaultSubject}
                    onChange={(e) => setDefaultSubject(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 font-medium focus:ring-1 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="">Auto-Detect from JSON</option>
                    <option value="Science">Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Accountancy">Accountancy</option>
                  </select>
                </div>

                {/* Overwrite Toggle */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={allowOverwrite}
                    onChange={(e) => setAllowOverwrite(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-slate-300">Overwrite Existing Questions</span>
                </label>
              </div>

              {/* Primary Ingestion Trigger Button */}
              <button
                onClick={handleExecuteImport}
                disabled={isPending || !jsonInput.trim() || jsonAnalysis.isValid === false}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                {isPending ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    Executing Batch Insertion...
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-4 h-4 text-cyan-200" />
                    Execute Batch Insertion
                  </>
                )}
              </button>
            </div>

            {/* Execution Result Feedback Card */}
            <AnimatePresence>
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`rounded-2xl border p-6 backdrop-blur-xl ${
                    response.success
                      ? 'bg-emerald-950/30 border-emerald-800/60'
                      : 'bg-rose-950/30 border-rose-800/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        response.success
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                      }`}
                    >
                      {response.success ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <AlertTriangle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {response.success ? 'Batch Ingestion Succeeded' : 'Batch Ingestion Encountered Issues'}
                        </h3>
                        <p className="text-sm text-slate-300 mt-1">{response.message}</p>
                      </div>

                      {/* Stat Breakdown Counters */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 text-center">
                          <span className="text-xs text-slate-400 block font-medium">Total Received</span>
                          <span className="text-xl font-extrabold text-white">
                            {response.stats.totalReceived}
                          </span>
                        </div>
                        <div className="bg-slate-950/70 border border-emerald-900/50 rounded-xl p-3 text-center">
                          <span className="text-xs text-emerald-400 block font-medium">Inserted New</span>
                          <span className="text-xl font-extrabold text-emerald-300">
                            {response.stats.inserted}
                          </span>
                        </div>
                        <div className="bg-slate-950/70 border border-amber-900/50 rounded-xl p-3 text-center">
                          <span className="text-xs text-amber-400 block font-medium">Skipped Duplicates</span>
                          <span className="text-xl font-extrabold text-amber-300">
                            {response.stats.skippedDuplicates}
                          </span>
                        </div>
                        <div className="bg-slate-950/70 border border-cyan-900/50 rounded-xl p-3 text-center">
                          <span className="text-xs text-cyan-400 block font-medium">Elapsed Time</span>
                          <span className="text-xl font-extrabold text-cyan-300">
                            {(response.stats.durationMs / 1000).toFixed(2)}s
                          </span>
                        </div>
                      </div>

                      {/* Error Log Accordion if any failures */}
                      {response.stats.errors.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                          <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                            Error Details ({response.stats.errors.length}):
                          </h4>
                          <div className="max-h-40 overflow-y-auto space-y-1.5 pr-2 font-mono text-xs">
                            {response.stats.errors.map((err, i) => (
                              <div
                                key={i}
                                className="bg-slate-950/90 border border-rose-900/40 rounded-lg p-2.5 text-rose-300 flex items-start gap-2"
                              >
                                <span className="text-rose-500 font-bold">Q#{err.index}:</span>
                                <div>
                                  <p className="font-semibold text-slate-200">"{err.questionSnippet}"</p>
                                  <p className="text-rose-400">{err.reason}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Post-Ingestion Navigation CTAs */}
                      <div className="pt-2 flex flex-wrap gap-3">
                        <Link
                          href="/configure"
                          className="text-xs bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow"
                        >
                          Configure Quiz Session
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/select"
                          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          Explore Subjects
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Schema Specifications & Helper Guide */}
          <div className="lg:col-span-4 space-y-6">
            {/* Schema Guide Box */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  Expected JSON Schema
                </div>
                <button
                  onClick={handleCopySample}
                  className="text-xs text-slate-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Sample
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 font-mono text-[11px] text-purple-300 space-y-1">
                  <p className="text-slate-400 font-sans font-semibold mb-1">Key Properties:</p>
                  <p><span className="text-cyan-400">"classLevel"</span>: 7 (or "Class 7")</p>
                  <p><span className="text-cyan-400">"subject"</span>: "Science"</p>
                  <p><span className="text-cyan-400">"chapter"</span>: "Nutrition in Plants"</p>
                  <p><span className="text-cyan-400">"question"</span>: "Question text..."</p>
                  <p><span className="text-cyan-400">"options"</span>: ["A", "B", "C", "D"]</p>
                  <p><span className="text-cyan-400">"correctAnswer"</span>: 0 | 1 | 2 | 3</p>
                  <p><span className="text-cyan-400">"difficulty"</span>: "EASY" | "MEDIUM" | "HARD"</p>
                  <p><span className="text-cyan-400">"explanation"</span>: "Educational explanation..."</p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Built-in Auto-Normalizations:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400">
                    <li>Accepts both <code className="text-slate-200">question</code> or <code className="text-slate-200">text</code>.</li>
                    <li>Accepts <code className="text-slate-200">correctAnswer</code> as 0-indexed integer or option text.</li>
                    <li>Supports object-style <code className="text-slate-200">options: [{'{'} text, isCorrect {'}'}]</code>.</li>
                    <li>Automatic deduplication prevents duplicate questions from cluttering the database.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-purple-950/30 to-cyan-950/30 border border-purple-900/40 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                Tips for High Ingestion Speed
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                For optimal throughput, upload batches of 50 to 200 questions at a time. The Server Action uses fast sequential Prisma pipelines and caches revalidation instantly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
