import { NOTEBOOK_ENTRIES } from '../data'
import { useInView } from '../hooks/useInView'

export function FieldNotebook() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section
      id="field-notes"
      ref={ref}
      className="section"
      style={{
        background:
          'linear-gradient(170deg, var(--mustard-pale) 0%, var(--mustard) 200%)',
      }}
    >
      <div className="container">
        {NOTEBOOK_ENTRIES.map((entry, i) => (
          <div
            key={i}
            className={`reveal field-notebook-grid ${
              inView ? 'in-view' : ''
            }`}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-lg)',
              alignItems: 'center',
              marginBottom: 'var(--space-xl)',
              gridTemplateAreas:
                i % 2 === 0
                  ? '"image text"'
                  : '"text image"',
            }}
          >
            <div
              style={{
                gridArea: 'image',
                width: '100%',
                maxWidth: '400px',
                margin:
                  i % 2 === 0
                    ? '0 auto 0 0'
                    : '0 0 0 auto',
              }}
            >
              <img
                src={entry.image}
                alt={`Field notebook entry ${i + 1}`}
                className="square-img"
                style={{
                  boxShadow:
                    '0 8px 32px rgba(168,131,32,0.25)',
                  filter:
                    'contrast(1.15) saturate(1.15)',
                }}
              />
            </div>

            <div
              style={{
                gridArea: 'text',
                padding: 'var(--space-sm) 0',
              }}
            >
              <div
                className="label-teal"
                style={{
                  marginBottom: '12px',
                }}
              >
                Field Note · No.{' '}
                {String(i + 1).padStart(2, '0')}
              </div>

              <p
                className="italic-note"
                style={{
                  fontSize: '22px',
                  lineHeight: 1.7,
                  color: 'var(--ink)',
                }}
              >
                {entry.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
