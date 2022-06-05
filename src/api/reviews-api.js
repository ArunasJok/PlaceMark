import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const reviewsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const reviews = db.reviewStore.getAllReviews();
      return reviews;
    },
  },
  findByCategory: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const reviews = await db.reviewStore.getReviewsByCategory(request.params.id);
      return reviews;
    },
  },

  leaveReview: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      if (!category) {
        return Boom.notFound("No Categories with this id");
      }
      const review = await db.reviewStore.review(
        request.payload.stars,        
        request.auth.credentials,
        category
      );
      return review;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.reviewStore.deleteAll();
      return { success: true };
    },
  },
};
