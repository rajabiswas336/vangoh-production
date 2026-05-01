export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <img src="/hero-title.png" alt="Vangogh Productions" className="hero-title-img" />
        <div className="hero-badge"><span>Creative Agency</span></div>
        <p className="hero-sub">We sculpt extraordinary digital experiences — from the delicate stroke of a designer's hand to the sweeping grandeur of cinematic film.</p>
        <div className="hero-btns">
          <a href="#services" className="btn-gold">Explore Services</a>
          <a href="#work" className="btn-outline">View Portfolio <span className="arr">→</span></a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <div className="scroll-label">Descend</div>
      </div>
    </section>
  )
}
