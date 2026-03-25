"use client";

import { useState } from "react";
import anime from "animejs";
import { useAnimeOnScroll } from "@/hooks/useAnime";

interface Project {
  name: string;
  description: string;
  language: string;
  topics: string[];
  github: string;
  demo?: string;
  stars: number;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "Finly (March Hackathon)",
    description: "Currently competing in a March Hackathon with this powerful personal finance platform. Features smart budget tracking, intelligent financial insights, and a seamless modern UX designed to solve real-world financial challenges.",
    language: "TypeScript",
    topics: ["Hackathon", "Finance", "Next.js", "AI"],
    github: "https://github.com/Sarvardev035/FinlyAi",
    demo: "https://www.Inteullpo.online",
    stars: 0,
    featured: true,
  },
  {
    name: "Portfolio",
    description: "Personal portfolio website showcasing projects, skills, and experience. Deployed on Vercel with a modern design.",
    language: "HTML",
    topics: ["Portfolio", "HTML", "CSS", "Vercel"],
    github: "https://github.com/Sarvardev035/portfolio",
    demo: "https://portfolio-seven-plum-72.vercel.app",
    stars: 0,
    featured: true,
  },
  {
    name: "Admin Dashboard",
    description: "Full-featured admin dashboard with analytics, data tables, and responsive UI. Built with TypeScript and modern frameworks.",
    language: "TypeScript",
    topics: ["Dashboard", "TypeScript", "Admin", "UI"],
    github: "https://github.com/Sarvardev035/Admin-dashboard",
    demo: "https://sarvardev035.github.io/Admin-dashboard",
    stars: 0,
    featured: true,
  },
  {
    name: "Cosmic Defender Game",
    description: "An exciting space shooter game built with vanilla JavaScript. Defend the cosmos from alien invaders with smooth gameplay.",
    language: "JavaScript",
    topics: ["Game", "JavaScript", "Canvas", "Animation"],
    github: "https://github.com/Sarvardev035/Cosmic-defender-game",
    stars: 0,
    featured: true,
  },
  {
    name: "Earth 3D Rotation",
    description: "Real-time 3D Earth model rotation visualization using JavaScript. Interactive globe with realistic textures and lighting.",
    language: "JavaScript",
    topics: ["3D", "JavaScript", "WebGL", "Visualization"],
    github: "https://github.com/Sarvardev035/Earthe-model-real-time-rotation",
    stars: 0,
  },
  {
    name: "Online Store",
    description: "E-commerce store front-end built during Click Intern program. Features product listings, cart, and responsive design.",
    language: "CSS",
    topics: ["E-commerce", "CSS", "Internship", "UI"],
    github: "https://github.com/Sarvardev035/onlinestore-click-intern",
    demo: "https://sarvardev035.github.io/onlinestore-click-intern",
    stars: 0,
  },
  {
    name: "SASS Exam Project",
    description: "A polished front-end project built with SASS/SCSS demonstrating advanced styling techniques. Deployed on Vercel.",
    language: "SCSS",
    topics: ["SASS", "SCSS", "CSS", "Design"],
    github: "https://github.com/Sarvardev035/sass-exam",
    demo: "https://sass-exam.vercel.app",
    stars: 0,
  },
  {
    name: "Project Counter UI",
    description: "Interactive counter application with beautiful UI built with TypeScript. Clean architecture and smooth interactions.",
    language: "TypeScript",
    topics: ["TypeScript", "UI", "Interactive"],
    github: "https://github.com/Sarvardev035/project-counter-ui",
    stars: 0,
  },
  {
    name: "Audio Player",
    description: "Feature-rich audio player application built with C#. Play, pause, seek, and manage your music library.",
    language: "C#",
    topics: ["C#", "Desktop", "Audio", "Media"],
    github: "https://github.com/Sarvardev035/Audioplayer",
    stars: 0,
  },
  {
    name: "ATM System (Priv)",
    description: "ATM simulation system built with Python. Handles transactions, balance checks, and user authentication.",
    language: "Python",
    topics: ["Python", "Simulation", "Banking"],
    github: "https://github.com/Sarvardev035/priv",
    stars: 0,
  },
  {
    name: "Algorithms",
    description: "Collection of algorithm solutions and data structures implemented in JavaScript. LeetCode practice and CS fundamentals.",
    language: "JavaScript",
    topics: ["Algorithms", "LeetCode", "DSA", "MIT License"],
    github: "https://github.com/Sarvardev035/Algorithms",
    stars: 0,
  },
  {
    name: "Weight Calculator",
    description: "A simple yet useful weight calculator web app built with HTML. Calculate BMI and unit conversions.",
    language: "HTML",
    topics: ["HTML", "Calculator", "Utility"],
    github: "https://github.com/Sarvardev035/weight-calculator",
    stars: 0,
  },
];

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-400",
  CSS: "bg-purple-400",
  SCSS: "bg-pink-400",
  "C#": "bg-green-400",
  Python: "bg-cyan-400",
};

const langBg: Record<string, string> = {
  TypeScript: "#1e3a5f",
  JavaScript: "#3d2e00",
  HTML: "#3d1a00",
  CSS: "#2d1a4d",
  SCSS: "#3d0a2e",
  "C#": "#0a2e1a",
  Python: "#003d4d",
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filters = ["All", "Featured", "TypeScript", "JavaScript", "Python", "CSS"];

  const filtered = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Featured") return p.featured;
    return p.language === filter || p.topics.includes(filter);
  });

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  const sectionRef = useAnimeOnScroll<HTMLElement>((el) => {
    anime({
      targets: el.querySelector(".projects-heading"),
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelectorAll(".filter-btn"),
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 900,
      delay: anime.stagger(100, { start: 400 }),
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelectorAll(".project-card"),
      rotateY: [-90, 0],
      translateZ: [200, 0],
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1400,
      delay: anime.stagger(200, { start: 600 }),
      easing: "easeOutQuart",
    });
  });

  const handleFilter = (f: string) => {
    setFilter(f);
    setTimeout(() => {
      anime({
        targets: ".project-card",
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(80),
        easing: "easeOutExpo",
      });
    }, 50);
  };

  return (
    <section id="projects" className="relative py-24" ref={sectionRef}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="section-container">
        <div className="projects-heading mb-12 text-center" style={{ opacity: 0 }}>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Projects</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">My GitHub Projects</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">Real projects from my GitHub profile — including live demos on GitHub Pages and Vercel.</p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`filter-btn rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                filter === f
                  ? "border-indigo-500 bg-indigo-500/20 text-indigo-300"
                  : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
              style={{ opacity: 0 }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((project) => (
            <div
              key={project.name}
              className="project-card group relative flex flex-col rounded-2xl border border-white/10 bg-gray-900/60 overflow-hidden transition-all hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
              style={{ opacity: 0 }}
            >
              {project.featured && (
                <div className="absolute right-3 top-3 z-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-2.5 py-0.5 text-xs font-bold text-white shadow-lg">
                  Featured
                </div>
              )}

              {/* ── Top 40% preview ─────────────────────────────────── */}
              <div className="relative h-40 flex-shrink-0 overflow-hidden">
                {/* Gradient background based on language */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${langBg[project.language] ?? "#1e1b4b"}, #0f0f1a)`,
                  }}
                />
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

                {/* Browser bar for demo projects */}
                {project.demo && (
                  <div className="absolute inset-x-4 top-3 z-10">
                    <div className="flex items-center gap-1.5 rounded-t-lg bg-gray-800/90 px-3 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      <span className="ml-2 flex-1 truncate rounded bg-gray-700 px-2 py-0.5 text-[10px] text-gray-400">
                        {project.demo.replace("https://", "")}
                      </span>
                    </div>
                    <div className="rounded-b-lg bg-gray-900/80 px-3 py-2 text-[10px] leading-relaxed text-gray-400 font-mono">
                      <span className="text-indigo-400">import</span> {"{  "}<span className="text-cyan-300">{project.name.replace(/ /g, "")}</span>{"  }"} <span className="text-indigo-400">from</span> <span className="text-green-300">&apos;./{project.name.toLowerCase().replace(/ /g, "-")}&apos;</span>
                    </div>
                  </div>
                )}

                {/* Code mockup for GitHub-only projects */}
                {!project.demo && (
                  <div className="absolute inset-x-4 top-3 z-10 rounded-lg bg-gray-900/85 p-3 font-mono text-[10px] leading-5 text-gray-400">
                    <div><span className="text-purple-400">const</span> <span className="text-cyan-300">{project.name.replace(/ /g, "")}</span> <span className="text-white">=</span> <span className="text-yellow-300">()</span> <span className="text-white">=&gt;</span> {"{"}</div>
                    <div className="pl-3"><span className="text-purple-400">return</span> <span className="text-green-300">&quot;{project.description.slice(0, 35)}...&quot;</span></div>
                    <div>{"}"}</div>
                  </div>
                )}

                {/* Language chip at bottom */}
                <div className="absolute bottom-2 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                  <span className={`h-2 w-2 rounded-full ${langColors[project.language] || "bg-gray-400"}`} />
                  <span className="text-[10px] font-medium text-gray-300">{project.language}</span>
                </div>

                {/* Links in corner */}
                <div className="absolute bottom-2 right-3 flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-gray-400 backdrop-blur-sm transition-all hover:text-white"
                    title="GitHub">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/70 text-white backdrop-blur-sm transition-all hover:bg-indigo-500"
                      title="Live Demo">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
              {/* ── End preview ─────────────────────────────────────── */}

              {/* Card body — bottom 60% */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400 flex-1">{project.description}</p>

                {/* Topics */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.topics.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-gray-400">{t}</span>
                  ))}
                </div>

                {/* Live demo button */}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500/10 py-2 text-xs font-medium text-indigo-300 transition-all hover:bg-indigo-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {filtered.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                setShowAll(!showAll);
                if (!showAll) {
                  setTimeout(() => {
                    anime({
                      targets: ".project-card",
                      translateY: [30, 0],
                      opacity: [0, 1],
                      duration: 600,
                      delay: anime.stagger(80),
                      easing: "easeOutExpo",
                    });
                  }, 50);
                }
              }}
              className="rounded-full border border-white/15 px-8 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-white/30 hover:text-white"
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
            </button>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Sarvardev035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-indigo-400"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
            View Full GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
