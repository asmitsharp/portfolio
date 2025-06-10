
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import BlogManager from "@/components/BlogManager";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-jetbrains">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <BlogManager />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
