# One Space Away - Interior Design Template

**One Space Away** is single-page template built for interior designers, architects, and home stylists.

<img width="1910" height="915" alt="PageSpeed Insights" src="https://github.com/user-attachments/assets/8b3bd9cf-6e91-4624-bda5-aa5cf71e950b" />

**Features**

- Astro 6.0 Ready:
  - Native Font Optimization
  - Pre-configured CSP (Content Security Policy) and security headers (optimized for Cloudflare, easily adaptable for Vercel or Netlify).
    <img width="1910" height="915" alt="HTTP Observatory" src="https://github.com/user-attachments/assets/4a38f8c3-c851-4239-a0b5-73f80fe8be57" />
- Responsive: mobile, tablet, and desktop devices.
- Stack: Astro (HTML, Tailwindcss, and JS) with minimal dependencies.

## Deployment

You will find a `_headers `file located in the `/public` folder. This file handles the Content Security Policy (CSP) and XSS protections mainly for Cloudflare.

If you are deploying to Vercel or Netlify, simply move these rules to a `vercel.json` or `netlify.toml` file respectively.

## Media & Image Optimization

### Local Optimization (Default)

By default, the template uses Astro’s built-in `<Image />` component for automatic optimization (WebP/AVIF conversion, resizing).

```astro
import consultationImage from '/src/assets/images/consultation.jpg';

<div class="process-step-image-wrapper">
   <Image
     src={consultationImage}
     alt="Interior Design Consultation"
     class="media"
   />
</div>
```

### Cloudinary Integration (Optional)

For top-tier loading speeds and high-resolution assets, you can easily swap to [Astro-Cloudinary](https://docs.astro.build/en/guides/media/cloudinary/).

```
npm add astro-cloudinary
```

```astro
import { CldImage } from 'astro-cloudinary';

<CldImage
  src="your-public-id"
  width="800"
  height="600"
  alt="Project Transformation"
/>
```

## Fonts

This template uses [Modern Font Stacks](https://modernfontstacks.com/) — system font families organized by typeface classification. No web fonts are downloaded, resulting in zero layout shifts and instant text rendering.

- **Sans-serif (body):** Geometric Humanist stack (`Avenir, Montserrat, Corbel, ...`)

Font stacks are configured in `src/styles/global.css` under `@theme`.

## Favicon

Generated with [RealFaviconGenerator](https://realfavicongenerator.net/). Static files in `public/`.

## Technical Details

Carousels: Powered by **Swiper.js.** Initialization logic is in `utils/baseSwiper.ts`.
