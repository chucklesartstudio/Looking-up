import { TIMELINE_ITEMS } from '../data'
import { useInView } from '../hooks/useInView'

export function KarfuleStory() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section
      ref={ref}
      className="section"
      style={{ background: 'linear-gradient(170deg, var(--cream) 0%, var(--terra-pale) 180%)' }}
    >
      <div className="container-narrow">
        <div
          className={`label-teal reveal ${inView ? 'in-view' : ''}`}
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-lg)',
          }}
        >
          The Origin Point
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: '80px',
              top: '40px',
              bottom: '40px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--terra) 0%, var(--teal) 50%, var(--mustard) 100%)',
              opacity: 0.5,
            }}
          />

          {TIMELINE_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} ${inView ? 'in-view' : ''}`}
              style={{
                display: 'flex',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-xl)',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--terra)',
                  minWidth: '60px',
                  textAlign: 'right',
                  paddingTop: '4px',
                  flexShrink: 0,
                }}
              >
                {item.year}
              </div>

              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--terra)',
                  border: '3px solid var(--cream)',
                  boxShadow: '0 0 0 3px var(--terra)',
                  marginTop: '8px',
                  flexShrink: 0,
                  zIndex: 2,
                  position: 'relative',
                }}
              />

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '280px',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="square-img"
                    style={{
                      boxShadow: '0 6px 28px rgba(0,0,0,0.15)',
                      filter: 'contrast(1.1) saturate(1.1)',
                    }}
                  />
                </div>
                <h3
                  className="heading-serif"
                  style={{ fontSize: '28px', marginBottom: '12px', color: 'var(--ink)' }}
                >
                  {item.title}
                </h3>
                <p className="italic-note" style={{ fontSize: '18px', color: 'var(--ink-light)' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
