# Ember & Fig

Ember & Fig is a refined, editorial-style restaurant website built with the Next.js App Router. It showcases the restaurant's atmosphere, seasonal menu, and reservation experience with a warm, magazine-inspired design.

## Overview

This project is a marketing and booking front-end for a live-fire restaurant concept. The site includes:

- A cinematic landing page with strong editorial typography
- A full menu experience organized by course and season
- A reservation form for table requests
- Contact and restaurant details sections
- Responsive styling tuned for mobile and desktop layouts

## Tech stack

- Next.js 15
- React 19
- TypeScript
- next/font for typography
- Lucide React for icons
- CSS Modules / custom global styling via app/globals.css

## Project structure

```bash
.
├── app/
│   ├── contact/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── reservations/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ReservationForm.tsx
│   └── Reveal.tsx
├── public/
│   └── images/
│       ├── hero.avif
│       ├── interior.avif
│       └── vegetables.avif
├── package.json
├── tsconfig.json
├── next.config.ts
├── next-env.d.ts
├── README.md
└── .gitignore
```

## Features

- Editorial landing page and brand storytelling
- Seasonal menu with dishes grouped by section
- Reservation request flow with frontend validation and success state
- Restaurant contact info and location details
- SEO metadata and social metadata setup in the app shell
- Responsive navigation and polished transitions

## License

This project is for demonstration and portfolio use unless otherwise specified.
