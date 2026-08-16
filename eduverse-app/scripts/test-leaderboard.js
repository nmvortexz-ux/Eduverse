import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'rohan.sharma@eduverse.app' },
    update: { name: 'Rohan Sharma' },
    create: {
      id: 'test_user_101',
      email: 'rohan.sharma@eduverse.app',
      name: 'Rohan Sharma',
    }
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'ananya.verma@eduverse.app' },
    update: { name: 'Ananya Verma' },
    create: {
      id: 'test_user_102',
      email: 'ananya.verma@eduverse.app',
      name: 'Ananya Verma',
    }
  });

  await prisma.quizAttempt.create({
    data: {
      userId: user1.id,
      subject: 'Science',
      class: 10,
      score: 95,
      totalQuestions: 20,
      correctAnswers: 19,
    }
  });

  await prisma.quizAttempt.create({
    data: {
      userId: user2.id,
      subject: 'Mathematics',
      class: 9,
      score: 88,
      totalQuestions: 25,
      correctAnswers: 22,
    }
  });

  console.log('✅ Created real quiz attempts for Rohan Sharma and Ananya Verma.');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
