# One Space Away — Interior Design Template

A single-page template built for interior designers, architects, and home stylists. Lightweight, accessible, and performance-focused.

<img width="1910" height="915" alt="PageSpeed Insights" src="https://github.com/user-attachments/assets/8b3bd9cf-6e91-4624-bda5-aa5cf71e950b" />

## Features

- **Astro 6** — Static output, View Transitions, Content Collections
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config` file
- **Alpine.js** — Declarative interactivity (menu, accordion, forms, video)
- **Swiper.js** — Portfolio and testimonials carousels
- **i18n ready** — Locale-based translations (English and Italian included)
- **SEO** — Sitemap, Open Graph, Twitter Cards, JSON-LD structured data
- **Legal pages** — Privacy Policy and Terms & Conditions via Markdown content collections
- **No web fonts** — System font stacks for zero layout shifts and instant rendering
- **Security headers** — `X-Frame-Options`, `X-Content-Type-Options`, CSP-ready
- **Accessible** — Skip-to-content link, semantic HTML, ARIA attributes

## Tech Stack

| Layer         | Tool                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| Framework     | [Astro](https://astro.build) 6                                                                       |
| Styling       | [Tailwind CSS](https://tailwindcss.com) 4                                                            |
| Interactivity | [Alpine.js](https://alpinejs.dev) 3                                                                  |
| Carousels     | [Swiper](https://swiperjs.com) 12                                                                    |
| Icons         | [astro-icon](https://github.com/natemoo-re/astro-icon) + Iconify (`material-symbols-light`, `logos`) |
| Formatting    | Prettier (Tailwind class sorting + import sorting)                                                   |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/images/       # Optimized images (processed by Astro)
├── components/          # Astro components
│   └── ui/              # Reusable UI primitives (buttons, wrappers)
├── content/legal/       # Markdown legal pages (en/, it/)
├── i18n/                # Translations (en/, it/)
├── layouts/             # Base and error layouts
├── pages/               # Routes
├── styles/              # Global CSS + Tailwind theme
└── utils/               # Alpine init, Swiper factory
public/                  # Static assets (favicon, OG image, headers)
```

## Configuration

### Site settings

Edit `src/site.config.ts` to update company name, description, social links, and contact info.

### Environment Variables

Copy `.env.example` to `.env` and fill in the values:

| Variable                | Description                      |
| ----------------------- | -------------------------------- |
| `GOOGLE_TAG_MANAGER_ID` | GTM container ID (`GTM-XXXXXXX`) |

All variables are optional — components render nothing when their env var is empty.

### Google Tag Manager — Recommended Events

Configure these events in GTM as tags with the corresponding triggers:

| Event            | Trigger Type       | Selector / Condition                        | GA4 Use                                      |
| ---------------- | ------------------ | ------------------------------------------- | -------------------------------------------- |
| `generate_lead`  | Form Submission    | Form ID = `contact-form`                    | **Primary conversion** for Google Ads        |
| `form_start`     | Element Visibility | `#contact-form input` (first field visible) | Micro-conversion — form abandonment funnel   |
| `cta_click`      | Click — Just Links | Click URL contains `#contact`               | Micro-conversion — engaged visitors audience |
| `scroll_contact` | Element Visibility | `#contact` (element on-screen)              | Intent signal — remarketing audience         |

All events above use built-in GTM triggers — no custom JavaScript required.

### Locale

Set `LOCALE` in `src/consts.ts` (`"en"` or `"it"`). Translations live in `src/i18n/{locale}/`.

### Theme

Colors and fonts are configured in `src/styles/global.css` under `@theme`:

```css
@theme {
  --font-sans:
    Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
  --color-black: var(--color-zinc-950);
  --color-white: var(--color-stone-50);
}
```

### Icons

Uses [Iconify](https://icon-sets.iconify.design/) via `astro-icon`. Add icon sets by installing `@iconify-json/{set-name}`.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start dev server at `localhost:4321` |
| `npm run build`    | Build static site to `dist/`         |
| `npm run preview`  | Preview production build locally     |
| `npm run check`    | Run Astro type checking              |
| `npm run prettier` | Format all files in `src/`           |

## Fonts

Uses [Modern Font Stacks](https://modernfontstacks.com/) — system font families organized by typeface classification. No web fonts are downloaded.

- **Body:** Geometric Humanist stack (`Avenir, Montserrat, Corbel, ...`)

Configured in `src/styles/global.css` under `@theme`.

## Favicon

Generated with [RealFaviconGenerator](https://realfavicongenerator.net/). Static files in `public/`.

## Deployment

The template outputs static HTML and can be deployed to any static hosting provider:

- Vercel, Netlify, GitHub Pages, etc.

Set the `CANONICAL_URL` in `src/consts.ts` to your production domain before deploying.

## License

See [LICENSE](LICENSE) for details.
