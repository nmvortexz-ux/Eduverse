import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { QuizAttempt, User } from '@prisma/client';

function assignBadges(rank: number, totalQuizzes: number, avgAccuracy: number) {
  const badges: { id: string; label: string; icon: string; bg: string; color: string }[] = [];

  if (rank <= 3 && avgAccuracy >= 80) {
    badges.push({ id: 'top_performer', label: 'Top Performer', icon: '🥇', bg: '#FEF3C7', color: '#B45309' });
  }
  if (totalQuizzes >= 10) {
    badges.push({ id: 'quiz_master', label: 'Quiz Master', icon: '🔥', bg: '#FEE2E2', color: '#DC2626' });
  }
  if (avgAccuracy >= 90) {
    badges.push({ id: 'sharp_shooter', label: 'Sharp Shooter', icon: '🎯', bg: '#E0F2FE', color: '#0284C7' });
  }
  if (totalQuizzes >= 5 && avgAccuracy >= 80) {
    badges.push({ id: 'rising_star', label: 'Rising Star', icon: '🚀', bg: '#D1FAE5', color: '#059669' });
  }

  return badges;
}

function getDeterministicScholarNumber(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash % 900) + 100; // e.g. 429
}

function getAnonymizedId(userId: string): string {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = ((hash << 5) - hash) + userId.charCodeAt(i);
    hash |= 0;
  }
  return `std_${Math.abs(hash).toString(16)}`;
}

function anonymizeDisplayName(
  rawName: string | null | undefined,
  userId: string,
  classNum: number
): { displayName: string; initial: string } {
  const trimmed = rawName?.trim();
  if (trimmed && trimmed.length > 0) {
    // Retain only first name for minor student privacy (DPDP / COPPA compliance)
    const firstName = trimmed.split(/\s+/)[0];
    const sanitized = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    return {
      displayName: `${sanitized} (Class ${classNum})`,
      initial: sanitized.charAt(0).toUpperCase(),
    };
  }

  // Deterministic fallback pseudonym if name is absent or omitted
  const scholarNum = getDeterministicScholarNumber(userId);
  return {
    displayName: `Scholar #${scholarNum} (Class ${classNum})`,
    initial: 'S',
  };
}

interface UserWithAttempts {
  id: string;
  name: string | null;
  quizAttempts: {
    correctAnswers: number;
    totalQuestions: number;
    score: number;
    class: number;
    completedAt: Date;
  }[];
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const classFilter = searchParams.get('class');
    const timeframeFilter = searchParams.get('timeframe') || searchParams.get('period');

    // 1. Pagination parameters (bounded to prevent memory exhaustion)
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const pageSize = Math.min(50, Math.max(10, parseInt(searchParams.get('limit') || '50', 10)));
    const skip = (page - 1) * pageSize;

    // 2. Parse class filter integer
    let parsedClass: number | null = null;
    if (classFilter && classFilter !== 'All' && classFilter !== 'All Classes') {
      const match = classFilter.match(/\d+/);
      if (match) parsedClass = parseInt(match[0], 10);
    }

    // 3. Parse timeframe filter
    let timeframeDate: Date | null = null;
    if (timeframeFilter) {
      const tf = timeframeFilter.toLowerCase();
      const now = new Date();
      if (tf.includes('daily') || tf.includes('24h')) {
        timeframeDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      } else if (tf.includes('weekly') || tf.includes('7d')) {
        timeframeDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      } else if (tf.includes('monthly') || tf.includes('30d')) {
        timeframeDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      }
    }

    // 4. Build attempt criteria
    const whereAttempt: Record<string, unknown> = {};
    if (parsedClass !== null) {
      whereAttempt.class = parsedClass;
    }
    if (timeframeDate !== null) {
      whereAttempt.completedAt = { gte: timeframeDate };
    }

    // 5. Query active users with a bounded dataset (take: 100) to prevent unbounded memory usage
    // Strictly omit email, clerkId, and external social imageUrl
    const users = (await prisma.user.findMany({
      where: {
        quizAttempts: {
          some: whereAttempt,
        },
      },
      take: 100,
      select: {
        id: true,
        name: true,
        quizAttempts: {
          where: whereAttempt,
          orderBy: { completedAt: 'desc' },
          take: 50,
          select: {
            correctAnswers: true,
            totalQuestions: true,
            score: true,
            class: true,
            completedAt: true,
          },
        },
      },
    })) as UserWithAttempts[];

    // 6. Aggregate user performance strictly from real database attempts
    const userStats = users
      .filter((u) => u.quizAttempts && u.quizAttempts.length > 0)
      .map((u) => {
        const totalQuizzes = u.quizAttempts.length;
        const totalCorrect = u.quizAttempts.reduce((acc, curr) => acc + curr.correctAnswers, 0);
        const totalAttempted = u.quizAttempts.reduce((acc, curr) => acc + curr.totalQuestions, 0);
        const avgAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
        const totalScore = u.quizAttempts.reduce((acc, curr) => acc + curr.score, 0);
        const lastClass = u.quizAttempts[0]?.class || 9;

        const { displayName, initial } = anonymizeDisplayName(u.name, u.id, lastClass);
        const anonymizedId = getAnonymizedId(u.id);

        return {
          rawUserId: u.id, // For currentUserRank matching only, stripped before sending
          id: anonymizedId,
          name: displayName,
          avatar: null, // DPDP/COPPA: zero leakage of external social/Google avatars
          initial,
          classNum: lastClass,
          className: `Class ${lastClass}`,
          totalQuizzes,
          totalScore,
          avgAccuracy,
          isRealUser: true,
        };
      });

    // 7. Sort users by avgAccuracy descending, then totalQuizzes descending
    userStats.sort((a, b) => {
      if (b.avgAccuracy !== a.avgAccuracy) return b.avgAccuracy - a.avgAccuracy;
      return b.totalQuizzes - a.totalQuizzes;
    });

    // 8. Identify current logged-in user rank before stripping raw IDs
    let currentAuthUserId: string | null = null;
    try {
      const { userId } = await auth();
      currentAuthUserId = userId;
    } catch {
      // Unauthenticated fallback
    }

    let currentUserRank = null;

    // 9. Assign ranks and dynamic badges
    const rankedList = userStats.map((item, index: number) => {
      const rank = index + 1;
      const badges = assignBadges(rank, item.totalQuizzes, item.avgAccuracy);
      
      const isCurrentUser = Boolean(currentAuthUserId && item.rawUserId === currentAuthUserId);
      const publicItem = {
        id: item.id,
        rank,
        name: item.name,
        avatar: item.avatar,
        initial: item.initial,
        classNum: item.classNum,
        className: item.className,
        totalQuizzes: item.totalQuizzes,
        totalScore: item.totalScore,
        avgAccuracy: item.avgAccuracy,
        badges,
        isRealUser: true,
      };

      if (isCurrentUser) {
        currentUserRank = publicItem;
      }

      return publicItem;
    });

    // 10. Split into podium top 3 and paginated rankings list
    const topThree = rankedList.slice(0, 3);
    const remainingList = rankedList.slice(3);
    const rankings = remainingList.slice(skip, skip + pageSize);

    return NextResponse.json({
      success: true,
      page,
      pageSize,
      totalStudents: rankedList.length,
      topThree,
      rankings,
      currentUserRank,
    });
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to load leaderboard' },
      { status: 500 }
    );
  }
}
