import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import Work from '../components/Work'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
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
