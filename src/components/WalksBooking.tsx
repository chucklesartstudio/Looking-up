import { useState, useEffect } from 'react'
import {
  UPCOMING_WALKS,
  ARCHIVE_WALKS,
  ARCHIVE_FILTERS,
  WHATSAPP_NUMBER,
  type UpcomingWalk,
} from '../data'
import { useInView } from '../hooks/useInView'

function KarfuleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <path
        d="M12 2L10 6H7L5 10H8L6 14H9L7 18H10L12 22L14 18H17L15 14H18L16 10H19L17 6H14L12 2Z"
        stroke="var(--red)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="var(--red)"
        fillOpacity="0.15"
      />

      <circle
        cx="12"
        cy="11"
        r="2"
        fill="var(--red)"
      />
    </svg>
  )
}

function BookingModal({
  walk,
  onClose,
}: {
  walk: UpcomingWalk
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hello Daniel, I'd like to reserve a spot on your walk.

Walk: ${walk.name}
Date: ${walk.date}
Time: ${walk.time}

Name: ${name}
Phone: ${phone}

Looking forward to it!`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`

    window.open(url, '_blank')

    onClose()
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div
          className="label-red"
          style={{
            marginBottom: '8px',
          }}
        >
          Reserve a Spot
        </div>

        <h3
          className="heading-serif"
          style={{
            fontSize: '28px',
            marginBottom: '4px',
          }}
        >
          {walk.name}
        </h3>

        <p
          className="italic-note"
          style={{
            fontSize: '15px',
            marginBottom: 'var(--space-md)',
            color: 'var(--ink-soft)',
          }}
        >
          {walk.date} · {walk.time}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Your Name
            </label>

            <input
              className="form-input"
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
              placeholder="Like scribbling in his notebook"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Phone / WhatsApp
            </label>

            <input
              className="form-input"
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
              placeholder="+91 ..."
            />
          </div>

          <button
            type="submit"
            className="btn-mono btn-terra"
            style={{
              width: '100%',
              justifyContent: 'center',
              marginTop: 'var(--space-sm)',
            }}
          >
            Send via WhatsApp →
          </button>

          <p
            className="italic-note"
            style={{
              fontSize: '13px',
              textAlign: 'center',
              marginTop: '12px',
              color: 'var(--ink-soft)',
            }}
          >
            Opens WhatsApp with your details
            pre-filled. Daniel will confirm your
            spot.
          </p>
        </form>
      </div>
    </div>
  )
}

export function WalksBooking() {
  const [tab, setTab] = useState<
    'upcoming' | 'archive'
  >('upcoming')

  const [filter, setFilter] =
    useState<string>('All')

  const [flippedPolaroid, setFlippedPolaroid] =
    useState<number | null>(null)

  const [bookingWalk, setBookingWalk] =
    useState<UpcomingWalk | null>(null)

  const [ref, inView] =
    useInView<HTMLDivElement>()

  /*
   * Allows the Navbar to open this section
   * directly on the Archive tab.
   */
  useEffect(() => {
    const handleOpenArchive = () => {
      setTab('archive')

      setTimeout(() => {
        const el =
          document.getElementById('walks')

        if (el) {
          const top =
            el.getBoundingClientRect().top +
            window.scrollY -
            70

          window.scrollTo({
            top,
            behavior: 'smooth',
          })
        }
      }, 0)
    }

    window.addEventListener(
      'looking-up:open-archive',
      handleOpenArchive
    )

    return () => {
      window.removeEventListener(
        'looking-up:open-archive',
        handleOpenArchive
      )
    }
  }, [])

  const filteredArchive =
    ARCHIVE_WALKS.filter(
      (w) =>
        filter === 'All' ||
        w.category === filter
    )

  const rotations = [
    'rotate-l',
    'rotate-r',
    'rotate-l-sm',
    'rotate-r-sm',
  ]

  return (
    <section
      ref={ref}
      className="section"
      style={{
        background: 'var(--cream-deep)',
      }}
    >
      <div className="container">
        <div
          className={`label-red reveal ${
            inView ? 'in-view' : ''
          }`}
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-sm)',
          }}
        >
          Walks &amp; Field Notes
        </div>

        <h2
          className={`heading-serif reveal reveal-delay-1 ${
            inView ? 'in-view' : ''
          }`}
          style={{
            fontSize: '42px',
            textAlign: 'center',
            marginBottom: 'var(--space-lg)',
          }}
        >
          Daniel's Walk Journal
        </h2>

        <div
          className={`reveal reveal-delay-2 ${
            inView ? 'in-view' : ''
          }`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-lg)',
            flexWrap: 'wrap',
          }}
        >
          <button
            className={`tab ${
              tab === 'upcoming'
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setTab('upcoming')
            }
          >
            Upcoming
          </button>

          <button
            className={`tab ${
              tab === 'archive'
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setTab('archive')
            }
          >
            Archive
          </button>
        </div>

        {tab === 'upcoming' && (
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-lg)',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {UPCOMING_WALKS.map(
                (walk, i) => (
                  <div
                    key={i}
                    className={`walk-card ${
                      rotations[
                        i %
                          rotations.length
                      ]
                    } reveal reveal-delay-${Math.min(
                      i + 1,
                      4
                    )} ${
                      inView
                        ? 'in-view'
                        : ''
                    }`}
                    style={{
                      position: 'relative',
                    }}
                  >
                    {walk.spots === 0 && (
                      <div className="sold-out-stamp">
                        SOLD OUT
                      </div>
                    )}

                    <div
                      className="label-red"
                      style={{
                        marginBottom: '10px',
                      }}
                    >
                      {walk.date}
                    </div>

                    <h3
                      className="heading-serif"
                      style={{
                        fontSize: '24px',
                        marginBottom: '8px',
                      }}
                    >
                      {walk.name}
                    </h3>

                    <p
                      className="italic-note"
                      style={{
                        fontSize: '16px',
                        marginBottom: '16px',
                      }}
                    >
                      {walk.teaser}
                    </p>

                    <div
                      style={{
                        fontFamily:
                          'var(--font-mono)',
                        fontSize: '11px',
                        color:
                          'var(--ink-light)',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                      }}
                    >
                      {walk.time} ·{' '}
                      {walk.duration} ·{' '}
                      {walk.spots} spots left
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom:
                          'var(--space-md)',
                      }}
                    >
                      <KarfuleIcon />

                      <span
                        style={{
                          fontFamily:
                            'var(--font-mono)',
                          fontSize: '11px',
                          color:
                            'var(--ink-light)',
                          letterSpacing:
                            '1px',
                        }}
                      >
                        {
                          walk.meetingPoint
                        }
                      </span>
                    </div>

                    <button
                      className="btn-mono"
                      onClick={() =>
                        setBookingWalk(
                          walk
                        )
                      }
                      disabled={
                        walk.spots === 0
                      }
                      style={{
                        width: '100%',
                        justifyContent:
                          'center',
                      }}
                    >
                      {walk.spots === 0
                        ? 'Sold Out'
                        : 'Reserve a Spot'}
                    </button>
                  </div>
                )
              )}
            </div>

            <div
              className={`reveal ${
                inView
                  ? 'in-view'
                  : ''
              }`}
              style={{
                marginTop:
                  'var(--space-xl)',
                padding:
                  'var(--space-lg)',
                background:
                  'var(--cream-deep)',
                textAlign: 'center',
                maxWidth: '600px',
                margin:
                  'var(--space-xl) auto 0',
              }}
            >
              <div
                className="label-red"
                style={{
                  marginBottom: '12px',
                }}
              >
                Private Walks &amp;
                Collaborations
              </div>

              <p
                className="italic-note"
                style={{
                  fontSize: '17px',
                  marginBottom:
                    'var(--space-md)',
                }}
              >
                Custom group bookings,
                school walks, corporate
                heritage sessions —
                write to Daniel directly.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Daniel, I'd like to enquire about a private walk."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mono"
                style={{
                  textDecoration: 'none',
                }}
              >
                Write to Daniel →
              </a>
            </div>
          </div>
        )}

        {tab === 'archive' && (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '4px',
                marginBottom:
                  'var(--space-lg)',
                flexWrap: 'wrap',
              }}
            >
              {ARCHIVE_FILTERS.map(
                (f) => (
                  <button
                    key={f}
                    className={`tab ${
                      filter === f
                        ? 'active'
                        : ''
                    }`}
                    onClick={() =>
                      setFilter(f)
                    }
                  >
                    {f}
                  </button>
                )
              )}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 'var(--space-md)',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {filteredArchive.map(
                (walk, i) => (
                  <div
                    key={i}
                    className={`polaroid ${
                      rotations[
                        i %
                          rotations.length
                      ]
                    }`}
                    onClick={() =>
                      setFlippedPolaroid(
                        flippedPolaroid === i
                          ? null
                          : i
                      )
                    }
                  >
                    <div
                      className={`polaroid-inner ${
                        flippedPolaroid === i
                          ? 'flipped'
                          : ''
                      }`}
                    >
                      <div className="polaroid-face">
                        <img
                          src={walk.image}
                          alt={walk.name}
                          className="square-img"
                          style={{
                            filter:
                              'grayscale(100%) contrast(1.15)',
                          }}
                        />

                        <div
                          style={{
                            position:
                              'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding:
                              '12px',
                            background:
                              'linear-gradient(transparent, rgba(26,26,26,0.8))',
                            color:
                              'var(--cream)',
                          }}
                        >
                          <div
                            style={{
                              fontFamily:
                                'var(--font-mono)',
                              fontSize:
                                '10px',
                              letterSpacing:
                                '2px',
                              opacity: 0.7,
                              marginBottom:
                                '4px',
                            }}
                          >
                            {walk.date}
                          </div>

                          <div
                            className="heading-serif"
                            style={{
                              fontSize:
                                '18px',
                            }}
                          >
                            {walk.name}
                          </div>
                        </div>
                      </div>

                      <div className="polaroid-face polaroid-back">
                        <div
                          className="label-red"
                          style={{
                            marginBottom:
                              '12px',
                          }}
                        >
                          Field Note
                        </div>

                        <p
                          className="italic-note"
                          style={{
                            fontSize: '16px',
                            lineHeight: 1.6,
                          }}
                        >
                          {walk.fieldNote}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            <p
              style={{
                textAlign: 'center',
                marginTop:
                  'var(--space-md)',
                fontFamily:
                  'var(--font-mono)',
                fontSize: '11px',
                color:
                  'var(--ink-soft)',
                letterSpacing: '1px',
              }}
            >
              Tap a card to flip and read
              the field note
            </p>
          </div>
        )}
      </div>

      {bookingWalk && (
        <BookingModal
          walk={bookingWalk}
          onClose={() =>
            setBookingWalk(null)
          }
        />
      )}
    </section>
  )
}
