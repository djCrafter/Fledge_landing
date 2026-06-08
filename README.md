# Fledge Landing

Marketing landing for **Fledge Systems** — fledgesys.com.

## Stack
- React 19 + Vite 7
- i18next (EN / FR)
- Plain CSS with brand tokens (`src/styles/tokens.css`)
- Mobile-first, single-page

## Run
```bash
npm install
npm run dev          # http://localhost:5173
npm run build
npm run preview
```

## Structure
```
public/brand/        Drop-in brand assets (logo, icons, hero, patterns)
src/sections/        Page sections (Hero, Domains, AI, ...)
src/components/      Shared UI (Nav, LanguageSwitcher, ...)
src/locales/en|fr/   Translation strings
src/styles/          tokens · fonts · reset · global
```
