import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "../data/projects"; // ✅ import project data
import { ProjectCard } from "../components/ProjectCard"; // ✅ import card component

export const Route = createFileRoute("/")({
  component: HomePage,
});

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function HomePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-gray-800">
      <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Hey, I'm James</h1>
      <p className="mb-8 text-xl leading-relaxed">
        I'm a Full-Stack Developer who builds clean, scalable web apps using
        React, TypeScript, Node.js, and cloud infrastructure. I'm driven by
        meaningful work, strong teams, and good design.
      </p>

      <div className="mb-12 flex gap-4">
        <Link
          to="/projects"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          View My Projects
        </Link>
        <Link
          to="/about"
          className="rounded-lg border border-gray-400 px-5 py-3 transition hover:bg-gray-100"
        >
          More About Me
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Stat label="Experience" value="5+ years full-stack dev" />
        <Stat label="Currently Building" value="Infra projects with AWS" />
        <Stat label="Next Step" value="Solutions Engineering or Platform" />
        <Stat label="Values" value="Scalable code, great UX, strong teams" />
      </div>

      {/* Projects Preview */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              tags={project.tags.slice(0, 4)} // limit to 4 tags for preview
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/projects"
            className="text-sm text-blue-600 underline hover:text-blue-700"
          >
            View All Projects →
          </Link>
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Want the full story?{" "}
        <Link to="/about" className="underline">
          Learn more about me
        </Link>
      </p>
    </section>
  );
}
