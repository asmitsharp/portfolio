
const Blog = () => {
  const blogPosts = [
    {
      title: "Building a Redis Clone in Go",
      description: "Deep dive into implementing the RESP protocol and handling concurrent connections in Go for building a Redis-compatible database.",
      date: "Dec 2024",
      readTime: "8 min read"
    },
    {
      title: "Understanding LSM-Trees",
      description: "Exploring the architecture behind modern NoSQL databases and how LSM-trees provide efficient write performance.",
      date: "Nov 2024",
      readTime: "12 min read"
    },
    {
      title: "Network Programming in Go",
      description: "Building high-performance network applications using Go's goroutines and channels for concurrent packet processing.",
      date: "Oct 2024",
      readTime: "10 min read"
    },
    {
      title: "Serverless Architecture with AWS Lambda",
      description: "Best practices for building scalable serverless applications and managing state in distributed systems.",
      date: "Sep 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 border-t border-gray-200">
      <h2 className="text-3xl sm:text-4xl font-jetbrains text-black mb-16">
        Blog
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors duration-200 group cursor-pointer"
          >
            <div className="mb-4">
              <h3 className="text-xl font-jetbrains text-black mb-2 group-hover:text-gray-700 transition-colors duration-200">
                {post.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3 font-jetbrains">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4 font-jetbrains">
              {post.description}
            </p>
            
            <a
              href="#"
              className="text-gray-600 hover:text-black text-sm font-jetbrains transition-colors duration-200"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
