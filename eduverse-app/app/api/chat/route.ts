import { GoogleGenAI } from '@google/genai';
import { auth } from '@clerk/nextjs/server';

export const runtime = 'nodejs';

const SYSTEM_INSTRUCTION = `
You are the EduVerse Academic Companion — a sweet, warm, patient, and friendly mentor for school students (Classes 6 to 12).

Tone & Persona Rules:
1. Speak naturally and sweetly. Be encouraging, warm, and clear, like a helpful elder peer or tutor who genuinely cares about making learning simple.
2. Avoid cold robotic setups or robotic meta-announcements. Never sound intimidating or overly pedantic.
3. If a student is confused or stressed about a concept, reassure them gently and explain things step-by-step using relatable, everyday examples.
4. Support both English and friendly Hinglish naturally based on how the student talks to you.
5. For math/science formulas, use standard LaTeX enclosed in $...$ for inline or $$...$$ for standalone display formulas.
6. When the student wants to practice, test themselves, or visit a section of the app, respond sweetly and append an action link at the very end on its own line:
   ACTION_LINK:{"label": "<Human Button Friendly Text>", "href": "<Route>"}

Supported routes:
- Class subject selection: /select?class=Class%20[6-12]
- Student progress: /dashboard
- Rankings: /leaderboard
- Home: /
`;

// Priority cascade: ultra-fast, low-latency, resilient models
const CANDIDATE_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.5-flash',
  'gemini-flash-lite-latest',
  'gemini-3.6-flash',
  'gemini-3.8-flash',
];

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not defined in environment variables.');
      return new Response(JSON.stringify({ error: 'AI service is temporarily misconfigured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Clerk authentication check
    let userId: string | null = null;
    try {
      const session = await auth();
      userId = session.userId;
    } catch (authErr) {
      // Auth context not available or origin mismatch
      console.warn('Auth check skipped or failed:', authErr);
    }

    // In development mode, allow guest access for seamless local testing
    // In production, require authentication
    const isDev = process.env.NODE_ENV === 'development';
    if (!userId && !isDev) {
      return new Response(JSON.stringify({ error: 'Please sign in to chat.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages payload.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Format chat history into Gemini contents format
    const contents = messages
      .slice(-10)
      .map((m: any) => ({
        role: (m.role === 'assistant' || m.sender === 'assistant') ? 'model' : 'user',
        parts: [{ text: (m.content || m.text || '').trim() }],
      }))
      .filter((c: any) => c.parts[0].text.length > 0);

    if (contents.length === 0) {
      return new Response(JSON.stringify({ error: 'No valid message text found.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Multi-tier model fallback for maximum resilience & lowest latency
    let responseStream = null;
    let lastError: any = null;

    for (const model of CANDIDATE_MODELS) {
      try {
        responseStream = await ai.models.generateContentStream({
          model,
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        if (responseStream) break;
      } catch (err: any) {
        console.warn(`Model ${model} unavailable (${err?.status || err?.code || 'error'}), attempting fallback...`);
        lastError = err;
      }
    }

    if (!responseStream) {
      throw lastError || new Error('All AI models are currently busy. Please try again shortly.');
    }

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        let chunkCount = 0;
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              controller.enqueue(encoder.encode(chunk.text));
              chunkCount++;
            }
          }
        } catch (streamErr) {
          console.error('Stream iteration error:', streamErr);
          if (chunkCount === 0) {
            controller.enqueue(
              encoder.encode(
                "I'm so sorry, I had a brief hiccup connecting! Please ask me again, and I'll be glad to help. 😊"
              )
            );
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Something went wrong. Please try again in a moment.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
