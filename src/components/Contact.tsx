
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-8">
          Get In Touch
        </h2>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects. 
          Whether you have a question or just want to say hello, feel free to reach out.
        </p>
        
        <div className="flex justify-center mb-16">
          <a
            href="mailto:ashmitsingh068@gmail.com"
            className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-200 font-medium text-sm"
          >
            Say Hello
          </a>
        </div>
        
        <footer className="border-t border-gray-800 pt-12">
          <div className="flex justify-center space-x-8 mb-8">
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
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Asmit Singh. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
