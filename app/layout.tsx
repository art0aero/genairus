import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Metrics from '@/components/Metrics'
import Cases from '@/components/Cases'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'GenAIrus',
  description: 'ИИ-агенты для бизнеса',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navigation />
        <Hero />
        <Services />
        <Metrics />
        <Cases />
        <Process />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  )
}
