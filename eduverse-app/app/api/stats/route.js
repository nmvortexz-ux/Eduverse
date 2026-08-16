import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '../../../lib/prisma';
import { syncUser } from '../../../lib/syncUser';

const SUBJECT_METADATA = {
  'Science': { emoji: '🔬', color: '#CCFBF1', border: '#0D9488' },
  'Mathematics': { emoji: '📐', color: '#FFEBF0', border: '#F43F5E' },
  'English': { emoji: '📖', color: '#FFFBEB', border: '#F59E0B' },
  'Hindi Grammar': { emoji: '🅰️', color: '#F3E8FF', border: '#A855F7' },
  'GK': { emoji: '🌍', color: '#E0F2FE', border: '#0284C7' },
  'Social Studies': { emoji: '🏛️', color: '#ECFDF5', border: '#059669' },
};

export async function GET() {
  try {
    // 1. Total distinct classes
    const classGroups = await prisma.question.groupBy({ by: ['class'] });
    const totalClasses = classGroups.length;

    // 2. Total distinct subjects
    const subjectGroups = await prisma.question.groupBy({ by: ['subject'] });
    const totalSubjects = subjectGroups.length;

    // 3. Total questions
    const totalQuestions = await prisma.question.count();

    // 4. Total registered students
    const totalStudents = await prisma.user.count();

    // 5. User-specific stats
    let leaderboardPercentile = null;
    let recentQuizScore = null;
    let overallAccuracy = null;
    let totalQuizzes = 0;
    let totalCorrect = 0;
    let totalAttempted = 0;
    let totalXP = 0;
    let level = 1;
    let xpInLevel = 0;
    const xpForNextLevel = 500;
    let subjectPerformance = [];
    let recentAttempts = [];

    const { userId } = await auth();

    if (userId) {
      // Ensure user is synced to DB
      await syncUser();

      // Get user's quiz attempts
      const attempts = await prisma.quizAttempt.findMany({
        where: { userId },
        orderBy: { completedAt: 'desc' },
      });

      totalQuizzes = attempts.length;

      if (totalQuizzes > 0) {
        // Recent Quiz Score
        recentQuizScore = attempts[0].score;

        // Total correct and attempted
        totalCorrect = attempts.reduce((acc, curr) => acc + curr.correctAnswers, 0);
        totalAttempted = attempts.reduce((acc, curr) => acc + curr.totalQuestions, 0);
        
        if (totalAttempted > 0) {
          overallAccuracy = Math.round((totalCorrect / totalAttempted) * 100);
        }

        // XP Calculation: 10 XP per correct answer + 5 XP per attempt
        totalXP = totalCorrect * 10 + totalQuizzes * 5;
        level = Math.floor(totalXP / xpForNextLevel) + 1;
        xpInLevel = totalXP % xpForNextLevel;

        // Leaderboard Percentile calculation
        const userScores = await prisma.quizAttempt.groupBy({
          by: ['userId'],
          _avg: { score: true },
        });

        if (userScores.length > 0) {
          userScores.sort((a, b) => (b._avg.score || 0) - (a._avg.score || 0));
          const totalUsersWithAttempts = userScores.length;
          const userIndex = userScores.findIndex((u) => u.userId === userId);

          if (userIndex !== -1) {
            const userRank = userIndex + 1;
            leaderboardPercentile = Math.max(
              1,
              Math.round((1 - (userRank - 1) / totalUsersWithAttempts) * 100)
            );
          }
        }

        // Aggregated Subject Performance from real DB attempts
        const subjectAggMap = new Map();
        for (const att of attempts) {
          const sub = att.subject;
          if (!subjectAggMap.has(sub)) {
            subjectAggMap.set(sub, { correct: 0, total: 0, count: 0 });
          }
          const curr = subjectAggMap.get(sub);
          curr.correct += att.correctAnswers;
          curr.total += att.totalQuestions;
          curr.count += 1;
        }

        subjectPerformance = Array.from(subjectAggMap.entries()).map(([sub, data]) => {
          const avg = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
          const meta = SUBJECT_METADATA[sub] || { emoji: '📖', color: '#FEF3C7', border: '#F59E0B' };
          return {
            subject: sub,
            avg,
            totalQuizzes: data.count,
            emoji: meta.emoji,
            color: meta.color,
            border: meta.border,
          };
        });

        // Formatted Recent Attempts
        recentAttempts = attempts.slice(0, 5).map((att) => {
          const dateStr = new Date(att.completedAt).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
          });
          const acc = att.totalQuestions > 0 ? Math.round((att.correctAnswers / att.totalQuestions) * 100) : 0;
          return {
            id: att.id,
            subject: att.subject,
            cls: `Class ${att.class}`,
            score: att.score,
            total: att.totalQuestions,
            mode: 'Practice',
            date: dateStr,
            accuracy: acc,
          };
        });
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        totalClasses,
        totalSubjects,
        totalQuestions,
        totalStudents,
        leaderboardPercentile,
        recentQuizScore,
        overallAccuracy,
        totalQuizzes,
        totalCorrect,
        totalAttempted,
        totalXP,
        level,
        xpInLevel,
        xpForNextLevel,
        subjectPerformance,
        recentAttempts,
      },
    });
  } catch (error) {
    console.error('Error fetching platform stats:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch stats' }, { status: 500 });
  }
}
