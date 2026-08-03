"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "card-glass rounded-2xl overflow-hidden",
        featured && "glow-ring"
      )}
      style={{ transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Top bar — gradient stripe on featured */}
      {featured && (
        <div className="h-0.5 w-full" style={{ background: "var(--grad-accent)" }} />
      )}

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            {project.event && (
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Zap size={11} style={{ color: "var(--accent-primary)" }} />
                <span className="text-[11px] font-mono tracking-wide" style={{ color: "var(--accent-primary)" }}>
                  {project.event}
                </span>
                {featured && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase"
                    style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>
                    <span className="live-blink w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Live &amp; Deployed
                  </span>
                )}
              </div>
            )}
            <h3 className="font-display font-bold text-[var(--text-primary)] text-lg leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">{project.subtitle}</p>
          </div>

          {/* Link icons */}
          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:border-[var(--border-medium)] transition-all"
              >
                <ExternalLink size={13} />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:border-[var(--border-medium)] transition-all"
            >
              <Github size={13} />
            </a>
          </div>
        </div>

        {/* Short desc */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
        >
          {open ? <><ChevronUp size={13} /> Hide details</> : <><ChevronDown size={13} /> Full details</>}
        </button>
      </div>

      {/* Expanded panel */}
      {open && (
        <div
          className="border-t px-6 py-6 space-y-6"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          {/* Problem / Solution */}
          {(project.problem || project.solution) && (
            <div className="grid sm:grid-cols-2 gap-3">
              {project.problem && (
                <div className="rounded-xl p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                  <p className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent-rose)] mb-2">Problem</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="rounded-xl p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                  <p className="text-[10px] font-mono tracking-widest uppercase mb-2" style={{ color: "#22c55e" }}>Solution</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* My role */}
          {project.myRole && (
            <div className="rounded-xl p-4" style={{ background: "var(--bg-surface)", border: "1px solid rgba(139,92,246,0.2)" }}>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent-violet)] mb-2">My Contribution</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.myRole}</p>
            </div>
          )}

          {/* Features */}
          {project.features.length > 0 && (
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">Features</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <div key={f.label} className="rounded-xl p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-2">{f.label}</p>
                    <ul className="space-y-1">
                      {f.items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-[11px] text-[var(--text-secondary)]">
                          <span style={{ color: "var(--accent-primary)" }} className="mt-0.5 shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack table */}
          <div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">Tech Stack</p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-subtle)" }}>
              {project.techStack.map((row, i) => (
                <div
                  key={row.layer}
                  className={cn("flex items-start gap-3 px-4 py-2.5 text-xs", i % 2 === 0 ? "bg-[var(--bg-surface)]" : "")}
                  style={i !== project.techStack.length - 1 ? { borderBottom: "1px solid var(--border-subtle)" } : {}}
                >
                  <span className="font-mono font-semibold w-24 shrink-0" style={{ color: "var(--accent-amber)" }}>
                    {row.layer}
                  </span>
                  <span className="text-[var(--text-secondary)]">{row.tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          {project.team && project.team.length > 0 && (
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
                <Users size={11} /> Team
              </p>
              <div className="space-y-2">
                {project.team.map((m) => (
                  <div key={m.name} className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                    <a href={`https://github.com/${m.github}`} target="_blank" rel="noopener noreferrer"
                       className="font-mono w-[120px] shrink-0 hover:text-[var(--accent-primary)] transition-colors" style={{ color: "var(--accent-violet)" }}>
                      {m.name}
                    </a>
                    <span>{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">02 / Projects</span>
          <div className="h-px w-16" style={{ background: "var(--border-medium)" }} />
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">

          {/* Featured — takes up more space */}
          <div className="md:col-span-7 space-y-3">
            <p className="text-[10px] font-mono tracking-[0.2em] uppercase mb-4" style={{ color: "var(--accent-primary)" }}>
              ✦ Featured
            </p>
            <ProjectCard project={PROJECTS[0]} featured />
          </div>

          {/* Other two */}
          <div className="md:col-span-5 space-y-5">
            <p className="text-[10px] font-mono tracking-[0.2em] uppercase mb-4 text-[var(--text-muted)]">
              Other Work
            </p>
            {PROJECTS.slice(1).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/akuma579"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
          >
            <Github size={13} /> More on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
