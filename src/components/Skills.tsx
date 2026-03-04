const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950/50">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Skills
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/10 bg-gray-900/60 p-6 card-hover"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
