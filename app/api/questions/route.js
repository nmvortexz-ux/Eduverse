import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const className = searchParams.get('class');
    const subject = searchParams.get('subject');
    const limit = searchParams.get('limit');

    const where = {};
    if (className) where.class = className;
    if (subject) where.subject = subject;

    const queryOptions = {
      where,
      include: {
        options: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    };

    if (limit) {
      const parsedLimit = parseInt(limit, 10);
      if (!isNaN(parsedLimit) && parsedLimit > 0) {
        queryOptions.take = parsedLimit;
      }
    }

    const questions = await prisma.question.findMany(queryOptions);

    return NextResponse.json({ success: true, data: questions });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch questions' }, { status: 500 });
  }
}
