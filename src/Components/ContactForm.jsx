import { useState } from 'react'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && email && message) {
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Send Message</button>

      {success && <p className="success-msg">Message sent successfully!</p>}
    </form>
  )
}

export default ContactForm
