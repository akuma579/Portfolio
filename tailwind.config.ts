import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      colors: {
        orange: {
          450: "#ff6b2b",
        },
        brand: {
          orange:  "#ff6b2b",
          amber:   "#f59e0b",
          violet:  "#8b5cf6",
          rose:    "#f43f5e",
        },
        surface: {
          base:     "#0c0a09",
          raised:   "#141210",
          card:     "#1c1916",
          elevated: "#2a2520",
        },
      },
      backgroundImage: {
        "grad-hero":   "linear-gradient(135deg, #ff6b2b 0%, #f59e0b 40%, #8b5cf6 100%)",
        "grad-accent": "linear-gradient(90deg, #ff6b2b, #f59e0b)",
        "grad-violet": "linear-gradient(135deg, #8b5cf6, #f43f5e)",
        "dots":        "radial-gradient(circle, rgba(255,107,43,0.18) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "28px 28px",
      },
      animation: {
        "fade-up":   "fadeUp 0.55s ease-out forwards",
        "fade-in":   "fadeIn 0.4s ease-out forwards",
        "float":     "float 7s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
