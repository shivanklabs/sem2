import Skills from '../Components/Skills'

function About() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Responsive Design',
    'Framer Motion',
    'Git',
    'C++',
    'Python'
  ]

  return (
    <section className="about-page">
      <div className="section-header">
        <h1>About Me</h1>
        <p>
          I am a BCA student with strong interest in frontend development,
          React JS, clean UI design, responsive websites, and polished dashboard interfaces.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <span className="card-kicker">Foundation</span>
          <h2>Education</h2>
          <p>BCA First Year Student</p>
          <p>Focused on programming, web development, software concepts, and product-ready frontend execution.</p>
        </div>

        <div className="about-card">
          <span className="card-kicker">Direction</span>
          <h2>Goals</h2>
          <p>
            My goal is to become a skilled frontend developer and create
            modern web applications using React with a premium, reliable user experience.
          </p>
        </div>
      </div>

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <Skills key={index} title={skill} />
        ))}
      </div>

      <div className="process-panel">
        <div>
          <span className="section-eyebrow">Working Style</span>
          <h2>Clean interfaces with product thinking.</h2>
        </div>

        <div className="process-steps">
          <article>
            <span>01</span>
            <h3>Structure</h3>
            <p>Plan clear sections, responsive grids, and reusable component patterns.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Polish</h3>
            <p>Refine spacing, contrast, motion, and interaction states until the UI feels finished.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Verify</h3>
            <p>Check builds and behavior so the final portfolio is presentable and stable.</p>
          </article>
        </div>
      </div>

      <div className="toolkit-panel">
        <div>
          <span className="section-eyebrow">Toolkit</span>
          <h2>Built around practical frontend habits.</h2>
        </div>

        <ul>
          <li>Reusable React components with clear props and focused responsibilities.</li>
          <li>Responsive CSS grids, stable spacing, and readable text on small screens.</li>
          <li>Interaction states for buttons, forms, cards, navigation, and project filters.</li>
          <li>Portfolio storytelling that connects skills, services, projects, and contact intent.</li>
        </ul>
      </div>
    </section>
  )
}

export default About
