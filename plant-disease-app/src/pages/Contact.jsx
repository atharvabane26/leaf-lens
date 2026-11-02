import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // no backend yet, so just show a message
    console.log('Form data:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact">
      <h1>Contact Us</h1>
      {sent && <p className="success">Thanks! Your message has been recorded.</p>}

      <form className="card" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
        <textarea name="message" rows="5" placeholder="Your message" value={form.message} onChange={handleChange} required />
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact