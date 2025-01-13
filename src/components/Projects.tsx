import { projectsData } from "../data/projectsData";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-12 pt-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(projectsData).map(([id, project]) => (
            <div
              key={id}
              className="rounded-lg bg-gray-100 p-6 shadow-md transition hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{project.overview}</p>
              <a
                href={`/projects/${id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
