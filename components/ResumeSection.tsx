"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { FileText, ExternalLink, Upload } from "lucide-react";

export default function ResumeSection() {
  const [resumeUrl, setResumeUrl] = useState<string | null>(SITE.resumeUrl);
  const [editing,   setEditing]   = useState(false);
  const [inputVal,  setInputVal]  = useState(SITE.resumeUrl ?? "");

  const save = () => {
    setResumeUrl(inputVal.trim() || null);
    setEditing(false);
  };

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
              <button
                onClick={() => setEditing(true)}
                className="w-full text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors py-2"
              >
                Update link
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                Paste a Google Drive or PDF link to activate the download button.
              </p>
              <button
                onClick={() => setEditing(true)}
                className="btn-primary flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
              >
                <Upload size={14} /> Add Resume Link
              </button>
            </div>
          )}

          {editing && (
            <div className="mt-4 space-y-2.5">
              <input
                type="url"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="https://drive.google.com/…"
                autoFocus
                className="w-full px-4 py-2.5 rounded-xl text-sm font-mono text-[var(--text-primary)] outline-none transition-colors"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-medium)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border-medium)")}
              />
              <div className="flex gap-2">
                <button onClick={save} className="btn-primary flex-1 py-2.5 rounded-xl text-sm font-semibold">Save</button>
                <button onClick={() => setEditing(false)} className="btn-outline flex-1 py-2.5 rounded-xl text-sm">Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
