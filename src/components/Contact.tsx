
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 border-t border-gray-200">
      <div className="text-left">
        <h2 className="text-3xl sm:text-4xl font-jetbrains text-black mb-8">
          Get In Touch
        </h2>
        
        <p className="text-lg text-gray-700 mb-12 max-w-2xl font-jetbrains">
          I'm always open to discussing new opportunities and interesting projects. 
          Whether you have a question or just want to say hello, feel free to reach out.
        </p>
        
        <div className="mb-16">
          <a
            href="mailto:ashmitsingh068@gmail.com"
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-jetbrains text-sm inline-block"
          >
            Say Hello
          </a>
        </div>
        
        <footer className="border-t border-gray-200 pt-12">
          <div className="flex space-x-8 mb-8">
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
          
          <div>
            <p className="text-gray-600 text-sm font-jetbrains">
              © 2024 Asmit Singh. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
