import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { GoogleGenAI } from '@google/genai';

// ─── System Instructions ─────────────────────────────────────────────────────
const SYSTEM_INSTRUCTION = `You are the EduVerse Academic Assistant & Navigator.
You assist students studying the CBSE / NCERT curriculum for Grades 6 through 12 across Mathematics, Science, Social Studies, English, Hindi Grammar, Commerce, Accountancy, Economics, and General Knowledge.

Core Directives:
1. Academic Explanations:
   - Provide step-by-step, engaging, and clear pedagogical explanations.
   - Use standard LaTeX notation for mathematical and scientific expressions:
     - Inline formulas: $...$ (e.g., $E = mc^2$, $a^2 + b^2 = c^2$, $\\text{H}_2\\text{O}$)
     - Block/display formulas: $$...$$ on their own lines.
   - Keep answers structured with bullet points or numbered steps when helpful.

2. In-App Navigation & Action Intents:
   - When the user asks to open, take, start, practice, or navigate to any class, subject, quiz, leaderboard, dashboard, boss fight, or home, give a helpful conversational response and ALWAYS conclude with a structured action link on its own line at the very end of your response:
   ACTION_LINK:{"label": "<Clear Button Label>", "href": "<Valid EduVerse Route>"}

   Valid EduVerse Routes:
   - Grade Curriculum Hub: /select?class=Class%20[6-12]  (e.g., /select?class=Class%207, /select?class=Class%2010)
   - Subject Quiz Setup: /configure?class=Class%20[6-12]&subject=[Subject]  (e.g., /configure?class=Class%2010&subject=Science)
   - Direct Practice Quiz: /quiz?class=Class%20[6-12]&subject=[Subject]&mode=practice
   - Leaderboard: /leaderboard
   - Student Dashboard: /dashboard
   - Boss Fight Challenge Arena: /boss-fight
   - Home: /

   Rules for ACTION_LINK:
   - The ACTION_LINK must be placed on its own line at the very end of your answer.
   - Do NOT enclose the ACTION_LINK in backticks or markdown code fences.
   - If the user simply asks a conceptual or homework question without any navigation intent, do NOT output an ACTION_LINK.`;

export async function POST(request: Request) {
  try {
    // 1. Auth Guard via Clerk
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized: Please sign in to chat with the EduVerse AI Assistant.' },
        { status: 401 }
      );
    }

    // 2. Validate Gemini API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key is not configured on the server.' },
        { status: 500 }
      );
    }

    // 3. Parse and Validate Request Payload
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const { messages } = body ?? {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Payload must include a non-empty "messages" array.' },
        { status: 400 }
      );
    }

    // 4. Transform Chat History to Gemini Contents Format
    // Format: Array of { role: 'user' | 'model', parts: [{ text: string }] }
    const contents = messages
      .slice(-10) // Retain last 10 messages for context
      .filter((m) => m && typeof m.text === 'string' && m.text.trim().length > 0)
      .map((m) => ({
        role: m.sender === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text.trim() }],
      }));

    if (contents.length === 0) {
      return NextResponse.json(
        { error: 'No valid message text found in payload.' },
        { status: 400 }
      );
    }

    // 5. Initialize Google Gen AI SDK
    const ai = new GoogleGenAI({ apiKey });

    // 6. Generate Streaming Response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let responseStream;
          try {
            responseStream = await ai.models.generateContentStream({
              model: 'gemini-3.8-flash',
              contents,
              config: {
                systemInstruction: SYSTEM_INSTRUCTION,
              },
            });
          } catch (primaryError: any) {
            console.warn('Gemini 3.8 Flash busy, falling back to 3.5 Flash Lite:', primaryError?.message || primaryError);
            responseStream = await ai.models.generateContentStream({
              model: 'gemini-3.5-flash-lite',
              contents,
              config: {
                systemInstruction: SYSTEM_INSTRUCTION,
              },
            });
          }

          for await (const chunk of responseStream) {
            const chunkText = chunk.text;
            if (chunkText) {
              controller.enqueue(encoder.encode(chunkText));
            }
          }
          controller.close();
        } catch (streamError: any) {
          console.error('Gemini generateContentStream error:', streamError);
          // If rate limited or model error, emit user-friendly stream message
          const errorMessage =
            streamError?.status === 429
              ? '\n\n[Assistant is experiencing high traffic. Please wait a moment and try again.]'
              : '\n\n[An error occurred while generating the response. Please try again.]';
          controller.enqueue(encoder.encode(errorMessage));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error: any) {
    console.error('POST /api/chat error:', error);
    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429 }
      );
    }
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
