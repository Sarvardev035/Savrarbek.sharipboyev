"use client";

import { useEffect } from "react";
import anime from "animejs";

export default function Hero() {
  useEffect(() => {
    const tl = anime.timeline({ easing: "easeOutExpo" });

    tl.add({
      targets: ".hero-badge",
      scale: [0, 1],
      opacity: [0, 1],
      duration: 1200,
      delay: 400,
    });

    tl.add({
      targets: ".hero-title .word",
      translateY: [80, 0],
      opacity: [0, 1],
      duration: 1600,
      delay: anime.stagger(120),
    }, "-=600");

    tl.add({
      targets: ".hero-subtitle",
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1200,
    }, "-=800");

    tl.add({
      targets: ".hero-cta",
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 900,
      delay: anime.stagger(200),
    }, "-=600");

    tl.add({
      targets: ".hero-stat",
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 900,
      delay: anime.stagger(150),
    }, "-=500");

    // Floating blobs
    anime({
      targets: ".hero-blob",
      translateX: () => anime.random(-30, 30),
      translateY: () => anime.random(-30, 30),
      scale: [1, 1.1],
      duration: 4000,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      delay: anime.stagger(500),
    });

    // Pulse badge
    anime({
      targets: ".hero-badge",
      boxShadow: [
        "0 0 0 0 rgba(99, 102, 241, 0.4)",
        "0 0 0 20px rgba(99, 102, 241, 0)",
      ],
      duration: 2000,
      loop: true,
      easing: "easeOutSine",
      delay: 2000,
    });

    // Counter animation — counts from 1 up to target
    document.querySelectorAll(".stat-number").forEach((el) => {
      const target = parseInt(el.getAttribute("data-value") || "0");
      const obj = { val: 0 };
      anime({
        targets: obj,
        val: target,
        round: 1,
        duration: 2800,
        delay: 1800,
        easing: "easeInOutExpo",
        update: () => {
          const display = Math.max(1, Math.round(obj.val));
          el.textContent = display + "+";
        },
        begin: () => {
          el.textContent = "1+";
        },
      });
    });
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="hero-blob pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="hero-blob pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="hero-blob pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="section-container relative z-10 flex flex-col items-center gap-8 text-center">
        <span className="hero-badge rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300" style={{ opacity: 0 }}>
          Available for Work
        </span>

        <h1 className="hero-title max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="word inline-block" style={{ opacity: 0 }}>Hi,</span>{" "}
          <span className="word inline-block" style={{ opacity: 0 }}>I&apos;m</span>{" "}
          <span className="word inline-block gradient-text" style={{ opacity: 0 }}>Sarvarbek</span>
          <br />
          <span className="word inline-block" style={{ opacity: 0 }}>Full-Stack</span>{" "}
          <span className="word inline-block" style={{ opacity: 0 }}>Developer</span>
        </h1>

        <p className="hero-subtitle max-w-xl text-lg leading-relaxed text-gray-400" style={{ opacity: 0 }}>
          I build modern, performant web applications with clean code and
          thoughtful user experiences. Let&apos;s turn ideas into reality.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="hero-cta rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25" style={{ opacity: 0 }}>
            View Projects
          </a>
          <a href="#contact" className="hero-cta rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-white/30 hover:text-white" style={{ opacity: 0 }}>
            Get in Touch
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: 3, label: "Years Experience" },
            { value: 20, label: "Projects Completed" },
            { value: 10, label: "Happy Clients" },
            { value: 5, label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="hero-stat text-center" style={{ opacity: 0 }}>
              <p className="stat-number text-3xl font-bold gradient-text" data-value={s.value}>0+</p>
              <p className="mt-1 text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
