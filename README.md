# Guru Ji Collection — E-Commerce Frontend

A modern, full-featured e-commerce frontend for **Guru Ji Collection**, an Indian fashion brand based in Jaipur. Built with Next.js 15 and Tailwind CSS, it supports 83 products across 8 categories with cart, wishlist, WhatsApp ordering, and static export for free hosting.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework (App Router, static export) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Zustand](https://zustand-demo.pmnd.rs/) | Cart & wishlist state |
| [Lucide React](https://lucide.dev/) | Icons |
| [React Hot Toast](https://react-hot-toast.com/) | Notifications |
| [Unsplash](https://unsplash.com/) | Product images |

---

## Features

- **83 products** across 8 categories: Kurti, Suits, Cord Sets, Palazzo, Dupatta, T-Shirt, Lower, Shorts
- **Product detail pages** with image gallery, size/color picker, and quantity selector
- **Cart & Wishlist** with persistent state via Zustand
- **WhatsApp ordering** — one-click pre-filled message to the store
- **Category shop pages** with product grid
- **Hero slider** with 3 slides and auto-play
- **Instagram feed** section with hover effect
- **Testimonials** section
- **Featured collections** section
- **About Us** page with brand story
- **FAQ** page with accordion
- **Contact** page with Google Maps placeholder
- **Responsive design** — mobile, tablet, desktop
- **Static export** — deployable to Vercel, Netlify, or GitHub Pages for free

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `rose-gold` | `#C99A84` | Primary actions, highlights |
| `champagne-gold` | `#D8B9A2` | Accents, footer stats |
| `dark-text` | `#4A3932` | Body text |
| `background` | `#FAF8F6` | Page background |

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node 20 LTS)
- npm

### Install dependencies

```bash
npm install
```

### Run development server

> Note: If you see a dev-mode error on Node v25, use build + serve instead.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
```

This generates a static `out/` folder.

### Serve the static build locally

```bash
npx serve out -p 3000
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
GurujiCollection/
├── public/
│   ├── logo.png              # Brand logo
│   └── insta_qr_code.png     # Instagram QR code (footer)
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── shop/
│   │   │   ├── page.tsx      # All products page
│   │   │   └── [category]/
│   │   │       └── page.tsx  # Category page (static export)
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx         # Server page (generateStaticParams)
│   │   │       └── ProductClient.tsx # Client component (interactive)
│   │   ├── cart/page.tsx     # Cart page
│   │   ├── wishlist/page.tsx # Wishlist page
│   │   ├── about/page.tsx    # About Us
│   │   ├── contact/page.tsx  # Contact
│   │   └── faq/page.tsx      # FAQ
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx    # Navigation header with search, cart, wishlist
│   │   │   └── Footer.tsx    # 5-column footer with QR code
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CategorySection.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── CollectionsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── InstagramSection.tsx
│   │   └── ui/
│   │       └── ProductCard.tsx
│   └── lib/
│       ├── data.ts           # All 83 products + categories + testimonials
│       ├── store.ts          # Zustand cart & wishlist stores
│       └── utils.ts          # formatPrice, getDiscountPercent helpers
└── next.config.ts            # output: "export", unoptimized images
```

---

## Deployment

### Option 1 — Vercel (Recommended, Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live at `https://your-project.vercel.app`

Every push to `main` triggers an automatic redeploy.

### Option 2 — Netlify (Free Drag & Drop)

1. Build locally:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `out/` folder onto the page
4. Your site is live instantly

### Option 3 — GitHub Pages (Free)

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && npx gh-pages -d out"
   ```
3. Run:
   ```bash
   npm run deploy
   ```
4. Go to your GitHub repo → **Settings** → **Pages** → set branch to `gh-pages`

> **Note:** For GitHub Pages, add `basePath` and `assetPrefix` in `next.config.ts` to match your repo name.

---

## Store Information

| | |
|---|---|
| **Brand** | Guru Ji Collection |
| **Location** | Malviya Nagar Market, Jaipur, Rajasthan — 302017 |
| **Phone** | +91 93102 23461 |
| **Email** | gurujicollection7@gmail.com |
| **Instagram** | [@gurujicollection7__](https://instagram.com/gurujicollection7__) |
| **WhatsApp** | [wa.me/919310223461](https://wa.me/919310223461) |

---

## License

Private project — all rights reserved by Guru Ji Collection.
