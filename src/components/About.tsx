
const About = () => {
  const skills = [
    { category: "Languages & Frameworks", items: ["Go", "TypeScript", "Node.js", "React", "SQL"] },
    { category: "Databases & Messaging", items: ["PostgreSQL", "MongoDB", "Redis", "NATS"] },
    { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "Jenkins", "Git", "AWS"] },
    { category: "Concepts", items: ["DBMS", "Computer Networks", "Data Structures & Algorithms", "OS"] }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-16 text-center">
          About
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a Computer Science graduate with a passion for backend development and system design. 
              Currently working as a Software Engineer Intern at Raftlabs, where I collaborate on AI-powered 
              content creation platforms and build scalable serverless infrastructure.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My experience spans from developing Redis-compatible databases to creating sophisticated 
              web crawlers and implementing GraphQL APIs. I enjoy tackling complex problems and building 
              efficient, maintainable solutions.
            </p>
          </div>
          
          <div className="space-y-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-white font-medium mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
