import { useState, useMemo } from 'react'

const portfolioData = [
  // E-commerce
  { id: 1, title: 'Digital Bazaar', category: 'E-commerce', demo: '/portfolio-demos/digital-bazaar.html' },
  { id: 2, title: 'ShopHub Platform', category: 'E-commerce', demo: '/portfolio-demos/shophub-platform.html' },
  { id: 3, title: 'MaxRetail Store', category: 'E-commerce', demo: '/portfolio-demos/maxretail-store.html' },

  // Corporate
  { id: 4, title: 'Enterprise Solutions', category: 'Corporate', demo: '/portfolio-demos/enterprise-solutions.html' },
  { id: 5, title: 'Nexus Corp', category: 'Corporate', demo: '/portfolio-demos/nexus-corp.html' },
  { id: 6, title: 'InnovateLabs', category: 'Corporate', demo: '/portfolio-demos/innovatelabs.html' },

  // Healthcare
  { id: 7, title: 'MediCare Clinic', category: 'Healthcare', demo: '/portfolio-demos/medicare-clinic.html' },
  { id: 8, title: 'WellHealth Labs', category: 'Healthcare', demo: '/portfolio-demos/wellhealth-labs.html' },
  { id: 9, title: 'Wellness Portal', category: 'Healthcare', demo: '/portfolio-demos/wellness-portal.html' },

  // Hospitality
  { id: 10, title: 'Luxe Hotels', category: 'Hospitality', demo: '/portfolio-demos/luxe-hotels.html' },
  { id: 11, title: 'Culinary Hub', category: 'Hospitality', demo: '/portfolio-demos/culinary-hub.html' },
  { id: 12, title: 'Stay & Dine', category: 'Hospitality', demo: '/portfolio-demos/stay-and-dine.html' },

  // Real Estate
  { id: 13, title: 'Property Pro', category: 'Real Estate', demo: '/portfolio-demos/property-pro.html' },
  { id: 14, title: 'Dream Homes', category: 'Real Estate', demo: '/portfolio-demos/dream-homes.html' },
  { id: 15, title: 'Urban Spaces', category: 'Real Estate', demo: '/portfolio-demos/urban-spaces.html' },

  // Education
  { id: 16, title: 'TechAcademy', category: 'Education', demo: '/portfolio-demos/techacademy.html' },
  { id: 17, title: 'LearnHub', category: 'Education', demo: '/portfolio-demos/learnhub.html' },
  { id: 18, title: 'EduPath Platform', category: 'Education', demo: '/portfolio-demos/edupath-platform.html' },

  // Fashion
  { id: 19, title: 'Haute Couture', category: 'Fashion', demo: '/portfolio-demos/haute-couture.html' },
  { id: 20, title: 'StyleVibe', category: 'Fashion', demo: '/portfolio-demos/stylevibe.html' },
  { id: 21, title: 'Trendy Boutique', category: 'Fashion', demo: '/portfolio-demos/trendy-boutique.html' },

  // Creative
  { id: 22, title: 'Artistry Studio', category: 'Creative', demo: '/portfolio-demos/artistry-studio.html' },
  { id: 23, title: 'Design Canvas', category: 'Creative', demo: '/portfolio-demos/design-canvas.html' },
  { id: 24, title: 'Creative Forge', category: 'Creative', demo: '/portfolio-demos/creative-forge.html' }
]

const categories = ['All', 'E-commerce', 'Corporate', 'Healthcare', 'Hospitality', 'Real Estate', 'Education', 'Fashion', 'Creative']

// SVG color map for categories
const categoryColors = {
  'E-commerce': { bg: '#667eea', text: '#764ba2' },
  'Corporate': { bg: '#1e3c72', text: '#2a5298' },
  'Healthcare': { bg: '#00b4db', text: '#0083b0' },
  'Hospitality': { bg: '#c9a961', text: '#a67c3e' },
  'Real Estate': { bg: '#8b4513', text: '#d2b48c' },
  'Education': { bg: '#f59e0b', text: '#d97706' },
  'Fashion': { bg: '#ec4899', text: '#be185d' },
  'Creative': { bg: '#6366f1', text: '#4f46e5' }
}

function generateSVG(title, category) {
  const colors = categoryColors[category] || { bg: '#666', text: '#999' }
  return `data:image/svg+xml,%3Csvg width='600' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='${colors.bg}' width='600' height='450'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='${colors.text}' font-family='Raleway, Arial' font-size='24' font-weight='bold'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`
}

export default function ConceptualDesign() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioData
    return portfolioData.filter(item => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="conceptual-design">
      <div className="cd-hero">
        <h1 className="cd-hero-title">Find the Perfect <em>Development Structure</em> for Your Business</h1>
        <p className="cd-hero-subtitle">Explore our collection of thoughtfully crafted digital concepts across multiple industries designed to match your business needs.</p>
      </div>

      <div className="cd-filter-wrapper">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="cd-filter-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="cd-portfolio-grid">
        {filteredItems.map(item => (
          <a
            key={item.id}
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="cd-card reveal"
          >
            <div className="cd-card-img-wrapper">
              <img
                src={generateSVG(item.title, item.category)}
                alt={item.title}
                className="cd-card-img"
              />
              <div className="cd-card-overlay">
                <span className="cd-card-category">{item.category}</span>
              </div>
              <div className="cd-card-hover-name">{item.title}</div>
            </div>
            <div className="cd-card-info">
              <h3 className="cd-card-title">{item.title}</h3>
              <span className="cd-card-cta">View Demo →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
