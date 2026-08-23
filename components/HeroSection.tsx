"use client";

import { useEffect, useState, useRef } from "react";
import { SITE } from "@/lib/data";
import { Github, Linkedin, Mail, FileText, MoveDown } from "lucide-react";

const ROLES = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "Cloud Engineer",
  "AI Builder",
  "Next.js Developer",
];

export default function HeroSection() {
  const [displayed,  setDisplayed]  = useState("");
  const [wordIdx,    setWordIdx]    = useState(0);
  const [charIdx,    setCharIdx]    = useState(0);
  const [deleting,   setDeleting]   = useState(false);
  const [mouse,      setMouse]      = useState({ x: 50, y: 50 }); // percentage
  const sectionRef = useRef<HTMLElement>(null);

  // Typing animation
  useEffect(() => {
    const typingSpeed = 75;
    const deletingSpeed = 40;
    const pauseBeforeDelete = 2000;
    const current = ROLES[wordIdx];
    let timer: ReturnType<typeof setTimeout> | null = null;

    // Update displayed slice immediately based on charIdx
    setDisplayed(current.slice(0, Math.max(0, Math.min(charIdx, current.length))));

    if (!deleting) {
      if (charIdx < current.length) {
        timer = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
      } else {
        // word complete, pause then start deleting
        timer = setTimeout(() => setDeleting(true), pauseBeforeDelete);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => setCharIdx((c) => c - 1), deletingSpeed);
      } else {
        // finished deleting, move to next word
        setDeleting(false);
        setWordIdx((w) => (w + 1) % ROLES.length);
      }
    }

    return () => { if (timer) clearTimeout(timer); };
  }, [charIdx, deleting, wordIdx]);

  // Mouse tracking spotlight
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handler = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / rect.width)  * 100,
        y: ((e.clientY - rect.top)  / rect.height) * 100,
      });
    };
    section.addEventListener("mousemove", handler);
    return () => section.removeEventListener("mousemove", handler);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(255,107,43,0.07) 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Large decorative letters behind */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-[22vw] leading-none tracking-tighter opacity-[0.025]"
          style={{ color: "var(--accent-primary)" }}
        >
          AK
        </span>
      </div>

      {/* Corner spotlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(255,107,43,0.12) 0%, transparent 65%)" }}
        aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.1) 0%, transparent 65%)" }}
        aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] mb-6 text-sm">
          <span className="pulse-dot" />
          <span className="text-[var(--text-secondary)] font-medium">
            Open to SWE / AI internships &amp; startup projects
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-black tracking-tight mb-3 leading-[1] text-[clamp(3.5rem,10vw,7rem)]">
          <span className="text-[var(--text-primary)]">Anand</span>
          <br />
          <span className="gradient-text">Kumar.</span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center gap-2 mb-5 h-9">
          <span className="text-[var(--accent-primary)] font-mono text-sm">→</span>
          <p className="font-mono text-[var(--text-secondary)] text-lg">
            {displayed}
            <span className="type-cursor text-[var(--accent-primary)]">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-[var(--text-primary)] text-lg md:text-xl max-w-xl leading-relaxed mb-1.5 font-medium">
          {SITE.tagline}
        </p>
        <p className="text-[var(--text-secondary)] text-base max-w-lg mb-8">
          Not a slide deck. Not a localhost demo. Deployed &amp; demo-ready by morning.
          MS Software Engineering @ ASU.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => goTo("projects")}
            className="btn-primary px-7 py-3 rounded-full text-sm font-semibold tracking-wide"
          >
            View Projects
          </button>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-7 py-3 rounded-full text-sm font-semibold tracking-wide"
          >
            Get in Touch
          </a>
          {SITE.resumeUrl && (
            <a href={SITE.resumeUrl} target="_blank" rel="noopener noreferrer"
               className="btn-outline px-5 py-3 rounded-full text-sm flex items-center gap-2">
              <FileText size={14} /> Resume
            </a>
          )}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <a href={SITE.github}   target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
            <Github size={20} />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email"
             className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
            <Mail size={20} />
          </a>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: "var(--border-subtle)" }} />
          <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest uppercase">
            Tempe, AZ
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => goTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors scroll-bounce"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <MoveDown size={14} />
      </button>
    </section>
  );
}
