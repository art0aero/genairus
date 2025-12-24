export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Ваш бизнес работает медленнее, чем мог бы
          </h1>
          <p className="text-2xl text-slate-300 mb-8">
            GenAIrus — молниеносные ИИ-агенты, которые автоматизируют рутину и ускоряют процессы в 10 раз
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-1">
            Узнать подробнее
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Что мы предлагаем
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Интеграция агентных систем', desc: 'Разработка и внедрение ИИ-агентов на локальных или облачных моделях' },
              { title: 'Автоматизация процессов', desc: 'Обработка данных, выполнение целевых действий, интеграция в IT-систему' },
              { title: 'Период отладки', desc: 'Тестирование и оптимизация решения на выделенном временном отрезке' },
              { title: 'Обучение команды', desc: 'Мастер-классы по использованию ИИ-чатов и агентов' },
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-900/50 border border-emerald-500/30 hover:border-emerald-400/60 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">{service.title}</h3>
                <p className="text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Результаты наших решений
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '1 млрд+', label: 'обработанных токенов' },
              { value: '10+', label: 'интегрированных агентов' },
              { value: '80%', label: 'локальных решений' },
            ].map((metric, i) => (
              <div key={i} className="text-center p-8 rounded-lg bg-slate-900/80 border border-cyan-500/30">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{metric.value}</div>
                <p className="text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Как мы работаем с вашим проектом
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: '1', title: 'Диагностика' },
              { num: '2', title: 'Дизайн решения' },
              { num: '3', title: 'Разработка' },
              { num: '4', title: 'Отладка' },
              { num: '5', title: 'Запуск' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-black">
                  {step.num}
                </div>
                <p className="text-slate-300 font-medium">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Давайте создадим вашего ИИ-агента
          </h2>
          <div className="mb-8 space-y-4">
            <p className="text-slate-300">📧 hello@genairus.com</p>
            <p className="text-slate-300">💬 @genairusai</p>
            <p className="text-slate-300">🔗 https://t.me/genairusai</p>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-1">
            Оставить заявку
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 px-4 text-center text-slate-400">
        <p>&copy; 2025 GenAIrus. Все права защищены.</p>
      </footer>
    </main>
  )
}