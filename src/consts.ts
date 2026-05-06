import type { Config, Social } from "@src/types";

import config from "./data/config.json";

export const CONFIG: Config = {
  ...config,
  canonical_url: import.meta.env.DEV
    ? "http://localhost:4321"
    : config.canonical_url,
};

export const SOCIALS: Social[] = config.socials;
