import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const APP_STORE_URL = '#appstore'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isPrivacy = location.pathname === '/privacy'
  const isSupport = location.pathname === '/support'
  const isStaticPage = isPrivacy || isSupport

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(237, 229, 214, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(217, 210, 195, 0.6)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="./icon.png"
            alt="Culture Pocket"
            style={{ width: 32, height: 32, borderRadius: 8 }}
          />
          <span style={{
            fontSize: 16,
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '-0.3px',
          }}>
            Culture Pocket
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-links">
          {!isStaticPage && (
            <>
              <NavLink to="features">Features</NavLink>
              <NavLink to="pricing">Pricing</NavLink>
            </>
          )}
          <Link
            to="/privacy"
            style={{
              fontSize: 14,
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            Privacy
          </Link>
          <Link
            to="/support"
            style={{
              fontSize: 14,
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            Support
          </Link>
          {!isStaticPage && (
            <a
              href={APP_STORE_URL}
              style={{
                background: 'var(--text)',
                color: 'var(--bg)',
                padding: '9px 18px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Download
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault()
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      style={{
        fontSize: 14,
        color: 'var(--text-secondary)',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.target.style.color = 'var(--text)'}
      onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
    >
      {children}
    </a>
  )
}
