import { profile, stack, stats } from "@/data/profile";
import { Counter, Reveal, SectionHead } from "./Motion";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-container">
        <SectionHead
          eyebrow="01 · About"
          title={
            <>
              From finding bugs to <span className="text-gradient">shipping a company.</span>
            </>
          }
          sub="I started in QA at Uyqur Team, where breaking things taught me how good software is built. I grew into full-stack development, and today I design, build, test and run ooou.uz myself, using Claude and Antigravity to move at the speed of a much larger team."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="spot glass h-full rounded-3xl p-6">
                <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <div className="spot glass h-full rounded-3xl p-7">
              <p className="eyebrow">How I work</p>
              <ul className="mt-5 grid gap-4 text-slate-300 sm:grid-cols-2">
                {[
                  ["QA mindset", "Every feature starts with how it can fail."],
                  ["AI pair engineering", "Claude and Antigravity for planning, code, review and tests."],
                  ["Own production", "AWS, nginx, Cloudflare, monitoring: I run what I ship."],
                  ["Talk to customers", "Restaurant owners shape the roadmap, not guesses."],
                ].map(([t, d]) => (
                  <li key={t} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="font-medium text-white">{t}</p>
                    <p className="mt-1 text-sm text-slate-400">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="spot glass flex h-full flex-col justify-between rounded-3xl p-7">
              <p className="eyebrow">Education</p>
              <div className="mt-6">
                <p className="text-xl font-semibold text-white">{profile.education.degree}</p>
                <p className="mt-1 text-[#8fb0ff]">{profile.education.school}</p>
                <p className="mt-3 font-mono text-xs text-slate-500">{profile.education.period}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-24 overflow-hidden border-y border-white/5 py-6 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="marquee gap-3">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="mx-1.5 whitespace-nowrap rounded-full border border-white/10 px-5 py-2 font-mono text-sm text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
