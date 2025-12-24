'use client'

import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import {  } from "module";rt Hero from '@/components/Hero'
import Services from '@/components/Services'
import Metrics from '@/components/Metrics'
import Cases from '@/components/Cases'
import {  } from "module";ort Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'GenAIrus — ИИ-агенты для бизнеса',
  description: 'Интеграция ИИ-агентов для автоматизации процессов в вашем бизнесе. Локальные модели, облачные решения, полная интеграция.',
  viewport: 'width=device-width, initial-scale=1',
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
      <body className="bg-slate-950 text-white overflow-x-hidden">
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