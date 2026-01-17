# QuickAlert Landing Page

Moderne One-Page Landing Page für QuickAlert - das magnetische gelbe LED Warnlicht.

## Features

- 🎨 Elegantes Design mit Holz- und Orange-Akzenten
- 🌙 Dark Mode Toggle
- 📱 Vollständig responsive (Mobile-First)
- ⚡ Next.js 14 mit App Router
- 🎨 Tailwind CSS mit Custom Wood & Orange Palette
- 🚗 Hero Section mit Auto und Warnlicht
- ⚖️ Impressum & Datenschutzerklärung (DSGVO-konform)

## Technologien

- **Framework:** Next.js 14.2.5
- **UI:** React 18.3.1
- **Styling:** Tailwind CSS 3.4.4
- **TypeScript:** 5.5.3
- **Build Tool:** Next.js SWC

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

## Build für Production

```bash
npm run build
npm start
```

## Farbpalette (Holz & Orange)

### Holz-Farben
- Light: `#F5E6D3`
- Medium: `#D4B896`
- Dark: `#A0825D`
- Darker: `#8B6F47`
- Darkest: `#6B4E3D`

### Akzent-Farben (Orange/Gelb)
- Light: `#FFD080`
- Medium: `#F5A623`
- Dark: `#E09000`
- Darker: `#CC8000`
- Darkest: `#B87000`

## Website Sections

1. **Hero** - Vollbild-Background mit Hauptüberschrift
2. **Features** - BASE und PRO Versionen mit Feature-Karten
3. **Problem** - Gefahren herkömmlicher Warndreiecke
4. **Pricing** - Preisübersicht mit Produktbildern
5. **CTA** - Call-to-Action Bereich
6. **Impressum** - Rechtliche Informationen (DSGVO-konform)

## Deployment

### Vercel (Empfohlen)

1. Verbinden Sie das GitHub-Repository mit Vercel
2. Vercel erkennt automatisch Next.js
3. Automatische Deployments bei jedem Push

Oder via Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Projektstruktur

```
quickalert-site/
├── app/
│   ├── layout.tsx       # Root Layout mit Metadata & Dark Mode Provider
│   ├── page.tsx         # Hauptlanding Page
│   ├── globals.css      # Global Styles mit Wood/Orange Texturen
│   ├── impressum/
│   │   └── page.tsx     # Impressum & Datenschutz Seite
│   └── warum-nicht-das-warndreieck/
│       └── page.tsx     # Warndreieck-Problem Seite
├── components/
│   ├── DarkModeProvider.tsx
│   ├── DarkModeToggle.tsx
│   └── QuickAlertLogo.tsx
├── public/
│   ├── Autounfall.png
│   ├── Warndreieck.jpg
│   ├── Warnleuchte erzeugt.jpg
│   └── QuickAlert/
│       └── QuickAlert Logo.png
└── tailwind.config.ts   # Tailwind Config mit Custom Colors
```

## SEO

- Meta Tags (Title, Description, Keywords)
- OpenGraph Tags für Social Media
- Twitter Cards
- Robots Meta
- Viewport Configuration
