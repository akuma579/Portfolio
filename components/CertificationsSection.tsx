"use client";

import { CERTIFICATIONS } from "@/lib/data";

const COLOR_STYLES: Record<string, { ring: string; icon: string; label: string }> = {
  cyan:   { ring: "rgba(255,107,43,0.22)", icon: "rgba(255,107,43,0.1)",  label: "var(--accent-primary)" },
  purple: { ring: "rgba(139,92,246,0.22)", icon: "rgba(139,92,246,0.1)",  label: "var(--accent-violet)" },
  green:  { ring: "rgba(245,158,11,0.22)", icon: "rgba(245,158,11,0.1)",  label: "#f59e0b" },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">05 / Certifications</span>
          <div className="h-px w-16" style={{ background: "var(--border-medium)" }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CERTIFICATIONS.map((cert) => {
            const s = COLOR_STYLES[cert.color] ?? COLOR_STYLES.cyan;
            return (
              <div
                key={cert.name}
                className="card-glass rounded-xl p-5 transition-all duration-300"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 0 1px ${s.ring}, 0 6px 24px rgba(0,0,0,0.3)`)
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-3"
                  style={{ background: s.icon, border: `1px solid ${s.ring}` }}
                >
                  {cert.icon}
                </div>
                <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono" style={{ color: s.label }}>
                  {cert.issuer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
