"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const profiles = [
  {
    id: "github",
    platform: "GitHub",
    url: "https://github.com/Sarvardev035",
    username: "Sarvardev035",
    name: "Sarvarbek Sharipboyev",
    bio: "🚀 Frontend Engineer · React · Three.js · Problem Solver",
    detail: "38 repositories · 13 stars",
    avatar: "https://github.com/Sarvardev035.png",
    badge: "Open Source",
    gradientFrom: "#1a1a2e",
    gradientTo: "#16213e",
    accent: "#6366f1",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    stats: [
      { label: "Repos", value: "38" },
      { label: "Stars", value: "13" },
      { label: "Followers", value: "8" },
    ],
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sarvar-sharipov-4bb187332/",
    username: "sarvar-sharipov",
    name: "Sarvarbek Sharipboyev",
    bio: "Full-Stack Developer · BSc IT @ Amity University · Freelance since 2023",
    detail: "ICPC & Huawei ICT Competition Participant",
    avatar: "https://github.com/Sarvardev035.png",
    badge: "Open to Work",
    gradientFrom: "#0a1628",
    gradientTo: "#0d1f3c",
    accent: "#0a66c2",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    stats: [
      { label: "Connections", value: "50+" },
      { label: "Experience", value: "3yr" },
      { label: "Location", value: "UZ" },
    ],
  },
  {
    id: "gmail",
    platform: "Gmail",
    url: "mailto:sarvardev035@gmail.com",
    username: "sarvardev035",
    name: "Sarvarbek Sharipboyev",
    bio: "Available for freelance projects & full-time roles worldwide",
    detail: "sarvardev035@gmail.com",
    avatar: "https://github.com/Sarvardev035.png",
    badge: "Available",
    gradientFrom: "#1a0a0a",
    gradientTo: "#2d1515",
    accent: "#ea4335",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
    stats: [
      { label: "Response", value: "<24h" },
      { label: "Projects", value: "20+" },
      { label: "Rate", value: "100%" },
    ],
  },
];

export default function SocialCarousel() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = (idx: number) => {
    setActive(idx);
  };

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % profiles.length);
    }, 3500);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animate active card in
  useEffect(() => {
    const el = cardRefs.current[active];
    if (!el) return;
    anime({
      targets: el,
      scale: [0.88, 1],
      opacity: [0.4, 1],
      translateY: [20, 0],
      duration: 700,
      easing: "easeOutExpo",
    });
    // animate stats inside
    anime({
      targets: el.querySelectorAll(".stat-pill"),
      translateY: [15, 0],
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(80, { start: 200 }),
      easing: "easeOutExpo",
    });
  }, [active]);

  // Section entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          anime({
            targets: sectionRef.current.querySelectorAll(".carousel-heading"),
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutExpo",
          });
          anime({
            targets: sectionRef.current.querySelectorAll(".dot-btn"),
            scale: [0, 1],
            opacity: [0, 1],
            duration: 400,
            delay: anime.stagger(80, { start: 600 }),
            easing: "easeOutBack",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="social"
      className="relative py-24 overflow-hidden"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="carousel-heading mb-14 text-center" style={{ opacity: 0 }}>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Connect</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Find Me Online</h2>
          <p className="mx-auto mt-4 max-w-sm text-gray-400 text-sm">Follow my work across platforms</p>
        </div>

        {/* Carousel stage */}
        <div className="relative mx-auto max-w-md">
          {profiles.map((profile, i) => {
            const isActive = i === active;
            const offset = i - active;
            const normalizedOffset =
              offset > profiles.length / 2
                ? offset - profiles.length
                : offset < -profiles.length / 2
                ? offset + profiles.length
                : offset;

            return (
              <div
                key={profile.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="absolute inset-0 cursor-pointer transition-all"
                style={{
                  position: isActive ? "relative" : "absolute",
                  visibility: Math.abs(normalizedOffset) > 1 ? "hidden" : "visible",
                  transform: `translateX(${normalizedOffset * 55}%) scale(${isActive ? 1 : 0.82}) translateY(${isActive ? 0 : 20}px)`,
                  opacity: isActive ? 1 : 0.35,
                  zIndex: isActive ? 10 : 5 - Math.abs(normalizedOffset),
                  transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease",
                  pointerEvents: isActive ? "auto" : "none",
                }}
                onClick={() => !isActive && goTo(i)}
              >
                {/* Card */}
                <div
                  className="relative rounded-3xl border border-white/10 p-0.5 overflow-hidden shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${profile.accent}40, transparent)`,
                  }}
                >
                  <div
                    className="rounded-[22px] p-6"
                    style={{
                      background: `linear-gradient(160deg, ${profile.gradientFrom}, ${profile.gradientTo})`,
                    }}
                  >
                    {/* Platform badge */}
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold"
                        style={{ background: `${profile.accent}25`, color: profile.accent }}
                      >
                        {profile.icon}
                        {profile.platform}
                      </div>
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-medium"
                        style={{ background: `${profile.accent}20`, color: profile.accent }}
                      >
                        {profile.badge}
                      </span>
                    </div>

                    {/* Avatar + name */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={profile.avatar}
                          alt={profile.name}
                          width={64}
                          height={64}
                          className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white/10"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%236366f1' rx='12'/%3E%3Ctext x='32' y='40' font-size='28' text-anchor='middle' fill='white'%3ES%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div
                          className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-gray-900"
                          style={{ background: profile.accent }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">{profile.name}</h3>
                        <p className="text-xs mt-0.5" style={{ color: `${profile.accent}cc` }}>
                          @{profile.username}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-5">{profile.bio}</p>
                    <p className="text-xs text-gray-500 mb-5">{profile.detail}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {profile.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="stat-pill rounded-xl p-2.5 text-center"
                          style={{ background: `${profile.accent}12`, opacity: 0 }}
                        >
                          <p className="text-base font-bold" style={{ color: profile.accent }}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={profile.url}
                      target={profile.url.startsWith("mailto") ? undefined : "_blank"}
                      rel={profile.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
                      style={{ background: profile.accent }}
                    >
                      {profile.icon}
                      {profile.id === "gmail" ? "Send Email" : `View ${profile.platform} Profile`}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {profiles.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`dot-btn h-2 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-indigo-400" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              style={{ opacity: 0 }}
              aria-label={`Go to ${p.platform}`}
            />
          ))}
        </div>

        {/* Platform labels */}
        <div className="mt-6 flex justify-center gap-6">
          {profiles.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className="text-xs font-medium transition-all duration-300"
              style={{ color: i === active ? p.accent : "#6b7280" }}
            >
              {p.platform}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
