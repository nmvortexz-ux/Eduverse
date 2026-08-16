import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
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

    return NextResponse.json({
      success: true,
      data: {
        classes,
        subjects
      }
    });
  } catch (error) {
    console.error("Error fetching meta data:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch meta data' }, { status: 500 });
  }
}
