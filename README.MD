# krishnagurram.dev

Personal portfolio site — built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Lucide React** — icons
- **Figtree** + **Fira Code** — fonts

## Project Structure

```
src/
├── components/
│   ├── Nav.tsx          # Fixed nav with scroll-aware active highlighting + mobile menu
│   ├── Hero.tsx         # Full-screen landing with typed roles + stats strip
│   ├── About.tsx        # Bio + highlight cards
│   ├── Experience.tsx   # Expandable accordion timeline
│   ├── Projects.tsx     # 3-col project grid with metrics
│   ├── Skills.tsx       # Categorised skill chips
│   ├── Education.tsx    # Academic background
│   ├── Contact.tsx      # Contact cards with copy-to-clipboard email
│   └── Footer.tsx
├── data/
│   └── portfolio.ts     # ← All content lives here. Edit this file to update anything.
├── hooks/
│   └── useTyped.ts      # Typewriter effect hook
├── types/
│   └── index.ts
└── styles/
    └── globals.css
```

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeploy.

```bash
npm run build   # builds to /dist
npm run preview # preview the production build locally
```