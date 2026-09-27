# Ember & Fig

A modern editorial restaurant website built with Next.js App Router.

## Stack
- Next.js 15
- React 19
- TypeScript
- next/font
- Lucide React
- CSS animations / responsive CSS
- OpenStreetMap embed

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

## Customize
- Restaurant name, address and hours: `components/Footer.tsx`, `app/contact/page.tsx`
- Menu: `app/menu/page.tsx`
- Reservation fields: `components/ReservationForm.tsx`
- Global design system: `app/globals.css`
- SEO metadata: `app/layout.tsx`

The reservation form is frontend-only by design. Connect its submit handler to your preferred booking backend/API before production.
