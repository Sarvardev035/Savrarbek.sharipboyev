"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

const navLinks = ["About", "Skills", "Projects", "Social", "Contact"];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sarvardev035",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarvar-sharipov-4bb187332/",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:sarvardev035@gmail.com",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const handleDownloadCV = () => {
    window.print();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && footerRef.current) {
          anime({
            targets: footerRef.current.querySelectorAll(".footer-animate"),
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1200,
            delay: anime.stagger(120),
            easing: "easeOutExpo",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative border-t border-white/10 bg-gray-950 no-print">
      {/* Top gradient line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="section-container py-16">
        {/* Main grid */}
        <div className="footer-animate grid gap-10 md:grid-cols-3 lg:grid-cols-4" style={{ opacity: 0 }}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block text-2xl font-extrabold gradient-text mb-3">
              Sarvarbek
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Full-Stack Developer building modern, performant web applications.
              BSc IT student at Amity University Tashkent &mdash; open to freelance &amp; full-time roles.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/10"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-gray-400 transition-colors hover:text-white w-fit"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact + CV */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Contact</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>
                <a href="mailto:sarvardev035@gmail.com" className="hover:text-white transition-colors">
                  sarvardev035@gmail.com
                </a>
              </li>
              <li className="text-gray-500">Uzbekistan</li>
              <li className="text-gray-500">BSc IT · Amity University</li>
            </ul>
            {/* Download CV */}
            <button
              onClick={handleDownloadCV}
              className="mt-6 group flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-5 py-2.5 text-sm font-semibold text-indigo-300 transition-all hover:bg-indigo-500/20 hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-animate my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ opacity: 0 }} />

        {/* Bottom bar */}
        <div className="footer-animate flex flex-col items-center justify-between gap-4 text-xs text-gray-600 sm:flex-row" style={{ opacity: 0 }}>
          <p>&copy; {new Date().getFullYear()} Sarvarbek Sharipboyev. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; Anime.js</p>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span>Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
