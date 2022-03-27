import { db } from "../models/db.js";
import { PlacenameSpec } from "../models/joi-schemas.js";

export const categoryController = {
  index: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const viewData = {
        title: "Category",
        category: category,
      };
      return h.view("category-view", viewData);
    },
  },

  addPlacename: {
    validate: {
      payload: PlacenameSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("category-view", { title: "Add placename error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const newPlacename = {
        title: request.payload.title,
        location: request.payload.location,
        description: request.payload.description,
      };
      await db.placenameStore.addPlacename(category._id, newPlacename);
      return h.redirect(`/category/${category._id}`);
    },
  },

  deletePlacename: {
    handler: async function(request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      await db.placenameStore.deletePlacename(request.params.placenameid);
      return h.redirect(`/category/${category._id}`);
    },
  },
};