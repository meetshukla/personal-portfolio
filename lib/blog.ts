import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { cache } from 'react'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  published?: boolean
  keywords?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  published: boolean
  keywords?: string[]
  content: string
  readingTime: string
}

export interface BlogPostMeta {
  frontmatter: PostFrontmatter
  readingTime: string
}

export const getAllPosts = cache((): BlogPost[] => {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        const readingTimeResult = readingTime(content)

        return {
          slug,
          ...data,
          content,
          readingTime: readingTimeResult.text,
        } as BlogPost
      })
      .filter((post) => post.published !== false)
      .sort((a, b) => (new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1))

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
})

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readingTimeResult = readingTime(content)

    return {
      slug,
      ...data,
      content,
      readingTime: readingTimeResult.text,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
})

export const getPostSlugs = cache((): string[] => {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''))
})

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
