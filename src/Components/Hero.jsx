import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight, FaDownload } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          Frontend Developer • Trading Enthusiast
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Shiv
        </motion.h1>

        <TypeAnimation
          sequence={['React Developer',1500,'UI Designer',1500,'Trading Dashboard Builder',1500]}
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          I create modern React applications with smooth animations,
          premium UI design, and responsive layouts.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            View Projects <FaArrowRight />
          </Link>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume <FaDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero