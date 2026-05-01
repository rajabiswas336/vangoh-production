import { useState, useEffect } from 'react'

const tiers = [
  {
    id: 1,
    name: 'Basic',
    subtitle: 'Simple Brochure',
    desc: 'Perfect for startups and small businesses. A clean, professional online presence.',
    features: [
      '1 Domain with Free Hosting',
      'Up to 5 Pages',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Social Media Links Integration',
      'Contact / Enquiry Form',
      'Google Map Integration',
      '1 Business Email ID',
      '1 Year Support'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-adf4e5a5c1d2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1545696915-766d48a3a694?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 2,
    name: 'Standard',
    subtitle: 'E-commerce Platform',
    desc: 'Full online store with advanced features. Perfect for growing businesses.',
    features: [
      '1 Domain with Free Hosting',
      'Up to 10 Pages',
      'Modern, Custom Mobile Responsive Design',
      'SEO-Friendly Structure',
      'Social Media Links Integration',
      'WhatsApp Chat Integration',
      'Enquiry / Lead Capture Forms',
      'Basic Speed Optimization',
      'Contact / Enquiry Form',
      'Google Map Integration',
      '1 Business Email ID',
      '1 Year Support'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1522869635100-85f2e9642b05?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1523821741446-edb429f67505?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-adf4e5a5c1d2?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 3,
    name: 'Premium',
    subtitle: 'Full Custom Application',
    desc: 'Enterprise-level solution with advanced features and full control.',
    features: [
      '1 Domain with Hosting',
      '15–20 Pages or Dynamic Layout',
      'Fully Responsive (All Devices)',
      'Admin Panel (Manage content yourself)',
      'Blog or News Section',
      'Advanced Contact & Lead Forms',
      'WhatsApp + Social Media Integration',
      'On-Page SEO Optimization',
      'Speed & Performance Optimization',
      'Google Map Integration',
      '1 Business Email IDs',
      '1 Year Support'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
    ]
  }
]

function Carousel({ screenshots }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [screenshots.length])

  return (
    <div className="carousel">
      <div className="carousel-track">
        {screenshots.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Screenshot ${idx + 1}`}
            className={`carousel-img ${idx === current ? 'active' : ''}`}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg width="600" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23243A72" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23D4A843" font-family="Cinzel" font-size="20"%3EWebsite Preview%3C/text%3E%3C/svg%3E'
            }}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function WebDevelopment() {
  return (
    <div className="web-dev-section" id="web-development">
      <div className="wd-header">
        <div className="orn">
          <div className="orn-line"></div>
          <div className="orn-dia"></div>
          <div className="orn-txt">Web Development</div>
          <div className="orn-dia"></div>
          <div className="orn-line"></div>
        </div>
        <h3 className="wd-title reveal">Websites that <em>convert</em></h3>
        <p className="wd-desc reveal">Choose the perfect plan for your digital journey. Each tier is crafted to scale with your ambitions.</p>
      </div>

      <div className="tiers-grid">
        {tiers.map((tier) => (
          <div key={tier.id} className="tier-card reveal">
            <div className="tier-header">
              <h4 className="tier-name">{tier.name}</h4>
              <p className="tier-subtitle">{tier.subtitle}</p>
              <p className="tier-desc">{tier.desc}</p>
            </div>

            <Carousel screenshots={tier.screenshots} />

            <div className="tier-features">
              <ul>
                {tier.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" className="tier-cta">Book Now ↗</a>
          </div>
        ))}
      </div>
    </div>
  )
}
