import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'

const SCREENS = [
  { src: './app/home.png',   alt: 'Culture Pocket home' },
  { src: './app/detail.png', alt: 'Game detail view' },
  { src: './app/books.png',  alt: 'Books list' },
  { src: './app/themes.png', alt: 'Themes settings' },
  { src: './app/night.png',  alt: 'Night theme' },
]

const WARM_SHADOW = '0 0 0 1px rgba(255,255,255,0.08) inset, 0 60px 120px rgba(106,75,58,0.45), 0 24px 48px rgba(44,36,23,0.3)'
const GLOW_SHADOW = '0 0 0 1px rgba(255,255,255,0.12) inset, 0 60px 140px rgba(106,75,58,0.7), 0 24px 60px rgba(196,168,130,0.35)'

export default function PhoneMockup() {
  const [current, setCurrent] = useState(0)
  const tiltControls = useAnimationControls()
  const glowControls = useAnimationControls()

  const transition = async (next) => {
    glowControls.start({
      boxShadow: GLOW_SHADOW,
      transition: { duration: 0.25 },
    })
    await tiltControls.start({
      rotateY: 18,
      rotateZ: -2,
      scale: 0.93,
      y: -12,
      transition: { duration: 0.22, ease: 'easeIn' },
    })
    setCurrent(next)
    await tiltControls.start({
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    })
    glowControls.start({
      boxShadow: WARM_SHADOW,
      transition: { duration: 0.6 },
    })
  }

  useEffect(() => {
    const t = setInterval(() => {
      transition((current + 1) % SCREENS.length)
    }, 3200)
    return () => clearInterval(t)
  }, [current])

  const goTo = (i) => { if (i !== current) transition(i) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, perspective: 1200 }}>

      {/* Float wrapper */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Tilt + glow wrapper */}
        <motion.div
          animate={tiltControls}
          initial={{ rotateY: 0, rotateZ: 0, scale: 1, y: 0 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            animate={glowControls}
            initial={{ boxShadow: WARM_SHADOW }}
            style={{
              width: 380,
              height: 780,
              background: '#1C1410',
              borderRadius: 38,
              padding: 5,
              position: 'relative',
              flexShrink: 0,
            }}
          >
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

            {/* Reflection shine */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '45%',
              borderRadius: '38px 38px 60% 60%',
              background: 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, transparent 60%)',
              zIndex: 20,
              pointerEvents: 'none',
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
              <AnimatePresence initial={false} mode="sync">
                <motion.img
                  key={current}
                  src={SCREENS[current].src}
                  alt={SCREENS[current].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
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
          </motion.div>
        </motion.div>
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
