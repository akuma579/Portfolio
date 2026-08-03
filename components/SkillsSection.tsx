"use client";

import { useState } from "react";
import { SKILLS } from "@/lib/data";
import { cn } from "@/lib/utils";

const CORE = ["Next.js", "Python", "LangChain", "REST APIs", "TypeScript", "FastAPI", "Docker"];

export default function SkillsSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">03 / Skills</span>
          <div className="h-px w-16" style={{ background: "var(--border-medium)" }} />
        </div>

        {/* Primary stack */}
        <div className="mb-6 p-5 rounded-2xl card-glass">
          <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-[var(--text-muted)] mb-3">
            Primary Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {CORE.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full text-sm font-mono font-medium"
                style={{
                  background: "linear-gradient(135deg, rgba(255,107,43,0.1), rgba(139,92,246,0.08))",
                  border: "1px solid rgba(255,107,43,0.2)",
                  color: "#f59e0b",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SKILLS.categories.map((cat) => {
            const isOpen = active === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActive(isOpen ? null : cat.name)}
                className={cn(
                  "card-glass rounded-xl p-4 text-left transition-all duration-300 w-full",
                  isOpen && "ring-1 ring-[rgba(255,107,43,0.3)]"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                      style={{ background: "rgba(255,107,43,0.08)", border: "1px solid rgba(255,107,43,0.12)" }}
                    >
                      {cat.icon}
                    </span>
                    <span className="font-semibold text-sm text-[var(--text-primary)]">{cat.name}</span>
                  </div>
                  <span
                    className="text-[var(--text-secondary)] text-xs transition-transform duration-300"
                    style={{ display: "inline-block", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    ▾
                  </span>
                </div>

                {!isOpen && (
                  <p className="text-xs text-[var(--text-secondary)] truncate">
                    {cat.items.slice(0, 3).join(" · ")}
                    {cat.items.length > 3 && ` +${cat.items.length - 3}`}
                  </p>
                )}

                {isOpen && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cat.items.map((item) => (
                      <span key={item} className="tech-tag">{item}</span>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
