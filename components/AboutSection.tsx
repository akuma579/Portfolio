"use client";

import { useRef } from "react";
import { SITE } from "@/lib/data";

// Tilt card hook
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
    el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
  };

  return { ref, onMove, onLeave };
}

export default function AboutSection() {
  const tilt = useTilt();

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">01 / About</span>
          <div className="h-px w-16" style={{ background: "var(--border-medium)" }} />
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">

          {/* Left */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="section-heading text-[var(--text-primary)]">
              I build fast.<br />
              <span className="gradient-text-accent">I ship real things.</span>
            </h2>

            {/* Quote block — direct lift from the summary */}
            <div
              ref={tilt.ref}
              onMouseMove={tilt.onMove}
              onMouseLeave={tilt.onLeave}
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,107,43,0.08), rgba(139,92,246,0.06))",
                border: "1px solid rgba(255,107,43,0.18)",
                transition: "transform 0.15s ease",
              }}
            >
              <span className="text-3xl leading-none" style={{ color: "var(--accent-primary)", opacity: 0.4 }}>&ldquo;</span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed -mt-2 italic">
                I work best with people who value ownership, move at pace, and treat shipping as
                the default — not the exception.
              </p>
              <p className="text-xs font-mono mt-3" style={{ color: "var(--accent-primary)" }}>
                — Anand Kumar
              </p>
            </div>

            {/* Open-to list */}
            <div>
              <p className="text-[10px] font-mono text-[var(--text-muted)] tracking-[0.16em] uppercase mb-3">
                Currently open to
              </p>
              <div className="flex flex-col gap-2">
                {SITE.openTo.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent-primary)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-8 space-y-5">

            {/* Main copy */}
            <p className="text-[var(--text-secondary)] leading-[1.8] text-[0.94rem]">
              Most people who say they &ldquo;build fast&rdquo; mean they move fast until something
              breaks. I mean I shipped a live, deployed AI product in 36 hours at GlobeHack — 
              publicly accessible and demo-ready the morning after we finished coding it.
            </p>
            <p className="text-[var(--text-secondary)] leading-[1.8] text-[0.94rem]">
              I&apos;m completing my MS in Software Engineering at Arizona State University.
              My stack: <span className="text-[var(--text-primary)] font-medium">Next.js · Python · LangChain · REST APIs</span>.
              My approach: understand the problem deeply, build the leanest version that works, ship it, then improve.
            </p>

            {/* Three approach cards */}
            <div className="grid sm:grid-cols-3 gap-3 pt-1">
              {[
                {
                  emoji: "🏗️",
                  label: "For teams",
                  detail: "I get up to speed fast and ship features with minimal hand-holding.",
                },
                {
                  emoji: "🚀",
                  label: "For founders",
                  detail: "Zero to working product, under pressure. Comfortable with ambiguity.",
                },
                {
                  emoji: "🎯",
                  label: "For freelance",
                  detail: "Clean, functional work you can explain and maintain. No black boxes.",
                },
              ].map(({ emoji, label, detail }) => (
                <div
                  key={label}
                  className="card-glass rounded-xl p-4 group cursor-default"
                  style={{ transition: "border-color 0.2s ease, transform 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.transform = "";
                  }}
                >
                  <div className="text-xl mb-2">{emoji}</div>
                  <p className="text-[11px] font-bold font-mono uppercase tracking-wide mb-1.5"
                    style={{ color: "var(--accent-primary)" }}>
                    {label}
                  </p>
                  <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
