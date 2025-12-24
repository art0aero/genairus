'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Metrics from '@/components/Metrics'
import Cases from '@/components/Cases'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Metrics />
      <Cases />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
