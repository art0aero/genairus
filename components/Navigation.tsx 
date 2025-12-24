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