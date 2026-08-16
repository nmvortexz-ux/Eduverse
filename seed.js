const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const foldersToScan = [
  'class 8',
  'class 9/english',
  'class 9/gk',
  'class 9/hindi grammer',
  'class 9/science',
  'class 10'
];

async function findJsonFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await findJsonFiles(filePath));
    } else if (file.endsWith('.json')) {
      results.push(filePath);
    }
  }
  return results;
}

async function main() {
  console.log('🚀 Clearing existing data and starting clean batch import...\n');

  // Clear existing questions to avoid duplicate inserts on retry
  await prisma.option.deleteMany({});
  await prisma.question.deleteMany({});

  let totalUploaded = 0;

  for (const folder of foldersToScan) {
    const targetPath = path.join(__dirname, folder);
    const jsonFiles = await findJsonFiles(targetPath);

    for (const filePath of jsonFiles) {
      try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const questions = JSON.parse(fileData);

        // Batch inserts per JSON file inside a single transaction
        await prisma.$transaction(
          questions.map((q) =>
            prisma.question.create({
              data: {
                class: q.class,
                subject: q.subject,
                difficulty: q.difficulty,
                text: q.text,
                explanation: q.explanation,
                options: {
                  create: q.options.map((opt) => ({
                    text: opt.text,
                    isCorrect: opt.isCorrect,
                  })),
                },
              },
            })
          )
        );

        totalUploaded += questions.length;
        console.log(`✅ Imported: ${path.relative(__dirname, filePath)} (${questions.length} Qs)`);
      } catch (err) {
        console.error(`❌ Error importing ${filePath}:`, err.message);
      }
    }
  }

  console.log(`\n🎉 Success! Exactly ${totalUploaded} questions imported to Neon DB.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });