import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <nav style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '0 40px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Wordmark */}
          <Link to="/" style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 20,
            letterSpacing: '0.05em',
            color: 'var(--text)',
          }}>
            CB
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-links">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: pathname === to ? 'var(--text)' : 'var(--muted)',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
              >
                {label}
                {pathname === to && (
                  <motion.span
                    layoutId="nav-dot"
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 3,
                      height: 3,
                      borderRadius: '50%',
                      backgroundColor: 'var(--text)',
                      display: 'block',
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              gap: 5,
              flexDirection: 'column',
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 1,
              backgroundColor: 'var(--text)',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 22, height: 1,
              backgroundColor: 'var(--text)',
              opacity: open ? 0 : 1,
              transition: 'opacity 0.3s',
            }} />
            <span style={{
              display: 'block', width: 22, height: 1,
              backgroundColor: 'var(--text)',
              transition: 'transform 0.3s',
              transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 60,
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: 'rgba(255,255,255,0.98)',
              borderBottom: '1px solid var(--border)',
              padding: '20px 40px 28px',
            }}
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 28,
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  padding: '8px 0',
                  color: pathname === to ? 'var(--text)' : 'var(--muted)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 768px) {
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </>
  )
}
