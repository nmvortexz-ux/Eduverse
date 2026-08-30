'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export interface IngestionStats {
  totalReceived: number;
  inserted: number;
  skippedDuplicates: number;
  failed: number;
  errors: { index: number; questionSnippet: string; reason: string }[];
  durationMs: number;
}

export interface IngestionResponse {
  success: boolean;
  message: string;
  stats: IngestionStats;
}

export interface AdminDbStats {
  totalQuestions: number;
  totalAttempts: number;
  classBreakdown: { class: string; count: number }[];
  subjectBreakdown: { subject: string; count: number }[];
}

/**
 * Normalizes input class formats:
 * 6 -> "Class 6", "6" -> "Class 6", "Class 6" -> "Class 6"
 */
function normalizeClass(rawClass: any, fallback?: string): string {
  if (rawClass === undefined || rawClass === null || rawClass === '') {
    if (fallback) return normalizeClass(fallback);
    return 'Class 7';
  }
  const str = String(rawClass).trim();
  const numMatch = str.match(/\d+/);
  if (numMatch) {
    return `Class ${numMatch[0]}`;
  }
  return str;
}

/**
 * Normalizes difficulty values
 */
function normalizeDifficulty(rawDiff: any): string {
  const str = String(rawDiff || '').trim().toUpperCase();
  if (str.includes('EASY')) return 'Easy';
  if (str.includes('HARD') || str.includes('HIGH')) return 'Hard';
  return 'Medium';
}

/**
 * Server action to fetch current question database overview
 */
export async function getAdminDbStats(): Promise<AdminDbStats> {
  try {
    const totalQuestions = await prisma.question.count();
    const totalAttempts = await prisma.quizAttempt.count().catch(() => 0);

    const classGroup = await prisma.question.groupBy({
      by: ['class'],
      _count: { id: true },
      orderBy: { class: 'asc' },
    });

    const subjectGroup = await prisma.question.groupBy({
      by: ['subject'],
      _count: { id: true },
      orderBy: { subject: 'asc' },
    });

    return {
      totalQuestions,
      totalAttempts,
      classBreakdown: classGroup.map((c) => ({ class: c.class, count: c._count.id })),
      subjectBreakdown: subjectGroup.map((s) => ({ subject: s.subject, count: s._count.id })),
    };
  } catch (error: any) {
    console.error('Error fetching admin stats:', error);
    return {
      totalQuestions: 0,
      totalAttempts: 0,
      classBreakdown: [],
      subjectBreakdown: [],
    };
  }
}

/**
 * Server action to batch insert an array of MCQs into PostgreSQL via Prisma
 */
export async function batchInsertQuestions(
  rawJsonString: string,
  optionsOverride?: { defaultClass?: string; defaultSubject?: string; allowOverwrite?: boolean }
): Promise<IngestionResponse> {
  const startTime = Date.now();

  const stats: IngestionStats = {
    totalReceived: 0,
    inserted: 0,
    skippedDuplicates: 0,
    failed: 0,
    errors: [],
    durationMs: 0,
  };

  if (!rawJsonString || typeof rawJsonString !== 'string' || !rawJsonString.trim()) {
    stats.durationMs = Date.now() - startTime;
    return {
      success: false,
      message: 'JSON payload is empty. Please paste a valid JSON array of questions.',
      stats,
    };
  }

  let parsedData: any;
  try {
    parsedData = JSON.parse(rawJsonString.trim());
  } catch (parseErr: any) {
    stats.durationMs = Date.now() - startTime;
    return {
      success: false,
      message: `Invalid JSON syntax: ${parseErr.message}`,
      stats,
    };
  }

  const questionsList: any[] = Array.isArray(parsedData)
    ? parsedData
    : Array.isArray(parsedData?.questions)
    ? parsedData.questions
    : [parsedData];

  stats.totalReceived = questionsList.length;

  if (stats.totalReceived === 0) {
    stats.durationMs = Date.now() - startTime;
    return {
      success: false,
      message: 'No question objects found in the provided JSON array.',
      stats,
    };
  }

  for (let i = 0; i < questionsList.length; i++) {
    const item = questionsList[i];
    const index = i + 1;

    // 1. Extract Question Text
    const questionText = (item.text || item.question || '').trim();
    if (!questionText) {
      stats.failed++;
      stats.errors.push({
        index,
        questionSnippet: 'N/A',
        reason: 'Missing question or text property',
      });
      continue;
    }

    const snippet = questionText.length > 60 ? `${questionText.substring(0, 60)}...` : questionText;

    // 2. Validate & normalize options
    let formattedOptions: { text: string; isCorrect: boolean }[] = [];
    const rawOptions = item.options;

    if (!Array.isArray(rawOptions) || rawOptions.length < 2) {
      stats.failed++;
      stats.errors.push({
        index,
        questionSnippet: snippet,
        reason: 'Options array must contain at least 2 choices',
      });
      continue;
    }

    // Determine correct option
    if (typeof rawOptions[0] === 'string') {
      const optStrings = rawOptions.map((o: any) => String(o).trim());
      let correctIdx = -1;

      if (typeof item.correctAnswer === 'number' && item.correctAnswer >= 0 && item.correctAnswer < optStrings.length) {
        correctIdx = item.correctAnswer;
      } else if (typeof item.correctAnswer === 'string') {
        const trimmedAns = item.correctAnswer.trim();
        correctIdx = optStrings.findIndex((o) => o === trimmedAns);
        if (correctIdx === -1 && /^[0-3]$/.test(trimmedAns)) {
          correctIdx = parseInt(trimmedAns, 10);
        }
      }

      if (correctIdx === -1) {
        stats.failed++;
        stats.errors.push({
          index,
          questionSnippet: snippet,
          reason: `Could not match correctAnswer (${JSON.stringify(item.correctAnswer)}) to any option string`,
        });
        continue;
      }

      formattedOptions = optStrings.map((text, idx) => ({
        text,
        isCorrect: idx === correctIdx,
      }));
    } else if (typeof rawOptions[0] === 'object') {
      formattedOptions = rawOptions.map((opt: any) => ({
        text: String(opt.text || '').trim(),
        isCorrect: Boolean(opt.isCorrect),
      }));

      const hasCorrect = formattedOptions.some((o) => o.isCorrect);
      if (!hasCorrect) {
        stats.failed++;
        stats.errors.push({
          index,
          questionSnippet: snippet,
          reason: 'No option marked with isCorrect: true',
        });
        continue;
      }
    }

    // 3. Resolve metadata fields
    const classVal = normalizeClass(item.classLevel || item.class, optionsOverride?.defaultClass);
    const subjectVal = (item.subject || optionsOverride?.defaultSubject || 'Science').trim();
    const chapterVal = item.chapter ? String(item.chapter).trim() : null;
    const difficultyVal = normalizeDifficulty(item.difficulty);
    const explanationVal = (item.explanation || 'Refer to NCERT textbook curriculum.').trim();

    try {
      // 4. Duplicate Check
      const existing = await prisma.question.findFirst({
        where: {
          text: questionText,
          class: classVal,
        },
        select: { id: true },
      });

      if (existing) {
        if (optionsOverride?.allowOverwrite) {
          // Delete and recreate
          await prisma.question.delete({ where: { id: existing.id } });
        } else {
          stats.skippedDuplicates++;
          continue;
        }
      }

      // 5. Insert Question + Nested Options
      await prisma.question.create({
        data: {
          text: questionText,
          class: classVal,
          subject: subjectVal,
          chapter: chapterVal,
          difficulty: difficultyVal,
          explanation: explanationVal,
          options: {
            create: formattedOptions,
          },
        },
      });

      stats.inserted++;
    } catch (insertErr: any) {
      stats.failed++;
      stats.errors.push({
        index,
        questionSnippet: snippet,
        reason: insertErr.message || 'Database error occurred during insertion',
      });
    }
  }

  stats.durationMs = Date.now() - startTime;
  revalidatePath('/quiz');
  revalidatePath('/configure');
  revalidatePath('/admin');

  const isSuccess = stats.inserted > 0 || (stats.skippedDuplicates > 0 && stats.failed === 0);

  return {
    success: isSuccess,
    message: isSuccess
      ? `Batch complete! Inserted ${stats.inserted} question(s), skipped ${stats.skippedDuplicates} duplicate(s) in ${(stats.durationMs / 1000).toFixed(2)}s.`
      : `Batch finished with ${stats.failed} errors. Review details below.`,
    stats,
  };
}
