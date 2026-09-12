"use client";

import { FormEvent, useState } from "react";

type Message = { role: "assistant" | "user"; content: string };

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi! I’m Colin’s portfolio assistant. Ask me about his interests, work, or what he’s learning.",
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();
    if (!message || isLoading) return;

    setMessages((current) => [...current, { role: "user", content: message }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: response.ok
            ? data.reply
            : data.error || "The assistant is unavailable right now.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "I can’t reach the assistant right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="assistant" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-3 font-mono text-sm text-indigo-400">05 · assistant</p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Curious about Colin&apos;s work?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Ask about his interests, learning goals, or the projects he wants to
            build. The assistant is connected to a secure server-side AI API.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-2xl shadow-indigo-950/20">
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-4">
            <div>
              <p className="text-sm font-medium text-zinc-100">Colin&apos;s assistant</p>
              <p className="mt-0.5 text-xs text-zinc-500">Ask me anything</p>
            </div>
            <span className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Online
            </span>
          </div>

          <div className="h-72 space-y-3 overflow-y-auto bg-zinc-950/60 p-5" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-indigo-500 text-white"
                    : "bg-zinc-800 text-zinc-300"
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="w-fit rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-500">
                Thinking…
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-zinc-800 p-3">
            <label htmlFor="assistant-message" className="sr-only">
              Message the assistant
            </label>
            <input
              id="assistant-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={1000}
              placeholder="Ask about Colin…"
              disabled={isLoading}
              className="min-w-0 flex-1 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 text-lg text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
