# Pull Request: Next.js Landing Page with Dark Mode and i18n

**Title:** Add Next.js Landing Page with Dark Mode and i18n (TH/EN)

**Branch:** `claude/nextjs-landing-i18n-darkmode-011CUqvefik6FY1UDAyi8C8s`

**Create PR at:** https://github.com/stampspv/test/pull/new/claude/nextjs-landing-i18n-darkmode-011CUqvefik6FY1UDAyi8C8s

---

## 🎯 Summary
Complete implementation of a modern, responsive Next.js landing page with dark mode toggle and internationalization support for Thai and English languages.

## ✨ Features Implemented

### 🌍 Internationalization (i18n)
- Full i18n support using `next-intl` for Thai (ไทย) and English
- Language switcher component in header
- Static rendering for optimal performance
- Complete translations for all content

### 🎨 Design & Styling
- **Font**: Noto Sans Thai via Google Fonts for excellent Thai language support
- **Color Theme**: Fresh green/emerald gradient theme
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Seamless theme switching with `next-themes`

### 📄 Landing Page Sections
1. **Header** - Sticky navigation with logo, menu, theme toggle, and language switcher
2. **Hero Section** - Eye-catching headline with gradient text and CTA buttons
3. **Features Section** - 4 feature cards highlighting key capabilities
4. **Pricing Section** - 3 pricing tiers (Starter, Pro, Enterprise) with green accents
5. **CTA Section** - Final call-to-action with green gradient background
6. **Footer** - Multi-column footer with navigation links

### 🛠 Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **i18n**: next-intl v3.17.2
- **Theme**: next-themes v0.3.0
- **Build**: Static Site Generation (SSG)

## 📂 Project Structure
```
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with providers
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles with Noto Sans Thai
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageSwitcher.tsx
├── i18n/                  # i18n configuration
│   ├── request.ts
│   └── routing.ts
└── messages/              # Translation files
    ├── en.json
    └── th.json
```

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm start
```

Visit:
- English: http://localhost:3000/en
- Thai: http://localhost:3000/th

## 🎨 Design Choices
- **Green Theme**: Fresh, modern green/emerald color scheme throughout
- **Noto Sans Thai**: Optimal font for displaying Thai and Latin characters
- **Dark Mode**: Full support with smooth transitions
- **Accessibility**: Semantic HTML, proper contrast ratios

## ✅ Testing
- ✅ Build successful
- ✅ Static rendering working
- ✅ Both EN/TH locales generated
- ✅ Dark mode fully functional
- ✅ Responsive on mobile/tablet/desktop

## 📝 Notes
- The font is loaded via CDN for reliability
- Static rendering enabled using `setRequestLocale`
- All components are client-side for interactivity
- Ready for production deployment

## 📸 Preview
The landing page includes:
- Clean, modern design with fresh green theme
- Smooth dark mode transitions
- Language switching between Thai and English
- Fully responsive layout
- Optimized for performance with SSG
