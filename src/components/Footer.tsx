import { WHATSAPP_NUMBER } from '../data'

const TEAL = '#008F8A'

export function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <footer
      style={{
        background: '#0a0a0a',
        color: 'rgba(255,255,255,0.7)',
        padding: '72px 24px 32px',
        textAlign: 'center',
      }}
    >
      {/* Brand */}
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
          marginBottom: '48px',
        }}
      >
        Heritage Walks · Est. 1938
      </div>

      {/* Contact */}
      <div
        style={{
          maxWidth: '520px',
          margin: '0 auto 44px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '9px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '18px',
          }}
        >
          Contact
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = TEAL
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
          }}
        >
          {/* WhatsApp icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path
              d="M20.5 11.2a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.4-4.1A8.5 8.5 0 1 1 20.5 11.2Z"
            />
            <path
              d="M8.5 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.7 1.2 1.7 2.1 2.9 2.8l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.3-1 .5-1.5.4-1.5-.2-3-1-4.2-2.2-1.2-1.2-2-2.7-2.2-4.2-.1-.5.1-1.1.3-1.5Z"
            />
          </svg>

          WhatsApp · Book a Walk
        </a>
      </div>

      {/* Instagram */}
      <div
        style={{
          marginBottom: '48px',
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '9px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '18px',
          }}
        >
          Follow
        </div>

        <a
          href="https://www.instagram.com/karfule/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Karfule on Instagram"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = TEAL
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>

          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            @karfule
          </span>
        </a>
      </div>

      {/* Closing line */}
      <div
        style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
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
