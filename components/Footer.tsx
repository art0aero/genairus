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