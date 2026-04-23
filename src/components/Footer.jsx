export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--muted)', fontWeight: 300 }}>
        © {year} Channarong Buapim
      </p>
      <div style={{ display: 'flex', gap: 28 }}>
        {[
          { href: 'https://github.com/cbuapim', label: 'GitHub' },
          { href: 'https://linkedin.com/in/channarong-buapim', label: 'LinkedIn' },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              transition: 'color 0.2s',
              fontWeight: 400,
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
