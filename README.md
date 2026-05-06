# One Space Away - Interior Design Template

**One Space Away** is single-page template built for interior designers, architects, and home stylists.

<img width="1910" height="915" alt="PageSpeed Insights" src="https://github.com/user-attachments/assets/8b3bd9cf-6e91-4624-bda5-aa5cf71e950b" />

**Features**

- Astro 6.0 Ready
- Responsive: mobile, tablet, and desktop devices.
- Stack: Astro (HTML, Tailwindcss, and JS) with minimal dependencies.

## Fonts

This template uses [Modern Font Stacks](https://modernfontstacks.com/) — system font families organized by typeface classification. No web fonts are downloaded, resulting in zero layout shifts and instant text rendering.

- **Sans-serif (body):** Geometric Humanist stack (`Avenir, Montserrat, Corbel, ...`)

Font stacks are configured in `src/styles/global.css` under `@theme`.

## Favicon

Generated with [RealFaviconGenerator](https://realfavicongenerator.net/). Static files in `public/`.

## Technical Details

Carousels: Powered by **Swiper.js.** Initialization logic is in `utils/baseSwiper.ts`.
