# Swasthyaveda — Online Ayurvedic Healthcare Platform

A premium, multi‑page Next.js website for an elite Ayurvedic doctor specializing in virtual, non‑invasive care for chronic lifestyle diseases.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Google Fonts: Playfair Display (headings) + Inter (body)

## Color Palette

| Token           | Hex       | Role                          |
|-----------------|-----------|-------------------------------|
| clinical-cream  | `#F5EFE3` | Dominant / Background         |
| earthy-olive    | `#4F5B2A` | Primary / Text & Major UI     |
| golden-bronze   | `#B8892D` | Accent / CTA                  |
| warm-sand       | `#D8C9A8` | Secondary Backgrounds         |

## Features

- Responsive multi‑page architecture: Home, About, Services, Process, Contact.
- Persistent Header and Footer across all pages.
- Smooth CSS hover transitions on service cards.
- Online consultation booking form with API endpoint.
- Vercel‑ready configuration.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

1. Create a GitHub repository and push the code.

```bash
git config --global user.email "rootdomainaccess@gmail.com"
git add .
git commit -m "Initial Swasthyaveda website"
git remote add origin https://github.com/YOUR_USERNAME/swasthyaveda.git
git push -u origin main
```

2. Import the repository into Vercel.

3. Vercel will auto‑detect the Next.js build and deploy.

## Build Output

- Output directory: `.next` (Vercel zero‑config default for Next.js).
- Build command: `next build`
- Start command: `next start`