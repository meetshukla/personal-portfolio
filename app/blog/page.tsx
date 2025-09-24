import { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Meet Shukla",
  description: "Articles and insights about software development, AI, and technology by Meet Shukla.",
}

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Blog</h1>
        <p className="text-sm text-muted-foreground">
          Articles and insights about web development and technology.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-12">
          <p className="text-muted-foreground text-sm">No blog posts available yet.</p>
          <p className="text-xs text-muted-foreground mt-2">
            Add your first post to the <code>content/blog/</code> directory.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="font-medium mb-1 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-sm text-muted-foreground mb-2">{post.description}</p>
                )}
                <time className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
