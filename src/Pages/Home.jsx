import Hero from '../components/Hero'

function Home() {
  return (
    <>
      <Hero />

      <section className="stats-section">
        <div className="stat-box">
          <h2>15+</h2>
          <p>Projects Built</p>
        </div>

        <div className="stat-box">
          <h2>8+</h2>
          <p>Technologies Learned</p>
        </div>

        <div className="stat-box">
          <h2>1+</h2>
          <p>Years of Learning</p>
        </div>
      </section>
    </>
  )
}

export default Home