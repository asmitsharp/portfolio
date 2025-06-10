
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GoRedis",
      description: "Redis-compatible key-value database server and client in Go. Implemented RESP protocol for command parsing and communication, utilizing goroutines for concurrent request handling.",
      tech: ["Go", "Redis Protocol", "Networking", "Concurrency"],
      github: "https://github.com/asmitsharp/goredis"
    },
    {
      title: "Network Packet Analyzer",
      description: "CLI-based network analysis tool for real-time network packet analysis. Integrated Berkeley Packet Filter (BPF) for customizable packet filtering with time-series data visualization.",
      tech: ["Go", "CLI", "BPF", "Network Analysis"],
      github: "https://github.com/asmitsharp/network-analyzer"
    },
    {
      title: "LSM-Tree Based Key-Value Store",
      description: "Implemented core LSM-tree components including in-memory balanced tree (AVL), memtable, SSTables, and compaction. Designed Write-Ahead Log (WAL) for crash recovery and data durability.",
      tech: ["Go", "LSM-Tree", "Data Structures", "Storage"],
      github: "https://github.com/asmitsharp/lsm-tree"
    },
    {
      title: "Multiplayer Pong Game",
      description: "Real-time multiplayer web game with WebSockets for real-time communication between players. Utilized HTML5 Canvas for smooth game rendering.",
      tech: ["JavaScript", "WebSockets", "HTML5 Canvas", "Real-time"],
      github: "https://github.com/asmitsharp/multiplayer-pong"
    },
    {
      title: "Video Editor",
      description: "Server-side video processing application with Node.js child processes and cluster module for efficient task management. Created custom database using server disk storage for file management.",
      tech: ["JavaScript", "Node.js", "Video Processing", "Job Queue"],
      github: "https://github.com/asmitsharp/video-editor"
    },
    {
      title: "Draftly",
      description: "AI-powered content creation platform focused on LinkedIn post generation. Built serverless infrastructure using AWS Lambda functions for scalable processing with GraphQL API endpoints.",
      tech: ["Node.js", "AWS Lambda", "GraphQL", "Hasura", "PostgreSQL"],
      github: "#"
    }
  ];

  return (
    <section className="py-20 border-t border-gray-200">
      <h2 className="text-3xl sm:text-4xl font-jetbrains text-black mb-16">
        Projects
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 hover:border-gray-400 transition-all duration-200 hover:bg-gray-50 group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-jetbrains text-black group-hover:text-gray-700 transition-colors duration-200">
                {project.title}
              </h3>
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-4 font-jetbrains">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-200 text-gray-800 text-xs border border-gray-300 font-jetbrains"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
