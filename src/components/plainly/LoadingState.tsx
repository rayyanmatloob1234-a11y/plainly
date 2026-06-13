import { useEffect, useState } from "react";

const messages = [
  "Reading your document…",
  "Identifying what it is…",
  "Writing your explanation…",
];

export function LoadingState() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % messages.length), 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div
        className="h-10 w-10 animate-spin rounded-full"
        style={{ border: "2px solid var(--teal-soft)", borderTopColor: "var(--teal)" }}
      />
      <div className="mt-6 text-[14px] text-text-secondary transition-opacity">
        {messages[i]}
      </div>
    </div>
  );
}