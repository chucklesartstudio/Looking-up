import { useState, useEffect, useCallback } from 'react'
import { IMAGES } from '../data'

const BLUE = '#006EAF'
const TEAL = '#008F8A'

const TICKER_ITEMS = [
  'Karfule Petrol Pump, Sprott Road',
  'Est. 1935',
  'DANIEL SEQUEIRA',
  'HERITAGE WALKS · MUMBAI 400001',
]

const MENU_ITEMS = [
  { label: 'Looking Up in Ballard Estate', href: '#two-walks' },
  { label: 'Looking Up in Colaba', href: '#two-walks' },
  { label: 'Looking Out at Sea', href: '#walks' },
  { label: '400001 and Co.', href: '#400001' },
  { label: 'Walks & Field Notes', href: '#walks' },
]

const SLIDES = [
  {
    image: `${import.meta.env.BASE_URL}ballard-estate.png`,
    caption: 'Ballard Estate',
  },
  {
    image: `${import.meta.env.BASE_URL}Colaba.png`,
    caption: 'Colaba',
  },
  {
    image: IMAGES.closingSky,
    caption: 'Looking up in Bombay',
  },
]

export function CoverPage() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)

    check()
    window.addEventListener('resize', check)

    return () => window.removeEventListener('resize', check)
  }, [])

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    []
  )

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length),
    []
  )

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      6000
    )

    return () => clearInterval(timer)
  }, [])

  const handleNav = (href: string) => {
    const el = document.querySelector(href)

    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 70

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#25212b',
      }}
    >
      {/* =========================================================
          SLIDES
      ========================================================= */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition:
              'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transform:
              i === current ? 'scale(1)' : 'scale(1.04)',
          }}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',

              // Shift photograph slightly left
              objectPosition: isMobile ? '58% center' : '55% center',

              // Slightly darker, richer image
              filter: isMobile
                ? 'contrast(1.06) saturate(1.05) brightness(0.78)'
                : 'contrast(1.12) saturate(1.08) brightness(0.76)',
            }}
          />
        </div>
      ))}

      {/* =========================================================
          IMAGE OVERLAY
      ========================================================= */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isMobile
            ? 'linear-gradient(180deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0.42) 100%)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.58) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* =========================================================
          LEFT TICKER
      ========================================================= */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: isMobile ? '40px' : '56px',
          background: 'rgba(0,0,0,0.48)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
        }}
      >
        <button
          onClick={() => handleNav('#walks')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            animation: 'tickerScroll 20s linear infinite',
            whiteSpace: 'nowrap',
            padding: 0,
          }}
          aria-label="Go to Walks and Field Notes"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? '11px' : '14px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: i % 2 === 0 ? TEAL : BLUE,
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  padding: '20px 0',
                  display: 'block',
                }}
              >
                {item}
              </span>
            )
          )}
        </button>
      </div>

      {/* =========================================================
          TRACK LISTING

          Desktop:
          Existing right-side navigation.

          Mobile:
          Becomes the "track listing" side of the album cover.
          No heavy black pane.
      ========================================================= */}
      <nav
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,

          width: isMobile ? '38%' : '340px',

          background: isMobile
            ? 'linear-gradient(90deg, rgba(18,18,18,0.08) 0%, rgba(18,18,18,0.36) 100%)'
            : 'rgba(0,0,0,0.5)',

          backdropFilter: isMobile
            ? 'blur(2px)'
            : 'blur(6px)',

          borderLeft: isMobile
            ? '1px solid rgba(255,255,255,0.16)'
            : 'none',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',

          paddingRight: isMobile ? '14px' : '48px',
          paddingLeft: isMobile ? '14px' : '0',

          zIndex: 5,
        }}
      >
        {MENU_ITEMS.map((item, i) => (
          <button
            key={i}
            onClick={() => handleNav(item.href)}
            style={{
              background: 'none',
              border: 'none',

              borderBottom: isMobile
                ? '1px solid rgba(255,255,255,0.18)'
                : 'none',

              cursor: 'pointer',

              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,

              fontSize: isMobile
                ? 'clamp(10px, 2.8vw, 13px)'
                : '17px',

              letterSpacing: isMobile ? '1px' : '2px',

              textTransform: 'uppercase',

              color: isMobile
                ? 'rgba(255,255,255,0.86)'
                : 'rgba(255,255,255,0.75)',

              padding: isMobile
                ? '13px 0'
                : '12px 0',

              textAlign: isMobile ? 'left' : 'right',

              transition:
                'color 0.3s, transform 0.3s',

              whiteSpace: 'normal',

              lineHeight: 1.35,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = TEAL
              e.currentTarget.style.transform =
                'translateX(-6px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isMobile
                ? 'rgba(255,255,255,0.86)'
                : 'rgba(255,255,255,0.75)'

              e.currentTarget.style.transform =
                'translateX(0)'
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* =========================================================
          ALBUM TITLE

          Desktop:
          Centered.

          Mobile:
          Restricted to the photograph side so it NEVER
          competes with the track listing.
      ========================================================= */}
      <div
        style={{
          position: 'absolute',

          top: isMobile ? '72%' : '50%',

          left: isMobile ? '56px' : '50%',

          transform: isMobile
            ? 'translateY(-50%)'
            : 'translate(-50%, -50%)',

          textAlign: isMobile ? 'left' : 'center',

          zIndex: 4,

          pointerEvents: 'none',

          width: isMobile ? '54%' : '100%',

          padding: isMobile ? '0' : '0 120px',
        }}
      >
        <h1
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,

            fontSize: isMobile
              ? 'clamp(32px, 10vw, 46px)'
              : '88px',

            lineHeight: 0.92,

            letterSpacing: isMobile ? '0px' : '3px',

            textTransform: 'uppercase',

            color: '#fff',

            textShadow: isMobile
              ? '0 3px 16px rgba(0,0,0,0.65)'
              : '0 4px 24px rgba(0,0,0,0.6)',

            margin: 0,
          }}
        >
          Looking Up
        </h1>

        <h1
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,

            fontSize: isMobile
              ? 'clamp(32px, 10vw, 46px)'
              : '88px',

            lineHeight: 0.92,

            letterSpacing: isMobile ? '0px' : '3px',

            textTransform: 'uppercase',

            color: TEAL,

            textShadow: isMobile
              ? '0 3px 16px rgba(0,0,0,0.65)'
              : '0 4px 24px rgba(0,0,0,0.6)',

            margin: '4px 0 0 0',
          }}
        >
          in Bombay
        </h1>
      </div>

      {/* =========================================================
          SLIDE INDICATORS
      ========================================================= */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '24px' : '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 6,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? '32px' : '10px',
              height: '4px',
              background:
                i === current
                  ? TEAL
                  : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          PREVIOUS
      ========================================================= */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: 'absolute',

          left: isMobile ? '52px' : '72px',

          top: '50%',
          transform: 'translateY(-50%)',

          background: 'rgba(0,0,0,0.28)',
          border: '1px solid rgba(255,255,255,0.25)',

          color: '#fff',

          width: isMobile ? '36px' : '44px',
          height: isMobile ? '36px' : '44px',

          borderRadius: '50%',

          cursor: 'pointer',
          fontSize: '18px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          zIndex: 6,

          transition: 'background 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            'rgba(0,142,138,0.6)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            'rgba(0,0,0,0.28)'
        }}
      >
        ‹
      </button>

      {/* =========================================================
          NEXT

          On mobile it stays inside the photograph area,
          rather than sitting underneath the track listing.
      ========================================================= */}
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: 'absolute',

          right: isMobile
            ? 'calc(38% + 12px)'
            : '360px',

          top: '50%',
          transform: 'translateY(-50%)',

          background: 'rgba(0,0,0,0.28)',
          border: '1px solid rgba(255,255,255,0.25)',

          color: '#fff',

          width: isMobile ? '36px' : '44px',
          height: isMobile ? '36px' : '44px',

          borderRadius: '50%',

          cursor: 'pointer',
          fontSize: '18px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          zIndex: 6,

          transition: 'background 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            'rgba(0,142,138,0.6)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            'rgba(0,0,0,0.28)'
        }}
      >
        ›
      </button>

      {/* =========================================================
          SLIDE CAPTION
      ========================================================= */}
      <div
        style={{
          position: 'absolute',

          bottom: isMobile ? '50px' : '72px',

          left: isMobile ? '56px' : '80px',

          fontFamily: "'Oswald', sans-serif",
          fontWeight: 300,

          fontSize: isMobile ? '10px' : '13px',

          letterSpacing: '4px',

          textTransform: 'uppercase',

          color: 'rgba(255,255,255,0.6)',

          zIndex: 5,
        }}
      >
        {SLIDES[current].caption}
      </div>
    </section>
  )
}
