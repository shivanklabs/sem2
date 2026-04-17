import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Project'
import Contact from './Pages/Contact'
import './App.css' 

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme'
  }, [darkMode])

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App