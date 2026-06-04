import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SCREENS = [
  { src: './app/home.png',   alt: 'Culture Pocket home' },
  { src: './app/detail.png', alt: 'Game detail view' },
  { src: './app/books.png',  alt: 'Books list' },
  { src: './app/themes.png', alt: 'Themes settings' },
  { src: './app/night.png',  alt: 'Night theme' },
]

export default function PhoneMockup() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(p => (p + 1) % SCREENS.length)
    }, 3400)
    return () => clearInterval(t)
  }, [])

  const goTo = (i) => setCurrent(i)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>

      {/* Analog breathe float */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-0.8, 0.8, -0.8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'drop-shadow(0 48px 64px rgba(44,36,23,0.38)) drop-shadow(0 16px 32px rgba(106,75,58,0.22))' }}
      >
        {/* iPhone 16 Pro frame */}
        <div style={{
          width: 340,
          height: 740,
          position: 'relative',
          borderRadius: 52,
          /* Titanium frame */
          background: 'linear-gradient(145deg, #3A3530 0%, #1C1A17 40%, #2A2520 70%, #3A3530 100%)',
          padding: '3px',
          boxShadow: `
            inset 0 0 0 1px rgba(255,255,255,0.12),
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 0 0 1px rgba(0,0,0,0.6)
          `,
        }}>

          {/* Volume buttons left */}
          {[88, 148, 200].map((top, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: -3,
              top,
              width: 3,
              height: i === 0 ? 36 : 52,
              background: 'linear-gradient(to right, #2A2520, #3A3530)',
              borderRadius: '2px 0 0 2px',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
            }} />
          ))}

          {/* Power button right */}
          <div style={{
            position: 'absolute',
            right: -3,
            top: 160,
            width: 3,
            height: 72,
            background: 'linear-gradient(to left, #2A2520, #3A3530)',
            borderRadius: '0 2px 2px 0',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
          }} />

          {/* Screen glass */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: 50,
            overflow: 'hidden',
            background: '#0A0806',
            position: 'relative',
          }}>

            {/* Screen content */}
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={current}
                src={SCREENS[current].src}
                alt={SCREENS[current].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </AnimatePresence>

            {/* Dynamic Island */}
            <div style={{
              position: 'absolute',
              top: 14,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 34,
              background: '#000',
              borderRadius: 20,
              zIndex: 10,
              boxShadow: '0 0 0 1px rgba(255,255,255,0.04)',
            }} />

            {/* Glass reflection */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 50,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)',
              pointerEvents: 'none',
              zIndex: 20,
            }} />

          </div>
        </div>
      </motion.div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 7 }}>
        {SCREENS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 20 : 7,
              height: 7,
              borderRadius: 4,
              background: i === current ? 'var(--accent-book)' : 'var(--subtle)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
