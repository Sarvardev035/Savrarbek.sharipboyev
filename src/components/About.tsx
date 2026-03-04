export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Passionate about building great software
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          {/* Image placeholder */}
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gray-800/40 glow">
            <div className="flex h-full items-center justify-center text-6xl">
              👨‍💻
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a full-stack developer with a passion for crafting
              intuitive, performant web applications. I enjoy working across the
              entire stack — from designing responsive UIs to architecting robust
              back-end services.
            </p>
            <p>
              My toolkit includes{" "}
              <strong className="text-white">React</strong>,{" "}
              <strong className="text-white">Next.js</strong>,{" "}
              <strong className="text-white">TypeScript</strong>,{" "}
              <strong className="text-white">Node.js</strong>, and modern
              databases. I care deeply about code quality, accessibility, and
              delivering real value to users.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source, or leveling up through
              continuous learning.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
              >
                Let&apos;s Talk
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
