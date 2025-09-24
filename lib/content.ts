import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface ProfileData {
  name: string
  title: string
  location: string
  bio: string
  email: string
  phone?: string
  github: string
  linkedin: string
  twitter: string
  photo?: string
  resume?: string
}

export interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string
  remote: boolean
}

export interface ExperienceData {
  title: string
  items: ExperienceItem[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface SkillsData {
  title: string
  categories: SkillCategory[]
}

export function getProfileData(): ProfileData {
  try {
    const fullPath = path.join(contentDirectory, 'profile.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return data as ProfileData
  } catch (error) {
    // Return default data if file doesn't exist
    return {
      name: "Your Name",
      title: "Your Title",
      location: "Your Location", 
      bio: "Brief description about yourself and what you do.",
      email: "your.email@example.com",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      photo: "/profile-photo.jpg"
    }
  }
}

export function getExperienceData(): ExperienceData {
  try {
    const fullPath = path.join(contentDirectory, 'experience.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return data as ExperienceData
  } catch (error) {
    return {
      title: "Experience",
      items: []
    }
  }
}

export interface ProjectItem {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  blogUrl?: string
  image?: string
}

export interface ProjectsData {
  title: string
  projects: ProjectItem[]
}

export function getSkillsData(): SkillsData {
  try {
    const fullPath = path.join(contentDirectory, 'skills.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return data as SkillsData
  } catch (error) {
    return {
      title: "Skills",
      categories: []
    }
  }
}

export function getProjectsData(): ProjectsData {
  try {
    const fullPath = path.join(contentDirectory, 'projects.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return data as ProjectsData
  } catch (error) {
    return {
      title: "Projects",
      projects: []
    }
  }
}
