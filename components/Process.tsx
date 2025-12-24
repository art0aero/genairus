'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'

const steps = [
  { num: 1, title: 'Диагностика', desc: 'Анализ ваших процессов и задач' },
  { num: 2, title: 'Дизайн решения', desc: 'Выбор архитектуры и модели ИИ' },
  { num: 3, title: 'Разработка & интеграция', desc: 'Создание и встраивание агента' },
  { num: 4, title: 'Отладка & оптимизация', desc: 'Тестирование и обучение команды' },
  { num: 5, title: 'Запуск & поддержка', desc: 'Production запуск и мониторинг' }
]

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      <div className="blur-overlay absolute top-40 right-40 opacity-40"></div>

      <div className="container-genairus relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Как мы <span className="text-neon-green">работаем</span>
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Проверенный процесс успешной интеграции ИИ-агентов
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple opacity-20"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Number Circle */}
                <motion.div
                  className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 border-2 border-neon-cyan flex items-center justify-center mx-auto md:mx-0 text-2xl font-bold text-neon-cyan glow-cyan"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.num}
                </motion.div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>

                {/* Check Mark */}
                <motion.div
                  className="mt-4 flex justify-center md:justify-start"
                  animate={inView ? { opacity: [0, 1] } : {}}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                >
                  <Check className="w-5 h-5 text-neon-green" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline info */}
        <motion.div
          className="mt-16 p-6 rounded-lg border border-neon-green/30 bg-neon-green/5 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-300">
            ⏱️ От диагностики до полного запуска: <span className="text-neon-green font-semibold">8-12 недель</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}