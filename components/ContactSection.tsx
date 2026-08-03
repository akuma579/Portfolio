"use client";

import { SITE } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">07 / Contact</span>
          <div className="h-px w-16" style={{ background: "var(--border-medium)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left */}
          <div>
            <h2 className="section-heading text-[var(--text-primary)] mb-4">
              Let&apos;s build something fast.
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-[0.94rem]">
              I respond quickly. Whether you&apos;re an engineering team, a founder, or have a
              freelance project — message me and let&apos;s talk.
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <MapPin size={14} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                {SITE.location}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={14} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors animated-underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all"
              >
                <Github size={14} /> GitHub <ArrowUpRight size={11} className="opacity-50" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all"
              >
                <Linkedin size={14} /> LinkedIn <ArrowUpRight size={11} className="opacity-50" />
              </a>
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="card-glass rounded-2xl p-7 glow-ring">
            <div className="text-3xl mb-4" aria-hidden="true">⚡</div>
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] mb-3" style={{ color: "var(--accent-primary)" }}>
              Open to
            </p>
            <ul className="space-y-2 mb-7">
              {SITE.openTo.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent-primary)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${SITE.email}`}
              className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm"
            >
              <Mail size={15} /> Send me a message
            </a>
            <p className="text-center text-xs text-[var(--text-secondary)] mt-3">
              I typically respond within a few hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
