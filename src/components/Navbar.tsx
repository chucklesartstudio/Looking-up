import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Looking Up in Ballard Estate', href: '#two-walks' },
  { label: 'Looking Up in Colaba', href: '#two-walks' },
  { label: 'Looking Out at Sea', href: '#walks' },
  { label: '400001 and Co.', href: '#400001' },
  { label: 'Walks & Field Notes', href: '#walks' },
]

const MENU_IMAGES = [
  '/ballard-estate.png',
  '/Colaba.png',
  '/Looking up Sea.png',
  '/ballard-estate.png',
  '/Looking up Sea.png',
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight - 80)

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)

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
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <button
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false)

            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Daniel Sequeira
        </button>

        {/* Desktop navigation */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                className="nav-link"
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}

          <li>
            <button
              className="nav-cta"
              onClick={() => handleNav('#walks')}
            >
              Book a Walk
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            style={{
              transform: menuOpen
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none',
            }}
          />

          <span
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />

          <span
            style={{
              transform: menuOpen
                ? 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile scrapbook menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">

            {NAV_LINKS.map((link, index) => (
              <button
                key={link.label}
                className={`mobile-track mobile-track-${index + 1}`}
                onClick={() => handleNav(link.href)}
              >
                <div className="polaroid">

                  <div className="polaroid-image">
                    <img
                      src={MENU_IMAGES[index]}
                      alt=""
                    />
                  </div>

                  <div className="polaroid-caption">
                    {link.label}
                  </div>

                  <span className="track-arrow">
                    →
                  </span>

                </div>
              </button>
            ))}

            {/* Book a Walk remains separate */}
            <button
              className="nav-cta mobile-book"
              onClick={() => handleNav('#walks')}
            >
              Book a Walk
            </button>

          </div>
        </div>
      )}
    </>
  )
}
