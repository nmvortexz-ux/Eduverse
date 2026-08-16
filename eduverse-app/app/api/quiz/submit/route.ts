import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '../../../../lib/prisma';
import { syncUser } from '../../../../lib/syncUser';

/**
 * POST /api/quiz/submit
 * Body: { subject: string, class: number, score: number, totalQuestions: number, correctAnswers: number }
 *
 * Records a completed quiz attempt for the authenticated user.
 * Enforces strict Clerk authentication and payload boundary checks.
 */
export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized — please sign in to save quiz results.' },
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

    const { subject, class: classNum, score, totalQuestions, correctAnswers } = body;

    // Strict boundary & type validation
    if (
      typeof subject !== 'string' ||
      subject.trim().length === 0 ||
      subject.length > 100
    ) {
      return NextResponse.json(
        { success: false, error: 'Invalid subject parameter.' },
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

    const parsedScore = Number(score);
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      return NextResponse.json(
        { success: false, error: 'Invalid score parameter (must be percentage 0 - 100).' },
        { status: 400 }
      );
    }

    const parsedTotal = Number(totalQuestions);
    if (isNaN(parsedTotal) || parsedTotal <= 0 || parsedTotal > 500) {
      return NextResponse.json(
        { success: false, error: 'Invalid totalQuestions parameter.' },
        { status: 400 }
      );
    }

    const parsedCorrect = Number(correctAnswers);
    if (isNaN(parsedCorrect) || parsedCorrect < 0 || parsedCorrect > parsedTotal) {
      return NextResponse.json(
        { success: false, error: 'Invalid correctAnswers parameter.' },
        { status: 400 }
      );
    }

    // Sync user to Neon DB on-demand
    await syncUser();

    // Record quiz attempt safely
    const attempt = await prisma.quizAttempt.create({
      data: {
        userId,
        subject: subject.trim(),
        class: Math.floor(parsedClass),
        score: Math.floor(parsedScore),
        totalQuestions: Math.floor(parsedTotal),
        correctAnswers: Math.floor(parsedCorrect),
      },
    });

    return NextResponse.json({ success: true, attempt });
  } catch (error) {
    console.error('Error saving quiz attempt:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save quiz attempt.' },
      { status: 500 }
    );
  }
}
