import { motion } from 'framer-motion'

const projects = [
  {
    number: "01",
    name: "Milestone Todo",
    year: "2024",
    image: "milestone-todo.png",
    description: "A React Native project manager with gradient task cards, circular progress rings, and a bottom-sheet task detail view.",
    tags: ["React Native", "Expo", "Mobile"],
    link: "https://cbuapim.github.io/React-Native-Expo-Todo/"
  },
  {
    number: "02",
    name: "Exercise Tracker",
    year: "2024",
    image: "exercise-tracker.png",
    imagePosition: "top center",
    description: "A React Native Expo fitness app with rep counting, live timers, and progress tracking built for in-workout use.",
    tags: ["React Native", "Expo", "Mobile"],
    link: "https://cbuapim.github.io/Updated-Exercise-App/"
  },
  {
    number: "03",
    name: "Quiz App",
    year: "2024",
    image: "quiz-app.png",
    description: "A React quiz application with multiple choice questions, answer review, and a scored summary screen.",
    tags: ["React", "JavaScript", "Web"],
    link: "https://cbuapim.github.io/Quiz-App/"
  }
]

export default function Projects() {
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
            Selected Work
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            Projects I've built
          </h1>
        </motion.div>

        {/* Project list */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.number} project={p} i={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectRow({ project, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '64px 1fr 200px',
        gap: '0 40px',
        alignItems: 'start',
        padding: '40px 0',
        borderTop: '1px solid var(--border)',
        cursor: 'default',
        transition: 'background-color 0.2s',
      }}
      className="project-row"
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fafafa'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      {/* Number */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--muted)',
        paddingTop: 6,
        fontWeight: 400,
        letterSpacing: '0.05em',
      }}>
        {project.number}
      </p>

      {/* Content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 26,
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
          }}>
            {project.name}
          </h2>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--muted)', fontWeight: 400 }}>
            {project.year}
          </span>
        </div>
        <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, marginBottom: 20, maxWidth: 540, fontWeight: 300 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {project.tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              padding: '4px 10px',
              fontWeight: 400,
              letterSpacing: '0.03em',
            }}>
              {t}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              transition: 'color 0.2s',
              fontWeight: 500,
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            View Project ↗
          </a>
        )}
      </div>

      {/* Thumbnail */}
      <div style={{
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src={`/Personal-Portfolio-Using-React/images/${project.image}`}
            alt={project.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.75'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          />
        </a>
      </div>
    </motion.div>
  )
}
