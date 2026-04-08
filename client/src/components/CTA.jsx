import ContactForm from './ContactForm'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-orn">
        <div className="co-line"></div>
        <div className="co-dia"></div>
        <div className="co-line"></div>
      </div>
      <h2 className="cta-title reveal">Let's paint<br />something <em>unforgettable</em></h2>
      <p className="cta-sub reveal">Every masterpiece begins with a single conversation. Yours is waiting to be painted.</p>
      <ContactForm />
    </section>
  )
}
