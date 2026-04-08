require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────────────
app.use(cors())
app.use(express.json())

// Serve React build in production
app.use(express.static(path.join(__dirname, '../client/dist')))

// ── Nodemailer transporter ──────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// ── Contact form endpoint ───────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Email to you (business notification)
    await transporter.sendMail({
      from: `"Vangoh Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Commission Inquiry — ${service || 'General'} from ${name}`,
      html: `
        <div style="font-family:Georgia,serif;background:#060D1E;color:#F5F0E8;padding:40px;border-radius:8px;">
          <h2 style="color:#D4A843;font-size:24px;margin-bottom:24px;">New Commission Inquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#7B8FC4;width:140px;">Name</td><td style="padding:10px 0;">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#7B8FC4;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#D4A843;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#7B8FC4;">Service</td><td style="padding:10px 0;">${service || 'Not specified'}</td></tr>
            <tr><td style="padding:10px 0;color:#7B8FC4;vertical-align:top;">Message</td><td style="padding:10px 0;">${message.replace(/\n/g,'<br>')}</td></tr>
          </table>
        </div>
      `
    })

    // Auto-reply to the client
    await transporter.sendMail({
      from: `"Vangoh Production" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'We received your commission — Vangoh Production',
      html: `
        <div style="font-family:Georgia,serif;background:#060D1E;color:#F5F0E8;padding:40px;border-radius:8px;">
          <h2 style="color:#D4A843;font-size:24px;margin-bottom:16px;">Thank you, ${name}.</h2>
          <p style="color:#A8B8D8;line-height:1.8;font-style:italic;">Your commission inquiry has been received. Every masterpiece begins with a single conversation — and we're honoured to begin one with you.</p>
          <p style="color:#A8B8D8;line-height:1.8;">We'll be in touch within 24–48 hours.</p>
          <p style="color:#D4A843;margin-top:32px;font-size:13px;letter-spacing:2px;">VANGOH PRODUCTION</p>
        </div>
      `
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

// ── Catch-all: serve React app ──────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => console.log(`Vangoh server running on port ${PORT}`))
