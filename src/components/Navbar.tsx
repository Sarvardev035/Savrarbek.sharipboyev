"use client";

import { useState, useEffect, useRef } from "react";
import anime from "animejs";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    anime({
      targets: navRef.current,
      translateY: [-60, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".nav-link",
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 500 }),
      duration: 600,
      easing: "easeOutExpo",
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-gray-950/90 shadow-lg shadow-indigo-500/5 backdrop-blur-lg"
          : "border-transparent bg-transparent backdrop-blur-sm"
      }`}
      style={{ opacity: 0 }}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight gradient-text">
          Sarvarbek
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-sm text-gray-400 transition-colors hover:text-white"
                style={{ opacity: 0 }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-link hidden rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 md:inline-flex"
          style={{ opacity: 0 }}
        >
          Hire Me
        </a>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-gray-300 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-300 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-300 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-gray-950/95 backdrop-blur-md md:hidden">
          <ul className="section-container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block text-base text-gray-300 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-block rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
