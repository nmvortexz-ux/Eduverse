import fs from 'fs';
import path from 'path';

// Load .env manually FIRST
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

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkCount() {
  try {
    const count = await prisma.question.count();
    console.log(`\n📊 Live Database Count: ${count} Questions\n`);
  } catch (error) {
    console.error("Error fetching count:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkCount();
