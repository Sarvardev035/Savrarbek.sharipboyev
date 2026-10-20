"use client";

import { useEffect, useState } from "react";
import { Reveal, SectionHead } from "./Motion";

const steps = [
  { k: "Scan", t: "Guest scans the QR on the table, hotel door or clinic wall. No app to install." },
  { k: "Rate", t: "Rates the visit in about 10 seconds, in Uzbek, Russian or English." },
  { k: "Alert", t: "A low rating reaches the owner's Telegram with the table number, before the guest leaves." },
  { k: "Grow", t: "Happy guests are sent to Google Maps, 2GIS and Yandex. Cashback brings them back." },
];

const features = [
  ["Multi-branch dashboard", "One account for every branch, with trends and comparisons."],
  ["AI advice", "Claude reads the feedback and tells owners what to fix first."],
  ["AI cheque review", "Cashback receipts are checked by AI with fraud rules."],
  ["Clinics & hotels", "Doctor booking, nurse call and room requests on the same QR."],
];

const stackRows = [
  ["Frontend", "Next.js · React · Tailwind"],
  ["Backend", "Next.js API · Prisma · PostgreSQL (Supabase)"],
  ["Infra", "AWS EC2 · nginx · Cloudflare · pm2"],
  ["AI", "Claude · Antigravity"],
];

function Phone({ step }: { step: number }) {
  return (
    <div className="relative mx-auto h-[520px] w-[260px] rounded-[44px] border border-white/15 bg-[#0b1026] p-3 shadow-[0_40px_120px_-30px_#2f6bff]">
      <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative h-full overflow-hidden rounded-[34px] bg-[#f6f7fb] text-[#0b1026]">
        {/* Scan */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 transition-all duration-700 ${step === 0 ? "opacity-100" : "pointer-events-none -translate-y-6 opacity-0"}`}>
          <div className="relative grid h-36 w-36 grid-cols-5 grid-rows-5 gap-1 rounded-2xl bg-white p-3 shadow-lg">
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i} className={`rounded-sm ${[0, 1, 3, 4, 5, 9, 12, 15, 19, 20, 21, 23, 24, 7, 17].includes(i) ? "bg-[#0b1026]" : "bg-transparent"}`} />
            ))}
            <span className="absolute inset-x-3 top-3 h-0.5 bg-[#2f6bff] shadow-[0_0_12px_#2f6bff]" style={{ animation: "scanline 1.6s ease-in-out infinite alternate" }} />
          </div>
          <p className="text-sm font-semibold">Table 7 · Jayhun Restoran</p>
        </div>
        {/* Rate */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 transition-all duration-700 ${step === 1 ? "opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
          <p className="text-center text-lg font-semibold">Bugungi tashrifingiz qanday o&apos;tdi?</p>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className="text-3xl text-[#f5c56b]" style={{ animation: step === 1 ? `rise .5s ${n * 120}ms both` : undefined }}>
                ★
              </span>
            ))}
          </div>
          <div className="w-full rounded-xl bg-white p-3 text-xs text-slate-500 shadow">Osh juda mazali edi!</div>
        </div>
        {/* Alert */}
        <div className={`absolute inset-0 flex flex-col justify-center gap-3 bg-[#17212b] p-5 transition-all duration-700 ${step === 2 ? "opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
          <p className="text-center text-[11px] text-slate-400">Telegram</p>
          <div className="rounded-2xl rounded-bl-sm bg-[#2b5278] p-3 text-[13px] text-white shadow" style={{ animation: step === 2 ? "rise .6s both" : undefined }}>
            ⚠️ <b>Past baho: 2/5</b>
            <br />
            Stol 12 · &quot;Ovqat sovuq keldi&quot;
            <br />
            <span className="text-[11px] text-slate-300">hozir · Bahola</span>
          </div>
        </div>
        {/* Grow */}
        <div className={`absolute inset-0 flex flex-col justify-center gap-3 p-5 transition-all duration-700 ${step === 3 ? "opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">This week</p>
          {[
            ["Avg rating", "4.7", "w-[94%]"],
            ["Google reviews", "+18", "w-[70%]"],
            ["Returning guests", "+12%", "w-[55%]"],
          ].map(([l, v, w]) => (
            <div key={l} className="rounded-xl bg-white p-3 shadow">
              <div className="flex justify-between text-xs"><span className="text-slate-500">{l}</span><b>{v}</b></div>
              <div className="mt-2 h-1.5 rounded bg-slate-100"><div className={`h-full rounded bg-[#2f6bff] ${w}`} style={{ animation: step === 3 ? "grow 1s both" : undefined, transformOrigin: "left" }} /></div>
            </div>
          ))}
          <p className="text-center text-[10px] text-slate-400">Demo data</p>
        </div>
      </div>
      <style>{`@keyframes scanline{to{transform:translateY(118px)}}@keyframes grow{from{transform:scaleX(0)}}`}</style>
    </div>
  );
}

export default function Bahola() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setStep((s) => (s + 1) % steps.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="bahola" className="relative overflow-hidden py-28">
      <div className="aurora left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 bg-blue/25" />
      <div className="section-container relative">
        <SectionHead
          eyebrow="03 · Flagship project"
          title={
            <>
              Bahola <span className="text-slate-500">(SmartQR)</span>: guests talk, <span className="text-gradient">owners finally hear.</span>
            </>
          }
          sub="Most unhappy guests leave in silence and never come back. Bahola puts one QR on every table, door and ward, so owners hear the problem in minutes instead of reading it on Google a week later. Built and run by me at ooou.uz."
        />

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto_1fr]">
          <ol className="space-y-3" onMouseLeave={() => setPaused(false)}>
            {steps.map((s, i) => (
              <Reveal as="li" key={s.k} delay={i * 80}>
                <button
                  onMouseEnter={() => {
                    setPaused(true);
                    setStep(i);
                  }}
                  onClick={() => setStep(i)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-500 ${
                    step === i ? "border-blue/50 bg-blue/10" : "border-white/5 bg-white/[0.02] hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${step === i ? "text-orange" : "text-slate-500"}`}>0{i + 1}</span>
                    <span className="font-semibold text-white">{s.k}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{s.t}</p>
                  <div className="mt-3 h-0.5 overflow-hidden rounded bg-white/5">
                    <div
                      key={step === i ? `on-${step}` : "off"}
                      className="h-full bg-blue"
                      style={{
                        width: step === i ? "100%" : "0%",
                        transition: step === i && !paused ? "width 3.2s linear" : "none",
                      }}
                    />
                  </div>
                </button>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={150}>
            <Phone step={step} />
          </Reveal>

          <div className="space-y-4">
            {features.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="spot glass rounded-2xl p-5">
                  <p className="font-semibold text-white">{t}</p>
                  <p className="mt-1 text-sm text-slate-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-3xl p-7">
              <p className="eyebrow">Under the hood</p>
              <dl className="mt-5 divide-y divide-white/5">
                {stackRows.map(([k, v]) => (
                  <div key={k} className="flex flex-wrap justify-between gap-2 py-3">
                    <dt className="text-slate-400">{k}</dt>
                    <dd className="font-mono text-sm text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-blue p-7 text-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange/60 blur-3xl" />
              <p className="eyebrow !text-white/70">Live today</p>
              <p className="mt-4 text-2xl font-semibold leading-snug">Restaurants, hotels and clinics across Uzbekistan.</p>
              <p className="mt-3 text-sm text-white/80">First paying customer: Jayhun Restoran.</p>
              <a
                href="https://ooou.uz"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
              >
                Visit ooou.uz ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
