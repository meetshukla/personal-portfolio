import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  published: boolean
  keywords?: string[]
  content: string
}

export function getAllPosts(): BlogPost[] {
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

        return {
          slug,
          ...data,
          content,
        } as BlogPost
      })
      .filter((post) => post.published !== false)
      .sort((a, b) => (new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1))

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      ...data,
      content,
    } as BlogPost
  } catch (error) {
    return null
  }
}
