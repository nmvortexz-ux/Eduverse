import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '../../../lib/prisma';
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

interface UserWithAttempts extends User {
  quizAttempts: QuizAttempt[];
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const classFilter = searchParams.get('class');
    const timeframeFilter = searchParams.get('timeframe') || searchParams.get('period');

    // 1. Parse class filter integer
    let parsedClass: number | null = null;
    if (classFilter && classFilter !== 'All' && classFilter !== 'All Classes') {
      const match = classFilter.match(/\d+/);
      if (match) parsedClass = parseInt(match[0], 10);
    }

    // 2. Parse timeframe filter
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

    // 3. Build Prisma where clause for QuizAttempt
    const whereAttempt: Record<string, any> = {};
    if (parsedClass !== null) {
      whereAttempt.class = parsedClass;
    }
    if (timeframeDate !== null) {
      whereAttempt.completedAt = { gte: timeframeDate };
    }

    // 4. Fetch users with their filtered quiz attempts from database
    // Security: select only required fields, email is deliberately excluded
    const users = (await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        imageUrl: true,
        quizAttempts: {
          where: whereAttempt,
          orderBy: { completedAt: 'desc' },
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

    // 5. Aggregate user performance strictly from real database attempts
    const userStats = users
      .filter((u: UserWithAttempts) => u.quizAttempts && u.quizAttempts.length > 0)
      .map((u: UserWithAttempts) => {
        const totalQuizzes = u.quizAttempts.length;
        const totalCorrect = u.quizAttempts.reduce((acc: number, curr: QuizAttempt) => acc + curr.correctAnswers, 0);
        const totalAttempted = u.quizAttempts.reduce((acc: number, curr: QuizAttempt) => acc + curr.totalQuestions, 0);
        const avgAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
        const totalScore = u.quizAttempts.reduce((acc: number, curr: QuizAttempt) => acc + curr.score, 0);
        const lastClass = u.quizAttempts[0]?.class || 9;

        const displayName = u.name || (u.email ? u.email.split('@')[0] : 'Learner');

        return {
          id: u.id,
          name: displayName,
          avatar: u.imageUrl || null,
          initial: displayName.charAt(0).toUpperCase(),
          classNum: lastClass,
          className: `Class ${lastClass}`,
          totalQuizzes,
          totalScore,
          avgAccuracy,
          isRealUser: true,
        };
      });

    // 6. Sort users by avgAccuracy descending, then totalQuizzes descending
    userStats.sort((a, b) => {
      if (b.avgAccuracy !== a.avgAccuracy) return b.avgAccuracy - a.avgAccuracy;
      return b.totalQuizzes - a.totalQuizzes;
    });

    // 7. Assign ranks and dynamic badges
    const rankedList = userStats.map((item, index: number) => {
      const rank = index + 1;
      const badges = assignBadges(rank, item.totalQuizzes, item.avgAccuracy);
      return {
        ...item,
        rank,
        badges,
      };
    });

    const topThree = rankedList.slice(0, 3);
    const rankings = rankedList.slice(3);

    // 8. Identify current logged-in user rank
    let currentUserRank = null;
    try {
      const { userId } = await auth();
      if (userId) {
        const userRankItem = rankedList.find((u) => u.id === userId);
        if (userRankItem) {
          currentUserRank = userRankItem;
        }
      }
    } catch {
      // auth failure fallback
    }

    return NextResponse.json({
      success: true,
      topThree,
      rankings,
      totalStudents: rankedList.length,
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
