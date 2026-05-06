import { errors } from "@src/i18n/en/errors";
import { home } from "@src/i18n/en/home";
import { ui } from "@src/i18n/en/ui";

export const namespaces = { ui, home, errors } as const;

export const en = {
  ...ui,
  ...home,
  errors,
};
