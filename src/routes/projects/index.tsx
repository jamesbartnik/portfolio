import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          subtitle={project.subtitle}
          image={project.image}
          tags={project.tags}
          href={`/projects/${project.slug}`}
        />
      ))}
    </div>
  );
}
