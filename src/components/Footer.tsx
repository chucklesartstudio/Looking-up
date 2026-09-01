const TEAL = '#008F8A'
const BLUE = '#006EAF'

export function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        color: 'rgba(255,255,255,0.7)',
        padding: '48px 24px 32px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 600,
          fontSize: '22px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#fff',
          marginBottom: '6px',
        }}
      >
        Looking Up in Bombay
      </div>
      <div
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 300,
          fontSize: '12px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: TEAL,
          marginBottom: '28px',
        }}
      >
        Heritage Walks · Est. 1935
      </div>

      <a
        href="https://www.instagram.com/karfule/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 400,
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
          textDecoration: 'none',
          border: '1px solid rgba(255,255,255,0.15)',
          padding: '10px 24px',
          borderRadius: '0',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = TEAL
          e.currentTarget.style.borderColor = TEAL
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
        @karfule
      </a>

      <div
        style={{
          marginTop: '32px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '2px',
          color: 'rgba(255,255,255,0.25)',
          textTransform: 'uppercase',
        }}
      >
        Daniel Sequeira · Mumbai 400001 · {new Date().getFullYear()}
      </div>
    </footer>
  )
}
