import { db } from "../models/db.js";

export const reviewsController = {
  index: {
    handler: async function (request, h) {
      const categories = await db.categoryStore.getAllCategories();
      return h.view("Review", { title: "Submit a review", categories: categories });
    },
  },
  report: {
    handler: async function (request, h) {
      const reviews = await db.reviewStore.getAllReviews();
      return h.view("Report", {
        title: "Reviews to Date",
        reviews: reviews,
      });
    },
  },
  review: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawCategory = request.payload.category.split(",");
        const category = await db.categoryStore.findByName(rawCategory[0], rawCategory[1]);
        await db.reviewStore.review(request.payload.stars, loggedInUser._id, category._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};