import { useState, useMemo } from 'react'

const portfolioItems = [
  { id: 1, title: 'ShopHub E-store', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop' },
  { id: 2, title: 'MaxRetail Platform', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=400&fit=crop' },
  { id: 3, title: 'Digital Bazaar', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop' },

  { id: 4, title: 'Nexus Corp Website', category: 'Corporate', image: 'https://images.unsplash.com/photo-1460925895917-adf4e5a5c1d2?w=500&h=400&fit=crop' },
  { id: 5, title: 'Enterprise Solutions', category: 'Corporate', image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&h=400&fit=crop' },
  { id: 6, title: 'InnovateLabs', category: 'Corporate', image: 'https://images.unsplash.com/photo-1460925895917-adf4e5a5c1d2?w=500&h=400&fit=crop' },

  { id: 7, title: 'Artistry Studio', category: 'Creative', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop' },
  { id: 8, title: 'Design Canvas', category: 'Creative', image: 'https://images.unsplash.com/photo-1561691827-49adc1c3e3f9?w=500&h=400&fit=crop' },
  { id: 9, title: 'Creative Forge', category: 'Creative', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop' },

  { id: 10, title: 'TechStart MVP', category: 'Startup', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop' },
  { id: 11, title: 'Launch Pad', category: 'Startup', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop' },
  { id: 12, title: 'Growth Hacker', category: 'Startup', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop' },

  { id: 13, title: 'Digital Chronicles', category: 'Blog', image: 'https://images.unsplash.com/photo-1461749280684-ddefd3d57e11?w=500&h=400&fit=crop' },
  { id: 14, title: 'Story Hub', category: 'Blog', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop' },
  { id: 15, title: 'Content King', category: 'Blog', image: 'https://images.unsplash.com/photo-1461749280684-ddefd3d57e11?w=500&h=400&fit=crop' },
]

export default function Designs() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'E-commerce', 'Corporate', 'Creative', 'Startup', 'Blog']

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems
    return portfolioItems.filter(item => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="designs-page">
      <div className="designs-header">
        <div className="orn">
          <div className="orn-line"></div><div className="orn-dia"></div>
          <div className="orn-txt">Our Portfolio</div>
          <div className="orn-dia"></div><div className="orn-line"></div>
        </div>
        <h2 className="designs-title reveal">Exceptional Design <em>Concepts</em></h2>
        <p className="designs-desc reveal">Explore our collection of thoughtfully crafted digital experiences across multiple industries and design styles.</p>
      </div>

      <div className="designs-filter">
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-card reveal">
            <div className="portfolio-img-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-img"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg width="500" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23243A72" width="500" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23D4A843" font-family="Cinzel" font-size="18"%3EDesign Concept%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="portfolio-overlay">
                <p className="portfolio-category">{item.category}</p>
              </div>
            </div>
            <div className="portfolio-info">
              <h3 className="portfolio-title">{item.title}</h3>
              <a href="#contact" className="portfolio-link">View Project ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
