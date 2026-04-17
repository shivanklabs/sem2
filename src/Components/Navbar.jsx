import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun, FaBars } from 'react-icons/fa'
import { useState } from 'react'

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <h2 className="logo">Shiv.dev</h2>

      <div className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar