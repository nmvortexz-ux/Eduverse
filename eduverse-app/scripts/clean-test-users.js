import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.quizAttempt.deleteMany({
    where: { userId: { in: ['test_user_101', 'test_user_102'] } }
  });
  await prisma.user.deleteMany({
    where: { id: { in: ['test_user_101', 'test_user_102'] } }
  });
  console.log('✅ Cleaned up test users from database.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
