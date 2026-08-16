const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient(); 

async function main() { 
  const total = await prisma.question.count(); 
  const uncategorized = await prisma.question.count({ where: { chapter: null } }); 
  const categorized = total - uncategorized; 
  console.log('Categorized:', categorized, '/', total, '(', Math.round((categorized/total)*100), '%)'); 
  console.log('Remaining uncategorized:', uncategorized); 
} 

main().finally(() => prisma.$disconnect());
