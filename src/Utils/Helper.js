import { navbarRoutes } from "./Constant";

export const getRoutes = (name) => {
  let route = "";
  for (let [key, value] of Object.entries(navbarRoutes)) {
    if (key == name) {
      route = value;
      break;
    }
  }
  return route;
};
