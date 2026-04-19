import { FaDesktop, FaMobileAlt, FaChartLine, FaBolt } from 'react-icons/fa'

const services = [
  {
    icon: <FaDesktop />,
    title: 'Premium Web Interfaces',
    description: 'Landing pages and portfolio sections with strong hierarchy, refined spacing, and clean component structure.'
  },
  {
    icon: <FaChartLine />,
    title: 'Dashboard UI',
    description: 'Trading and analytics layouts built for scanning, comparison, tables, cards, and chart-ready surfaces.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Polish',
    description: 'Mobile-first adjustments, stable grids, readable typography, and touch-friendly controls.'
  },
  {
    icon: <FaBolt />,
    title: 'Interaction Details',
    description: 'Focused motion, hover states, form feedback, and micro-interactions that make the site feel complete.'
  }
]

function Services() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="section-header">
        <span className="section-eyebrow">Capabilities</span>
        <h2 id="services-title">Portfolio-grade components for serious frontend work.</h2>
        <p>
          The site now presents a more complete service story: design quality,
          React implementation, responsive execution, and data-product thinking.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
