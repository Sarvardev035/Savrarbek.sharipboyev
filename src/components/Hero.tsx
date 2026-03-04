export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="section-container flex flex-col items-center gap-8 text-center">
        {/* Badge */}
        <span className="animate-fade-in-up rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
          Available for Work
        </span>

        {/* Heading */}
        <h1 className="animate-fade-in-up max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Sarvarbek</span>
          <br />
          Full-Stack Developer
        </h1>

        {/* Sub */}
        <p className="animate-fade-in-up max-w-xl text-lg leading-relaxed text-gray-400">
          I build modern, performant web applications with clean code and
          thoughtful user experiences. Let&apos;s turn ideas into reality.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-white/30 hover:text-white"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "20+", label: "Projects Completed" },
            { value: "10+", label: "Happy Clients" },
            { value: "5+", label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{s.value}</p>
              <p className="mt-1 text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
