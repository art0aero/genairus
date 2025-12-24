'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Settings, BookOpen } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: Cpu,
    title: 'Интеграция агентных систем',
    description: 'Разработка и внедрение ИИ-агентов на локальных или облачных моделях, адаптированных под вашу инфраструктуру'
  },
  {
    icon: Zap,
    title: 'Автоматизация процессов',
    description: 'Обработка данных, выполнение целевых действий, интеграция в IT-систему компании'
  },
  {
    icon: Settings,
    title: 'Период отладки',
    description: 'Тестирование и оптимизация решения на выделенном временном отрезке'
  },
  {
    icon: BookOpen,
    title: 'Обучение команды',
    description: 'Мастер-классы по использованию ИИ-чатов и агентов (задачи, взаимодействие, безопасность)'
  }
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="blur-overlay absolute top-40 right-20 opacity-30"></div>

      <div className="container-genairus relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Что мы <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">предлагаем</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Полный спектр услуг для интеграции ИИ-агентов в ваш бизнес
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-neon-cyan/20 bg-dark-secondary/50 hover:border-neon-cyan/50 transition-all group cursor-pointer glow-cyan"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-4 p-3 bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 rounded-lg inline-block"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <service.icon className="w-6 h-6 text-neon-cyan" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-cyan transition-all">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}