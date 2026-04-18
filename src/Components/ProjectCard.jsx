import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectCard({ title, description, tech, image, category, impact }) {
  return (
    <div className="project-card">
      <div className="project-media">
        <img src={image} alt={title} className="project-image" />
        {category && <span className="project-category">{category}</span>}
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {impact && <p className="project-impact">{impact}</p>}

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
