import { motion } from 'framer-motion'

const projects = [
  {
    index: '01',
    title: 'Brain Blast',
    desc: 'Interactive quiz application with multiple categories, live scoring, and adaptive feedback. Built with React and custom hooks.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/cbuapim/brain-blast',
    year: '2024',
  },
  {
    index: '02',
    title: 'Milestone App',
    desc: 'Project milestone tracker for managing tasks, deadlines, and team progress with an intuitive kanban-style dashboard.',
    tech: ['React', 'Node.js', 'REST API'],
    github: 'https://github.com/cbuapim/milestone-app',
    year: '2024',
  },
  {
    index: '03',
    title: 'Todo List App',
    desc: 'Minimal todo application with local storage persistence, priority filtering, and keyboard shortcuts.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/cbuapim/todo-app',
    year: '2023',
  },
  {
    index: '04',
    title: 'Countdown Timer',
    desc: 'Minimalist timer with presets, custom durations, audio cues, and a distraction-free fullscreen mode.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/cbuapim/countdown-timer',
    year: '2023',
  },
  {
    index: '05',
    title: 'Exercise Tracker',
    desc: 'Fitness logging app to record workouts, track personal records, and visualize progress over time.',
    tech: ['React', 'JavaScript', 'Charts.js'],
    github: 'https://github.com/cbuapim/exercise-tracker',
    year: '2023',
  },
  {
    index: '06',
    title: 'Menu App',
    desc: 'Digital restaurant menu with category filtering, item detail modals, and a cart system.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/cbuapim/menu-app',
    year: '2023',
  },
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
            <ProjectRow key={p.index} project={p} i={i} />
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
        gridTemplateColumns: '64px 1fr auto',
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
      {/* Index */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--muted)',
        paddingTop: 6,
        fontWeight: 400,
        letterSpacing: '0.05em',
      }}>
        {project.index}
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
            {project.title}
          </h2>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--muted)', fontWeight: 400 }}>
            {project.year}
          </span>
        </div>
        <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, marginBottom: 20, maxWidth: 540, fontWeight: 300 }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tech.map(t => (
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
      </div>

      {/* Link */}
      <div style={{ paddingTop: 4 }}>
        {project.github && (
          <a
            href={project.github}
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
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            GitHub ↗
          </a>
        )}
      </div>
    </motion.div>
  )
}
