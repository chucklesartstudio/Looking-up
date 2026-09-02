import { TIMELINE_ITEMS } from '../data'
import { useInView } from '../hooks/useInView'

export function KarfuleStory() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section
      ref={ref}
      className="section"
      style={{
        background:
          'linear-gradient(170deg, var(--cream) 0%, var(--terra-pale) 180%)',
      }}
    >
      <div className="container-narrow">

        {/* Section label */}
        <div
          className={`label-teal reveal ${inView ? 'in-view' : ''}`}
          style={{
            textAlign: 'center',
            marginBottom: '18px',
          }}
        >
          THE ORIGIN POINT
        </div>

        {/* Main title */}
        <h2
          className={`heading-serif reveal reveal-delay-1 ${
            inView ? 'in-view' : ''
          }`}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(42px, 7vw, 72px)',
            lineHeight: 0.95,
            color: 'var(--ink)',
            marginBottom: '12px',
          }}
        >
          Karfule Petrol Pump
        </h2>

        {/* Subtitle */}
        <p
          className={`reveal reveal-delay-2 ${
            inView ? 'in-view' : ''
          }`}
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--terra)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          Ballard Estate · Since 1938
        </p>

        <div style={{ position: 'relative' }}>

          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '80px',
              top: '40px',
              bottom: '40px',
              width: '2px',
              background:
                'linear-gradient(180deg, var(--terra) 0%, var(--teal) 50%, var(--mustard) 100%)',
              opacity: 0.5,
            }}
          />

          {TIMELINE_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(
                i + 1,
                4
              )} ${inView ? 'in-view' : ''}`}
              style={{
                display: 'flex',
                gap: 'var(--space-md)',
                marginBottom:
                  i === TIMELINE_ITEMS.length - 1
                    ? '0'
                    : 'var(--space-xl)',
                alignItems: 'flex-start',
              }}
            >

              {/* Year */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: i === 0 ? '26px' : '18px',
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

              {/* Timeline dot */}
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

              {/* Content */}
              <div style={{ flex: 1 }}>

                {/* Image */}
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

                {/* Point title */}
                <h3
                  className="heading-serif"
                  style={{
                    fontSize: '28px',
                    marginBottom: '12px',
                    color: 'var(--ink)',
                  }}
                >
                  {item.title}
                </h3>

                {/* Point text */}
                <p
                  className="italic-note"
                  style={{
                    fontSize: '18px',
                    color: 'var(--ink-light)',
                  }}
                >
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
