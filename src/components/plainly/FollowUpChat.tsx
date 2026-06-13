import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUp } from "lucide-react";

import { chatFollowUp } from "@/lib/analyse.functions";

type Msg = { role: "user" | "assistant"; content: string };

export function FollowUpChat({ docContext, language }: { docContext: string; language: string }) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const chat = useServerFn(chatFollowUp);

  async function send() {
    const q = input.trim();
    if (!q || busy) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setBusy(true);
    try {
      const { reply } = await chat({ data: { docContext, history: messages, message: q, language } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: e instanceof Error ? e.message : "Something went wrong." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
        Ask a follow-up question
      </div>
      {messages.length > 0 && (
        <div className="mb-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className="rounded-xl px-4 py-3 text-[14px] leading-relaxed"
              style={{
                background: m.role === "user" ? "var(--teal-soft)" : "var(--surface)",
                color: m.role === "user" ? "var(--teal-deep)" : "var(--text-primary)",
              }}
            >
              {m.content}
            </div>
          ))}
          {busy && <div className="text-[13px] text-text-tertiary">Thinking…</div>}
        </div>
      )}
      <div
        className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5"
        style={{ border: "0.5px solid var(--hairline)" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="e.g. Can I dispute the charge on line 7?"
          className="flex-1 bg-transparent py-1.5 text-[14px] outline-none placeholder:text-text-tertiary"
        />
        <button
          onClick={send}
          disabled={!input.trim() || busy}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-30"
          style={{ background: "var(--teal)" }}
          aria-label="Send"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  );
}