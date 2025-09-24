import { Metadata } from "next"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { getProjectsData } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projects | Meet Shukla",
  description: "Showcase of my development projects including Gradbro, AI Assistant, and cloud systems.",
}

export default function ProjectsPage() {
  const projectsData = getProjectsData()

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">{projectsData.title}</h1>
        <p className="text-sm text-muted-foreground">
          Showcase of my development projects and work.
        </p>
      </div>

      {projectsData.projects.length === 0 ? (
        <div className="py-12">
          <p className="text-muted-foreground text-sm">No projects available yet.</p>
          <p className="text-xs text-muted-foreground mt-2">
            Add your projects to the <code>content/projects.md</code> file.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {projectsData.projects.map((project, index) => (
            <div key={index} className="pb-12 border-b border-muted last:border-b-0">
              {project.image && (
                <div className="mb-4 aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <h3 className="font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 text-sm">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-3 w-3" />
                    Code
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Live
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-muted">
        <p className="text-sm text-muted-foreground mb-4">
          Want to see more projects?
        </p>
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </div>
    </div>
  )
}
