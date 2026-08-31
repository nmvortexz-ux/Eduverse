import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';

try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.substring(0, eqIdx).trim();
        let val = trimmed.substring(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        process.env[key] = val;
      }
    });
  }
} catch (e) {
  console.warn('Warning loading .env file:', e);
}

async function checkCount() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const totalResult = await sql`SELECT COUNT(*) as total FROM "Question";`;
    const breakdown = await sql`
      SELECT "class", "subject", COUNT(*) as count 
      FROM "Question" 
      GROUP BY "class", "subject" 
      ORDER BY "class", "subject";
    `;

    console.log('\n═══════════════════════════════════════════════════════════════');
    console.log(`📊 Total Database Count: ${totalResult[0].total} Questions`);
    console.log('═══════════════════════════════════════════════════════════════\n');
    console.table(breakdown);
  } catch (error) {
    console.error("Error fetching count:", error);
  }
}

checkCount();
