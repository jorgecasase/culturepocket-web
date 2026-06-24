import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const sections = [
  {
    title: 'Culture Pocket Pro Lifetime',
    body: 'Culture Pocket Pro Lifetime is a one-time purchase that permanently unlocks the Pro features included in the app at the time of purchase, including premium themes and other local Pro functionality.',
  },
  {
    title: 'Cloud Synchronization',
    body: 'Cloud synchronization is an online service provided as part of Culture Pocket Pro while available. It may be modified, suspended, or discontinued for operational, security, legal, or technical reasons.',
  },
  {
    title: 'Service Changes',
    body: 'Where reasonably possible, we will provide prior notice and an option to export synced data before discontinuing cloud synchronization. Discontinuation of cloud synchronization does not revoke access to the permanent local Pro features unlocked by Culture Pocket Pro Lifetime.',
  },
  {
    title: 'Account and Data',
    body: 'Cloud synchronization requires an account. You are responsible for keeping your account credentials secure. To request deletion of your account or synced data, contact support from the email address associated with your account.',
  },
  {
    title: 'Changes to These Terms',
    body: 'We may update these Terms of Use to reflect changes to Culture Pocket or applicable law. The current version will be published on this page.',
  },
  {
    title: 'Contact',
    body: 'For questions about these Terms of Use, contact jorgecasase@gmail.com.',
  },
]

export default function TermsOfUse() {
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
          }}>
            ← Culture Pocket
          </Link>
          <h1 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            color: 'var(--text)',
            marginBottom: 12,
          }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            Culture Pocket · Effective date: June 24, 2026
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
            className="privacy-card"
            style={{
              background: 'var(--card)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px 48px',
            }}
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
                <p style={{
                  fontSize: 15,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}>
                  {body}
                </p>
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
        <p>© 2026 Culture Pocket · All rights reserved · <Link to="/privacy" style={{ color: 'var(--accent-book)' }}>Privacy Policy</Link> · <Link to="/support" style={{ color: 'var(--accent-book)' }}>Support</Link></p>
      </footer>
    </div>
  )
}
