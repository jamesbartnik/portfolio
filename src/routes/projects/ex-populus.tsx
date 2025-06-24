import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/ex-populus")({
  component: ExPopulusPage,
});

function ExPopulusPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10">
      <header>
        <h1 className="mb-2 text-3xl font-bold">Ex Populus Website</h1>
        <p className="text-gray-600">
          Marketing site for a Web3 game publishing studio.
        </p>
      </header>

      <img
        src="/images/projects/xp-home.jpg"
        alt="Ex Populus Homepage"
        className="rounded-lg shadow"
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">📘 Overview</h2>
        <p>
          I built the Ex Populus marketing site from scratch in collaboration
          with design, marketing, and engineering teams. The goal was to create
          a modern, visually rich site to showcase the studio’s brand and
          projects.
        </p>
        <p>
          My work included migrating styles from SCSS to Tailwind CSS,
          optimizing component structure, and helping deploy to production with
          scalable infrastructure.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">🛠️ Stack & Infrastructure</h2>
        <ul className="list-inside list-disc text-sm text-gray-700">
          <li>
            <strong>Frontend:</strong> React, TypeScript, Vite, Tailwind CSS
            (migrated from SCSS)
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express
          </li>
          <li>
            <strong>Infrastructure:</strong> Docker, Terraform, Cloudflare, GCP
          </li>
          <li>
            <strong>Tooling:</strong> GitHub, Figma
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">🔧 Key Contributions</h2>
        <ul className="list-inside list-disc text-sm text-gray-700">
          <li>Migrated legacy styles from SCSS to Tailwind CSS</li>
          <li>
            Built responsive, accessible components from high-fidelity designs
          </li>
          <li>
            Improved layout structure, performance, and cross-browser polish
          </li>
          <li>
            Provisioned and deployed the site with Docker and Terraform on GCP
          </li>
        </ul>
      </section>

      <footer className="border-t border-gray-300 pt-6">
        <a
          href="https://expopulus.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          Visit Live Site ↗
        </a>
      </footer>
    </div>
  );
}
