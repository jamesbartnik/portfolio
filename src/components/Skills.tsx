import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMocha,
  SiWebpack,
  SiVite,
  SiEsbuild,
  SiEslint,
  SiPrettier,
  SiStoryblok,
  SiNx,
  SiElectron,
  SiGooglecloud,
  SiTerraform,
  SiCloudflare,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiNpm,
  SiPnpm,
  SiYarn,
  SiFigma,
  SiAdobexd,
  SiJira,
  SiShortcut,
  SiPivotaltracker,
} from "react-icons/si";

export function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiNextdotjs className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-black" /> },
    { name: "Mocha", icon: <SiMocha className="text-brown-500" /> },
    { name: "Webpack", icon: <SiWebpack className="text-blue-600" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "esbuild", icon: <SiEsbuild className="text-gray-500" /> },
    { name: "ESLint", icon: <SiEslint className="text-purple-500" /> },
    { name: "Prettier", icon: <SiPrettier className="text-pink-500" /> },
    { name: "Storyblok", icon: <SiStoryblok className="text-blue-500" /> },
    { name: "NX", icon: <SiNx className="text-green-500" /> },
    { name: "Electron", icon: <SiElectron className="text-blue-700" /> },
    { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
    { name: "Terraform", icon: <SiTerraform className="text-indigo-500" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "npm", icon: <SiNpm className="text-red-500" /> },
    { name: "pnpm", icon: <SiPnpm className="text-orange-500" /> },
    { name: "Yarn", icon: <SiYarn className="text-blue-500" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Jira", icon: <SiJira className="text-blue-500" /> },
    { name: "Shortcut", icon: <SiShortcut className="text-purple-500" /> },
    {
      name: "Pivotal Tracker",
      icon: <SiPivotaltracker className="text-green-500" />,
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-12 pt-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-8 text-4xl font-bold text-gray-800">
          Languages and Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex h-32 w-32 flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 shadow-md hover:shadow-lg"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="mt-2 text-lg font-medium text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
