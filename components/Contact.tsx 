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