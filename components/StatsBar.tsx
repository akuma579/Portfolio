"use client";

// "Shipped in the Wild" — replaces the boring number stats
// Shows the GlobeHack story as a cinematic moment + two supporting proof points

export default function StatsBar() {
  return (
    <section className="px-6 py-10" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Top label */}
        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
          Proof of work
        </p>

        <div className="grid md:grid-cols-3 gap-4">

          {/* Hero card — GlobeHack */}
          <div
            className="md:col-span-2 rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,43,0.1) 0%, rgba(139,92,246,0.08) 100%)",
              border: "1px solid rgba(255,107,43,0.2)",
            }}
          >
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, var(--accent-primary) 0, var(--accent-primary) 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px",
              }} />

            <div className="relative z-10">
              {/* Event badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">⚡</span>
                <span className="text-xs font-mono font-semibold tracking-widest uppercase"
                  style={{ color: "var(--accent-primary)" }}>
                  GlobeHack S1
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider"
                  style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}>
                  <span className="live-blink w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Live &amp; Deployed
                </span>
              </div>

              <h3 className="font-display font-black text-xl text-[var(--text-primary)] leading-tight mb-2">
                Built a production AI tool<br />
                <span className="gradient-text-accent">from zero in 36 hours.</span>
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
                Lofty Morning Handoff — an AI briefing system for real estate agents.
                Ranked queue, narrated video, LLM assistant. Publicly accessible by morning.
              </p>

              {/* Mini timeline */}
              <div className="flex items-center gap-0 mt-5">
                {[
                  { t: "0h",  label: "Kickoff" },
                  { t: "12h", label: "Core UI" },
                  { t: "28h", label: "LLM wired" },
                  { t: "36h", label: "Shipped ✓" },
                ].map((step, i, arr) => (
                  <div key={step.t} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: i === arr.length - 1 ? "#4ade80" : "var(--accent-primary)" }}
                      />
                      <span className="text-[9px] font-mono mt-1"
                        style={{ color: i === arr.length - 1 ? "#4ade80" : "var(--accent-primary)" }}>
                        {step.t}
                      </span>
                      <span className="text-[9px] text-[var(--text-muted)] whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-10 md:w-14 h-px mx-1 mb-5"
                        style={{ background: "linear-gradient(to right, var(--accent-primary), var(--accent-violet))", opacity: 0.4 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — two mini cards */}
          <div className="flex flex-col gap-4">

            {/* Stack card */}
            <div className="rounded-2xl p-5 flex-1"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3">
                Primary Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "Python", "LangChain", "FastAPI", "Docker"].map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Currently at card */}
            <div className="rounded-2xl p-5 flex-1 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(255,107,43,0.06))",
                border: "1px solid rgba(139,92,246,0.2)",
              }}>
              <p className="text-[10px] font-mono uppercase tracking-widest mb-2"
                style={{ color: "var(--accent-violet)" }}>
                Currently
              </p>
              <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                MS Software Engineering
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">Arizona State University</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="pulse-dot" style={{ background: "var(--accent-violet)", boxShadow: "none" }} />
                <span className="text-[11px] text-[var(--text-muted)] font-mono">In progress</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
