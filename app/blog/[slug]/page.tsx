import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Portfolio`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            {post.description && (
              <p className="text-xl text-muted-foreground mb-4">{post.description}</p>
            )}
            <div className="flex items-center justify-between">
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  )
}
