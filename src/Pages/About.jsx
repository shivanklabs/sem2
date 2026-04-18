import Skills from '../Components/Skills'

function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'C++', 'Python']

  return (
    <section className="about-page">
      <div className="section-header">
        <h1>About Me</h1>
        <p>
          I am a BCA student with strong interest in frontend development,
          React JS, clean UI design and responsive websites.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <span className="card-kicker">Foundation</span>
          <h2>Education</h2>
          <p>BCA First Year Student</p>
          <p>Focused on programming, web development and software concepts.</p>
        </div>

        <div className="about-card">
          <span className="card-kicker">Direction</span>
          <h2>Goals</h2>
          <p>
            My goal is to become a skilled frontend developer and create
            modern web applications using React.
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
    </section>
  )
}

export default About
