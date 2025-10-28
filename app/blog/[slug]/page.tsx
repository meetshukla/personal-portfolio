import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog"
import { useMDXComponents } from "../../../mdx-components"

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
    title: `${post.title} | Meet Shukla`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Meet Shukla"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  const components = useMDXComponents({})

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 -ml-4 px-4 py-2 rounded-md hover:bg-secondary/50"
            aria-label="Go back to blog list"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-secondary/50 hover:bg-secondary/80 transition-colors rounded-full text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <hr className="border-border" />
        </header>

        {/* Article Content - Server-rendered for SEO */}
        <article className="prose prose-gray dark:prose-invert max-w-none prose-base prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-primary prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary prose-a:text-primary">
          <MDXRemote source={post.content} components={components} />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 text-sm border border-border rounded-md hover:bg-secondary/80 transition-colors"
              aria-label="Return to blog list"
            >
              ← More Articles
            </Link>
          </div>
        </footer>

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                "@type": "Person",
                name: "Meet Shukla",
              },
              publisher: {
                "@type": "Person",
                name: "Meet Shukla",
              },
              keywords: post.tags?.join(", ") || "",
            }),
          }}
        />
      </div>
    </main>
  )
}
