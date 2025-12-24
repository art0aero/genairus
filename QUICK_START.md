# 🚀 БЫСТРЫЙ СТАРТ GENAIRUS

## Этап 1: Создание проекта (2 минуты)

```bash
# Открой терминал и выполни:
npx create-next-app@latest genairus --typescript --tailwind --app --eslint --src-dir=false

# Выбери YES для всех опций, кроме:
# - Would you like to use the `src/` directory? → NO
# - Would you like to customize the default import alias? → NO

cd genairus
npm install framer-motion lucide-react clsx react-intersection-observer
```

## Этап 2: Замена конфигурационных файлов (3 минуты)

**Все эти файлы уже созданы выше, просто скопируй их содержимое:**

1. `package.json` — скопируй целиком
2. `next.config.js` — скопируй целиком
3. `tailwind.config.js` — скопируй целиком
4. `tsconfig.json` — скопируй целиком
5. `.eslintrc.json` — скопируй целиком
6. `.gitignore` — скопируй целиком
7. `app/layout.tsx` — скопируй целиком
8. `app/page.tsx` — скопируй целиком
9. `app/globals.css` — скопируй целиком

## Этап 3: Создание компонентов (10 минут)

Создай папку `components/` и добавь в нее 8 файлов (смотри NEXTJS_GENAIRUS_FULL_GUIDE.md):

```
components/
├── Navigation.tsx
├── Hero.tsx
├── Services.tsx
├── Metrics.tsx
├── Cases.tsx
├── Process.tsx
├── Contact.tsx
└── Footer.tsx
```

**Каждый файл находится в NEXTJS_GENAIRUS_FULL_GUIDE.md**

## Этап 4: Тестирование локально (1 минута)

```bash
npm run dev
# Открой http://localhost:3000
```

## Этап 5: Деплой на Vercel (3 минуты)

```bash
# 1. Инициализируй Git
git init
git add .
git commit -m "GenAIrus landing page"

# 2. Создай репо на GitHub (github.com/new)

# 3. Push код
git remote add origin https://github.com/YOUR_USERNAME/genairus.git
git branch -M main
git push -u origin main

# 4. Перейди на https://vercel.com
# - Нажми "Add New..." → "Project"
# - Импортируй свой GitHub репо "genairus"
# - Нажми "Deploy"
# - Готово! 🎉

# 5. (Опционально) Подключи свой домен
# - Vercel → Project Settings → Domains
# - Добавь свой домен
# - Скопируй DNS записи в регистратор домена
```

---

## 🎨 ДИЗАЙН ХАРАКТЕРИСТИКИ

✅ Темный фон (#0a0e27) + neon accentы (cyan, green, purple)
✅ Smooth animations (Framer Motion)
✅ Scroll-triggered reveals
✅ Horizontal scroll для кейсов
✅ Responsive design (mobile, tablet, desktop)
✅ SEO optimized
✅ Performance optimized

---

## 📊 ФАЙЛЫ, КОТОРЫЕ УЖЕ СОЗДАНЫ

✅ package.json
✅ next.config.js
✅ tailwind.config.js
✅ tsconfig.json
✅ .eslintrc.json
✅ .gitignore
✅ app/layout.tsx
✅ app/page.tsx
✅ app/globals.css

**Все остальное (компоненты) находится в NEXTJS_GENAIRUS_FULL_GUIDE.md**

---

## 📝 ВАЖНЫЕ ЗАМЕЧАНИЯ

1. **React Intersection Observer** — установлена автоматически
2. **Framer Motion** — для анимаций и микро-взаимодействий
3. **Lucide Icons** — иконки (Phone, Mail, Menu, X, и т.д.)
4. **Tailwind CSS** — для стилизации (темная тема уже в tailwind.config.js)

---

## 🆘 ТУ ЕСЛИ ЧТО-ТО НЕ РАБОТАЕТ

**Ошибка: "Module not found"**
```bash
npm install framer-motion lucide-react react-intersection-observer
```

**Ошибка: "useInView is not defined"**
Убедись, что импортируешь в компонентах:
```tsx
import { useInView } from 'react-intersection-observer'
```

**Ошибка: "Cannot find module '@/components/...'"**
Убедись, что jsconfig.json или tsconfig.json имеет правильные paths:
```json
"paths": {
  "@/*": ["./*"]
}
```

---

## ✨ ГОТОВО!

Теперь у тебя есть **полностью функциональный Next.js сайт** с:
- ✅ Современным дизайном
- ✅ Множеством анимаций
- ✅ Всеми секциями (Hero, Services, Metrics, Cases, Process, Contact)
- ✅ Якорной навигацией
- ✅ Горизонтальным скроллом для кейсов
- ✅ Формой контактов
- ✅ Полностью готовым к деплою на Vercel

**Приступай! 🚀**
