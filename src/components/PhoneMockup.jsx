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
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1)
      setCurrent(p => (p + 1) % SCREENS.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  const goTo = (i) => {
    setDir(i > current ? 1 : -1)
    setCurrent(i)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      {/* Phone frame */}
      <div style={{
        width: 260,
        height: 540,
        background: '#1C1410',
        borderRadius: 38,
        padding: 5,
        position: 'relative',
        flexShrink: 0,
        boxShadow: '0 0 0 1px rgba(255,255,255,0.07) inset, 0 32px 64px rgba(0,0,0,0.18)',
      }}>
        {/* Dynamic Island */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 72,
          height: 20,
          background: '#0A0806',
          borderRadius: 12,
          zIndex: 10,
        }} />

        {/* Screen */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: 34,
          overflow: 'hidden',
          position: 'relative',
          background: '#F5F2E9',
        }}>
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.img
              key={current}
              src={SCREENS[current].src}
              alt={SCREENS[current].alt}
              initial={{ opacity: 0, x: dir * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
        </div>
      </div>

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
