export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">
  <img src="/logo.png" alt="Vangoh Productions" style={{height:'64px', objectFit:'contain'}} />
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-socials">
          <a href="#" className="social-icon">✦</a>
          <a href="#" className="social-icon">in</a>
          <a href="#" className="social-icon">Be</a>
          <a href="#" className="social-icon">Dr</a>
        </div>
      </div>
      <div className="footer-div"></div>
      <div className="footer-bot">
        <div className="footer-copy">© 2026 Vangoh Production. All rights reserved.</div>
        <div className="footer-tag">Crafted with the soul of an artist.</div>
        <div className="footer-copy">Privacy &nbsp;·&nbsp; Terms</div>
      </div>
    </footer>
  )
}
