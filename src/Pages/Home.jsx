import Hero from '../Components/Hero'
import ImageSection from '../Components/ImageSection'
import Services from '../Components/Services'
import Experience from '../Components/Experience'
import Testimonials from '../Components/Testimonials'

function Home() {
  return (
    <>
      <Hero />
      <ImageSection />
      <Services />

      <section className="stats-section">
        <div className="stat-box">
          <span className="stat-label">Delivered</span>
          <h2>15+</h2>
          <p>Projects Built</p>
        </div>

        <div className="stat-box">
          <span className="stat-label">Stack</span>
          <h2>8+</h2>
          <p>Technologies Learned</p>
        </div>

        <div className="stat-box">
          <span className="stat-label">Momentum</span>
          <h2>1+</h2>
          <p>Years of Learning</p>
        </div>
      </section>

      <Experience />
      <Testimonials />
    </>
  )
}

export default Home
