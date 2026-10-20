"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { Typewriter } from "./Motion";

const log = [
  { c: "text-slate-500", t: "$ claude \"add AI cheque review to cashback\"" },
  { c: "text-mint", t: "✓ plan ready · tests written first" },
  { c: "text-slate-500", t: "$ antigravity test --e2e" },
  { c: "text-mint", t: "✓ all checks green" },
  { c: "text-slate-500", t: "$ git push && deploy" },
  { c: "text-[#8fb0ff]", t: "→ live on app.ooou.uz" },
];

export default function Hero() {
  const [lines, setLines] = useState(0);

  useEffect(() => {
    if (lines >= log.length) {
      const reset = setTimeout(() => setLines(0), 4000);
      return () => clearTimeout(reset);
    }
    const id = setTimeout(() => setLines((n) => n + 1), lines === 0 ? 1400 : 750);
    return () => clearTimeout(id);
  }, [lines]);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="aurora -left-40 -top-40 h-[520px] w-[520px] bg-blue/60" />
      <div className="aurora -right-32 top-1/3 h-[420px] w-[420px] bg-orange/30" style={{ animationDelay: "-6s" }} />

      <div className="section-container relative z-10 grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-xs text-slate-300"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-mint text-mint" />
            Building Bahola at <a className="font-medium text-white underline-offset-4 hover:underline" href={profile.links.company} target="_blank" rel="noreferrer">ooou.uz</a>
          </div>

          <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            <span className="mask-line"><span style={{ "--d": "100ms" } as React.CSSProperties}>Sarvarbek</span></span>
            <span className="mask-line"><span style={{ "--d": "220ms" } as React.CSSProperties}>Sharipboyev<span className="text-orange">.</span></span></span>
            <span className="mask-line"><span className="text-gradient" style={{ "--d": "340ms" } as React.CSSProperties}>Founder &amp; CEO</span></span>
          </h1>

          <p className="mt-7 font-mono text-base text-[#8fb0ff] sm:text-lg">
            &gt; <Typewriter words={profile.roles} />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#bahola"
              className="group relative overflow-hidden rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_#2f6bff] transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">See Bahola →</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Terminal + orbit card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="orbit pointer-events-none absolute -inset-10 rounded-full border border-dashed border-white/10">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue px-2 py-0.5 font-mono text-[10px] text-white">Claude</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange px-2 py-0.5 font-mono text-[10px] text-white">Antigravity</span>
          </div>

          <div className="float glass relative overflow-hidden rounded-3xl shadow-2xl shadow-black/60">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">~/ooou.uz · ship.log</span>
            </div>
            <div className="flex items-center gap-4 border-b border-white/5 px-5 py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github.com/Sarvardev035.png"
                alt={profile.name}
                className="h-14 w-14 rounded-2xl object-cover ring-2 ring-blue/40"
              />
              <div>
                <p className="font-semibold text-white">{profile.shortName}</p>
                <p className="text-xs text-slate-400">{profile.location}</p>
              </div>
              <span className="ml-auto rounded-full bg-mint/10 px-2.5 py-1 font-mono text-[10px] text-mint">online</span>
            </div>
            <div className="min-h-[220px] space-y-2 px-5 py-5 font-mono text-[12.5px] leading-relaxed">
              {log.slice(0, lines).map((l, i) => (
                <p key={i} className={`${l.c} animate-[rise_.4s_ease-out]`}>
                  {l.t}
                </p>
              ))}
              {lines < log.length && <span className="blink inline-block h-4 w-2 bg-[#8fb0ff]" />}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 sm:flex">
        Scroll
        <span className="relative h-10 w-[1px] overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-white" style={{ animation: "scrollcue 1.6s linear infinite" }} />
        </span>
      </a>
      <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
    </section>
  );
}
