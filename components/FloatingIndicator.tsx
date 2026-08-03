"use client";

import { useState, useEffect } from "react";

const MESSAGES = [
  "Building with LangChain",
  "Shipping at ASU",
  "Open to internships",
  "Available for freelance",
];

export default function FloatingIndicator() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-mono font-medium shadow-lg"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-medium)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,107,43,0.1)",
        transition: "opacity 0.4s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <span className="pulse-dot shrink-0" />
      <span style={{ color: "var(--text-secondary)" }}>{MESSAGES[idx]}</span>
    </div>
  );
}
