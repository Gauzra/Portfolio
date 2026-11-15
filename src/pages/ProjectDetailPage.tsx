import { useParams } from "react-router-dom"

import NotFoundPage from "./NotFoundPage"

import ProjectDetail from "../components/projects/ProjectDetail"

import { projects } from "../data/projects"

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const publishedProjects = projects.filter((item) => item.published)
  const currentIndex = publishedProjects.findIndex((item) => item.slug === slug)

  if (currentIndex === -1) {
    return <NotFoundPage />
  }

  const project = publishedProjects[currentIndex]
  const nextProject =
    publishedProjects.length > 1
      ? publishedProjects[(currentIndex + 1) % publishedProjects.length]
      : null

  return <ProjectDetail project={project} nextProject={nextProject} />
}
