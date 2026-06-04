import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SCREENSHOTS = [
  { src: './screenshots/1.png', alt: 'Culture Pocket home with activity calendar' },
  { src: './screenshots/2.png', alt: 'Books list grouped by year' },
  { src: './screenshots/3.png', alt: 'Game detail view' },
  { src: './screenshots/4.png', alt: 'Themes and settings' },
  { src: './screenshots/5.png', alt: 'Cloud sync' },
]

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent(prev => (prev + 1) % SCREENSHOTS.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      userSelect: 'none',
    }}>
      {/* Image container */}
      <div style={{
        position: 'relative',
        width: 280,
        height: 560,
        overflow: 'hidden',
      }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={current}
            src={SCREENSHOTS[current].src}
            alt={SCREENSHOTS[current].alt}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
          />
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 7 }}>
        {SCREENSHOTS.map((_, i) => (
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
