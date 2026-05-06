// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import { SITE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE.CANONICAL_URL,
  output: "static",

  build: {
    inlineStylesheets: "always",
  },

  integrations: [sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});
