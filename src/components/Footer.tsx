import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-20">
      <div className="section-container">
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-center font-semibold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_rgba(143,176,255,0.25)]"
          style={{ fontSize: "clamp(3rem, 15vw, 13rem)" }}
        >
          Ceo.ooou.uz
        </p>
        <div className="flex flex-col items-center justify-between gap-4 py-10 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js, Claude &amp; Antigravity.</p>
          <div className="flex gap-5">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={profile.links.telegram} target="_blank" rel="noreferrer" className="hover:text-white">Telegram</a>
            <a href="#top" className="hover:text-white">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
