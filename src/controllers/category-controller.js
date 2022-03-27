import { db } from "../models/db.js";

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