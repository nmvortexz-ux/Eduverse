const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const classes = ["Class 10"];
const subjects = ["English", "Social Studies"];
const TARGET = 300;
const BATCH_SIZE = 50;

const MODELS = ['gemini-flash-lite-latest', 'gemini-pro-latest', 'gemini-flash-latest'];
let currentModelIndex = 0;

async function generateQuestionsBatch(className, subject, count) {
  const prompt = `You are an expert curriculum designer. Generate exactly ${count} multiple-choice questions for ${className} on the subject of ${subject}.
Format the output as a strict JSON array of objects.
Each object must exactly match this schema:
{
  "class": "${className}",
  "subject": "${subject}",
  "difficulty": "Easy" | "Medium" | "Hard" | "Very Hard",
  "text": "The question text",
  "explanation": "A detailed explanation of the answer",
  "options": [
    { "text": "Option A", "isCorrect": false },
    { "text": "Option B", "isCorrect": true },
    { "text": "Option C", "isCorrect": false },
    { "text": "Option D", "isCorrect": false }
  ]
}
Ensure exactly 4 options per question, and exactly ONE option has isCorrect: true.
Maintain a balanced difficulty distribution (Easy, Medium, Hard, Very Hard).`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  while (currentModelIndex < MODELS.length) {
    const currentModel = MODELS[currentModelIndex];
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${GEMINI_API_KEY}`;
    
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      
      clearTimeout(timeout);
    
      if (!response.ok) {
        const errorText = await response.text();
        let errorJson = {};
        try { errorJson = JSON.parse(errorText).error || {}; } catch(e) {}
        
        const isDailyQuotaError = errorJson.code === 429 && errorText.includes("GenerateRequestsPerDay");
        
        if (isDailyQuotaError || errorJson.code === 404) {
          console.log(`\n⚠️ Model ${currentModel} returned ${errorJson.code} (Daily Quota Exceeded or Not Found). Switching to next model...`);
          currentModelIndex++;
          continue; // Try next model immediately
        }
        
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }
    
      const data = await response.json();
      const textContent = data.candidates[0].content.parts[0].text;
      
      return JSON.parse(textContent);
      
    } catch (err) {
      clearTimeout(timeout);
      
      if (err.name === 'AbortError') {
        throw new Error(`Fetch timed out for ${currentModel}`);
      }
      
      throw err; // Rethrow other errors (like JSON parsing or standard 429 RPM limit)
    }
  }
  
  throw new Error("All fallback models have exhausted their daily quotas or are unavailable.");
}

async function main() {
  if (!GEMINI_API_KEY) {
    console.error("No GEMINI_API_KEY found in environment.");
    process.exit(1);
  }

  console.log("Starting automated batch generation with model fallback rotation...");

  for (const className of classes) {
    for (const subject of subjects) {
      let currentCount;
      try {
        currentCount = await prisma.question.count({
          where: { class: className, subject: subject }
        });
      } catch (dbErr) {
        console.error("Database error during count. Ensure DB is awake:", dbErr);
        // Wait 5 seconds and retry DB connection if Neon is cold starting
        await delay(5000);
        currentCount = await prisma.question.count({
          where: { class: className, subject: subject }
        });
      }
      
      if (currentCount >= TARGET) {
        console.log(`\n--- [${className} - ${subject}] Current count: ${currentCount}/${TARGET} ---`);
        console.log(`🎉 Completed ${className} - ${subject}!`);
        continue;
      }
      
      console.log(`\n--- [${className} - ${subject}] Current count: ${currentCount}/${TARGET} ---`);
      let remaining = TARGET - currentCount;
      
      while (remaining > 0) {
        const batchSize = Math.min(remaining, BATCH_SIZE);
        console.log(`Generating batch of ${batchSize} questions for ${className} - ${subject} using ${MODELS[currentModelIndex]}...`);
        
        try {
          const questions = await generateQuestionsBatch(className, subject, batchSize);
          
          if (!Array.isArray(questions)) {
            throw new Error("Response was not an array");
          }
          
          let added = 0;
          for (const q of questions) {
            await prisma.question.create({
              data: {
                class: q.class || className,
                subject: q.subject || subject,
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
            added++;
          }
          console.log(`✅ Successfully added ${added} questions.`);
          remaining -= added;
        } catch (error) {
          console.error(`❌ Error generating batch for ${className} - ${subject}:`, error.message);
          
          if (error.message.includes("All fallback models have exhausted")) {
            console.error("\n🛑 Stopping script as all fallback models in the rotation are exhausted.");
            process.exit(1);
          }
          
          console.log("Retrying after 5 seconds...");
          await delay(5000);
          continue; // retry with current model
        }
        
        if (remaining > 0) {
          console.log("Waiting 2 seconds before next batch to respect rate limits...");
          await delay(2000);
        }
      }
      
      console.log(`🎉 Completed ${className} - ${subject}!`);
    }
  }

  console.log("\nAll generation tasks completed successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
