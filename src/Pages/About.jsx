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
          <h2>Education</h2>
          <p>BCA First Year Student</p>
          <p>Focused on programming, web development and software concepts.</p>
        </div>

        <div className="about-card">
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
    </section>
  )
}

export default About