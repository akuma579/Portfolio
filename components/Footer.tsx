import { SITE } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 px-6 mt-8" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold gradient-text-accent">AK</span>
          <span className="text-xs text-[var(--text-secondary)]">
            Designed &amp; built by Anand Kumar
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={SITE.github}   target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
            <Github size={15} />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
            <Linkedin size={15} />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email"
             className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
