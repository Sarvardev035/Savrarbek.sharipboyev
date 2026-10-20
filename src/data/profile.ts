/**
 * Single source of truth for everything shown on Ceo.ooou.uz.
 * Sources: GitHub profile README, LinkedIn profile, and sarvar's own notes.
 * Do not add certifications, awards or events that are not on LinkedIn or confirmed by sarvar.
 */

export const profile = {
  brand: "Ceo.ooou.uz",
  name: "Sarvarbek Sharipboyev",
  shortName: "Sarvar",
  title: "Founder & CEO of ooou.uz",
  roles: ["Full-Stack Engineer", "QA Engineer", "AI Engineer", "Product Builder"],
  location: "Tashkent, Uzbekistan",
  intro:
    "I build products end to end: from the first test case to production on AWS. Today I run ooou.uz and ship Bahola (SmartQR), a QR feedback system used by restaurants, hotels and clinics, with Claude and Antigravity as my AI pair engineers.",
  email: "sarvarsharipov1035@gmail.com",
  links: {
    github: "https://github.com/Sarvardev035",
    linkedin: "https://www.linkedin.com/in/sarvar-sharipov-4bb187332/",
    telegram: "https://t.me/go0fy",
    company: "https://ooou.uz",
  },
  education: {
    degree: "BSc Information Technology",
    school: "Amity University Tashkent",
    period: "2023 – 2027",
  },
};

export const stats = [
  { value: 2023, suffix: "", label: "Shipping code since" },
  { value: 44, suffix: "+", label: "Public repositories" },
  { value: 3, suffix: "", label: "Industries served by Bahola" },
  { value: 2, suffix: "", label: "Paying businesses on Bahola" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  tags: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Founder & CEO · Full-Stack, QA & AI Engineer",
    company: "ooou.uz (Inteullpo)",
    period: "2025 – Present",
    location: "Tashkent",
    current: true,
    points: [
      "Built and run Bahola (SmartQR): QR feedback, cashback and multi-branch analytics for hospitality and healthcare.",
      "Own the whole stack: Next.js, Prisma, Supabase/Postgres, AWS EC2, nginx, Cloudflare, pm2.",
      "Use Claude and Antigravity as AI pair engineers for code, reviews, tests and AI cheque verification.",
    ],
    tags: ["Next.js", "Prisma", "AWS", "Claude", "Antigravity"],
  },
  {
    role: "QA Engineer · Full-Stack Developer",
    company: "Uyqur Team",
    period: "",
    points: [
      "Tested product releases end to end and turned bugs into reproducible, fixable reports.",
      "Moved from QA into full-stack work, shipping frontend and backend features for the team.",
    ],
    tags: ["QA", "Manual & automated testing", "React", "Node.js"],
  },
  {
    role: "Freelance Frontend Engineer",
    company: "Self-employed",
    period: "2023 – Present",
    points: [
      "Production-ready interfaces for real clients and real requirements.",
      "Interactive 3D and animation-driven web experiments with Three.js and GSAP.",
    ],
    tags: ["React", "TypeScript", "Three.js", "Tailwind"],
  },
];

export type Credential = {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  note?: string;
};

/** Filled from LinkedIn "Licenses & certifications". */
export const certifications: Credential[] = [];

/** Filled from LinkedIn "Honors & awards". */
export const awards: Credential[] = [];

export type Highlight = {
  name: string;
  detail: string;
  date?: string;
  tag: string;
  url?: string;
};

export const hackathons: Highlight[] = [
  {
    name: "ICPC",
    detail: "International Collegiate Programming Contest participant. Algorithmic problem solving under time pressure.",
    tag: "Competition",
  },
  {
    name: "Huawei ICT Competition",
    detail: "Participant in the international Huawei ICT Competition.",
    tag: "Competition",
  },
  {
    name: "Startup track, 1,500 teams",
    detail: "Startup reached the top 10% of about 1,500 teams. Member of Yoshlar Ventures.",
    tag: "Startup",
  },
  {
    name: "March Hackathon: Finly",
    detail: "Built Finly, an AI personal finance platform with budget tracking and insights.",
    tag: "Hackathon",
    url: "https://github.com/Sarvardev035/FinlyAi",
  },
];

/** Filled from LinkedIn activity and sarvar's notes. */
export const events: Highlight[] = [];

export const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Supabase",
  "AWS EC2", "Cloudflare", "nginx", "Tailwind", "Three.js", "GSAP", "Python",
  "FastAPI", "Django", "PyTorch", "Playwright", "Claude", "Antigravity", "Docker", "Git",
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Finly AI",
    description: "Personal finance platform with smart budget tracking and AI insights. Built for the March Hackathon.",
    tags: ["Next.js", "AI", "Hackathon"],
    github: "https://github.com/Sarvardev035/FinlyAi",
  },
  {
    name: "Jayhun Restoran website",
    description: "Website for Jayhun Restoran, the first paying Bahola customer.",
    tags: ["Next.js", "Client work"],
    github: "https://github.com/Sarvardev035/Jayhunweb",
  },
  {
    name: "Admin Dashboard",
    description: "Admin dashboard with analytics, data tables and a responsive UI.",
    tags: ["TypeScript", "Dashboard"],
    github: "https://github.com/Sarvardev035/Admin-dashboard",
    demo: "https://sarvardev035.github.io/Admin-dashboard",
  },
  {
    name: "Earth Real-Time Rotation",
    description: "3D model of the Earth, Moon and stars showing rotation angle and speed in real time.",
    tags: ["Three.js", "WebGL"],
    github: "https://github.com/Sarvardev035/Earthe-model-real-time-rotation",
  },
  {
    name: "Cosmic Defender",
    description: "Canvas space shooter built for tournament-style play with friends.",
    tags: ["JavaScript", "Canvas", "Game"],
    github: "https://github.com/Sarvardev035/Cosmic-defender-game",
  },
  {
    name: "Online Store (internship)",
    description: "E-commerce storefront built as an internship task.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sarvardev035/onlinestore-click-intern",
    demo: "https://sarvardev035.github.io/onlinestore-click-intern",
  },
];
