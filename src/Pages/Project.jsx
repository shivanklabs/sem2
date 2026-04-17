import { useState, useEffect } from 'react'
import ProjectCard from '../Components/ProjectCard'
import projectsData from '../Data/ProjectsData'

function Projects() {
  const [projects, setProjects] = useState(projectsData)
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.title = 'Projects | Shiv Portfolio'
  }, [])

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="projects-page">
      <h1>Featured Projects</h1>

      <input
        type="text"
        placeholder="Search projects..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects