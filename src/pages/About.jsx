import { motion } from 'framer-motion'

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
})

const stack = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend',  items: ['Node.js', 'Express', 'Python', 'REST APIs'] },
  { category: 'Tooling',  items: ['Git', 'GitHub', 'Vite', 'VS Code', 'npm'] },
]

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2023 – Present',
    desc: 'Building web applications for clients using React, Node.js, and modern cloud services.',
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Project',
    period: '2022 – 2023',
    desc: 'Developed responsive UI components and integrated REST APIs in a fast-paced environment.',
  },
]

export default function About() {
  return (
    <div style={{ paddingTop: 60 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 40px' }}>

        {/* ── Intro ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 100, alignItems: 'start' }} className="about-grid">
          <motion.div {...fadeUp(0)}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 24,
            }}>
              About
            </p>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: 0,
            }}>
              Developer,<br />
              <em style={{ fontStyle: 'italic', color: '#777' }}>craftsman.</em>
            </h1>
          </motion.div>

          <motion.div {...fadeUp(1)} style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.85, marginBottom: 24, fontWeight: 300 }}>
              I'm Channarong Buapim, a full-stack developer based in Thailand with a focus on building
              clean, performant web applications. I believe in the craft of coding — writing code that
              is not only functional but elegant.
            </p>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.85, fontWeight: 300 }}>
              When I'm not building, I'm learning. I stay curious about new technologies,
              design patterns, and the intersection of engineering and user experience.
            </p>
          </motion.div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', marginBottom: 80 }} />

        {/* ── Stats ── */}
        <motion.div
          {...fadeUp(0)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            marginBottom: 100,
          }}
        >
          {[
            { n: '2+', label: 'Years experience' },
            { n: '10+', label: 'Projects completed' },
            { n: '∞', label: 'Problems solved' },
            { n: 'TH', label: 'Based in Thailand' },
          ].map(({ n, label }, i) => (
            <motion.div
              key={label}
              {...fadeUp(i * 0.5)}
              style={{
                borderRight: '1px solid var(--border)',
                padding: '40px 32px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 48,
                fontWeight: 300,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {n}
              </p>
              <p style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em', fontWeight: 400 }}>
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ borderTop: '1px solid var(--border)', marginBottom: 80 }} />

        {/* ── Stack ── */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 100 }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 48,
          }}>
            Tech Stack
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)' }}>
            {stack.map(({ category, items }, i) => (
              <motion.div
                key={category}
                {...fadeUp(i * 0.5)}
                style={{ backgroundColor: 'var(--bg)', padding: '32px' }}
              >
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 20,
                }}>
                  {category}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map(item => (
                    <span key={item} style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 18,
                      fontWeight: 300,
                      color: 'var(--text)',
                      letterSpacing: '-0.01em',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--border)', marginBottom: 80 }} />

        {/* ── Experience ── */}
        <motion.div {...fadeUp(0)}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 48,
          }}>
            Experience
          </p>
          <div>
            {experience.map(({ role, company, period, desc }, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.5)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: 40,
                  padding: '40px 0',
                  borderTop: '1px solid var(--border)',
                }}
                className="exp-row"
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--muted)', marginBottom: 4, fontWeight: 400 }}>{period}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{company}</p>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 22,
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    marginBottom: 12,
                    color: 'var(--text)',
                  }}>
                    {role}
                  </h3>
                  <p style={{ fontSize: 15, color: '#777', lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .exp-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
        @media (max-width: 480px) {
          div[style*="padding: '80px 40px'"] { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}
