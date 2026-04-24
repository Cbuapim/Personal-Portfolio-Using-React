import { useState } from 'react'
import { motion } from 'framer-motion'

const inputBase = {
  width: '100%',
  padding: '14px 0',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  backgroundColor: 'transparent',
  color: 'var(--text)',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.2s',
  borderRadius: 0,
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [sent, setSent] = useState(false)

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:channarong.buapim@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const fieldStyle = (name) => ({
    ...inputBase,
    borderBottomColor: focused === name ? 'var(--text)' : 'var(--border)',
  })

  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 40px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 80 }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 24,
          }}>
            Contact
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: 640,
          }}>
            Let's make something{' '}
            <em style={{ fontStyle: 'italic', color: '#888' }}>great</em>{' '}together.
          </h1>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }} className="contact-grid">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 32,
            }}>
              Reach out
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <a
                href="mailto:channarong.buapim@gmail.com"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  padding: '24px 0',
                  borderTop: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 500,
                }}>Email</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  fontWeight: 300,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}>channarong.buapim@gmail.com</span>
              </a>
              <a
                href="https://github.com/Cbuapim/Personal-Portfolio-Using-React"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  padding: '24px 0',
                  borderTop: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 500,
                }}>GitHub</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  fontWeight: 300,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}>github.com/Cbuapim/Personal-Portfolio-Using-React</span>
              </a>
              <a
                href="https://www.linkedin.com/in/cbuapim/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  padding: '24px 0',
                  borderTop: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 500,
                }}>LinkedIn</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  fontWeight: 300,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}>linkedin.com/in/cbuapim</span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ paddingTop: 40 }}
              >
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 40,
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  marginBottom: 16,
                }}>
                  Message sent.
                </p>
                <p style={{ fontSize: 15, color: '#888', fontWeight: 300 }}>
                  Your email client should have opened. I'll reply soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  Send a message
                </p>

                {[
                  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Smith' },
                  { name: 'email', label: 'Email address', type: 'email', placeholder: 'jane@example.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <label key={name} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 11,
                      color: 'var(--muted)',
                      letterSpacing: '0.05em',
                      fontWeight: 400,
                    }}>
                      {label}
                    </span>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={onChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder={placeholder}
                      style={{
                        ...fieldStyle(name),
                        '::placeholder': { color: 'var(--muted)' },
                      }}
                    />
                  </label>
                ))}

                <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 11,
                    color: 'var(--muted)',
                    letterSpacing: '0.05em',
                    fontWeight: 400,
                  }}>
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                    style={{
                      ...fieldStyle('message'),
                      resize: 'vertical',
                      minHeight: 120,
                    }}
                  />
                </label>

                <motion.button
                  type="submit"
                  whileHover={{ opacity: 0.75 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '13px 36px',
                    backgroundColor: 'var(--text)',
                    color: 'var(--bg)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: 0,
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--muted); }
      `}</style>
    </div>
  )
}
