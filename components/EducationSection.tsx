"use client";

import { EDUCATION } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">04 / Education</span>
          <div className="h-px w-16" style={{ background: "var(--border-medium)" }} />
        </div>

        <div className="space-y-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className={cn("card-glass rounded-2xl p-6", edu.highlight && "glow-ring")}
            >
              {edu.highlight && (
                <div className="h-0.5 w-full mb-5 rounded-full" style={{ background: "var(--grad-accent)" }} />
              )}

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0"
                    style={
                      edu.highlight
                        ? {
                            background: "linear-gradient(135deg, rgba(255,107,43,0.15), rgba(139,92,246,0.1))",
                            border: "1px solid rgba(255,107,43,0.25)",
                            color: "var(--accent-primary)",
                          }
                        : {
                            background: "var(--bg-surface)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-secondary)",
                          }
                    }
                  >
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[var(--text-primary)] text-base leading-tight">
                      {edu.school}
                    </h3>
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: edu.highlight ? "var(--accent-primary)" : "var(--text-secondary)" }}
                    >
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                    <Calendar size={11} /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                    <MapPin size={11} /> {edu.location}
                  </span>
                </div>
              </div>

              {edu.details.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {edu.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span style={{ color: "var(--accent-primary)" }} className="mt-1 shrink-0">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
