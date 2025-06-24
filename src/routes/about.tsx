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
            I'm a Canadian full-stack developer with 5+ years of experience
            building web applications across startups and product teams. I
            specialize in modern JavaScript/TypeScript tooling—React, Node.js,
            and cloud-native architecture—focused on delivering scalable,
            maintainable software. I bring a user-first mindset, a strong grasp
            of cross-functional collaboration, and a sharp eye for performance
            and accessibility.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Engineering Philosophy */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Engineering Philosophy</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>
            Prioritize clean, testable code that aligns with product goals
          </li>
          <li>Design solutions that are scalable, accessible, and resilient</li>
          <li>Balance pragmatism and quality in fast-paced environments</li>
          <li>Work transparently and communicate clearly with stakeholders</li>
          <li>Embrace feedback and continuous learning across disciplines</li>
        </ul>
      </section>

      {/* Current Focus */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Current Focus</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>Strengthening computer science fundamentals and system design</li>
          <li>
            Building infrastructure-centric projects using AWS and Terraform
          </li>
          <li>
            Preparing for roles in solutions engineering and platform teams
          </li>
          <li>
            Improving accessibility, performance, and observability in
            full-stack applications
          </li>
        </ul>
      </section>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="rounded-lg py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold">Skills</h2>
        <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 md:grid-cols-2">
          {/* Languages & Tools */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Languages & Tools</h3>
            <ul className="space-y-1">
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Bash</li>
              <li>Git</li>
              <li>Postman</li>
              <li>Docker</li>
              <li>Terraform</li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Frameworks & Libraries
            </h3>
            <ul className="space-y-1">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
              <li>Radix UI</li>
              <li>GSAP</li>
              <li>Jotai</li>
              <li>GraphQL</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
