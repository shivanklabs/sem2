const timeline = [
  {
    year: '2026',
    title: 'React Portfolio System',
    text: 'Built a premium monochrome portfolio with project cards, contact flow, motion, and reusable sections.'
  },
  {
    year: '2025',
    title: 'Frontend Foundation',
    text: 'Practiced JavaScript, React components, routing, forms, responsive CSS, and clean UI patterns.'
  },
  {
    year: 'Now',
    title: 'Dashboard Direction',
    text: 'Sharpening trading dashboard layouts, data views, chart presentation, and product-minded UI decisions.'
  }
]

function Experience() {
  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <div className="section-header">
        <span className="section-eyebrow">Progress</span>
        <h2 id="experience-title">A clear path from fundamentals to polished product UI.</h2>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={`${item.year}-${item.title}`}>
            <span>{item.year}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
