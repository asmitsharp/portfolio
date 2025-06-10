
import { useState } from 'react';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      title: "Go Memory Model Deep Dive",
      description: "The Go memory model defines when writes in one goroutine become visible to reads in another. It guarantees that data-race-free (DRF) programs behave sequentially consistently (SC), meaning they act as if goroutines run on a single processor.",
      date: "Dec 2024",
      readTime: "15 min read",
      content: `The Go memory model defines when writes in one goroutine become visible to reads in another. It guarantees that data-race-free (DRF) programs behave sequentially consistently (SC), meaning they act "as if" goroutines run on a single processor. Concurrency bugs arise when programmers ignore these rules. For example, in Go a data race occurs if one goroutine writes a variable at the same time another reads or writes it without synchronization.

## Happens-Before and Visibility

A core concept is happens-before: it is the transitive closure of program order (sequenced-before) and synchronization edges. In practice this means each goroutine's instructions happen in program order, and synchronization operations (like sending on a channel or unlocking a mutex) create ordering between goroutines.

\`\`\`go
var x int
c := make(chan struct{})
go func() {
    x = 42        // (1)
    close(c)      // (2) send on closed channel (unbuffered sync)
}()
<-c              // (3) receive from channel
fmt.Println(x)  // guaranteed to print 42
\`\`\`

## Synchronization Mechanisms

Go provides several synchronization primitives that establish happens-before edges:

### Channel Communication
Channels are the primary sync mechanism in Go. Each send on a channel is matched with a receive.

### Mutexes and Locks
Mutexes provide mutual exclusion and memory synchronization. The Go memory model ensures that an unlock happens-before any subsequent lock on the same mutex.

### Atomic Operations
The sync/atomic package provides lower-level atomic memory operations. Go's atomic operations are sequentially consistent by default.`
    },
    {
      title: "Understanding LSM-Trees",
      description: "Exploring the architecture behind modern NoSQL databases and how LSM-trees provide efficient write performance.",
      date: "Nov 2024",
      readTime: "12 min read",
      content: "LSM-trees (Log-Structured Merge Trees) are a data structure used in many modern NoSQL databases..."
    },
    {
      title: "Network Programming in Go",
      description: "Building high-performance network applications using Go's goroutines and channels for concurrent packet processing.",
      date: "Oct 2024",
      readTime: "10 min read",
      content: "Network programming in Go leverages goroutines for concurrent connections..."
    },
    {
      title: "Serverless Architecture with AWS Lambda",
      description: "Best practices for building scalable serverless applications and managing state in distributed systems.",
      date: "Sep 2024",
      readTime: "6 min read",
      content: "Serverless architecture has revolutionized how we build and deploy applications..."
    }
  ];

  const toggleReadMore = (index: number) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <section className="py-20 border-t border-gray-200">
      <h2 className="text-3xl sm:text-4xl font-jetbrains text-black mb-16">
        Blog
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors duration-200 group"
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
            
            {expandedPost === index && (
              <div className="mb-4 text-gray-700 leading-relaxed font-jetbrains whitespace-pre-line">
                {post.content}
              </div>
            )}
            
            <button
              onClick={() => toggleReadMore(index)}
              className="text-gray-600 hover:text-black text-sm font-jetbrains transition-colors duration-200"
            >
              {expandedPost === index ? 'Show less ↑' : 'Read more →'}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
