import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

// Define a type-safe structure for project data
type Repository = {
  name: string;
  url: string;
};

type Project = {
  title: string;
  overview: string;
  goals?: string[];
  techStack?: string[];
  features?: string[];
  challenges?: string;
  demo?: string;
  repositories?: Repository[];
  outro?: string;
};

type ProjectsData = Record<string, Project>;

export function ProjectDetails() {
  // Type-safe useParams
  const { id } = useParams<{ id: string }>();

  // Access project using the id
  const project = id ? (projectsData as ProjectsData)[id] : undefined;

  // Render "Project Not Found" if the project doesn't exist
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500">
        <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
      </div>
    );
  }

  // Render the project details
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-12">
      <div className="container mx-auto max-w-5xl space-y-8 rounded-lg bg-white p-8 shadow-lg">
        {/* Back to Home Button */}
        <div className="flex justify-start">
          <Link
            to="/#projects"
            className="inline-block rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-300"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Title and Overview */}
        <section className="mb-12">
          <h1 className="mb-4 text-5xl font-bold text-indigo-800">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            {project.overview}
          </p>
        </section>

        {/* Goals */}
        {project.goals && (
          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-indigo-700">
              Goals
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
              {project.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-indigo-700">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {project.features && (
          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-indigo-700">
              Features
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && (
          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-indigo-700">
              Challenges
            </h2>
            <p className="leading-relaxed text-gray-700">
              {project.challenges}
            </p>
          </section>
        )}

        {/* Demo */}
        {project.demo && (
          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-indigo-700">
              Demo
            </h2>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-600"
            >
              View Demo
            </a>
          </section>
        )}

        {/* Repositories */}
        {project.repositories && (
          <section className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-indigo-700">
              Repositories
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-gray-700">
              {project.repositories.map((repo) => (
                <li key={repo.url}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Outro */}
        {project.outro && (
          <section>
            <h2 className="mb-4 text-3xl font-semibold text-indigo-700">
              Outro
            </h2>
            <p className="leading-relaxed text-gray-700">{project.outro}</p>
          </section>
        )}
      </div>
    </div>
  );
}
