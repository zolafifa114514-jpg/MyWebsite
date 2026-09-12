import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!message || message.length > 1000) {
    return NextResponse.json(
      { error: "Please send a message between 1 and 1000 characters." },
      { status: 400 },
    );
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "The assistant needs an OPENAI_API_KEY to be configured." },
        { status: 503 },
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5",
      instructions:
        "You are Colin Zhang's portfolio assistant. Be concise, friendly, and accurate. Colin is a student interested in coding and applying to major technology companies. His portfolio currently has placeholder projects, skills, GitHub, LinkedIn, and contact details. Never invent specific achievements, employers, projects, or contact information. If asked for details that are not on the portfolio, say Colin is still building that section.",
      input: message,
      max_output_tokens: 250,
      store: false,
    });

    return NextResponse.json({
      reply: response.output_text || "I do not have an answer for that yet.",
    });
  } catch (error) {
    console.error("OpenAI request failed", error);
    return NextResponse.json(
      { error: "The assistant is temporarily unavailable." },
      { status: 500 },
    );
  }
}
