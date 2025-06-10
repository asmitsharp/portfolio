
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
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-16 text-center">
          Blog
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="border-b border-gray-800 pb-8 hover:border-gray-700 transition-colors duration-200 group cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {post.description}
              </p>
              
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
