# Next.js Landing Page with Dark Mode and i18n

A modern, responsive landing page built with Next.js 14, featuring dark mode toggle and internationalization (i18n) support for Thai and English languages.

## Features

- 🎨 **Dark Mode**: Seamless theme switching with `next-themes`
- 🌍 **i18n Support**: Multi-language support (Thai/English) using `next-intl`
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 💅 **Tailwind CSS**: Modern, utility-first CSS framework
- 📱 **Responsive Design**: Mobile-first approach
- 🎯 **TypeScript**: Type-safe development

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically redirect to the default locale (English). You can also access:
- English: [http://localhost:3000/en](http://localhost:3000/en)
- Thai: [http://localhost:3000/th](http://localhost:3000/th)

## Project Structure

```
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with providers
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   ├── Pricing.tsx        # Pricing section
│   ├── CTA.tsx            # Call-to-action section
│   ├── Footer.tsx         # Footer
│   ├── ThemeProvider.tsx  # Dark mode provider
│   ├── ThemeToggle.tsx    # Theme switcher
│   └── LanguageSwitcher.tsx # Language switcher
├── messages/              # i18n translations
│   ├── en.json           # English translations
│   └── th.json           # Thai translations
├── i18n.ts               # i18n configuration
└── middleware.ts         # Next.js middleware for i18n
```

## Customization

### Adding New Languages

1. Add the locale to `i18n.ts`:
```typescript
export const locales = ['en', 'th', 'fr'] as const;
```

2. Create a new translation file in `messages/`:
```
messages/fr.json
```

3. Update the middleware matcher in `middleware.ts`

### Changing Content

Edit the translation files in the `messages/` directory:
- `messages/en.json` for English content
- `messages/th.json` for Thai content

### Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.ts` and global styles in `app/globals.css`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode

## License

MIT
