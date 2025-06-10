
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
          Asmit Singh
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8 font-light max-w-2xl mx-auto">
          Computer Science graduate seeking an entry-level Software Engineer position to leverage strong skills in Go, Node.js, and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/lovable-uploads/74135eba-0333-41f6-ae60-f6920ea49d7a.png"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-200 font-medium text-sm border border-transparent hover:border-gray-300"
          >
            View Resume
          </a>
          <a
            href="https://github.com/asmitsharp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 text-white hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:ashmitsingh068@gmail.com"
            className="px-8 py-3 border border-gray-600 text-white hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/asmitsharp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/asmit-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ashmitsingh068@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
