import { errors } from "./errors";
import { home } from "./home";
import { ui } from "./ui";

export const namespaces = { ui, home, errors } as const;

export const en = {
  ...ui,
  ...home,
  errors,
};
