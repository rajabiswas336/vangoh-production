import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name:'', email:'', service:'', message:'' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Your Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Alexandra Mercer" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@yourbrand.com" required />
        </div>
      </div>
      <div className="form-group">
        <label>Service of Interest</label>
        <select name="service" value={form.service} onChange={handleChange} required style={{background:'var(--glass)',border:'1px solid var(--glass-b)',color:'var(--white)',fontFamily:"'Cormorant Garamond',serif",fontSize:'1rem',padding:'.9rem 1.2rem',outline:'none',width:'100%'}}>
          <option value="" disabled>Select a service...</option>
          <option value="Website Building">Website Building</option>
          <option value="Poster Design">Poster Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="AI Generated Videography">AI Generated Videography</option>
          <option value="Cinematic Videography">Cinematic Videography</option>
          <option value="Photography">Photography</option>
        </select>
      </div>
      <div className="form-group">
        <label>Your Vision</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project, your brand, your dreams..." required />
      </div>
      <div style={{textAlign:'center'}}>
        <button type="submit" className="btn-gold" disabled={status==='sending'}>
          {status==='sending' ? 'Sending...' : 'Begin a Commission'}
        </button>
      </div>
      {status==='success' && (
        <div className="form-status success">Your commission has been received. We'll be in touch shortly.</div>
      )}
      {status==='error' && (
        <div className="form-status error">Something went wrong. Please try again or email us directly.</div>
      )}
    </form>
  )
}
