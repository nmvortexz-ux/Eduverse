import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const groups = await prisma.question.groupBy({
  by: ['class', 'subject'],
  _count: { id: true },
  where: { class: { in: ['Class 11', 'Class 12'] } },
  orderBy: [{ class: 'asc' }, { subject: 'asc' }],
});
console.log(JSON.stringify(groups, null, 2));
await prisma.$disconnect();
