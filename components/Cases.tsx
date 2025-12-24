'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

const cases = [
  {
    title: 'Финтех — Автоматизация документооборота',
    metrics: '+40% скорость | 500+ документов/день | Локальное',
    description: 'Локальный ИИ-агент на LLaMA-2 автоматизирует обработку контрактов, KYC, compliance. Результат: 2 FTE высвобождены, 1.2M руб/год экономии',
    color: 'from-neon-cyan'
  },
  {
    title: 'Производство — Система анализа брака',
    metrics: '15% → 8.2% брак | 95% точность | Локальное',
    description: 'Мультивекторный агент на 120+ датчиков. Real-time анализ, HNSW индексирование. Упреждающие алерты → 2.8M руб/год экономии',
    color: 'from-neon-green'
  },
  {
    title: 'SaaS — Чатбот поддержки',
    metrics: '3000+ запросов/месяц | 62% без человека | Облачное',
    description: 'Облачный RAG-агент на GPT-4 + Qdrant. Поиск документации, генерация ответов, маршрутизация. CSAT +28%, 1.5 FTE экономии',
    color: 'from-neon-purple'
  },
  {
    title: 'Логистика — Умное управление складом',
    metrics: 'Дефициты ↓43% | Запасы ↓27% | Точность 97%',
    description: 'Многоагентная система: прогноз, оптимизация, умное размещение. Интеграция с 1С и RFID. ROI за 5 месяцев',
    color: 'from-neon-cyan'
  },
  {
    title: 'Клиника — Умная запись пациентов',
    metrics: 'No-show ↓65% | Утилизация +36% | Satisfaction +22%',
    description: 'Voice/Chat агент (Asterisk + Mistral 7B). Голосовая запись, triage, smart scheduling. 300 звонков/неделю → 1 оператор',
    color: 'from-neon-green'
  }
]

export default function Cases() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="cases" className="section-spacing relative overflow-hidden">
      <div className="blur-overlay absolute top-20 left-1/2 opacity-30"></div>

      <div className="container-genairus relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-neon-cyan">Успешные</span> проекты
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Кейсы реальных клиентов, достигших результатов с GenAIrus
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="horizontal-scroll flex gap-6 pb-4"
        >
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-full sm:w-96 p-6 rounded-lg border border-neon-cyan/20 bg-gradient-to-br ${caseItem.color}/5 hover:border-neon-cyan/50 transition-all group cursor-pointer`}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-3 text-sm font-mono text-neon-green">
                {caseItem.metrics}
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-neon-cyan transition-all line-clamp-2">
                {caseItem.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {caseItem.description}
              </p>
              <div className="flex items-center text-neon-cyan text-sm font-semibold group-hover:gap-2 transition-all gap-1">
                Подробнее
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          👆 Прокрути для просмотра больше кейсов
        </p>
      </div>
    </section>
  )
}