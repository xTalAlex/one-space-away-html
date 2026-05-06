// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import { CONFIG } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: CONFIG.canonical_url,
  output: "static",

  build: {
    inlineStylesheets: "always",
  },

  integrations: [sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});
