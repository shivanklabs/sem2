import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ title, description, tech, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tech-stack">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="project-buttons">
          <button>
            <FaGithub /> GitHub
          </button>

          <button>
            <FaExternalLinkAlt /> Live Demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
