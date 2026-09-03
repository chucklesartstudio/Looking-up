import { useState, useEffect } from 'react'
import { WALK_CHECKPOINTS } from '../data'
import { useInView } from '../hooks/useInView'

type WalkType = 'ballard' | 'colaba'

function CheckpointGallery({ walk }: { walk: WalkType }) {
  return (
    <div
      className="checkpoints-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-sm)',
        animation: 'fadeIn 0.5s var(--ease-out)',
      }}
    >
      {WALK_CHECKPOINTS[walk].map((checkpoint, i) => (
        <div
          key={i}
          style={{
            animation: `slideUp 0.4s var(--ease-out) ${i * 0.1}s both`,
          }}
        >
          <img
            src={checkpoint.image}
            alt={checkpoint.caption}
            className="square-img"
            style={{
              boxShadow: 'var(--shadow-card)',
              filter: 'contrast(1.1) saturate(1.1)',
            }}
          />

          <p
            className="italic-note"
            style={{
              fontSize: '14px',
              marginTop: '8px',
              textAlign: 'center',
              color: 'var(--ink-light)',
            }}
          >
            {checkpoint.caption}
          </p>
        </div>
      ))}
    </div>
  )
}

export function TwoWalksOneLens() {
  const [activeWalk, setActiveWalk] =
    useState<WalkType | null>(null)

  const [ref, inView] =
    useInView<HTMLDivElement>()

  const toggleWalk = (walk: WalkType) => {
    setActiveWalk(
      activeWalk === walk ? null : walk
    )
  }

  /*
    Allows the Cover Page and Navbar to open
    a specific walk from their navigation menus.
  */
  useEffect(() => {
    const handleExternalWalk = (event: Event) => {
      const customEvent =
        event as CustomEvent<{
          walk?: WalkType
        }>

      const walk = customEvent.detail?.walk

      if (
        walk !== 'ballard' &&
        walk !== 'colaba'
      ) {
        return
      }

      setActiveWalk(walk)

      /*
        Give React one tick to update the state
        before scrolling to the section.
      */
      setTimeout(() => {
        const el =
          document.getElementById('two-walks')

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
      'looking-up:open-walk',
      handleExternalWalk
    )

    return () => {
      window.removeEventListener(
        'looking-up:open-walk',
        handleExternalWalk
      )
    }
  }, [])

  /*
    Looking Out at Sea goes to the existing
    Walks section.
  */
  const goToSea = () => {
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
  }

  return (
    <section
      id="two-walks"
      ref={ref}
      className="section"
      style={{
        background:
          'linear-gradient(170deg, var(--teal-pale) 0%, var(--teal-soft) 220%)',
      }}
    >
      <div className="container">

        {/* SECTION LABEL */}

        <div
          className={`label-teal reveal ${
            inView ? 'in-view' : ''
          }`}
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-lg)',
          }}
        >
          Two Walks, One Lens
        </div>

        {/* =====================================================
            WALK CARDS
        ===================================================== */}

        <div className="two-walks-grid">

          {/* ===================================================
              WALK 01 — BALLARD ESTATE
          =================================================== */}

          <div className="walk-card-wrapper">

            <button
              className={`walk-card reveal reveal-delay-1 ${
                inView ? 'in-view' : ''
              }`}
              onClick={() =>
                toggleWalk('ballard')
              }
              style={{
                background:
                  activeWalk === 'ballard'
                    ? 'var(--teal-deep)'
                    : 'var(--cream)',

                color:
                  activeWalk === 'ballard'
                    ? 'var(--cream)'
                    : 'var(--ink)',
              }}
            >
              <div
                className="label"
                style={{
                  color:
                    activeWalk === 'ballard'
                      ? 'var(--terra-soft)'
                      : 'var(--terra)',

                  marginBottom: '12px',
                }}
              >
                Walk 01
              </div>

              <h3
                className="heading-serif"
                style={{
                  fontSize: '32px',
                }}
              >
                Looking Up in Ballard Estate
              </h3>

              <p
                className="italic-note"
                style={{
                  fontSize: '16px',
                  marginTop: '12px',

                  color:
                    activeWalk === 'ballard'
                      ? 'rgba(250,246,239,0.8)'
                      : 'var(--ink-light)',
                }}
              >
                Bombay's most disciplined precinct —
                Deco canopies, Edwardian stone, and the
                pump where it all begins.
              </p>
            </button>

            {/* MOBILE IMAGE TILES */}

            {activeWalk === 'ballard' && (
              <div className="mobile-walk-content">
                <CheckpointGallery
                  walk="ballard"
                />
              </div>
            )}

          </div>

          {/* ===================================================
              WALK 02 — COLABA
          =================================================== */}

          <div className="walk-card-wrapper">

            <button
              className={`walk-card reveal reveal-delay-2 ${
                inView ? 'in-view' : ''
              }`}
              onClick={() =>
                toggleWalk('colaba')
              }
              style={{
                background:
                  activeWalk === 'colaba'
                    ? 'var(--terra-deep)'
                    : 'var(--cream)',

                color:
                  activeWalk === 'colaba'
                    ? 'var(--cream)'
                    : 'var(--ink)',
              }}
            >
              <div
                className="label"
                style={{
                  color:
                    activeWalk === 'colaba'
                      ? 'var(--mustard)'
                      : 'var(--teal)',

                  marginBottom: '12px',
                }}
              >
                Walk 02
              </div>

              <h3
                className="heading-serif"
                style={{
                  fontSize: '32px',
                }}
              >
                Looking Up in Colaba
              </h3>

              <p
                className="italic-note"
                style={{
                  fontSize: '16px',
                  marginTop: '12px',

                  color:
                    activeWalk === 'colaba'
                      ? 'rgba(250,246,239,0.8)'
                      : 'var(--ink-light)',
                }}
              >
                From the Causeway to the Gateway —
                the people and facades that make pin
                code 400001 feel unchanged.
              </p>
            </button>

            {/* MOBILE IMAGE TILES */}

            {activeWalk === 'colaba' && (
              <div className="mobile-walk-content">
                <CheckpointGallery
                  walk="colaba"
                />
              </div>
            )}

          </div>

          {/* ===================================================
              LOOKING OUT AT SEA
          =================================================== */}

          <div className="walk-card-wrapper">

            <button
              className={`walk-card reveal reveal-delay-3 ${
                inView ? 'in-view' : ''
              }`}
              onClick={goToSea}
              style={{
                background: 'var(--cream)',
                color: 'var(--ink)',
              }}
            >
              <div
                className="label"
                style={{
                  color: 'var(--teal)',
                  marginBottom: '12px',
                }}
              >
                Looking Out
              </div>

              <h3
                className="heading-serif"
                style={{
                  fontSize: '32px',
                }}
              >
                Looking Out at Sea
              </h3>

              <p
                className="italic-note"
                style={{
                  fontSize: '16px',
                  marginTop: '12px',
                  color: 'var(--ink-light)',
                }}
              >
                Beyond the streets and buildings —
                Bombay seen from the water, where the
                city opens out.
              </p>
            </button>

          </div>

        </div>

        {/* =====================================================
            DESKTOP IMAGE TILES
        ===================================================== */}

        {activeWalk && (
          <div className="desktop-walk-content">
            <CheckpointGallery
              walk={activeWalk}
            />
          </div>
        )}

      </div>
    </section>
  )
}
