// ─── Site-wide data — edit this file to update content ───────────────────────

export const SITE = {
  name: "Anand Kumar",
  title: "Full-Stack & AI Builder",
  tagline: "I shipped a live AI product in 36 hours.",
  subTagline: "Not a demo. Not localhost. Deployed and demo-ready.",
  email: "anandvanvasi45@gmail.com",
  phone: "+1 (790) 583-1836",
  location: "Tempe, Arizona, United States",
  github: "https://github.com/akuma579",
  linkedin: "https://www.linkedin.com/in/anand2804",
  // Resume set to Google Drive shareable link provided by user
  resumeUrl: "https://drive.google.com/file/d/11vycWRSLpRxBDh7o3_EYLeimGdfN1giX/view?usp=sharing" as string | null,
  openTo: [
    "SWE / AI Engineering Internships (2026–27)",
    "Early-Stage Startup Projects",
    "Freelance Development",
  ],
};

export const ABOUT = {
  paragraphs: [
    `Most people who say they "build fast" mean they move fast until something breaks. I mean I shipped a live, deployed AI product in 36 hours. Not a slide deck. Not a localhost demo. A real tool — built end-to-end at GlobeHack — that was publicly accessible and demo-ready the morning after we finished coding it.`,
    `I'm Anand — a full-stack and AI developer currently completing my MS in Software Engineering at Arizona State University. My stack: Next.js · Python · LangChain · REST APIs. My approach: understand the problem deeply, build the leanest version that actually works, ship it, then improve.`,
  ],
  worksWith: [
    {
      label: "Engineering teams",
      detail:
        "I get up to speed on a codebase fast and ship features with minimal hand-holding — no six-month warm-up period.",
    },
    {
      label: "Founders & CTOs",
      detail:
        "I can take an early-stage idea from zero to a working product. I've done it under pressure. I'm comfortable with ambiguity.",
    },
    {
      label: "Freelance projects",
      detail:
        "I build clean, functional work that I can explain and you can maintain. No black-box deliverables.",
    },
  ],
};

export const SKILLS = {
  categories: [
    {
      name: "Frontend",
      icon: "🖥️",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Vite"],
    },
    {
      name: "Backend",
      icon: "⚙️",
      items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "SQLAlchemy", "Prisma ORM"],
    },
    {
      name: "AI / ML",
      icon: "🤖",
      items: ["LangChain", "Anthropic Claude", "Llama 3.3-70B", "ChromaDB", "RAG Pipelines", "HuggingFace", "fastembed"],
    },
    {
      name: "Databases",
      icon: "🗄️",
      items: ["PostgreSQL", "SQLite", "ChromaDB", "Supabase"],
    },
    {
      name: "DevOps & Cloud",
      icon: "☁️",
      items: ["Docker", "Docker Compose", "Vercel", "Render", "AWS", "CI/CD", "Git"],
    },
    {
      name: "Auth & Security",
      icon: "🔐",
      items: ["JWT", "bcrypt", "OAuth", "Cybersecurity"],
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  event?: string;
  shortDesc: string;
  longDesc: string;
  problem?: string;
  solution?: string;
  features: { label: string; items: string[] }[];
  techStack: { layer: string; tech: string }[];
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  highlight?: boolean;
  team?: { name: string; github: string; role: string }[];
  myRole?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "lofty-morning-handoff",
    title: "Lofty Morning Handoff",
    subtitle: "AI-powered morning briefing system for real estate agents",
    event: "GlobeHack S1 — Built in 36 hours",
    shortDesc:
      "Shipped end-to-end at GlobeHack: an AI briefing system that handles overnight leads and delivers a ranked, narrated, approval-ready queue every morning.",
    longDesc:
      "Lofty's AOS (Agent Operating System) handles overnight lead follow-ups, showing requests, and buyer matching — then hands off a ranked, narrated, approval-ready queue every morning.",
    problem:
      "Real estate agents lose deals in the overnight window. Leads browse listings at 2 AM, submit pre-approval letters before dawn, and start comparing agents by 9 AM. By the time an agent opens their laptop, the window has closed.",
    solution:
      "Lofty AOS works overnight so agents don't have to. Every morning it delivers: a narrated video briefing, a ranked priority queue with confidence scores, one-tap actions, and a natural-language AI assistant (Ask Lofty ⌘K).",
    features: [
      {
        label: "Morning Briefing Video",
        items: [
          "Animated particle canvas background with nebula glows",
          "Web Speech API narration — slides advance when speech completes",
          "Pause/play, arrow key navigation, mute (M), skip (Esc)",
          "Per-lead slides with character emoji, buyer/seller badge, score ring, signal timeline",
        ],
      },
      {
        label: "Priority Queue",
        items: [
          "5 AI-ranked leads with priority scores and confidence percentages",
          "Signal-driven explanations (site visits, email opens, pre-approvals, deadline urgency)",
          "Drag-to-reorder with custom order saved to sessionStorage",
          "Action modes: Approve & Execute, Edit, Delegate, Snooze",
        ],
      },
      {
        label: "Ask Lofty (⌘K)",
        items: [
          "Natural language AI assistant powered by Llama 3.3-70B",
          "Passes live queue context — answers specific to current leads",
          "Email drafts detected and rendered in monospace with Copy button",
          "Suggestion chips on focus, instant fallback if LLM unavailable",
        ],
      },
      {
        label: "Confidence Score Engine",
        items: [
          "5-factor weighted model: Signal Volume, Recency, Lead Score, Signal Diversity, Urgency",
          "All weights user-adjustable in real time via ⚙ Tune Model drawer",
          "Per-factor breakdown visible in Why This Matters drawer",
          "Weights persist to localStorage across page refreshes",
        ],
      },
    ],
    techStack: [
      { layer: "Frontend", tech: "Next.js 16 (App Router), React 19, TypeScript" },
      { layer: "Styling", tech: "Tailwind CSS v4, Framer Motion, shadcn/ui" },
      { layer: "AI / LLM", tech: "Llama 3.3-70B via HuggingFace Together Router" },
      { layer: "Backend", tech: "InsForge (Postgres + Auth + Edge Functions)" },
      { layer: "Audio", tech: "Web Speech API (speechSynthesis)" },
      { layer: "Deploy", tech: "Docker + docker-compose" },
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "LLM", "AI", "Framer Motion"],
    repoUrl: "https://github.com/dgupta98/Lofty-Morning-Huddle",
    liveUrl: "https://lofty-morning-huddle.vercel.app/",
    highlight: true,
    myRole: "Lead frontend engineer — built the full UI including particle canvas briefing, priority queue with drag-to-reorder, Ask Lofty ⌘K modal, and the confidence score tuning drawer.",
  },
  {
    id: "course-copilot-ai",
    title: "Course Copilot AI",
    subtitle: "Role-based, source-grounded AI course assistant",
    shortDesc:
      "Professors upload course materials; students get citation-backed AI answers inside module workspaces. Built with RAG, ChromaDB, and Anthropic Claude.",
    longDesc:
      "A role-based, source-grounded AI course assistant for university project courses. Professors create courses, upload materials, and invite students. Students ask AI questions inside module workspaces and get citation-backed answers from course documents.",
    features: [
      {
        label: "Core Features",
        items: [
          "Role-based access: Professor and Student views",
          "RAG pipeline grounding all answers in uploaded course materials",
          "Citation-backed responses with source references",
          "ChromaDB vector store for semantic document search",
        ],
      },
      {
        label: "Professor Tools",
        items: [
          "Course creation and student invitation",
          "Document ingestion with automatic RAG trigger",
          "Dashboard with course card UI",
          "Settings page with profile management",
        ],
      },
      {
        label: "Student Experience",
        items: [
          "Module workspace with AI question-answering",
          "Citation-backed answers from uploaded course docs",
          "Settings page and profile UI",
          "Password strength checklist on registration",
        ],
      },
    ],
    techStack: [
      { layer: "Frontend", tech: "Next.js 15, React 19, TypeScript, Tailwind CSS" },
      { layer: "Backend", tech: "FastAPI (Python 3.11+), SQLAlchemy, SQLite" },
      { layer: "Auth", tech: "JWT (PyJWT), bcrypt" },
      { layer: "Vector Store", tech: "ChromaDB (Docker locally; embedded on Render)" },
      { layer: "LLM", tech: "Anthropic Claude (claude-haiku-4-5-20251001)" },
      { layer: "Embeddings", tech: "fastembed (BAAI/bge-small-en-v1.5, ONNX)" },
      { layer: "Doc Parsing", tech: "PyMuPDF, python-docx" },
      { layer: "Deploy", tech: "Docker, Vercel (frontend), Render (backend)" },
    ],
    tags: ["Next.js", "FastAPI", "Python", "ChromaDB", "RAG", "LangChain", "Claude", "TypeScript"],
    repoUrl: "https://github.com/dgupta98/SER594-Team5-CourseCopilotAI",
    liveUrl: "https://coursecopilotai.vercel.app/",
    highlight: false,
    myRole: "Built the professor and student settings pages, password strength checklist, profile UI, and professor dashboard course card UI.",
  },
  {
    id: "agile-alliance",
    title: "Agile Alliance (AA)",
    subtitle: "Full-stack Agile project management application",
    shortDesc:
      "A full-stack web app for Agile project management — user auth, sprint boards, story management, and customizable workflows.",
    longDesc:
      "A full-stack web application for Agile project management with user authentication, sprint boards, story management, and customizable workflows. Built with React 18, TypeScript, Node.js/Express 5, Prisma ORM, and PostgreSQL.",
    features: [
      {
        label: "Core Features",
        items: [
          "User authentication and authorization",
          "Sprint board with drag-and-drop story management",
          "Customizable Agile workflows",
          "Story creation, editing, and status tracking",
        ],
      },
      {
        label: "Tech Highlights",
        items: [
          "Radix UI component library for accessible UI primitives",
          "Prisma ORM with PostgreSQL 15 for type-safe data access",
          "Full TypeScript across frontend and backend",
          "Vitest test suite with Prettier code formatting",
          "Docker + Docker Compose for local development",
        ],
      },
    ],
    techStack: [
      { layer: "Frontend", tech: "React 18, TypeScript, Vite, TailwindCSS 3, React Router 6, Radix UI" },
      { layer: "Backend", tech: "Node.js, Express 5, Prisma ORM 6" },
      { layer: "Database", tech: "PostgreSQL 15" },
      { layer: "DevOps", tech: "Docker, Docker Compose, PNPM 10+" },
      { layer: "Testing", tech: "Vitest" },
    ],
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    repoUrl: "https://github.com/dgupta98/AAWebApp",
    highlight: false,
  },
];

export const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "Master of Science — Software Engineering",
    period: "August 2025 – December 2026",
    location: "Tempe, Arizona",
    logo: "ASU",
    highlight: true,
    details: [
      "Full-time MS student in the Ira A. Fulton Schools of Engineering",
      "Focus on software systems, AI/ML integration, and scalable architecture",
    ],
  },
  {
    school: "Chitkara University",
    degree: "Bachelor of Engineering — Computer Science",
    period: "2021 – May 2025",
    location: "India",
    logo: "CU",
    highlight: false,
    details: [],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud / Credly",
    icon: "🤖",
    color: "cyan",
    url: "https://www.credly.com/badges/e71985ec-4ccf-4db4-aa5e-9a59439d35a2/linked_in_profile",
  },
  {
    name: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services / Coursera",
    icon: "☁️",
    color: "purple",
    url: "https://www.coursera.org/account/accomplishments/verify/MV2FLAX2G9C2",
  },
  {
    name: "Introduction to Cloud Computing",
    issuer: "IBM / Coursera",
    icon: "🌐",
    color: "green",
    url: "https://www.coursera.org/account/accomplishments/verify/NQX4AFGUTDW5",
  },
  {
    name: "Software Engineering Specialization",
    issuer: "University of Alberta / Coursera",
    icon: "⚙️",
    color: "cyan",
    url: "https://www.coursera.org/account/accomplishments/specialization/TQDPA5N4NTQ9",
  },
];
