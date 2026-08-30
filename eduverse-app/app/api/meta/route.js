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
    const url = request.url ? new URL(request.url) : null;
    const className = url ? url.searchParams.get('class') : null;
    const subject = url ? url.searchParams.get('subject') : null;

    // Fetch distinct classes
    const classesData = await prisma.question.findMany({
      distinct: ['class'],
      select: { class: true },
      orderBy: { class: 'asc' }
    });

    // Fetch distinct subjects
    const subjectsData = await prisma.question.findMany({
      distinct: ['subject'],
      select: { subject: true },
      orderBy: { subject: 'asc' }
    });

    const classes = classesData.map(item => item.class);
    const subjects = subjectsData.map(item => item.subject);

    // Fetch distinct chapters filtered strictly by class AND subject
    const where = { chapter: { not: null } };
    if (className) where.class = className;
    if (subject) where.subject = subject;

    const chapterGroups = await prisma.question.groupBy({
      by: ['chapter'],
      where
    });

    const rawChapters = chapterGroups.map(g => g.chapter).filter(Boolean);
    const chapters = sortChaptersSequential(rawChapters);

    return NextResponse.json({
      success: true,
      data: {
        classes,
        subjects,
        chapters
      }
    });
  } catch (error) {
    console.error("Error fetching meta data:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch meta data' }, { status: 500 });
  }
}
