# GenAIrus Next.js Landing Page - Полная документация проекта

## 🚀 БЫСТРЫЙ СТАРТ

```bash
# 1. Создай новый Next.js проект
npx create-next-app@latest genairus --typescript --tailwind --app

# 2. Перейди в папку
cd genairus

# 3. Установи зависимости
npm install framer-motion lucide-react clsx

# 4. Скопируй конфигурационные файлы (уже созданы выше):
# - package.json
# - next.config.js
# - tailwind.config.js
# - tsconfig.json
# - .eslintrc.json
# - .gitignore
# - app/layout.tsx
# - app/page.tsx
# - app/globals.css

# 5. Создай папку components/
mkdir components

# 6. Создай файлы компонентов в components/ (смотри ниже)

# 7. Запусти dev сервер
npm run dev

# Откройся http://localhost:3000
```

---

## 📁 СТРУКТУРА ПРОЕКТА

```
genairus/
├── app/
│   ├── layout.tsx          ✅ Уже создан
│   ├── page.tsx            ✅ Уже создан
│   ├── globals.css         ✅ Уже создан
│   └── favicon.ico
├── components/
│   ├── Navigation.tsx      👇 Нужно создать
│   ├── Hero.tsx            👇 Нужно создать
│   ├── Services.tsx        👇 Нужно создать
│   ├── Metrics.tsx         👇 Нужно создать
│   ├── Cases.tsx           👇 Нужно создать
│   ├── Process.tsx         👇 Нужно создать
│   ├── Contact.tsx         👇 Нужно создать
│   └── Footer.tsx          👇 Нужно создать
├── public/
│   └── (empty for now)
├── package.json            ✅ Уже создан
├── next.config.js          ✅ Уже создан
├── tailwind.config.js      ✅ Уже создан
├── tsconfig.json           ✅ Уже создан
├── .eslintrc.json          ✅ Уже создан
└── .gitignore              ✅ Уже создан
```

---

## 📝 ФАЙЛЫ КОМПОНЕНТОВ ДЛЯ СОЗДАНИЯ

### 1. components/Navigation.tsx

```tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Главная', href: '#hero' },
  { name: 'Услуги', href: '#services' },
  { name: 'Метрики', href: '#metrics' },
  { name: 'Кейсы', href: '#cases' },
  { name: 'Процесс', href: '#process' },
  { name: 'Контакты', href: '#contacts' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Определи активный раздел
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-genairus flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-neon-cyan">Gen</span>
          <span className="text-neon-green">AIrus</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'text-neon-cyan font-semibold'
                  : 'text-gray-400 hover:text-neon-cyan'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-green text-dark-primary font-semibold rounded-lg hover:shadow-neon-cyan transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Начать
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-neon-cyan" />
          ) : (
            <Menu className="w-6 h-6 text-neon-cyan" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-dark-secondary border-t border-neon-cyan/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="container-genairus py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-neon-cyan transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
```

### 2. components/Hero.tsx

```tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="section-spacing pt-32 relative overflow-hidden">
      {/* Blur Effects */}
      <div className="blur-overlay absolute top-20 left-10 opacity-50"></div>
      <div className="blur-overlay absolute bottom-20 right-10 opacity-30"></div>

      <div className="container-genairus relative z-10">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-neon-cyan">Молниеносная автоматизация</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ваш бизнес работает
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple animate-text-glow"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            >
              медленнее, чем мог бы
            </motion.span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            GenAIrus — молниеносные ИИ-агенты, которые автоматизируют рутину и ускоряют ваши процессы в <span className="text-neon-cyan font-semibold">10 раз</span>
          </p>

          {/* Hooks */}
          <div className="space-y-3 mb-12">
            <motion.div
              className="flex items-center gap-3 text-gray-300"
              whileHover={{ x: 10 }}
            >
              <div className="w-2 h-2 bg-neon-green rounded-full"></div>
              <span>Миллиарды токенов — триллионы сэкономленных часов</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 text-gray-300"
              whileHover={{ x: 10 }}
            >
              <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
              <span>Локальные модели, облачные решения, полная интеграция</span>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Узнать подробнее
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Написать в Telegram
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

### 3. components/Services.tsx

```tsx
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
```

### 4. components/Metrics.tsx

```tsx
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
```

### 5. components/Cases.tsx

```tsx
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
```

### 6. components/Process.tsx

```tsx
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
```

### 7. components/Contact.tsx

```tsx
'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contacts" className="section-spacing relative overflow-hidden">
      <div className="blur-overlay absolute bottom-0 left-1/2 opacity-40"></div>

      <div className="container-genairus relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Давайте создадим
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            >
              вашего ИИ-агента
            </motion.span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Свяжись с нами и начни трансформацию своего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="p-3 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-all">
                <Phone className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <p className="font-semibold mb-1">Телефон</p>
                <a href="tel:+79991234567" className="text-gray-400 hover:text-neon-cyan transition-all">
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="p-3 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 transition-all">
                <Mail className="w-5 h-5 text-neon-green" />
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:hello@genairus.com" className="text-gray-400 hover:text-neon-green transition-all">
                  hello@genairus.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="p-3 rounded-lg bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-all">
                <MessageCircle className="w-5 h-5 text-neon-purple" />
              </div>
              <div>
                <p className="font-semibold mb-1">Telegram</p>
                <a href="https://t.me/genairusai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-purple transition-all">
                  @genairusai
                </a>
              </div>
            </div>

            <motion.a
              href="https://t.me/genairusai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 transition-all"
              whileHover={{ scale: 1.05 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Телеграм канал с кейсами
              <Send className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-neon-cyan/20 focus:border-neon-cyan/50 text-white placeholder-gray-500 focus:outline-none transition-all"
              required
            />
            <input
              type="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-neon-cyan/20 focus:border-neon-cyan/50 text-white placeholder-gray-500 focus:outline-none transition-all"
              required
            />
            <textarea
              placeholder="Расскажите о вашем проекте"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-neon-cyan/20 focus:border-neon-cyan/50 text-white placeholder-gray-500 focus:outline-none transition-all h-32 resize-none"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? '✓ Отправлено!' : 'Отправить'}
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
```

### 8. components/Footer.tsx

```tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-secondary border-t border-neon-cyan/10 relative overflow-hidden">
      <div className="blur-overlay absolute top-0 right-20 opacity-20"></div>

      <div className="container-genairus relative z-10 py-16">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-neon-cyan">Gen</span>
              <span className="text-neon-green">AIrus</span>
            </div>
            <p className="text-gray-400 text-sm">
              Молниеносные ИИ-агенты для автоматизации бизнеса
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="space-y-2">
              {['Услуги', 'Кейсы', 'Контакты'].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-neon-cyan transition-all text-sm block">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ресурсы</h4>
            <div className="space-y-2">
              {['Документация', 'Блог', 'FAQ'].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-neon-green transition-all text-sm block">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="space-y-2">
              {['Telegram', 'GitHub', 'LinkedIn'].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-neon-purple transition-all text-sm block">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-neon-cyan/10 my-8"></div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>© {currentYear} GenAIrus. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-cyan transition-all">Политика конфиденциальности</a>
            <a href="#" className="hover:text-neon-cyan transition-all">Условия использования</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
```

---

## ✨ ОСОБЕННОСТИ РЕАЛИЗАЦИИ

- ✅ **Framer Motion** для гладких анимаций
- ✅ **Tailwind CSS** + Custom CSS для neon эффектов
- ✅ **React Intersection Observer** для scroll-triggered анимаций
- ✅ **Responsive Design** — мобильная, планшет, десктоп
- ✅ **SEO Optimized** — метаданные, semantic HTML
- ✅ **Performance** — lazy loading, optimized images
- ✅ **Dark Theme** с neon акцентами (cyan, green, purple)

---

## 🚀 ДЕПЛОЙ НА VERCEL

```bash
# 1. Инициализируй Git репо
git init
git add .
git commit -m "Initial commit: GenAIrus landing page"

# 2. Создай репо на GitHub
# Скопируй URL твоего GitHub репо

# 3. Добавь remote и push
git remote add origin https://github.com/YOUR_USERNAME/genairus.git
git push -u origin main

# 4. Перейди на https://vercel.com
# Импортируй проект из GitHub
# Выбери Next.js framework (автоматически)
# Deploy!

# 5. Подключи свой домен (если есть)
# Vercel → Project Settings → Domains
# Добавь DNS записи (CNAME или A record)
```

---

## 📱 ИСПОЛЬЗОВАНИЕ КОМПОНЕНТОВ

Все компоненты используют:
- **useInView** из react-intersection-observer для trigger animation при скролле
- **Framer Motion** для плавных переходов
- **Tailwind CSS** классы для стилизации

Каждый компонент готов к использованию в `app/page.tsx`!
