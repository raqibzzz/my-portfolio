export interface SiteMeta {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  social: {
    linkedin: string;
    github: string;
    instagram: string;
    studio555: string;
  };
}

export interface HighlightStat {
  value: string;
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  name: string;
  year: string;
  stack: string[];
  summary: string;
  outcome: string;
  href?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const site: SiteMeta = {
  name: "Raqib Muktadir",
  tagline: "AI Developer · Test Automation · Full-Stack Builder",
  location: "Montréal, QC",
  email: "raqibmuktadir2@gmail.com",
  phone: "709-697-6714",
  social: {
    linkedin: "https://www.linkedin.com/in/raqibmuktadir/",
    github: "https://github.com/raqibzzz",
    instagram: "https://www.instagram.com/raqibzzz/",
    studio555: "https://www.555-studio.com",
  },
};

export const bio: string[] = [
  "I'm an AI-oriented developer building automation systems, LLM-powered tools, and full-stack applications that ship to production. At Matrox I spearheaded a test-automation initiative that had been stalled for over two years delivering 80% of the target coverage within two weeks and cutting manual QA cycles by 30%.",
  "Outside of day work I ship independent projects - NewsFlow, an AI Product Readiness Critic, a Spotify-integrated music discovery AI, and a Three.js audio-visual tool for live events. I co-founded 555(STUDIOS), a Montréal speaker series that has shipped 10+ events with a 100% fill rate and partners like Shopify, ETS, HEC, and Cansbridge.",
];

export const highlights: HighlightStat[] = [
  {
    value: "80%",
    label: "AUTOMATION_COVERAGE",
    detail: "Target reached in 2 weeks on a 2-year-stalled Matrox initiative.",
  },
  {
    value: "30%",
    label: "QA_CYCLE_REDUCTION",
    detail: "Manual verification replaced with CI-integrated Playwright + Robot Framework.",
  },
  {
    value: "711+",
    label: "EVENT_REGISTRATIONS",
    detail: "Across 10+ 555(STUDIOS) events. 100% venue fill rate.",
  },
  {
    value: "6+",
    label: "SHIPPED_PROJECTS",
    detail: "Independent AI, event tooling, and finance apps in production.",
  },
];

export const projects: Project[] = [
  {
    slug: "ai-critic",
    name: "AI Product Readiness Critic",
    year: "2025",
    stack: ["TypeScript", "Next.js", "OpenAI API", "Zod"],
    summary:
      "Reviews product specs, PRDs, and feature descriptions — flags ambiguities, risks, edge cases, and missing acceptance criteria before shipping. Built to think like a skeptical PM + QA reviewer.",
    outcome:
      "Modular prompt engine with injectable strictness levels (Gentle / Normal / Brutal). Every response Zod-validated before rendering — silent failures impossible.",
    href: "https://github.com/raqibzzz/AI-Product-Readiness-Critic",
  },
  {
    slug: "avio2",
    name: "Avio2 Automation Suite",
    year: "2025",
    stack: ["Robot Framework", "Playwright", "Python", "Jenkins", "Groovy"],
    summary:
      "11 end-to-end regression scripts automating Matrox Avio 2 IPKVM WebUI — auth, session management, tab navigation, device control, bitrate cycling, and API-triggered reboot recovery.",
    outcome:
      "Jenkins pipeline with dynamic multi-node agents, 10–12h timeouts, automated HTML email reporting. Zero manual steps from trigger to report.",
    href: "https://github.com/raqibzzz/Avio2_Automation",
  },
  {
    slug: "ai-music-discovery",
    name: "AI Music Discovery",
    year: "2024",
    stack: ["Next.js", "TypeScript", "GPT-4o", "Spotify API", "NextAuth"],
    summary:
      "Natural-language music discovery integrating GPT-4o with Spotify. Builds a taste profile through conversation and recommends tracks with reasoning.",
    outcome:
      "Real-time Spotify playback controls, recently played history, and AI-reasoned recommendations — all driven by natural language.",
    href: "https://github.com/raqibzzz/ai-music-discovery",
  },
  {
    slug: "car-price-prediction",
    name: "Car Price Predictor",
    year: "2024",
    stack: ["Python", "scikit-learn", "Next.js", "Random Forest", "Linear Regression"],
    summary:
      "ML regression model predicting Canadian car prices by brand, year, and mileage. Trained on synthetic data with realistic correlations using Linear Regression and Random Forest.",
    outcome:
      "Full-stack deployment — Next.js frontend, Python API backend, pickled model artifacts. Interactive web prediction tool.",
    href: "https://github.com/raqibzzz/car-price-prediction",
  },
  {
    slug: "hdmi-automation",
    name: "HDMI Visual Test Automation",
    year: "2024",
    stack: ["C#", "FPGA", "Computer Vision", "Digilent Nexys"],
    summary:
      "Controls a Digilent Nexys Video FPGA board to generate HDMI output, captures frames via webcam, detects test patterns, and counts black-screen frames.",
    outcome:
      "Precursor architecture to VLM-based visual grading — shipped for firmware regression tracking at Matrox.",
    href: "https://github.com/raqibzzz/HdmiGenWithWebCam",
  },
  {
    slug: "newsflow",
    name: "NewsFlow",
    year: "2025",
    stack: ["Next.js", "TypeScript", "GPT-4o-mini", "Prisma", "SQLite"],
    summary:
      "AI news aggregator pulling 20+ RSS sources (BBC, Reuters, TechCrunch, The Verge). Custom 3-layer dedup pipeline: exact hash → Levenshtein → cosine similarity on word-frequency vectors.",
    outcome:
      "Stories ranked by recency + corroboration score. GPT-4o-mini assistant searches both the article DB and live web — isolated from the aggregator to prevent context contamination.",
    href: "https://github.com/raqibzzz/News-App",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Matrox Video — IPKVM Products",
    role: "Test Automation Developer",
    location: "Montréal, QC",
    period: "APR 2025 — PRESENT",
    bullets: [
      "Spearheaded an Avio2 IP-KVM WebUI test automation initiative stalled for 2+ years — delivered a CI-integrated framework covering 80% of target scenarios within 2 weeks using 11 Robot Framework + Playwright scripts.",
      "Reduced manual QA verification by 30% by integrating automated scripts into the Jenkins release pipeline, replacing repetitive regression cycles with headless Chromium runs on every build.",
      "Designed standard + long-run stress Jenkins pipelines sustaining 1,000+ loop iterations with per-loop result isolation, orphaned Chromium cleanup every 50 cycles, and automated HTML email reporting via SMTP.",
      "Built a PyQt5 desktop GUI (Avio2 Device Manager) consolidating fragmented per-device browser sessions into one interface for live REST API data, bitrate/codec control, NMOS status, and multi-device identity management.",
      "Authored REST API automation across 3 namespaces (auth, mgmt, app): bearer-token flows, reboot-triggered health polling up to 3 minutes, endpoint coverage mapped from internal OpenAPI specs.",
      "Identified and reported a session token security observation (Chrome Session Storage exposure) with XSS protection suggestions — security-first engineering mindset beyond QA scope.",
    ],
  },
  {
    company: "Matrox Video",
    role: "Software Developer Intern",
    location: "Montréal, QC",
    period: "MAY 2024 — APR 2025",
    bullets: [
      "Improved internal inventory system performance by 20% by redesigning SQL queries and resolving long-standing bottlenecks in a PHP/MySQL productivity tool used daily by QA.",
      "Built a full automated bug-reporting system integrating test logs with the Jira API — eliminated manual copy-paste, cut documentation time 30%.",
      "Built CI/CD pipelines in Jenkins for IP and SDI video workflows; translated client-reported failures into structured, reproducible test cases.",
      "Designed overnight automation in PowerShell + AutoIt executing hundreds of nightly test cycles with real-time log generation — surfaced intermittent bugs in hours instead of days.",
      "Developed C# visual automation capturing monitor snapshots during FPGA hardware simulations and logging discrepancies against reference patterns for firmware regression tracking.",
    ],
  },
  {
    company: "555(STUDIOS) — FiveFiveFive",
    role: "Co-Founder & Experience Lead",
    location: "Montréal, QC",
    period: "SEP 2024 — PRESENT",
    bullets: [
      "Co-founded and operate a Montreal-based creative speaker series — 10+ events shipped, 711+ registrations, 100% venue fill rate. Partners include Shopify, ETS, HEC, Cansbridge.",
      "Designed and built 555-studio.com end-to-end: event details, speaker showcases, registration flow in Next.js + TypeScript.",
      "Led speaker outreach, sponsorship negotiations, and event ops across Presentation Night (5/5/5), Builder Sundays with Shopify, and Electra — a live audio-visual experience.",
    ],
  },
];

export const studio555 = {
  name: "555(STUDIOS)",
  tagline: "A Montréal creative speaker series.",
  paragraphs: [
    "Co-founded in 2024, 555(STUDIOS) is a Montreal-based creative speaker series running formats like Presentation Night (5 stories / 5 slides / 5 minutes), Builder Sundays with Shopify, and Electra — a live audio-visual performance experience.",
    "10+ events. 711+ registrations. 100% venue fill rate. Partners include Shopify, ETS, HEC, and Cansbridge.",
  ],
  href: "https://www.555-studio.com",
};

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C#", "Java", "PHP", "SQL", "Groovy", "C++"],
  "AI / LLM": [
    "OpenAI API",
    "Anthropic Claude API",
    "Prompt Engineering",
    "Structured Outputs",
    "Zod Validation",
    "RAG Architecture",
    "Claude Code",
  ],
  Frameworks: ["Next.js", "React", "Node.js", "Robot Framework", "Playwright", "FastAPI", "Prisma", "PyQt5", "Three.js"],
  Databases: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "pgvector", "ChromaDB"],
  "DevOps / CI": ["Jenkins", "GitHub Actions", "Docker", "Git", "PowerShell", "Jira API"],
} as const;

export const newsSources = [
  { id: "openai", label: "OpenAI", feed: "https://openai.com/blog/rss.xml" },
  { id: "google-ai", label: "Google AI", feed: "https://blog.google/technology/ai/rss/" },
  { id: "deepmind", label: "DeepMind", feed: "https://deepmind.google/blog/rss.xml" },
  { id: "techcrunch-ai", label: "TechCrunch AI", feed: "https://techcrunch.com/category/artificial-intelligence/feed/" },
  { id: "ars-tech", label: "Ars Technica", feed: "https://feeds.arstechnica.com/arstechnica/technology-lab" },
  { id: "venturebeat-ai", label: "VentureBeat AI", feed: "https://feeds.feedburner.com/venturebeat/SZYF" },
  { id: "hn-ai", label: "HN (AI)", feed: "https://hnrss.org/newest?q=AI" },
];
