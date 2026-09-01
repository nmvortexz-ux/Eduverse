import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = fs.readFileSync(path.resolve(__dirname, '../.env'), 'utf8');
let dbUrl = '';
envContent.split('\n').forEach(line => {
  if (line.startsWith('DATABASE_URL=')) {
    dbUrl = line.split('=')[1].trim().replace(/^["']|["']$/g, '');
  }
});

const sql = neon(dbUrl);

async function run() {
  const byClass = await sql`SELECT "class", COUNT(*) as count FROM "Question" GROUP BY "class" ORDER BY "class";`;
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('📊 NEON DATABASE QUESTION COUNTS BY CLASS');
  console.log('═══════════════════════════════════════════════════════════════');
  byClass.forEach(r => console.log(`  • ${r.class}: ${r.count} questions`));
  
  const class11Subjects = await sql`SELECT "subject", COUNT(*) as count FROM "Question" WHERE "class" ILIKE '%11%' GROUP BY "subject" ORDER BY "subject";`;
  console.log('\n📚 CLASS 11 BREAKDOWN BY SUBJECT:');
  class11Subjects.forEach(r => console.log(`  • ${r.subject}: ${r.count} questions`));

  const total = await sql`SELECT COUNT(*) as total FROM "Question";`;
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`🌟 GRAND TOTAL IN NEON DB: ${total[0].total} QUESTIONS`);
  console.log('═══════════════════════════════════════════════════════════════');
}

run().catch(console.error);
