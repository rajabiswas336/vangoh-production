import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e, id) => {
    const element = document.getElementById(id)
    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="logo-img">
      <img src="/nav-logo.png" alt="Vangoh Productions" />
        {/* <div className="hero-badge">
          <span>Creative Agency</span>
        </div> */}
      </Link>
      <ul>
        <li><a href="#about" onClick={(e) => handleAnchorClick(e, 'about')}>About</a></li>
        <li><a href="#services" onClick={(e) => handleAnchorClick(e, 'services')}>Services</a></li>
        <li><a href="#process" onClick={(e) => handleAnchorClick(e, 'process')}>Process</a></li>
        <li><a href="#work" onClick={(e) => handleAnchorClick(e, 'work')}>Work</a></li>
        <li><Link to="/designs">Web Design</Link></li>
        <li><a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  )
}