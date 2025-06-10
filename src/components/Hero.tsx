
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="text-left">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-jetbrains text-black mb-6 leading-tight">
          Asmit Singh
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-jetbrains max-w-3xl">
          Computer Science graduate seeking an entry-level Software Engineer position to leverage strong skills in Go, Node.js, and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="/lovable-uploads/74135eba-0333-41f6-ae60-f6920ea49d7a.png"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-jetbrains text-sm inline-block w-fit"
          >
            View Resume
          </a>
          <a
            href="https://github.com/asmitsharp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-black text-black hover:bg-gray-50 transition-colors duration-200 font-jetbrains text-sm inline-block w-fit"
          >
            GitHub
          </a>
          <a
            href="mailto:ashmitsingh068@gmail.com"
            className="px-6 py-3 border border-black text-black hover:bg-gray-50 transition-colors duration-200 font-jetbrains text-sm inline-block w-fit"
          >
            Contact
          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/asmitsharp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/asmit-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ashmitsingh068@gmail.com"
            className="text-gray-600 hover:text-black transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
