import { IMAGES } from '../data'
import { useInView } from '../hooks/useInView'

export function ClosingPage() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section
      ref={ref}
      className="section"
      style={{
        background: 'linear-gradient(170deg, #0A2E38 0%, #061A20 50%, var(--ink) 100%)',
        color: 'var(--cream)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div
        className={`reveal ${inView ? 'in-view' : ''}`}
        style={{
          width: '280px',
          height: '280px',
          overflow: 'hidden',
          marginBottom: 'var(--space-lg)',
          boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
          border: '4px solid rgba(250,246,239,0.15)',
        }}
      >
        <img
          src={IMAGES.closingSky}
          alt="Looking straight up at Mumbai sky framed by buildings"
          className="square-img"
          style={{ filter: 'contrast(1.2) saturate(1.15)' }}
        />
      </div>

      <blockquote
        className={`heading-serif reveal reveal-delay-1 ${inView ? 'in-view' : ''}`}
        style={{
          fontSize: '30px',
          fontWeight: 300,
          fontStyle: 'italic',
          maxWidth: '600px',
          lineHeight: 1.5,
          marginBottom: 'var(--space-lg)',
          color: 'var(--cream)',
        }}
      >
        "The buildings have been here longer than any of us. They don't need us
        to tell their stories — but someone has to listen."
      </blockquote>

      <a
        href="#walks"
        className={`btn-mono btn-terra reveal reveal-delay-2 ${inView ? 'in-view' : ''}`}
        style={{ textDecoration: 'none' }}
      >
        Join the next walk →
      </a>

      <div
        className={`reveal reveal-delay-3 ${inView ? 'in-view' : ''}`}
        style={{
          marginTop: 'var(--space-xl)',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '3px',
          color: 'rgba(250,246,239,0.4)',
          textTransform: 'uppercase',
        }}
      >
        Daniel Sequeira · Looking Up in Bombay
      </div>
    </section>
  )
}
