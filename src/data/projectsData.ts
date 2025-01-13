export type Repository = {
  name: string;
  url: string;
};

export type Project = {
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

export const projectsData: Record<string, Project> = {
  "ex-populus": {
    title: "Ex Populus",
    overview:
      "Ex Populus is a blockchain gaming company focused on creating innovative player experiences. I contributed to building scalable web applications and backend systems.",
    goals: [
      "Develop scalable and secure web applications.",
      "Integrate blockchain functionality into games.",
      "Improve performance and scalability of APIs.",
    ],
    techStack: ["React", "Node.js", "Kubernetes", "Blockchain"],
    features: [
      "Responsive web applications.",
      "Secure blockchain integrations.",
      "Dynamic dashboards for player analytics.",
    ],
    challenges:
      "Integrating blockchain technology into gaming while ensuring performance and scalability was a challenge. I used caching strategies and optimized queries to handle the load.",
    demo: "https://expopulus.com",
    outro:
      "Ex Populus was a great opportunity to deepen my expertise in blockchain and scalable web apps.",
  },
  "final-form": {
    title: "Final Form",
    overview:
      "Final Form is a blockchain-based multiplayer card game. I was responsible for designing the front-end architecture and maintaining APIs for seamless gameplay.",
    goals: [
      "Create an engaging user interface.",
      "Ensure smooth gameplay with low latency.",
      "Design APIs for multiplayer interactions.",
    ],
    techStack: ["React", "Tailwind CSS", "Smart Contracts"],
    features: [
      "Real-time multiplayer gameplay.",
      "Intuitive card game UI.",
      "Blockchain-based ownership of cards.",
    ],
    challenges:
      "Maintaining low latency in real-time interactions while syncing with blockchain transactions was challenging. I optimized WebSocket handling and minimized blockchain calls.",
    demo: "https://finalform.com",
    outro:
      "Final Form showcased my ability to create seamless user experiences in blockchain applications.",
  },
  xai: {
    title: "Xai",
    overview:
      "Xai is a blockchain network. I developed smart contract interactions and ensured seamless integrations with applications.",
    goals: [
      "Develop efficient smart contracts.",
      "Provide seamless integration with DApps.",
      "Optimize API performance.",
    ],
    techStack: ["Solidity", "TypeScript", "Ethers.js", "React"],
    features: [
      "Robust smart contracts.",
      "DApp integrations.",
      "Optimized API layers for blockchain queries.",
    ],
    challenges:
      "Debugging complex smart contracts and handling integration issues required meticulous testing and version control strategies.",
    demo: "https://xai.games",
    outro:
      "Working on Xai expanded my knowledge of blockchain development and integration challenges.",
  },
};
