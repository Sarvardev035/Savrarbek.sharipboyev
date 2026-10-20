import { experience } from "@/data/profile";
import { Reveal, SectionHead } from "./Motion";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-container">
        <SectionHead
          eyebrow="02 · Experience"
          title="Where I've worked"
          sub="QA engineer, full-stack developer, founder. Each step added a new layer of ownership."
        />

        <div className="relative" data-progress>
          <div className="absolute left-[11px] top-2 h-full w-px bg-white/10 sm:left-[15px]" />
          <div className="timeline-line absolute left-[11px] top-2 h-full w-px bg-gradient-to-b from-blue via-[#8fb0ff] to-orange sm:left-[15px]" />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.company + job.role} delay={i * 80} className="relative pl-10 sm:pl-14">
                <span
                  className={`absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border sm:h-8 sm:w-8 ${
                    job.current ? "border-blue bg-blue/20" : "border-white/20 bg-ink"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${job.current ? "pulse-dot bg-blue text-blue" : "bg-white/50"}`} />
                </span>

                <div className="spot glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">{job.company}</h3>
                    {job.period && <span className="font-mono text-xs text-slate-500">{job.period}</span>}
                  </div>
                  <p className="mt-1 text-[#8fb0ff]">{job.role}</p>
                  <ul className="mt-5 space-y-2.5 text-slate-400">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-3 shrink-0 rounded bg-orange/70" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
