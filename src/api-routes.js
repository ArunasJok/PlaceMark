import { userApi } from "./api/user-api.js";
import { categoryApi } from "./api/category-api.js";
import { placenameApi } from "./api/placename-api.js";

export const apiRoutes = [
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/categories", config: categoryApi.create },
  { method: "DELETE", path: "/api/categories", config: categoryApi.deleteAll },
  { method: "GET", path: "/api/categories", config: categoryApi.find },
  { method: "GET", path: "/api/categories/{id}", config: categoryApi.findOne },
  { method: "DELETE", path: "/api/categories/{id}", config: categoryApi.deleteOne },

  { method: "GET", path: "/api/placenames", config: placenameApi.find },
  { method: "GET", path: "/api/placenames/{id}", config: placenameApi.findOne },
  { method: "POST", path: "/api/categories/{id}/placenames", config: placenameApi.create },
  { method: "DELETE", path: "/api/placenames", config: placenameApi.deleteAll },
  { method: "DELETE", path: "/api/placenames/{id}", config: placenameApi.deleteOne },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];