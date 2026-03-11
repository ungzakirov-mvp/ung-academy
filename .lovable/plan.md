
# UNG Academy Partners — Полная пересборка сайта в React

## Обзор проекта
Пересборка сайта UNG Academy Corporate University из 6 статических HTML-страниц в React SPA с полным сохранением дизайна, контента и эффектов.

## Дизайн-система
- **Шрифты**: Cormorant Garamond (заголовки) + Source Sans 3 (текст)
- **Цветовая палитра**: тёмно-синий (#0b1630), золотой (#cda367), navy (#1f3b71), cloud (#edf0f5), offwhite (#f5f5f7)
- **Стилистика**: премиальный корпоративный стиль с мягкими тенями, золотыми акцентами и backdrop-blur на навбаре

## Структура страниц (6 маршрутов)

### 1. Home (`/`)
- Hero-секция с градиентным фоном, статистикой (5000+ learners, 250K hours, 3 academies)
- Секция "Mandate" — миссия с иконками E/R/P
- "Core Academies" — 3 карточки (Technical, Digital, Leadership)
- "Programme Portfolio" — 4 карточки путей обучения
- "Business Impact" — 3 блока (Operational, Safety, Strategy)
- "Partner Ecosystem" — 4 блока партнёров
- "Campus & Delivery" — описание + бейджи форматов
- Контактная форма с полями Name, Organisation, Email, Interest, Message

### 2. Programmes (`/programmes`)
- Inner hero с заголовком
- "By career stage" — 4 карточки с бейджами
- "Technical Academy programmes" — 2 карточки (Drilling, Operations)
- "Digital and leadership programmes" — 2 карточки

### 3. Partners (`/partners`)
- Inner hero
- "Internal partners" — 3 блока (Business units, HR, HSE)
- "External partnerships" — 4 карточки
- "Governance model" — 2 блока (Board, Academic Council)

### 4. Campus (`/campus`)
- Inner hero
- "Physical campuses" — 2 карточки (Tashkent, Bukhara)
- "On-site training" — 2 блока
- "Digital campus" — 2 карточки (LMS, Virtual delivery)

### 5. Governance (`/governance`)
- Inner hero
- "Governance bodies" — 3 блока (Board, Academic Council, Advisory Board)
- "Quality assurance framework" — 2 карточки
- "Documentation" — список документов

### 6. Contact (`/contact`)
- Inner hero
- Контактные данные (адрес, email, телефон)
- Расширенная форма (Name, Organisation, Email, Role, Topic, Contact method, Message)

## Общие компоненты
- **Navbar** — фиксированный, backdrop-blur, золотой hover, активная ссылка, мобильное меню
- **Footer** — тёмный фон, золотой бордер сверху, ссылки
- **Карточки** — hover-эффект с подъёмом и градиентной полоской сверху
- **Section layout** — eyebrow label с золотой линией, заголовок, контент

## Эффекты и анимации
- **Fade-up** анимация при скролле через IntersectionObserver
- **Hover** на карточках — подъём + усиление тени + золотая полоска
- **Навбар** — backdrop-blur, плавные переходы цветов
- **Кнопки** — translateY(-1px) + box-shadow при hover
- **Smooth scroll** между секциями

## Адаптивность
- Полная мобильная адаптация (hero, карточки, навбар)
- Breakpoints: 575px, 991px для hero и секций
