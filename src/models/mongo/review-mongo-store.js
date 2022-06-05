import { Review } from "./review.js";

export const reviewMongoStore = {
  async getAllReviews() {
    const reviews = await Review.find().populate("donor").populate("category").lean();
    return reviews;
  },

  async getReviewsByCategory(id) {
    const reviews = await Review.find({ category: id });
    return reviews;
  },

  async review(stars, donor, category) {
    const newReview = new Review({
      stars,
      donor: donor._id,
      category: category._id,
    });
    await newReview.save();
    return newReview;
  },

  async deleteAll() {
    await Review.deleteMany({});
  },
};