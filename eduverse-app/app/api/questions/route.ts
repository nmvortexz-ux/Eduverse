import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

function sortChaptersSequential(chapters: string[]): string[] {
  return chapters.sort((a, b) => {
    const numA = parseInt(a.match(/(?:Chapter|Ch\.?)\s*(\d+)/i)?.[1] || '999', 10);
    const numB = parseInt(b.match(/(?:Chapter|Ch\.?)\s*(\d+)/i)?.[1] || '999', 10);
    if (numA !== numB) return numA - numB;
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  });
}

function normalizeSubjectFilter(subject: string | null) {
  if (!subject) return undefined;
  if (/social/i.test(subject)) {
    return { in: ['Social Science', 'Social Studies'] };
  }
  if (/math/i.test(subject)) {
    return { in: ['Mathematics', 'Math'] };
  }
  return subject;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const className = searchParams.get('class');
    const subject = searchParams.get('subject');
    const chapter = searchParams.get('chapter');
    const limit = searchParams.get('limit');
    const mode = searchParams.get('mode')?.toLowerCase();

    const isPracticeMode = mode === 'practice';

    const where: Record<string, unknown> = {};
    if (className) where.class = className;
    if (subject) where.subject = normalizeSubjectFilter(subject);

    // Conditionally add chapter filter if not 'all'
    if (
      chapter &&
      chapter.toLowerCase() !== 'all' &&
      chapter.toLowerCase() !== 'all chapters' &&
      chapter.toLowerCase() !== 'all-chapters'
    ) {
      where.chapter = chapter;
    }

    const MAX_QUESTIONS_PER_REQUEST = 200;
    let take = MAX_QUESTIONS_PER_REQUEST;
    if (limit) {
      const parsedLimit = parseInt(limit, 10);
      if (!isNaN(parsedLimit) && parsedLimit > 0) {
        take = Math.min(parsedLimit, MAX_QUESTIONS_PER_REQUEST);
      }
    }

    // Security & Answer Key Isolation:
    // In practice mode, include isCorrect and explanation for real-time hints & learning.
    // In exam mode (or default), strip isCorrect completely from options and strip explanation.
    const questions = await prisma.question.findMany({
      where,
      select: {
        id: true,
        class: true,
        subject: true,
        chapter: true,
        difficulty: true,
        text: true,
        ...(isPracticeMode ? { explanation: true } : {}),
        createdAt: true,
        options: {
          select: {
            id: true,
            text: true,
            ...(isPracticeMode ? { isCorrect: true } : {}),
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take,
    });

    // Fetch distinct chapters for the selected class/subject
    const chapterGroups = await prisma.question.groupBy({
      by: ['chapter'],
      where: {
        class: className || undefined,
        subject: normalizeSubjectFilter(subject),
        chapter: { not: null },
      },
    });

    const rawChapters = chapterGroups
      .map((g) => g.chapter)
      .filter((c): c is string => Boolean(c));
    const chapters = sortChaptersSequential(rawChapters);

    return NextResponse.json({
      success: true,
      mode: isPracticeMode ? 'practice' : 'exam',
      data: questions,
      chapters,
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}
