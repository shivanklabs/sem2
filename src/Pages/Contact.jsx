import ContactForm from '../Components/ContactForm'
function Contact() {
  return (
    <section className="contact-page">
      <div className="section-header">
        <span className="section-eyebrow">Let's Build</span>
        <h1>Contact Me</h1>
        <p>
          Send a project idea, collaboration request, or frontend challenge.
        </p>
      </div>

      <div className="contact-layout">
        <aside className="contact-card">
          <span className="card-kicker">Response Window</span>
          <h2>Ready for portfolio-grade frontend work.</h2>
          <p>
            Best fit: React pages, dashboards, responsive UI polish, and clean component builds.
          </p>

          <div className="contact-points">
            <span>React UI</span>
            <span>Dashboard polish</span>
            <span>Responsive fixes</span>
          </div>
        </aside>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
