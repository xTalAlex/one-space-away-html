import errors from "./errors.json";
import home from "./home.json";
import ui from "./ui.json";

export const namespaces = { ui, home, errors } as const;

export const it = {
  ...ui,
  ...home,
  errors,
};
