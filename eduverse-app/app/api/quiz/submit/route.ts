import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { syncUser } from '@/lib/syncUser';

/**
 * POST /api/quiz/submit
 * Body: {
 *   subject: string,
 *   class: number,
 *   questionIds: string[],                 // every question the user faced this attempt
 *   answers: Record<questionId, optionId>  // the option the user chose per question
 * }
 *
 * Records a completed quiz attempt for the authenticated user.
 *
 * Evaluates choices server-side against authoritative answer key (Option.isCorrect).
 * Post-submission, returns detailed breakdown with explanations and correct answers.
 */

const MAX_QUESTIONS = 500;
const DUPLICATE_SUBMISSION_WINDOW_MS = 5000; // 5-second debounce against double-clicks/spam

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized — please sign in to submit assessments.' },
        { status: 401 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON payload.' },
        { status: 400 }
      );
    }

    const { subject, class: classNum, questionIds, answers } = body ?? {};

    // 1. Strict boundary & type validation
    if (typeof subject !== 'string' || subject.trim().length === 0 || subject.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Invalid or missing subject parameter.' },
        { status: 400 }
      );
    }

    const parsedClass = Number(classNum);
    if (isNaN(parsedClass) || parsedClass < 1 || parsedClass > 12) {
      return NextResponse.json(
        { success: false, error: 'Invalid class parameter (must be between 1 and 12).' },
        { status: 400 }
      );
    }

    // Empty submission checks
    if (!Array.isArray(questionIds) || questionIds.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Submission rejected: questionIds array cannot be empty.' },
        { status: 400 }
      );
    }

    if (questionIds.length > MAX_QUESTIONS) {
      return NextResponse.json(
        { success: false, error: `Payload too large: maximum ${MAX_QUESTIONS} questions per submission.` },
        { status: 400 }
      );
    }

    if (typeof answers !== 'object' || answers === null || Array.isArray(answers)) {
      return NextResponse.json(
        { success: false, error: 'Invalid answers payload format.' },
        { status: 400 }
      );
    }

    // Normalize & de-duplicate submitted question ids
    const ids = Array.from(
      new Set(questionIds.filter((id): id is string => typeof id === 'string' && id.trim().length > 0))
    );
    if (ids.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No valid question IDs submitted.' },
        { status: 400 }
      );
    }

    // 2. Duplicate submission rate guard
    const normalizedSubject = subject.trim();
    const normalizedClass = Math.floor(parsedClass);
    const recentAttempt = await prisma.quizAttempt.findFirst({
      where: {
        userId,
        subject: normalizedSubject,
        class: normalizedClass,
        completedAt: {
          gte: new Date(Date.now() - DUPLICATE_SUBMISSION_WINDOW_MS),
        },
      },
      orderBy: { completedAt: 'desc' },
    });

    if (recentAttempt) {
      return NextResponse.json(
        { success: false, error: 'Duplicate submission detected. Please wait a moment before submitting again.' },
        { status: 429 }
      );
    }

    // 3. Authoritative answer key query straight from the database
    const dbQuestions = await prisma.question.findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        text: true,
        explanation: true,
        difficulty: true,
        options: {
          select: {
            id: true,
            text: true,
            isCorrect: true,
          },
        },
      },
    });

    if (dbQuestions.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Submitted questions were not found in curriculum.' },
        { status: 404 }
      );
    }

    // 4. Server-side grading & breakdown generation
    const answerMap = answers as Record<string, unknown>;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    const breakdown = dbQuestions.map((q) => {
      const chosenOptionId = answerMap[q.id];
      const selectedOptionId = typeof chosenOptionId === 'string' ? chosenOptionId : null;
      const correctOption = q.options.find((o) => o.isCorrect);
      
      let isAnswerCorrect = false;
      if (!selectedOptionId) {
        skipped++;
      } else if (correctOption && selectedOptionId === correctOption.id) {
        correct++;
        isAnswerCorrect = true;
      } else {
        wrong++;
      }

      return {
        questionId: q.id,
        questionText: q.text,
        explanation: q.explanation,
        difficulty: q.difficulty,
        selectedOptionId,
        correctOptionId: correctOption?.id ?? null,
        isCorrect: isAnswerCorrect,
        options: q.options.map((o) => ({
          id: o.id,
          text: o.text,
          isCorrect: o.isCorrect,
        })),
      };
    });

    const total = dbQuestions.length;
    const scorePct = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Sync user profile to database on demand
    await syncUser();

    // 5. Atomic write of quiz attempt with verified server metrics
    const attempt = await prisma.quizAttempt.create({
      data: {
        userId,
        subject: normalizedSubject,
        class: normalizedClass,
        score: scorePct,
        totalQuestions: total,
        correctAnswers: correct,
      },
    });

    // 6. Return response payload including post-submission review breakdown
    return NextResponse.json({
      success: true,
      attempt: {
        id: attempt.id,
        score: scorePct,
        correctAnswers: correct,
        wrongAnswers: wrong,
        skippedAnswers: skipped,
        totalQuestions: total,
        completedAt: attempt.completedAt,
      },
      breakdown,
    });
  } catch (error) {
    console.error('Error processing quiz submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to evaluate and save quiz attempt.' },
      { status: 500 }
    );
  }
}
