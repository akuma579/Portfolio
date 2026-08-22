import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar       from "@/components/Navbar";
import CursorTrail  from "@/components/CursorTrail";

export const metadata: Metadata = {
  title: "Anand Kumar — Full-Stack & AI Builder",
  description:
    "MS Software Engineering @ ASU. I shipped a live AI product in 36 hours. Next.js · Python · LangChain · REST APIs. Open to SWE/AI internships and early-stage startup projects.",
  keywords: ["Anand Kumar", "Full-Stack Developer", "AI Engineer", "Next.js", "Python", "LangChain", "ASU"],
  authors: [{ name: "Anand Kumar" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#ff6b2b" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0c0a09" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">
        <ThemeProvider>
          {/* Ambient glow blobs */}
          <div className="bg-ambient" aria-hidden="true" />
          {/* Dot grid */}
          <div className="fixed inset-0 bg-dots pointer-events-none z-0"
            style={{ backgroundSize: "28px 28px", opacity: 0.3 }}
            aria-hidden="true" />
          {/* Cursor trail — desktop only */}
          <CursorTrail />
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
