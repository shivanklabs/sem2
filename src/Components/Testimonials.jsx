const notes = [
  'Clean component thinking with attention to visual polish.',
  'Strong direction for dashboard-style interfaces and responsive details.',
  'A portfolio that now feels focused, sharp, and presentation-ready.'
]

function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-header">
        <span className="section-eyebrow">Signals</span>
        <h2 id="testimonials-title">What the portfolio communicates now.</h2>
      </div>

      <div className="testimonials-grid">
        {notes.map((note, index) => (
          <article className="testimonial-card" key={note}>
            <span>0{index + 1}</span>
            <p>{note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
