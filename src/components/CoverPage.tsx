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
  { image: `${import.meta.env.BASE_URL}ballard-estate.png`, caption: 'Ballard Estate' },
  { image: `${import.meta.env.BASE_URL}colaba.png`, caption: 'Colaba' },
  { image: IMAGES.closingSky, caption: 'Looking up in Bombay' },
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

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: i === current ? 'scale(1)' : 'scale(1.08)',
          }}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'contrast(1.15) saturate(1.2) brightness(0.7)',
            }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Left ticker */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: isMobile ? '40px' : '56px',
          background: 'rgba(0,0,0,0.55)',
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
            gap: '0',
            animation: 'tickerScroll 20s linear infinite',
            whiteSpace: 'nowrap',
            padding: 0,
          }}
          aria-label="Go to Walks and Field Notes"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
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
          ))}
        </button>
      </div>

      {/* Right menu */}
      <nav
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: isMobile ? '200px' : '340px',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-end',
          justifyContent: 'center',
          paddingRight: isMobile ? '0' : '48px',
          paddingLeft: isMobile ? '12px' : '0',
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
              cursor: 'pointer',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? '12px' : '17px',
              letterSpacing: isMobile ? '1px' : '2px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              padding: isMobile ? '10px 0' : '12px 0',
              textAlign: 'right',
              transition: 'color 0.3s, transform 0.3s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = TEAL
              e.currentTarget.style.transform = 'translateX(-6px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Center title */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 4,
          pointerEvents: 'none',
          width: '100%',
          padding: isMobile ? '0 60px' : '0 120px',
        }}
      >
        <h1
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? '38px' : '88px',
            lineHeight: 1,
            letterSpacing: isMobile ? '1px' : '3px',
            textTransform: 'uppercase',
            color: '#fff',
            textShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          Looking Up
        </h1>
        <h1
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? '38px' : '88px',
            lineHeight: 1,
            letterSpacing: isMobile ? '1px' : '3px',
            textTransform: 'uppercase',
            color: TEAL,
            textShadow: '0 4px 24px rgba(0,0,0,0.6)',
            marginTop: '4px',
          }}
        >
          in Bombay
        </h1>
      </div>

      {/* Slide indicators */}
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
              background: i === current ? TEAL : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: isMobile ? '48px' : '72px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.2)',
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
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,142,138,0.6)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.4)')}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: isMobile ? '212px' : '360px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.2)',
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
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,142,138,0.6)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.4)')}
      >
        ›
      </button>

      {/* Slide caption */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '50px' : '72px',
          left: isMobile ? '56px' : '80px',
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 300,
          fontSize: isMobile ? '11px' : '13px',
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
