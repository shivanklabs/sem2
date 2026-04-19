import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight, FaDownload, FaCode, FaLayerGroup, FaChartLine } from 'react-icons/fa'

const MotionHeading = motion.h1

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Frontend Developer | Trading UI Builder</span>

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
          I build crisp React interfaces with disciplined spacing, fast
          interactions, responsive layouts, and a premium black-and-white visual system.
        </p>

        <div className="hero-proof">
          <span>Interface systems</span>
          <span>Responsive polish</span>
          <span>Dashboard thinking</span>
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
          <div className="profile-avatar" aria-hidden="true">S</div>
          <div>
            <span>Available for select builds</span>
            <strong>Shiv Kumar</strong>
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

        <div className="quality-row">
          <span><FaCode /> React</span>
          <span><FaLayerGroup /> Systems</span>
          <span><FaChartLine /> Data UI</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
