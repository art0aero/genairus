'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const metrics = [
  { label: 'Обработанных токенов', value: 1000000000, suffix: '+' },
  { label: 'Интегрированных агентов', value: 10, suffix: '+' },
  { label: 'Локальных решений', value: 80, suffix: '%' }
]

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = target / 100
    const interval = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 20)

    return () => clearInterval(interval)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function Metrics() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="metrics" className="section-spacing relative overflow-hidden">
      <div className="blur-overlay absolute bottom-40 left-20 opacity-40"></div>

      <div className="container-genairus relative z-10">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Результаты наших <span className="text-neon-green">решений</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-lg border border-neon-green/30 bg-gradient-to-br from-neon-green/5 to-transparent hover:border-neon-green/60 transition-all glow-green"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-neon-green mb-2"
                animate={inView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, delay: index * 0.2 }}
              >
                <Counter target={metric.value} />
                <span>{metric.suffix}</span>
              </motion.div>
              <p className="text-gray-400">{metric.label}</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-neon-green/0 via-neon-green to-neon-green/0 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          className="mt-16 text-center text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p>
            Приватность и контроль вашей инфраструктуры — это приоритет. <span className="text-neon-cyan font-semibold">80% наших решений работают локально</span>, обеспечивая полную защиту данных
          </p>
        </motion.div>
      </div>
    </section>
  )
}