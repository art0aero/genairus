
# Создадим структуру проекта Next.js с описанием всех файлов и их содержимым
project_structure = {
    "файлы для создания": [
        "package.json",
        "next.config.js",
        "tailwind.config.js",
        "tsconfig.json",
        ".eslintrc.json",
        ".gitignore",
        "app/layout.tsx",
        "app/page.tsx",
        "app/globals.css",
        "components/Navigation.tsx",
        "components/Hero.tsx",
        "components/Services.tsx",
        "components/Metrics.tsx",
        "components/Cases.tsx",
        "components/Process.tsx",
        "components/Contact.tsx",
        "components/Footer.tsx",
        "public/",
    ],
    "ключевые особенности": [
        "✅ Next.js 14+ с App Router",
        "✅ TypeScript для типизации",
        "✅ Tailwind CSS + Custom CSS для анимаций",
        "✅ Framer Motion для гладких анимаций",
        "✅ Responsive design (mobile, tablet, desktop)",
        "✅ Якорная навигация с подсвечиванием",
        "✅ Горизонтальный скролл для кейсов",
        "✅ Neon effects (3D подсветка)",
        "✅ Scroll animations (reveal при скролле)",
        "✅ Формы контактов (без backend зависимостей)",
        "✅ SEO оптимизация",
        "✅ Performance оптимизация (lazy loading, image optimization)",
    ]
}

print("📦 СТРУКТУРА ПРОЕКТА GENAIRUS")
print("=" * 60)
print("\n📁 Файлы для создания:")
for f in project_structure["файлы для создания"]:
    print(f"   {f}")
print("\n✨ Ключевые особенности:")
for feature in project_structure["ключевые особенности"]:
    print(f"   {feature}")
