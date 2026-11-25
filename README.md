# Monumental Reels

Portfolio website for Lilly Oluwatomi Oluyemi, a Lagos-based mobile photographer and videographer.

## Local development

Requirements: Node.js 22.23.4 or newer and npm.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Astro generates a static site in `dist/`. The production build includes the Home, Selected Work, and About/Booking pages.

## Deploy to Vercel

Import this repository into Vercel and keep the project root at the repository root. Vercel detects Astro and uses the `build` script from `package.json`; the generated output is `dist/`. This is a static Astro site and does not need the Vercel SSR adapter or a `vercel.json` file.

The booking form opens WhatsApp with the enquiry prefilled. The visitor reviews the message and taps Send in WhatsApp.
