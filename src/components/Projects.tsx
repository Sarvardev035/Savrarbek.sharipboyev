import { profile, projects } from "@/data/profile";
import { Reveal, SectionHead } from "./Motion";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="section-container">
        <SectionHead eyebrow="05 · Projects" title="More things I've built" sub="Hackathon builds, client work and experiments in 3D and games." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <article className="spot glass group flex h-full flex-col rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex gap-3 text-sm">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                        Code ↗
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="text-[#8fb0ff] hover:text-white">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-slate-200 transition-colors hover:border-white/40"
          >
            All repositories on GitHub ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
