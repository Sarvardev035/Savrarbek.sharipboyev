const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product filtering, cart, checkout, and payment integration. Built with Next.js, Tailwind CSS, and Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    live: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description:
      "A real-time collaborative task board with drag-and-drop, authentication, and role-based permissions.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "#",
    code: "#",
  },
  {
    title: "AI Chat Dashboard",
    description:
      "An analytics dashboard for monitoring AI chatbot conversations with interactive charts and export support.",
    tags: ["Next.js", "Python", "OpenAI", "Chart.js"],
    live: "#",
    code: "#",
  },
  {
    title: "Dev Blog Platform",
    description:
      "Markdown-powered blogging platform with syntax highlighting, SEO optimizations, and RSS feed.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Projects
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            A selection of recent projects that showcase my skills and approach
            to problem solving.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-gray-900/60 p-6 card-hover"
            >
              {/* Thumbnail placeholder */}
              <div className="mb-5 aspect-video w-full overflow-hidden rounded-xl bg-gray-800/60">
                <div className="flex h-full items-center justify-center text-3xl text-gray-600">
                  🖥️
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                {p.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex gap-4 text-sm font-medium">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Live Demo ↗
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Source Code ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
