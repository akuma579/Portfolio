"use client";

import { SITE } from "@/lib/data";
import { FileText, ExternalLink } from "lucide-react";

export default function ResumeSection() {
  const resumeUrl = SITE.resumeUrl;

  return (
    <section id="resume" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">06 / Resume</span>
          <div className="h-px w-16" style={{ background: "var(--border-medium)" }} />
        </div>

        <div className="max-w-md card-glass rounded-2xl p-7">
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(255,107,43,0.15), rgba(139,92,246,0.1))",
                border: "1px solid rgba(255,107,43,0.2)",
              }}
            >
              <FileText size={18} style={{ color: "var(--accent-primary)" }} />
            </div>
            <div>
              <p className="font-display font-bold text-[var(--text-primary)] text-base">Anand Kumar</p>
              <p className="text-xs text-[var(--text-secondary)]">Full-Stack &amp; AI Builder</p>
            </div>
          </div>

          {resumeUrl ? (
            <div className="space-y-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
              >
                <ExternalLink size={14} /> Resume
              </a>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                Resume not available.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
