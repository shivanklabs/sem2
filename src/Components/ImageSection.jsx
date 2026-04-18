import heroImage from '../assets/hero.png'

function ImageSection() {
  return (
    <section className="image-section" aria-labelledby="image-section-title">
      <div className="image-copy">
        <span className="section-eyebrow">Personal Brand</span>
        <h2 id="image-section-title">A focused frontend developer building polished digital products.</h2>
        <p>
          I care about clean visual hierarchy, responsive details, and interfaces that feel reliable from the first click.
        </p>

        <div className="image-highlights">
          <span>React focused</span>
          <span>Premium UI</span>
          <span>Dashboard mindset</span>
        </div>
      </div>

      <div className="portrait-frame">
        <div className="portrait-card">
          <img src={heroImage} alt="Shiv portfolio visual" />
        </div>

        <div className="portrait-caption">
          <span>Currently sharpening</span>
          <strong>React, motion, and product UI</strong>
        </div>
      </div>
    </section>
  )
}

export default ImageSection
