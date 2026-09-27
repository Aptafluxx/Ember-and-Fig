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

## Getting started

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Production build

Generate a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Customization

Common places to update this project:

- Restaurant details and footer content: `components/Footer.tsx`
- Header navigation and layout branding: `components/Header.tsx`
- Home page copy and featured sections: `app/page.tsx`
- Menu items and categories: `app/menu/page.tsx`
- Reservation form fields and submission UX: `components/ReservationForm.tsx`
- Contact page details: `app/contact/page.tsx`
- Global visual system and typography: `app/globals.css`
- SEO title, description, and metadata: `app/layout.tsx`

## Notes

- The reservation form is intentionally frontend-only for prototype/demo use.
- Before production use, connect the form submission to a real booking backend, CRM, or API endpoint.
- The site currently uses placeholder / example metadata values like the default Open Graph base URL and the sample neighborhood/location content.

## License

This project is for demonstration and portfolio use unless otherwise specified.
