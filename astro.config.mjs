// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { SITE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE.CANONICAL_URL,
  output: "static",

  build: {
    inlineStylesheets: "always",
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
