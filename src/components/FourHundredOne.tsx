import { useState } from 'react'
import { PORTRAITS } from '../data'
import { useInView } from '../hooks/useInView'

export function FourHundredOne() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section
      id="400001"
      ref={ref}
      className="section"
      style={{
        background:
          'linear-gradient(170deg, var(--cream) 0%, var(--cobalt-pale) 200%)',
      }}
    >
      <div className="container">
        <div
          className={`label-teal reveal ${inView ? 'in-view' : ''}`}
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-sm)',
          }}
        >
          Pin Code 400001
        </div>

        <h2
          className={`heading-serif reveal reveal-delay-1 ${
            inView ? 'in-view' : ''
          }`}
          style={{
            fontSize: '48px',
            textAlign: 'center',
            marginBottom: 'var(--space-md)',
            color: 'var(--ink)',
          }}
        >
          400001 and Co.
        </h2>

        <div
          className={`italic-note reveal reveal-delay-2 ${
            inView ? 'in-view' : ''
          }`}
          style={{
            fontSize: '20px',
            maxWidth: '640px',
            margin: '0 auto var(--space-xl)',
            textAlign: 'center',
            lineHeight: 1.7,
            color: 'var(--ink-light)',
          }}
        >
          Before I started looking up at buildings, I was looking across at
          shop counters. These are the people who make Colaba feel like it
          hasn't changed since 1962 — even when everything around them has.
          They don't have websites. They don't take bookings. Most of them
          don't even have a signboard. But if you know where to look, they're
          all here. In pin code 400001.
        </div>

        <div
          className="portraits-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-md)',
          }}
        >
          {PORTRAITS.map((portrait, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(
                i + 1,
                5
              )} ${inView ? 'in-view' : ''}`}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-card)',
              }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() =>
                setActiveIndex(
                  activeIndex === i ? null : i
                )
              }
            >
              <img
                src={portrait.image}
                alt={portrait.name}
                className="square-img"
                style={{
                  filter:
                    activeIndex === i
                      ? 'grayscale(0%) contrast(1) saturate(1.2)'
                      : 'grayscale(100%) contrast(1.15)',
                  transition:
                    'filter 0.6s var(--ease-out)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'var(--cream)',
                  padding:
                    'var(--space-sm) var(--space-md)',
                  transform:
                    activeIndex === i
                      ? 'translateY(0)'
                      : 'translateY(100%)',
                  transition:
                    'transform 0.5s var(--ease-out)',
                  boxShadow:
                    '0 -4px 20px rgba(0,0,0,0.1)',
                  maxHeight: '70%',
                  overflowY: 'auto',
                  borderTop:
                    '3px solid var(--terra)',
                }}
              >
                <div
                  className="label-red"
                  style={{
                    marginBottom: '6px',
                  }}
                >
                  {portrait.name}
                </div>

                <div
                  className="label"
                  style={{
                    marginBottom: '10px',
                    fontSize: '9px',
                  }}
                >
                  {portrait.location}
                </div>

                <p
                  className="italic-note"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: 'var(--ink-light)',
                  }}
                >
                  {portrait.note}
                </p>

                {portrait.extraNote && (
                  <p
                    className="italic-note"
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      marginTop: '10px',
                      color: 'var(--terra-deep)',
                      fontWeight: 500,
                    }}
                  >
                    {portrait.extraNote}
                  </p>
                )}
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  transition: 'opacity 0.3s',
                  opacity:
                    activeIndex === i ? 0 : 1,
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--cream)',
                    textShadow:
                      '0 1px 4px rgba(0,0,0,0.7)',
                    letterSpacing: '1px',
                  }}
                >
                  {portrait.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`reveal ${
            inView ? 'in-view' : ''
          }`}
          style={{
            marginTop: 'var(--space-xl)',
            textAlign: 'center',
          }}
        >
          <p
            className="heading-serif"
            style={{
              fontSize: '26px',
              marginBottom: 'var(--space-sm)',
              color: 'var(--teal-deep)',
            }}
          >
            These are the fixtures.
          </p>

          <p
            className="italic-note"
            style={{
              fontSize: '18px',
              color: 'var(--ink-light)',
            }}
          >
            The building facades get the attention, but
            these are the foundations.
          </p>

          <p
            className="italic-note"
            style={{
              fontSize: '16px',
              marginTop: 'var(--space-sm)',
              color: 'var(--ink-soft)',
            }}
          >
            Some of them you'll pass on the walk. Some of
            them you'll meet without knowing it. But now you
            know where to look.
          </p>
        </div>
      </div>
    </section>
  )
}
