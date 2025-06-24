import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/xai-games")({
  component: XaiGamesPage,
});

function XaiGamesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10">
      <header>
        <h1 className="mb-2 text-3xl font-bold">Xai Games Website</h1>
        <p className="text-gray-600">
          Launch site for an L3 gaming ecosystem on Arbitrum.
        </p>
      </header>

      <img
        src="/images/projects/xai-home.jpg"
        alt="Xai Games Homepage"
        className="rounded-lg shadow"
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">📘 Overview</h2>
        <p>
          I helped develop the Xai Games launch site from the ground up,
          collaborating with designers and stakeholders to introduce Xai’s L3
          gaming ecosystem to the public. My responsibilities spanned initial
          scaffolding, responsive UI development, and deployment setup.
        </p>
        <p>
          The site had a strong visual identity and needed to be performant,
          brand-aligned, and easy to maintain.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">🛠️ Stack & Infrastructure</h2>
        <ul className="list-inside list-disc text-sm text-gray-700">
          <li>
            <strong>Frontend:</strong> React, TypeScript, Vite, Tailwind CSS
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
          <li>Architected the frontend using Vite and TypeScript</li>
          <li>Implemented responsive layouts and reusable components</li>
          <li>Integrated pixel-accurate styles from Figma designs</li>
          <li>
            Provisioned and deployed infrastructure with Terraform and Docker
          </li>
        </ul>
      </section>

      <footer className="border-t border-gray-300 pt-6">
        <a
          href="https://xai.games"
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
