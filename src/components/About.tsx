"use client";

import { useEffect } from "react";
import anime from "animejs";
import { useAnimeOnScroll } from "@/hooks/useAnime";

export default function About() {
  const sectionRef = useAnimeOnScroll<HTMLElement>((el) => {
    anime({
      targets: el.querySelectorAll(".about-animate"),
      translateY: [60, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(150),
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelector(".about-avatar"),
      scale: [0.5, 1],
      rotate: ["-10deg", "0deg"],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutElastic(1, .8)",
    });

    anime({
      targets: el.querySelectorAll(".float-shape"),
      scale: [0, 1],
      opacity: [0, 0.6],
      delay: anime.stagger(200, { start: 600 }),
      duration: 800,
      easing: "easeOutBack",
    });
  });

  useEffect(() => {
    anime({
      targets: ".float-shape",
      translateY: () => anime.random(-15, 15),
      translateX: () => anime.random(-15, 15),
      rotate: () => anime.random(-20, 20),
      duration: 3000,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      delay: anime.stagger(300),
    });
  }, []);

  return (
    <section id="about" className="relative py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="about-animate mb-16 text-center" style={{ opacity: 0 }}>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">About Me</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Passionate about building great software</h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="about-avatar relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gray-800/40 glow" style={{ opacity: 0 }}>
              <div className="flex h-full items-center justify-center text-6xl">👨‍💻</div>
            </div>
            <div className="float-shape absolute -left-4 -top-4 h-8 w-8 rounded-full bg-indigo-500/40" style={{ opacity: 0 }} />
            <div className="float-shape absolute -right-3 top-1/4 h-6 w-6 rounded-lg bg-cyan-500/40" style={{ opacity: 0 }} />
            <div className="float-shape absolute -bottom-3 left-1/4 h-10 w-10 rounded-full bg-purple-500/30" style={{ opacity: 0 }} />
            <div className="float-shape absolute -right-5 bottom-1/4 h-5 w-5 rounded-full bg-pink-500/40" style={{ opacity: 0 }} />
          </div>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p className="about-animate" style={{ opacity: 0 }}>
              I&apos;m a full-stack developer with a passion for crafting intuitive, performant web applications. I enjoy working across the entire stack — from designing responsive UIs to architecting robust back-end services.
            </p>
            <p className="about-animate" style={{ opacity: 0 }}>
              My toolkit includes <strong className="text-white">React</strong>, <strong className="text-white">Next.js</strong>, <strong className="text-white">TypeScript</strong>, <strong className="text-white">Node.js</strong>, and modern databases. I care deeply about code quality, accessibility, and delivering real value to users.
            </p>
            <p className="about-animate" style={{ opacity: 0 }}>
              Participant in <strong className="text-white">ICPC</strong> &amp; <strong className="text-white">Huawei ICT International Competitions</strong>. Freelance developer since 2023, building scalable, production-ready web systems.
            </p>

            {/* Education card */}
            <div className="about-animate rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4" style={{ opacity: 0 }}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-lg">🎓</span>
                <div>
                  <p className="text-sm font-semibold text-white">BSc Information Technology</p>
                  <p className="text-sm text-indigo-300">Amity University &mdash; Tashkent</p>
                  <p className="mt-1 text-xs text-gray-500">2023 – 2027 &nbsp;·&nbsp; Currently Enrolled</p>
                </div>
              </div>
            </div>

            <div className="about-animate flex flex-wrap gap-3 pt-2" style={{ opacity: 0 }}>
              <a href="#contact" className="rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25">Let&apos;s Talk</a>
              <button onClick={() => window.print()} className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
