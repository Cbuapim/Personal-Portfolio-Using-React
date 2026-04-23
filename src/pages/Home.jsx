import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const skills = [
  'React', 'TypeScript', 'Node.js', 'JavaScript',
  'Python', 'Tailwind CSS', 'REST APIs', 'Git',
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 40px 80px',
        maxWidth: 1120,
        margin: '0 auto',
        width: '100%',
      }}>
        <div style={{ maxWidth: 680 }}>
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 32,
            }}
          >
            Full-Stack Developer — Bangkok, Thailand
          </motion.p>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(56px, 9vw, 96px)',
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: 40,
            }}
          >
            Channarong<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#555' }}>Buapim</em>
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontSize: 16,
              color: '#666',
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            I craft modern web applications where clean code meets
            thoughtful design. Currently open to new opportunities.
          </motion.p>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link
              to="/projects"
              style={{
                display: 'inline-block',
                padding: '13px 32px',
                backgroundColor: 'var(--text)',
                color: 'var(--bg)',
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.target.style.opacity = '0.75'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              View Work
            </Link>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                padding: '13px 32px',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.target.style.borderColor = 'var(--text)'}
              onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ borderTop: '1px solid var(--border)', maxWidth: 1120, margin: '0 auto', width: '100%' }} />

      {/* ── Skills ── */}
      <section style={{
        maxWidth: 1120,
        margin: '0 auto',
        width: '100%',
        padding: '80px 40px',
      }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 48,
          }}
        >
          Technologies
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1px',
          backgroundColor: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              style={{
                backgroundColor: 'var(--bg)',
                padding: '28px 24px',
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 300,
                letterSpacing: '-0.01em',
                color: 'var(--text)',
                transition: 'background-color 0.2s',
                cursor: 'default',
              }}
              whileHover={{ backgroundColor: '#f9f9f9' }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ borderTop: '1px solid var(--border)', maxWidth: 1120, margin: '0 auto', width: '100%' }} />

      {/* ── CTA ── */}
      <section style={{
        maxWidth: 1120,
        margin: '0 auto',
        width: '100%',
        padding: '120px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 40,
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: 600,
          }}
        >
          Have a project in mind? Let's talk.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              padding: '13px 32px',
              backgroundColor: 'var(--text)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.75'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </>
  )
}
