import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const supportEmail = 'jorgecasase@gmail.com'

const sections = [
  {
    title: 'Contact',
    body: (
      <p>
        For help with Culture Pocket, email{' '}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Please include your device model,
        iOS version, and a short description of the issue.
      </p>
    ),
  },
  {
    title: 'Purchases and Restore',
    body: (
      <p>
        Culture Pocket Pro Lifetime is a one-time in-app purchase. If you already purchased Pro,
        open the Pro screen and use restore purchases. Apple handles payment information directly;
        Culture Pocket does not receive card or bank details.
      </p>
    ),
  },
  {
    title: 'Cloud Sync',
    body: (
      <p>
        Cloud sync requires a Culture Pocket Pro purchase and a Supabase account. If sync fails,
        check that you are signed in with the same account used after purchase verification.
      </p>
    ),
  },
  {
    title: 'Account and Data Deletion',
    body: (
      <p>
        To request deletion of your account or synced data, contact{' '}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a> from the email address associated
        with your account.
      </p>
    ),
  },
]

export default function Support() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />

      <div style={{
        background: 'var(--nav)',
        borderBottom: '1px solid var(--subtle)',
        padding: '100px 24px 56px',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: 'var(--text-secondary)',
            marginBottom: 24,
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            ← Culture Pocket
          </Link>
          <h1 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            color: 'var(--text)',
            marginBottom: 12,
          }}>
            Support
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            Culture Pocket · Help and contact
          </p>
        </motion.div>
      </div>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            style={{
              background: 'var(--card)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px 48px',
            }}
            className="privacy-card"
          >
            {sections.map(({ title, body }, index) => (
              <section key={title} style={{
                marginBottom: index < sections.length - 1 ? 36 : 0,
                paddingBottom: index < sections.length - 1 ? 36 : 0,
                borderBottom: index < sections.length - 1 ? '1px solid var(--subtle)' : 'none',
              }}>
                <h2 style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  color: 'var(--accent-book)',
                  borderLeft: '3px solid var(--accent-book)',
                  paddingLeft: 12,
                  marginBottom: 16,
                  lineHeight: 1,
                }}>
                  {title}
                </h2>
                <div className="privacy-content" style={{
                  fontSize: 15,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}>
                  <style>{`
                    .privacy-content a { color: var(--accent-book); text-decoration: underline; text-underline-offset: 3px; }
                  `}</style>
                  {body}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '32px 24px',
        borderTop: '1px solid var(--subtle)',
        fontSize: 13,
        color: 'var(--text-secondary)',
      }}>
        <p>© 2026 Culture Pocket · All rights reserved · <Link to="/privacy" style={{ color: 'var(--accent-book)' }}>Privacy Policy</Link></p>
      </footer>
    </div>
  )
}
