import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GenAIrus — Интеграция ИИ-агентов в бизнес',
  description: 'Молниеносные ИИ-агенты, которые автоматизируют рутину и ускоряют ваши процессы в 10 раз',
  keywords: 'AI agents, ИИ-агенты, автоматизация, интеграция, локальные модели, облачные решения',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'GenAIrus' }],
  openGraph: {
    type: 'website',
    url: 'https://genairus.com',
    title: 'GenAIrus — Интеграция ИИ-агентов в бизнес',
    description: 'Молниеносные ИИ-агенты для автоматизации бизнеса',
    siteName: 'GenAIrus',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-primary text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
