import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { categoryController } from "./controllers/category-controller.js";

export const webRoutes = [
    { method: "GET", path: "/", config: accountsController.index },
    { method: "GET", path: "/signup", config: accountsController.showSignup },

    { method: "GET", path: "/login", config: accountsController.showLogin },
    { method: "GET", path: "/logout", config: accountsController.logout },

    { method: "POST", path: "/register", config: accountsController.signup },
    { method: "POST", path: "/authenticate", config: accountsController.login },
  
    { method: "GET", path: "/dashboard", config: dashboardController.index },
    { method: "POST", path: "/dashboard/addcategory", config: dashboardController.addCategory },
    { method: "GET", path: "/dashboard/deletecategory/{id}", config: dashboardController.deleteCategory },

    { method: "GET", path: "/about", config: aboutController.index },

    { method: "GET", path: "/category/{id}", config: categoryController.index },
    { method: "POST", path: "/category/{id}/addplacename", config: categoryController.addPlacename },
    { method: "GET", path: "/category/{id}/deleteplacename/{placenameid}", config: categoryController.deletePlacename },
    
    { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

    { method: "POST", path: "/category/{id}/uploadimage", config: categoryController.uploadImage }
  ];