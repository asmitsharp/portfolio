import { useState } from "react"

const Blog = () => {
  const [showAllPosts, setShowAllPosts] = useState(false)

  const blogPosts = [
    {
      title: "Go Memory Model Deep Dive",
      description:
        "The Go memory model defines when writes in one goroutine become visible to reads in another. It guarantees that data-race-free (DRF) programs behave sequentially consistently (SC), meaning they act as if goroutines run on a single processor.",
      date: "June 2025",
      readTime: "15 min read",
      link: "https://coconut-swordtail-fc7.notion.site/Go-Memory-Model-Deep-Dive-20fd669fe203802db80fee435e4c0a15",
    },
    {
      title:
        "The Architecture of Resource Control: A Theoretical Deep Dive into Cgroups for Container Runtimes",
      description:
        "An exploration of cgroups and their role in container resource management.",
      date: "June 2025",
      readTime: "20 min read",
      link: "https://coconut-swordtail-fc7.notion.site/The-Architecture-of-Resource-Control-A-Theoretical-Deep-Dive-into-Cgroups-for-Container-Runtimes-in-219d669fe203802ea9a5c40fec4a5d39",
    },
  ]

  const displayedPosts = showAllPosts ? blogPosts : blogPosts.slice(0, 5)

  return (
    <section className="py-20 border-t border-gray-200">
      <h2 className="text-3xl sm:text-4xl font-jetbrains text-black mb-16">
        Blog
      </h2>

      <div className="space-y-8">
        {displayedPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors duration-200 group"
          >
            <article>
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

              <span className="text-gray-600 group-hover:text-black text-sm font-jetbrains transition-colors duration-200 inline-flex items-center">
                Read more →
              </span>
            </article>
          </a>
        ))}
      </div>

      {!showAllPosts && blogPosts.length > 5 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAllPosts(true)}
            className="text-gray-600 hover:text-black text-sm font-jetbrains transition-colors duration-200 flex items-center space-x-2"
          >
            <span>Show more</span>
            <span className="text-lg">↓</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default Blog
