const services = [
  {
    num: '01', name: 'Website Building',
    desc: 'Bespoke digital architectures crafted with precision — blazingly fast, visually stunning, and engineered to transform visitors into devoted believers.',
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1.5"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
  },
  {
    num: '02', name: 'Poster Design',
    desc: 'Visual narratives that arrest the eye and hold the imagination. Every composition tells a story — a single glance is all it takes.',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="1.5"/><circle cx="12" cy="18" r="1.5"/><line x1="8" y1="21" x2="16" y2="21"/></svg>
  },
  {
    num: '03', name: 'Digital Marketing',
    desc: 'Data-driven campaigns fused with creative intuition — reaching the right people at precisely the right moment with the right message.',
    icon: <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  },
  {
    num: '04', name: 'AI Generated Videography',
    desc: 'The breathtaking frontier of visual storytelling. We harness the power of AI to conjure imagery that was once the realm of pure imagination.',
    icon: <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
  },
  {
    num: '05', name: 'Cinematic Videography',
    desc: 'Breathtaking motion pictures that elevate your brand beyond the ordinary. Every frame composed with the discerning eye of a seasoned director.',
    icon: <svg viewBox="0 0 24 24"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14"/><rect x="2" y="6" width="13" height="12" rx="2"/></svg>
  },
  {
    num: '06', name: 'Photography',
    desc: 'Light, shadow, and soul distilled into a single frame. Our photographers capture the ineffable essence of your brand in every considered shot.',
    icon: <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
  }
]

export default function Services() {
  return (
    <section id="services">
      <div className="svc-top">
        <div>
          <div className="orn">
            <div className="orn-line"></div><div className="orn-dia"></div>
            <div className="orn-txt">What We Do</div>
            <div className="orn-dia"></div><div className="orn-line"></div>
          </div>
          <h2 className="s-title reveal">Six ways we'll<br />transform your <em>brand</em></h2>
        </div>
        <p className="reveal">Every service is an art form refined over years. We don't merely deliver deliverables — we create experiences that linger long after the screen fades to dark.</p>
      </div>
      <div className="svc-grid">
        {services.map(s => (
          <div className="svc reveal" key={s.num}>
            <div className="svc-num">{s.num}</div>
            <div className="svc-icon">{s.icon}</div>
            <div className="svc-name">{s.name}</div>
            <div className="svc-desc">{s.desc}</div>
            <a href="#contact" className="svc-link">Commission ↗</a>
          </div>
        ))}
      </div>
    </section>
  )
}
