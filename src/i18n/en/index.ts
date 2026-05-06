import { ui } from "./ui";
import { home } from "./home";
import { errors } from "./errors";

export const namespaces = { ui, home, errors } as const;

export const en = {
  ...ui,
  ...home,
  errors,
};
