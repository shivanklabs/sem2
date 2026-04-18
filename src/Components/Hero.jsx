import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight, FaDownload } from 'react-icons/fa'

const MotionHeading = motion.h1

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          Frontend Developer | Trading Enthusiast
        </span>

        <MotionHeading
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Shiv
        </MotionHeading>

        <TypeAnimation
          sequence={['React Developer', 1500, 'UI Designer', 1500, 'Trading Dashboard Builder', 1500]}
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          I create modern React applications with smooth animations,
          premium UI design, and responsive layouts.
        </p>

        <div className="hero-proof">
          <span>Design-led React builds</span>
          <span>Responsive by default</span>
          <span>Market dashboard focus</span>
        </div>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            View Projects <FaArrowRight />
          </Link>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume <FaDownload />
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portfolio highlights">
        <div className="profile-card">
          <div className="profile-avatar" img src="/path/to/avatar.jpg" alt="Shiv" ></div>
          <div>
            <span>Available for select work</span>
            <strong>Frontend Portfolio</strong>
          </div>
        </div>

        <div className="terminal-panel">
          <div className="terminal-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="terminal-line">
            <span>role</span>
            <strong>React Developer</strong>
          </div>
          <div className="terminal-line">
            <span>focus</span>
            <strong>Premium UI Systems</strong>
          </div>
          <div className="terminal-line">
            <span>edge</span>
            <strong>Trading Dashboards</strong>
          </div>
        </div>

        <div className="market-widget">
          <p>Live Skill Index</p>
          <h2>92%</h2>
          <div className="sparkline">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="quality-row">
          <span>React</span>
          <span>Motion</span>
          <span>UI Polish</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
