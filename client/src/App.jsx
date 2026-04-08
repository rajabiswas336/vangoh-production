import { useEffect } from 'react'
import BgCanvas from './components/BgCanvas'
import DustCanvas from './components/DustCanvas'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <BgCanvas />
      <DustCanvas />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Work />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  )
}
