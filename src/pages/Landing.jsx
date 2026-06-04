import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import PhoneMockup from '../components/PhoneMockup.jsx'
import { Link } from 'react-router-dom'
import {
  BookOpen, Film, Tv, Gamepad2,
  Lock, Zap, Cloud, Search,
} from 'lucide-react'

const APP_STORE_URL = '#appstore'

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
}

const staggerParent = {
  initial: {},
  whileInView: {},
  viewport: { once: true, amount: 0.1 },
  transition: { staggerChildren: 0.1 },
}

const staggerChild = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

// ─── App Store Button ────────────────────────────────────────────────────────

function AppStoreButton({ size = 'default' }) {
  const large = size === 'large'
  return (
    <a
      href={APP_STORE_URL}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: large ? 14 : 11,
        background: 'var(--text)',
        color: 'var(--bg)',
        padding: large ? '16px 28px' : '13px 22px',
        borderRadius: 14,
        textDecoration: 'none',
        transition: 'opacity 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      <svg width={large ? 24 : 20} height={large ? 29 : 24} viewBox="0 0 24 29" fill="currentColor">
        <path d="M17.05 15.39c-.03-3.2 2.62-4.74 2.74-4.82-1.5-2.19-3.82-2.49-4.64-2.52-1.97-.2-3.85 1.16-4.85 1.16-1 0-2.54-1.13-4.18-1.1-2.14.03-4.12 1.25-5.22 3.16-2.24 3.87-.57 9.6 1.6 12.74 1.07 1.54 2.33 3.26 3.99 3.2 1.61-.07 2.22-1.03 4.17-1.03 1.94 0 2.5 1.03 4.2 1 1.73-.03 2.82-1.56 3.87-3.11a15.6 15.6 0 001.75-3.6c-.04-.02-3.39-1.3-3.43-5.08z"/>
        <path d="M13.9 5.82c.87-1.07 1.46-2.54 1.3-4.02-1.26.05-2.82.85-3.73 1.9-.81.94-1.53 2.45-1.34 3.89 1.41.1 2.85-.71 3.77-1.77z"/>
      </svg>
      <div>
        <div style={{ fontSize: large ? 11 : 10, opacity: 0.65, letterSpacing: '0.3px' }}>Download on the</div>
        <div style={{ fontSize: large ? 19 : 16, fontWeight: 600, letterSpacing: '-0.3px', lineHeight: 1.1 }}>App Store</div>
      </div>
    </a>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 24px 80px',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 60,
        alignItems: 'center',
      }}
      className="hero-grid"
      >
        {/* Left */}
        <div style={{ maxWidth: 600 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-2px',
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Your personal<br />archive of<br />culture.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: 18,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 460,
            }}
          >
            For people who finish what they start. Who collect stories. Who remember the book that changed them and want to find the next one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}
          >
            <AppStoreButton size="large" />
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
              Free to download · One-time upgrade €12.99
            </span>
          </motion.div>

        </div>

        {/* Right — phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
          className="hero-phone"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Categories ──────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    Icon: BookOpen,
    name: 'Books',
    accent: '#6A4B3A',
    tagline: 'Your reading life, annotated.',
    desc: 'Log title, author, year, and the cover that made you stop. Your personal library, growing one read at a time.',
    fields: ['Title & author', 'Publication year', 'Date finished', 'Cover art'],
  },
  {
    Icon: Film,
    name: 'Films',
    accent: '#7B6F5C',
    tagline: 'Your own Letterboxd.',
    desc: 'Track every film with director, release year, and date watched. Search cover art and attach it in seconds.',
    fields: ['Title & director', 'Release year', 'Date watched', 'Custom poster'],
  },
  {
    Icon: Tv,
    name: 'Series',
    accent: '#556B5E',
    tagline: 'Never lose your place.',
    desc: 'Track by season. Know exactly what you finished, what you dropped, and what you plan to watch next.',
    fields: ['Show & season', 'Network / platform', 'Date finished', 'Episode tracking'],
  },
  {
    Icon: Gamepad2,
    name: 'Games',
    accent: '#2C2417',
    tagline: 'Clear your backlog.',
    desc: 'Log platform, developer, and completion date. Your games collection, finally organized.',
    fields: ['Title & developer', 'Platform', 'Release year', 'Completion date'],
  },
]

function Categories() {
  return (
    <section style={{ padding: '100px 24px', background: 'var(--nav)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div {...fadeUp} style={{ marginBottom: 60, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 16 }}>
            Read. Watch. Play.<br />Remember all of it.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
            Because good taste doesn't stop at books. It's the film that stayed with you for weeks, the series you finished in a weekend, the game you'll never forget. All of it, together.
          </p>
        </motion.div>

        <motion.div
          {...staggerParent}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {CATEGORIES.map(({ Icon, name, accent, tagline, desc, fields }) => (
            <motion.div
              key={name}
              {...staggerChild}
              style={{
                background: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                background: accent + '15',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={24} color={accent} strokeWidth={1.75} />
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 13, color: accent, fontWeight: 500, marginBottom: 10 }}>{tagline}</div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto' }}>
                {fields.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0, display: 'inline-block' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Features ────────────────────────────────────────────────────────────────

const CALENDAR_CATS = [
  { key: 'book',   Icon: BookOpen, color: '#6A4B3A' },
  { key: 'film',   Icon: Film,     color: '#7B6F5C' },
  { key: 'series', Icon: Tv,       color: '#556B5E' },
  { key: 'game',   Icon: Gamepad2, color: '#2C2417' },
]

// 16 weeks × 7 days — [week, dayOfWeek, category]
const CALENDAR_ACTS = [
  [0,1,'book'],[0,4,'film'],
  [1,0,'book'],[1,3,'series'],
  [2,2,'book'],[2,5,'film'],
  [3,1,'game'],[3,4,'book'],
  [4,0,'series'],[4,2,'book'],[4,6,'film'],
  [5,1,'book'],[5,5,'game'],
  [6,3,'book'],[6,4,'series'],
  [7,0,'film'],[7,2,'book'],[7,5,'book'],
  [8,1,'game'],[8,4,'film'],
  [9,0,'book'],[9,3,'series'],[9,6,'book'],
  [10,2,'book'],[10,5,'film'],
  [11,1,'series'],[11,4,'book'],
  [12,0,'film'],[12,3,'book'],[12,5,'game'],
  [13,2,'book'],[13,6,'series'],
  [14,1,'book'],[14,4,'film'],
  [15,0,'game'],[15,3,'book'],[15,5,'series'],
]

function CalendarHeatmap() {
  const WEEKS = 16
  const CELL = 18
  const GAP = 3

  const grid = Array.from({ length: WEEKS }, () => Array(7).fill(null))
  CALENDAR_ACTS.forEach(([w, d, cat]) => { grid[w][d] = cat })

  const catMap = Object.fromEntries(CALENDAR_CATS.map(c => [c.key, c]))

  const monthLabels = [
    { label: 'Sep', week: 0 },
    { label: 'Oct', week: 4 },
    { label: 'Nov', week: 8 },
    { label: 'Dec', week: 12 },
  ]

  return (
    <div style={{ padding: '24px', background: 'var(--card)', borderRadius: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 12 }}>
        Activity, 2024
      </div>

      {/* Month labels */}
      <div style={{ position: 'relative', height: 14, marginBottom: 6 }}>
        {monthLabels.map(({ label, week }) => (
          <span key={label} style={{
            position: 'absolute',
            left: week * (CELL + GAP),
            fontSize: 9,
            color: 'var(--text-secondary)',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}>
            {label}
          </span>
        ))}
      </div>

      {/* Grid: rows = days of week, cols = weeks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
        {Array.from({ length: 7 }, (_, d) => (
          <div key={d} style={{ display: 'flex', gap: GAP }}>
            {Array.from({ length: WEEKS }, (_, w) => {
              const cat = grid[w][d]
              if (!cat) return (
                <div key={w} style={{
                  width: CELL, height: CELL, borderRadius: 4,
                  background: 'var(--subtle)', flexShrink: 0,
                }} />
              )
              const { Icon, color } = catMap[cat]
              return (
                <div key={w} style={{
                  width: CELL, height: CELL, borderRadius: 4,
                  background: color + '20',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={11} color={color} strokeWidth={2.5} />
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 16, marginTop: 14, flexWrap: 'wrap' }}>
        {CALENDAR_CATS.map(({ key, Icon, color }) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Icon size={11} color={color} strokeWidth={2.5} />
            <span style={{ fontSize: 11, color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{key}s</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ThemeSwatches() {
  const themes = [
    { name: 'Library', bg: '#F5F2E9', nav: '#EDE5D6', accent: '#6A4B3A' },
    { name: 'Night', bg: '#1A1A2E', nav: '#16213E', accent: '#E94560' },
    { name: 'Rose', bg: '#FFF5F5', nav: '#FFE8E8', accent: '#C87878' },
    { name: 'Lidia Blue', bg: '#F0F4FF', nav: '#E6EDFF', accent: '#4A72C4' },
    { name: 'Tactical', bg: '#1B2418', nav: '#232E1C', accent: '#6B8F4E' },
    { name: 'Auto', bg: 'linear-gradient(135deg, #F5F2E9 50%, #1A1A2E 50%)', nav: '#D9D2C3', accent: '#7B6F5C' },
  ]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {themes.map(({ name, bg, nav, accent }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: bg,
            border: '2px solid var(--subtle)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 14, background: nav }} />
            <div style={{
              position: 'absolute',
              top: 10,
              left: 10,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: accent,
            }} />
          </div>
          <span style={{ fontSize: 11, color: 'var(--text-secondary)', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  )
}

const FEATURES = [
  {
    label: 'Activity Calendar',
    headline: 'Every story you lived this year.',
    body: 'Look back at any day and see what you were reading, watching, or playing. A quiet record of how you spent your time with stories.',
    visual: <CalendarHeatmap />,
  },
  {
    label: 'Six Themes',
    headline: 'For whoever you are today.',
    body: 'Warm and analog for Sunday afternoons in a bookshop. Dark and focused for late-night reading sessions. Soft rose for the romantics. Lidia Blue, for my love. Tactical Green for the ones who wear field watches, read topographic maps, and treat their backlog like a mission log. The app becomes yours.',
    visual: (
      <div style={{ padding: '24px', background: 'var(--card)', borderRadius: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 20 }}>Available themes</div>
        <ThemeSwatches />
      </div>
    ),
  },
  {
    label: 'Offline-first',
    headline: 'Yours. Just yours.',
    body: 'No account. No cloud you didn\'t ask for. No one looking at what you read. Your archive lives on your phone, quiet and private, the way a personal journal should.',
    visual: (
      <div style={{ padding: '32px 24px', background: 'var(--card)', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { Icon: Lock,  text: 'No account required', sub: 'Your data, only yours' },
          { Icon: Zap,   text: 'Instant load, always', sub: 'Fully offline capable' },
          { Icon: Cloud, text: 'Cloud sync (Pro)', sub: 'Supabase, backup and sync' },
        ].map(({ Icon, text, sub }) => (
          <div key={text} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{
              width: 44, height: 44, borderRadius: 11,
              background: 'var(--nav)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={20} color="var(--accent-book)" strokeWidth={1.75} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{text}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Full-text Search',
    headline: 'Ten years from now, it\'s still there.',
    body: 'That novel you read in 2019. The film you saw on a flight. The game you finished at 3am. Search once, find it. Your archive grows with you and never gets in the way.',
    visual: (
      <div style={{ padding: '24px', background: 'var(--card)', borderRadius: 16 }}>
        <div style={{
          background: 'var(--nav)',
          borderRadius: 10,
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 16,
        }}>
          <Search size={14} color="var(--text-secondary)" strokeWidth={2} />
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>dune</span>
        </div>
        {[
          { Icon: BookOpen, text: 'Dune', sub: 'Frank Herbert · 1965', color: '#6A4B3A' },
          { Icon: BookOpen, text: 'Dune Messiah', sub: 'Frank Herbert · 1969', color: '#6A4B3A' },
          { Icon: Film,     text: 'Dune: Part Two', sub: 'Denis Villeneuve · 2024', color: '#7B6F5C' },
        ].map(({ Icon, text, sub, color }) => (
          <div key={text} style={{
            display: 'flex', gap: 10, alignItems: 'center',
            padding: '10px 0',
            borderBottom: '1px solid var(--subtle)',
          }}>
            <Icon size={18} color={color} strokeWidth={1.75} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{text}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

function Features() {
  return (
    <section id="features" style={{ padding: '100px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div {...fadeUp} style={{ marginBottom: 72, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 16 }}>
            Your cultural life,<br />made visible.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto' }}>
            Because the things you consume say more about you than anything else.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {FEATURES.map(({ label, headline, body, visual }, i) => (
            <motion.div
              key={label}
              {...fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 64,
                alignItems: 'center',
              }}
              className="features-row"
            >
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: 'var(--accent-book)',
                  display: 'block',
                  marginBottom: 12,
                }}>
                  {label}
                </span>
                <h3 style={{
                  fontSize: 'clamp(26px, 3vw, 36px)',
                  fontWeight: 700,
                  letterSpacing: '-1px',
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}>
                  {headline}
                </h3>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {body}
                </p>
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                {visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

function Pricing() {
  const freeFeatures = [
    'Unlimited entries',
    'Books, Films, Series & Games',
    'Cover art search',
    'Activity calendar',
    'Full-text search',
    'Yearly grouping & collapsing',
    'Swipe gestures',
    'Library, Night & Auto themes',
    '9 languages',
    'Offline-first, no account',
  ]
  const proFeatures = [
    'Everything in Free',
    'Cloud sync & backup (Supabase)',
    'Auto-sync on every change',
    'Manual sync option',
    'Rose theme + alternate icon',
    'Lidia Blue theme + alternate icon',
    'Tactical Green theme + dot-grid + icon',
    'Promo code redemption',
    'Restore purchase',
    'Priority support',
  ]

  return (
    <section id="pricing" style={{ padding: '100px 24px', background: 'var(--nav)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 16 }}>
            No subscription.<br />Ever.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto' }}>
            You buy a book once. You keep it forever. This works the same way.
          </p>
        </motion.div>

        <motion.div
          {...staggerParent}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}
          className="pricing-grid"
        >
          {/* Free */}
          <motion.div
            {...staggerChild}
            style={{
              background: 'var(--card)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px 32px',
            }}
          >
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>Free</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-1.5px', color: 'var(--text)' }}>€0</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>Download for free</div>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {freeFeatures.map(f => (
                <li key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-series)', flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro */}
          <motion.div
            {...staggerChild}
            style={{
              background: 'var(--text)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px 32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.12)',
              color: 'rgba(245,242,233,0.9)',
              padding: '4px 10px',
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}>
              ONE-TIME
            </div>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(245,242,233,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>Pro</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-1.5px', color: '#F5F2E9' }}>€12.99</div>
              <div style={{ fontSize: 14, color: 'rgba(245,242,233,0.55)', marginTop: 4 }}>Pay once, yours forever</div>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {proFeatures.map(f => (
                <li key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(245,242,233,0.75)' }}>
                  <span style={{ color: '#C4A882', flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div {...fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
          <AppStoreButton size="large" />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Languages ───────────────────────────────────────────────────────────────

const LANGUAGES = [
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇪🇸', name: 'Español' },
  { flag: '🇫🇷', name: 'Français' },
  { flag: '🇩🇪', name: 'Deutsch' },
  { flag: '🇵🇹', name: 'Português' },
  { flag: '🇮🇹', name: 'Italiano' },
  { flag: '🇯🇵', name: '日本語' },
  { flag: '🇨🇳', name: '中文' },
  { flag: '🇰🇷', name: '한국어' },
]

function Languages() {
  return (
    <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <motion.div {...fadeUp}>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 12 }}>
            Stories don't have a language.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 40 }}>
            Neither does Culture Pocket.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
          }}>
            {LANGUAGES.map(({ flag, name }) => (
              <div key={name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--card)',
                borderRadius: 10,
                padding: '10px 16px',
                fontSize: 14,
                color: 'var(--text-secondary)',
              }}>
                <span style={{ fontSize: 18 }}>{flag}</span>
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Final CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'var(--text)',
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <motion.div {...fadeUp}>
          <img src="./icon.png" alt="Culture Pocket" style={{ width: 72, height: 72, borderRadius: 18, marginBottom: 24 }} />
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700,
            color: '#F5F2E9',
            letterSpacing: '-2px',
            lineHeight: 1.05,
            marginBottom: 24,
          }}>
            Some people collect things.<br />You collect stories.
          </h2>
          <p style={{
            fontSize: 17,
            color: 'rgba(245,242,233,0.6)',
            lineHeight: 1.7,
            marginBottom: 48,
            maxWidth: 420,
            margin: '0 auto 48px',
          }}>
            This is the place to keep them.
          </p>
          <AppStoreButton size="large" />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{
      padding: '40px 24px',
      background: 'var(--text)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="./icon.png" alt="Culture Pocket" style={{ width: 28, height: 28, borderRadius: 7 }} />
          <span style={{ fontSize: 15, fontWeight: 600, color: 'rgba(245,242,233,0.7)' }}>
            Culture Pocket
          </span>
        </div>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <a href={APP_STORE_URL} style={{
            fontSize: 13,
            color: 'rgba(245,242,233,0.5)',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'rgba(245,242,233,0.9)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,242,233,0.5)'}
          >
            App Store
          </a>
          <Link to="/privacy" style={{
            fontSize: 13,
            color: 'rgba(245,242,233,0.5)',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'rgba(245,242,233,0.9)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,242,233,0.5)'}
          >
            Privacy Policy
          </Link>
          <a href="mailto:jorgecasase@gmail.com" style={{
            fontSize: 13,
            color: 'rgba(245,242,233,0.5)',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'rgba(245,242,233,0.9)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,242,233,0.5)'}
          >
            Contact
          </a>
        </div>

        <span style={{ fontSize: 12, color: 'rgba(245,242,233,0.3)' }}>
          © 2026 Culture Pocket · Made by Jorge Casas
        </span>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Features />
      <Pricing />
      <Languages />
      <FinalCTA />
      <Footer />
    </div>
  )
}
