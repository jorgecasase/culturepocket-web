import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Information Collection and Use',
    content: (
      <>
        <p>The Application collects information when you download and use it. This information may include:</p>
        <ul>
          <li>Your device's Internet Protocol (IP) address</li>
          <li>The pages of the Application that you visit, the time and date of your visit, and time spent on those pages</li>
          <li>Total time spent on the Application</li>
          <li>Your mobile operating system</li>
        </ul>
        <p>
          For a better experience, the Service Provider may require you to provide certain personally identifiable information, including but not limited to your email address. This information will be retained and used as described in this Privacy Policy.
        </p>
        <p>
          The Service Provider may also use the information you provide to send important notices, required communications, and, where permitted by law, marketing messages.
        </p>
      </>
    ),
  },
  {
    title: 'Cookies and Tracking Technologies',
    content: (
      <p>
        The Application or its third-party SDKs may use cookies, pixels, and similar technologies to support functionality, analytics, or service delivery. Where required by applicable law, the Service Provider will obtain your consent before using non-essential tracking technologies.
      </p>
    ),
  },
  {
    title: 'Third-Party Access',
    content: (
      <>
        <p>
          Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application. The Service Provider may share your information with third parties in the ways described in this Privacy Policy, including:
        </p>
        <ul>
          <li>As required by law, such as to comply with a subpoena or similar legal process;</li>
          <li>When necessary in good faith to protect rights, safety, or to investigate fraud or respond to a government request;</li>
          <li>With trusted service providers who work on behalf of the Service Provider and have agreed to adhere to the terms of this Privacy Policy.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'International Data Transfers',
    content: (
      <>
        <p>
          The Service Provider or its third-party service providers may transfer personal data to countries outside your country of residence, including outside the European Economic Area (EEA). Where applicable law requires safeguards for international transfers, the Service Provider will use appropriate mechanisms, including:
        </p>
        <ul>
          <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
          <li>Adequacy decisions or other legally recognized transfer mechanisms</li>
          <li>Your consent, where required and legally permitted</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Your Rights',
    content: (
      <p>
        You may request access to, correction of, or deletion of your personal data held by the Service Provider. To exercise these rights, or to withdraw consent where processing is based on consent, please contact the Service Provider at{' '}
        <a href="mailto:jorgecasase@gmail.com">jorgecasase@gmail.com</a>.
      </p>
    ),
  },
  {
    title: 'California Privacy Rights (CCPA/CPRA)',
    content: (
      <p>
        If you are a California resident, you have the right to know what personal information is collected, the right to delete personal information, the right to opt out of the sale or sharing of personal information, and the right to non-discrimination for exercising these rights. To exercise your CCPA/CPRA rights, contact the Service Provider at{' '}
        <a href="mailto:jorgecasase@gmail.com">jorgecasase@gmail.com</a>.
      </p>
    ),
  },
  {
    title: 'Opt-Out Rights',
    content: (
      <>
        <p>
          You can stop further collection of information from your device by uninstalling the Application. Please note that uninstalling the Application does not automatically delete information that has already been transmitted to the Service Provider or third parties.
        </p>
        <p>
          To request deletion of your personal data or to withdraw consent, contact the Service Provider at{' '}
          <a href="mailto:jorgecasase@gmail.com">jorgecasase@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Data Retention Policy',
    content: (
      <>
        <p>The Service Provider retains personal data based on its necessity for the stated purposes:</p>
        <ul>
          <li><strong>User-Provided Data:</strong> Retained for the duration of your use of the Application plus 12 months thereafter, unless longer retention is required by law.</li>
          <li><strong>Automatically Collected Data:</strong> Retained for up to 24 months from collection, unless longer retention is required for legal compliance.</li>
          <li><strong>Aggregated and Anonymized Data:</strong> Retained indefinitely as it no longer identifies you.</li>
          <li><strong>Data Required for Legal Compliance:</strong> Retained as long as required by applicable law.</li>
        </ul>
        <p>
          You may request deletion of your personal data at any time, subject to any legal obligation to retain it, by contacting{' '}
          <a href="mailto:jorgecasase@gmail.com">jorgecasase@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Children',
    content: (
      <>
        <p>
          The Application is not intended for children under 14 years of age, or such higher age as required by applicable law. The Service Provider does not knowingly collect personally identifiable information from children.
        </p>
        <p>
          Parents and legal guardians are encouraged to monitor their children's internet usage and to instruct their children never to provide personally identifiable information through the Application without permission. If you believe a child has provided such information, please contact the Service Provider at{' '}
          <a href="mailto:jorgecasase@gmail.com">jorgecasase@gmail.com</a> so that appropriate action can be taken.
        </p>
      </>
    ),
  },
  {
    title: 'Security',
    content: (
      <p>
        The Service Provider is committed to safeguarding the confidentiality of your information and provides physical, electronic, and procedural safeguards to protect the information it processes and maintains.
      </p>
    ),
  },
  {
    title: 'Data Breach Notification',
    content: (
      <p>
        In the event of a data breach affecting your personal data, the Service Provider will notify you in accordance with applicable legal requirements, including information about the nature of the breach and the steps being taken to address it.
      </p>
    ),
  },
  {
    title: 'Your Consent',
    content: (
      <p>
        Where processing is based on consent, you provide that consent by affirmatively opting in to the relevant feature or action. You may withdraw consent at any time without affecting processing carried out prior to withdrawal.
      </p>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <>
        <p>
          The Service Provider may update this Privacy Policy from time to time. Material changes will be communicated by posting an updated Privacy Policy with a revised effective date. Where required by law, the Service Provider will seek your consent to material changes before they take effect.
        </p>
        <p>
          Previous versions of this Privacy Policy are available upon request by contacting{' '}
          <a href="mailto:jorgecasase@gmail.com">jorgecasase@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Contact Us',
    content: (
      <p>
        If you have any questions or concerns regarding this Privacy Policy or the practices of the Application, please contact the Service Provider via email at{' '}
        <a href="mailto:jorgecasase@gmail.com">jorgecasase@gmail.com</a>.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />

      {/* Header */}
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            Culture Pocket · Effective date: June 4, 2026
          </p>
        </motion.div>
      </div>

      {/* Content */}
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
            {/* Intro */}
            <p style={{
              fontSize: 15,
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: 40,
              paddingBottom: 32,
              borderBottom: '1px solid var(--subtle)',
            }}>
              This Privacy Policy applies to the <strong style={{ color: 'var(--text)' }}>Culture Pocket</strong> mobile application, together with any related services operated by Jorge Casas (collectively, the "Application"). Jorge Casas is hereby referred to as the "Service Provider".
            </p>

            {/* Sections */}
            {sections.map(({ title, content }, i) => (
              <section key={title} style={{
                marginBottom: i < sections.length - 1 ? 36 : 0,
                paddingBottom: i < sections.length - 1 ? 36 : 0,
                borderBottom: i < sections.length - 1 ? '1px solid var(--subtle)' : 'none',
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
                <div style={{
                  fontSize: 15,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}>
                  <style>{`
                    .privacy-content p { margin-bottom: 12px; }
                    .privacy-content p:last-child { margin-bottom: 0; }
                    .privacy-content ul { margin: 10px 0 12px 20px; }
                    .privacy-content ul li { margin-bottom: 6px; }
                    .privacy-content a { color: var(--accent-book); text-decoration: underline; text-underline-offset: 3px; }
                    .privacy-content strong { color: var(--text); font-weight: 600; }
                  `}</style>
                  <div className="privacy-content">{content}</div>
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '32px 24px',
        borderTop: '1px solid var(--subtle)',
        fontSize: 13,
        color: 'var(--text-secondary)',
      }}>
        <p>© 2026 Culture Pocket · All rights reserved · <Link to="/" style={{ color: 'var(--accent-book)' }}>Back to home</Link></p>
      </footer>
    </div>
  )
}
