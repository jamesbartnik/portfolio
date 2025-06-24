import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { SkillsCarousel } from "../components/SkillsCarousel.tsx";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-gray-800">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold sm:text-5xl">Hey, I'm James</h1>
        <p className="text-xl leading-relaxed">
          Full Stack Developer | React & TypeScript Specialist | Building
          Scalable Web Apps
        </p>

        {/* CTAs */}
        <div className="my-6 flex gap-4">
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
      </div>

      {/* Skills Carousel */}
      <SkillsCarousel />

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
              tags={project.tags.slice(0, 4)}
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
