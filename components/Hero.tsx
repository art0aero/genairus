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