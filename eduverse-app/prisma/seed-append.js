const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const baseDir = path.join(__dirname, 'data');
  const classes = ['class-8', 'class-9', 'class-10'];
  let totalAdded = 0;

  for (const cls of classes) {
    const classDir = path.join(baseDir, cls);
    if (!fs.existsSync(classDir)) {
      console.log(`Skipping ${cls} - directory not found: ${classDir}`);
      continue;
    }

    const files = fs.readdirSync(classDir).filter(f => f.endsWith('.json'));
    
    for (const file of files) {
      const filePath = path.join(classDir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      
      let addedFromFile = 0;
      for (const q of data) {
        // Strict append-only using prisma.question.create
        await prisma.question.create({
          data: {
            class: q.class,
            subject: q.subject,
            difficulty: q.difficulty || "Medium",
            text: q.text,
            explanation: q.explanation || "No explanation provided.",
            options: {
              create: q.options.map(opt => ({
                text: opt.text,
                isCorrect: opt.isCorrect
              }))
            }
          }
        });
        addedFromFile++;
        totalAdded++;
      }
      console.log(`Successfully added ${addedFromFile} questions from ${cls}/${file}`);
    }
  }
  
  console.log(`Total new questions appended: ${totalAdded}`);
}

main()
  .catch(e => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
