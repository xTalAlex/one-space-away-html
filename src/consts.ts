import type { SiteConfig, Social } from "@src/types";

import siteConfig from "./site.config";

export const CONFIG: SiteConfig = {
  ...siteConfig,
  canonical_url: import.meta.env.DEV
    ? "http://localhost:4321"
    : siteConfig.canonical_url,
};

export const SOCIALS: Social[] = siteConfig.socials;
