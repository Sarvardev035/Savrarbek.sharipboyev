import { awards, certifications, events, hackathons, profile, type Credential, type Highlight } from "@/data/profile";
import { Reveal, SectionHead } from "./Motion";

function Empty({ what }: { what: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 p-8 text-center text-slate-500">
      More {what} on{" "}
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-[#8fb0ff] hover:underline">
        LinkedIn ↗
      </a>
    </div>
  );
}

function HighlightGrid({ items }: { items: Highlight[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((h, i) => {
        const inner = (
          <div className="spot glass group flex h-full flex-col rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-orange/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-orange">{h.tag}</span>
              {h.date && <span className="font-mono text-[11px] text-slate-500">{h.date}</span>}
            </div>
            <h4 className="mt-5 text-lg font-semibold leading-snug text-white">{h.name}</h4>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{h.detail}</p>
            {h.url && <span className="mt-4 text-sm text-[#8fb0ff] transition-transform group-hover:translate-x-1">View ↗</span>}
          </div>
        );
        return (
          <Reveal key={h.name} delay={i * 70}>
            {h.url ? (
              <a href={h.url} target="_blank" rel="noreferrer" className="block h-full">
                {inner}
              </a>
            ) : (
              inner
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

function CredentialList({ items, icon }: { items: Credential[]; icon: string }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((c, i) => (
        <Reveal as="li" key={c.name + c.issuer} delay={(i % 6) * 60}>
          <a
            href={c.url || undefined}
            target={c.url ? "_blank" : undefined}
            rel="noreferrer"
            className="spot glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-colors hover:border-blue/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/15 text-xl">{icon}</span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold leading-snug text-white">{c.name}</p>
              <p className="mt-0.5 text-sm text-[#8fb0ff]">{c.issuer}</p>
              {c.note && <p className="mt-2 text-sm text-slate-400">{c.note}</p>}
            </div>
            {c.date && <span className="shrink-0 font-mono text-[11px] text-slate-500">{c.date}</span>}
          </a>
        </Reveal>
      ))}
    </ul>
  );
}

function Sub({ id, title, count, children }: { id: string; title: string; count: number; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28">
      <Reveal>
        <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/5 pb-4">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <span className="font-mono text-xs text-slate-500">{String(count).padStart(2, "0")}</span>
        </div>
      </Reveal>
      {children}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="section-container">
        <SectionHead
          eyebrow="04 · Achievements"
          title="Hackathons, certifications, awards & events"
          sub="Competitions and rooms where I learned the most, plus the credentials behind the work."
        />

        <div className="space-y-20">
          <Sub id="hackathons" title="Hackathons & competitions" count={hackathons.length}>
            <HighlightGrid items={hackathons} />
          </Sub>

          <Sub id="certifications" title="Certifications" count={certifications.length}>
            {certifications.length ? <CredentialList items={certifications} icon="📜" /> : <Empty what="certifications" />}
          </Sub>

          <Sub id="awards" title="Honors & awards" count={awards.length}>
            {awards.length ? <CredentialList items={awards} icon="🏆" /> : <Empty what="honors and awards" />}
          </Sub>

          <Sub id="events" title="Events & community" count={events.length}>
            {events.length ? <HighlightGrid items={events} /> : <Empty what="events" />}
          </Sub>
        </div>
      </div>
    </section>
  );
}
