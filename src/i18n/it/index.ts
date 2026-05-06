import { errors } from "@src/i18n/it/errors";
import { home } from "@src/i18n/it/home";
import { ui } from "@src/i18n/it/ui";

export const namespaces = { ui, home, errors } as const;

export const it = {
  ...ui,
  ...home,
  errors,
};
