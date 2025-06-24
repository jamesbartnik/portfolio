import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12">
      {/* Intro */}
      <section className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        <img
          src="/images/avatar.jpg"
          alt="James"
          className="h-64 w-64 rounded-full border border-gray-300 object-cover shadow-md"
        />
        <div>
          <h1 className="mb-2 text-4xl font-bold">About Me</h1>
          <p className="text-lg text-gray-700">
            I’m a Canadian full-stack developer who cares about people and
            product. I’ve built modern apps for 5+ years using tools like React,
            Node.js, and cloud platforms. I care about clean code, strong teams,
            and shipping things that matter.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Technical Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-sm text-gray-800 sm:grid-cols-3">
          <li>
            <strong>Languages:</strong> TypeScript, JavaScript, SQL
          </li>
          <li>
            <strong>Frontend:</strong> React, Tailwind CSS, Vite
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, PostgreSQL, MongoDB
          </li>
          <li>
            <strong>Infrastructure:</strong> AWS, GCP, Docker, Terraform
          </li>
          <li>
            <strong>Dev Tools:</strong> GitHub, Figma, Postman, CI/CD
          </li>
          <li>
            <strong>Other:</strong> GraphQL, Redis, Testing, Linting
          </li>
        </ul>
      </section>

      {/* Values */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Engineering Philosophy</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>
            Write maintainable, reliable code that scales with the product
          </li>
          <li>Balance speed and quality in a fast-moving environment</li>
          <li>Communicate clearly and collaborate across disciplines</li>
          <li>
            Design systems that prioritize user experience and performance
          </li>
          <li>
            Continuously learn and improve both technically and professionally
          </li>
        </ul>
      </section>

      {/* Current Focus */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Current Focus</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>Strengthening computer science fundamentals and system design</li>
          <li>Building infrastructure-focused portfolio projects with AWS</li>
          <li>
            Pursuing roles in solutions engineering or platform development
          </li>
          <li>
            Improving accessibility, performance, and observability in web apps
          </li>
        </ul>
      </section>
    </div>
  );
}
