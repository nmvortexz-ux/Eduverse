const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const BATCH_SIZE = 25;
const MODEL = 'llama-3.1-8b-instant';

async function categorizeBatch(className, subject, questions) {
  const questionsJson = questions.map(q => ({ id: q.id, text: q.text }));
  
  const prompt = `Given these questions for ${className} ${subject}, assign each question to its standard NCERT chapter title. 
Return a JSON object with a single key "mappings" containing an array of objects.
The output MUST be a strict JSON object matching this structure:
{
  "mappings": [
    { "id": "123", "chapter": "Chemical Reactions and Equations" },
    { "id": "456", "chapter": "Acids, Bases and Salts" }
  ]
}

Here are the questions to categorize:
${JSON.stringify(questionsJson, null, 2)}
`;

  const payload = {
    model: MODEL,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that only outputs valid JSON."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    response_format: { type: "json_object" },
    max_tokens: 1500
  };

  const url = `https://api.groq.com/openai/v1/chat/completions`;
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error("Fetch timed out after 60 seconds");
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    const errorText = await response.text();
    const is429 = response.status === 429;
    const error = new Error(`API Error: ${response.status} - ${errorText}`);
    error.isRateLimited = is429;
    throw error;
  }

  const data = await response.json();
  const textContent = data.choices[0].message.content;
  
  let parsed;
  try {
    parsed = JSON.parse(textContent);
  } catch (e) {
    throw new Error("Failed to parse JSON response: " + textContent);
  }

  // Handle cases where the model might return { "mappings": [...] } or just [...]
  if (parsed.mappings && Array.isArray(parsed.mappings)) {
    return parsed.mappings;
  } else if (Array.isArray(parsed)) {
    return parsed;
  } else {
    throw new Error("Unexpected JSON structure: " + textContent);
  }
}

// Keep track of overall progress
let globalProcessedCount = 0;

async function processSubjectClass(className, subject) {
  console.log(`\nStarting categorization for ${className} - ${subject}`);
  let subjectProcessedCount = 0;
  
  while (true) {
    const questions = await prisma.question.findMany({
      where: {
        class: className,
        subject: subject,
        chapter: null
      },
      take: BATCH_SIZE
    });

    if (questions.length === 0) {
      console.log(`No more uncategorized questions for ${className} - ${subject}.`);
      break;
    }

    console.log(`Processing batch of ${questions.length} questions...`);

    let success = false;
    let retries = 0;
    const retryDelays = [5000, 15000, 30000];

    while (!success && retries <= 3) {
      try {
        const categorizationResult = await categorizeBatch(className, subject, questions);
        
        if (!Array.isArray(categorizationResult)) {
          throw new Error("Response was not an array");
        }

        // Prepare updates
        let updateCount = 0;
        for (const mapping of categorizationResult) {
          if (mapping.id && mapping.chapter) {
             try {
               await prisma.question.update({
                 where: { id: String(mapping.id) },
                 data: { chapter: String(mapping.chapter) }
               });
               updateCount++;
             } catch (e) {
               // Ignore if record not found (LLM hallucinated an ID)
             }
          }
        }
        
        subjectProcessedCount += updateCount;
        globalProcessedCount++;
        success = true;
        
        // Progress Logging
        const remainingInDB = await prisma.question.count({ where: { chapter: null } });
        console.log(`✅ Successfully updated ${updateCount} questions in this batch.`);
        console.log(`📊 Progress: Processed ${globalProcessedCount} batches total. Remaining uncategorized questions in DB: ${remainingInDB}`);
        
      } catch (error) {
        console.error(`❌ Error categorizing batch:`, error.message);
        
        if (error.isRateLimited) {
          if (retries < 3) {
            const waitTime = retryDelays[retries];
            console.log(`Rate limited. Retrying ${retries + 1}/3 in ${waitTime/1000}s...`);
            await delay(waitTime);
            retries++;
          } else {
            console.log(`\nRate limit persistent. Processed ${globalProcessedCount} batches.`);
            console.log(`Resume later by running node scripts/classify-chapters.js`);
            process.exit(0);
          }
        } else {
          // Other errors, retry with 5s delay
          if (retries < 3) {
             console.log(`Retrying in 5s...`);
             await delay(5000);
             retries++;
          } else {
             console.log("Max retries reached for this batch. Skipping to next...");
             break; // Skip this batch if it fails 4 times
          }
        }
      }
    }

    if (success) {
      console.log("Waiting 10 seconds before next batch to respect Groq rate limits...");
      await delay(10000);
    } else {
      console.log("Batch failed entirely, moving to next...");
    }
  }
}

async function main() {
  if (!GROQ_API_KEY) {
    console.error("No GROQ_API_KEY found in environment.");
    process.exit(1);
  }

  console.log("Starting automated chapter categorization script with Groq API...");

  // Get all unique combinations of class and subject that have uncategorized questions
  const groups = await prisma.question.groupBy({
    by: ['class', 'subject'],
    where: {
      chapter: null
    }
  });

  console.log(`Found ${groups.length} class/subject combinations with uncategorized questions.`);

  for (const group of groups) {
    await processSubjectClass(group.class, group.subject);
  }

  const remaining = await prisma.question.count({
    where: { chapter: null }
  });

  console.log(`\nAll categorization tasks completed successfully! Remaining uncategorized questions: ${remaining}`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
