import type { en as DefaultTranslations } from "./en";
import { namespaces as defaultNamespaces } from "./en";
import { SITE } from "@consts";

// Types
type Translations = typeof DefaultTranslations;
type Namespace = keyof typeof defaultNamespaces;
type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

// Variables
const locale = SITE.LOCALE ?? "en";

const localeModules = import.meta.glob<{ [key: string]: unknown }>(
  "./**/index.ts",
  { eager: true },
);

const translations = Object.fromEntries(
  Object.entries(localeModules)
    .filter(([path]) => path !== "./index.ts")
    .map(([path, mod]) => {
      const key = path.replace("./", "").replace("/index.ts", "");
      return [key, mod[key]];
    }),
) as Record<string, Translations>;

const namespaces = Object.fromEntries(
  Object.entries(localeModules)
    .filter(([path]) => path !== "./index.ts")
    .map(([path, mod]) => {
      const key = path.replace("./", "").replace("/index.ts", "");
      return [key, mod.namespaces];
    }),
) as Record<string, typeof defaultNamespaces>;

// Functions
function getTranslations<T extends Namespace>(...keys: T[]) {
  const ns = namespaces[locale];
  return Object.assign({}, ...keys.map((k) => ns[k])) as UnionToIntersection<(typeof defaultNamespaces)[T]>;
}

// Exports
export const t = translations[locale] as Translations;
export { getTranslations };