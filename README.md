# Sharo Bakery Website

Welcome to the official repository for the Sharo Bakery website. This project is built using [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## Project Overview

Sharo Bakery is a premium bakery brand found in 2020. This website serves as the digital storefront, showcasing our delicious products and brand story.

## getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Linting:** ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Analytics Setup

To enable Google Analytics tracking:

1. Visit [Google Analytics](https://analytics.google.com) and create a new property for "Sharo Bakery".
2. Get your **Measurement ID** (starts with `G-`).
3. Open `app/components/Analytics.tsx`.
4. Replace `G-YOUR_MEASUREMENT_ID` with your actual Measurement ID in both places:
   ```typescript
   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID';
   gtag('config', 'G-YOUR_MEASUREMENT_ID');
   ```
5. Verify tracking in the Google Analytics Real-time dashboard.
