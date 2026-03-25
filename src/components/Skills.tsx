"use client";

import anime from "animejs";
import { useAnimeOnScroll } from "@/hooks/useAnime";

const categories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useAnimeOnScroll<HTMLElement>((el) => {
    anime({
      targets: el.querySelector(".skills-heading"),
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelectorAll(".skill-card"),
      scale: [0, 1],
      rotateZ: [-5, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: anime.stagger(200, { start: 300 }),
      easing: "easeOutElastic(1, .6)",
    });

    setTimeout(() => {
      anime({
        targets: el.querySelectorAll(".skill-bar-fill"),
        width: (target: HTMLElement) => target.getAttribute("data-width") || "0%",
        duration: 2000,
        delay: anime.stagger(100),
        easing: "easeOutExpo",
      });

      el.querySelectorAll(".skill-percent").forEach((percentEl) => {
        const target = parseInt(percentEl.getAttribute("data-value") || "0");
        const obj = { val: 0 };
        anime({
          targets: obj,
          val: target,
          round: 1,
          duration: 2000,
          easing: "easeOutExpo",
          begin: () => { percentEl.textContent = "1%"; },
          update: () => {
            percentEl.textContent = Math.max(1, Math.round(obj.val)) + "%";
          },
        });
      });
    }, 700);

    anime({
      targets: el.querySelectorAll(".skill-icon"),
      scale: [0, 1],
      rotate: ["45deg", "0deg"],
      duration: 800,
      delay: anime.stagger(200, { start: 500 }),
      easing: "easeOutElastic(1, .6)",
    });
  });

  return (
    <section id="skills" className="relative py-24 bg-gray-950/50" ref={sectionRef}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="section-container">
        <div className="skills-heading mb-16 text-center" style={{ opacity: 0 }}>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Skills</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Technologies I Work With</h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-card rounded-2xl border border-white/10 bg-gray-900/60 p-6 transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10" style={{ opacity: 0 }}>
              <div className="mb-5 flex items-center gap-3">
                <span className="skill-icon text-2xl" style={{ opacity: 0 }}>{cat.icon}</span>
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="skill-percent text-gray-500" data-value={skill.level}>0%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-800">
                      <div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" data-width={`${skill.level}%`} style={{ width: "0%" }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
