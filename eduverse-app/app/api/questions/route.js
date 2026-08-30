import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

function sortChaptersSequential(chapters) {
  return chapters.sort((a, b) => {
    const numA = parseInt(a.match(/(?:Chapter|Ch\.?)\s*(\d+)/i)?.[1] || '999', 10);
    const numB = parseInt(b.match(/(?:Chapter|Ch\.?)\s*(\d+)/i)?.[1] || '999', 10);
    if (numA !== numB) return numA - numB;
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  });
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const className = searchParams.get('class');
    const subject = searchParams.get('subject');
    const chapter = searchParams.get('chapter');
    const limit = searchParams.get('limit');

    const where = {};
    if (className) where.class = className;
    if (subject) where.subject = subject;
    if (chapter) where.chapter = chapter;

    const queryOptions = {
      where,
      include: {
        options: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    };

    const MAX_QUESTIONS_PER_REQUEST = 200;
    if (limit) {
      const parsedLimit = parseInt(limit, 10);
      if (!isNaN(parsedLimit) && parsedLimit > 0) {
        queryOptions.take = Math.min(parsedLimit, MAX_QUESTIONS_PER_REQUEST);
      }
    } else {
      // Default cap even when no limit is provided
      queryOptions.take = MAX_QUESTIONS_PER_REQUEST;
    }

    const questions = await prisma.question.findMany(queryOptions);

    // Fetch distinct chapters for the selected class/subject
    const chapterGroups = await prisma.question.groupBy({
      by: ['chapter'],
      where: {
        class: className || undefined,
        subject: subject || undefined,
        chapter: { not: null }
      }
    });
    
    const rawChapters = chapterGroups.map(g => g.chapter).filter(Boolean);
    const chapters = sortChaptersSequential(rawChapters);

    return NextResponse.json({ success: true, data: questions, chapters });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch questions' }, { status: 500 });
  }
}
