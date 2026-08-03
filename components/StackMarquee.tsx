"use client";

const STACK = [
  "Next.js", "React", "TypeScript", "Python", "FastAPI", "LangChain",
  "Llama 3.3-70B", "Anthropic Claude", "ChromaDB", "RAG Pipelines",
  "Docker", "Vercel", "PostgreSQL", "Tailwind CSS", "REST APIs",
  "Node.js", "Prisma ORM", "AWS", "HuggingFace", "Framer Motion",
];

const ITEMS = [...STACK, ...STACK];

export default function StackMarquee() {
  return (
    <div className="relative py-4 overflow-hidden border-y" style={{ borderColor: "var(--border-subtle)" }}>
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />

      <div className="marquee-track flex items-center gap-6 w-max">
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="font-mono text-xs font-medium tracking-wide whitespace-nowrap"
              style={{ color: "var(--text-secondary)" }}>
              {item}
            </span>
            <span className="w-1 h-1 rounded-full shrink-0"
              style={{ background: i % 4 === 0 ? "var(--accent-primary)" : "var(--border-medium)", opacity: 0.6 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
