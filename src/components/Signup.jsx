import { useState } from 'react'
import { content } from '../content'
import { SIGNUP_FORM_ENDPOINT, USE_NETLIFY_FORMS } from '../config'
import { ScrollReveal } from './ScrollReveal'

export function Signup() {
  const {
    title,
    subtitle,
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    messageLabel,
    messagePlaceholder,
    submitLabel,
    successMessage,
    errorMessage,
  } = content.signup

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [submitting, setSubmitting] = useState(false)

  const hasEndpoint = SIGNUP_FORM_ENDPOINT && SIGNUP_FORM_ENDPOINT.trim()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!hasEndpoint || submitting) return

    setSubmitting(true)
    setStatus(null)

    try {
      if (USE_NETLIFY_FORMS) {
        const formData = new FormData()
        formData.append('form-name', SIGNUP_FORM_ENDPOINT.trim())
        formData.append('name', name)
        formData.append('email', email)
        if (message.trim()) formData.append('message', message)

        const res = await fetch('/', {
          method: 'POST',
          body: formData,
        })
        if (!res.ok) throw new Error('Submit failed')
      } else {
        const res = await fetch(SIGNUP_FORM_ENDPOINT.trim(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message: message.trim() || undefined }),
        })
        if (!res.ok) throw new Error('Submit failed')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="signup section-bg" id="signup">
      <ScrollReveal variant="up" className="section-inner">
        <h2 className="signup-title">{title}</h2>
        <p className="signup-subtitle">{subtitle}</p>

        {hasEndpoint ? (
          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            {USE_NETLIFY_FORMS && (
              <input type="hidden" name="form-name" value={SIGNUP_FORM_ENDPOINT.trim()} />
            )}
            <div className="signup-field">
              <label htmlFor="signup-name">{nameLabel}</label>
              <input
                id="signup-name"
                type="text"
                name="name"
                required
                placeholder={namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div className="signup-field">
              <label htmlFor="signup-email">{emailLabel}</label>
              <input
                id="signup-email"
                type="email"
                name="email"
                required
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div className="signup-field">
              <label htmlFor="signup-message">{messageLabel}</label>
              <textarea
                id="signup-message"
                name="message"
                rows={3}
                placeholder={messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={submitting}
              />
            </div>
            {status === 'success' && (
              <p className="signup-message signup-message--success" role="status">
                {successMessage}
              </p>
            )}
            {status === 'error' && (
              <p className="signup-message signup-message--error" role="alert">
                {errorMessage}
              </p>
            )}
            <button type="submit" className="btn btn-secondary signup-submit" disabled={submitting}>
              {submitting ? 'Sending…' : submitLabel}
            </button>
          </form>
        ) : (
          <p className="signup-configure">
            Add <code>SIGNUP_FORM_ENDPOINT</code> in <code>src/config.js</code> (Formspree URL or
            Netlify form name) to enable the signup form.
          </p>
        )}
      </ScrollReveal>
    </section>
  )
}
