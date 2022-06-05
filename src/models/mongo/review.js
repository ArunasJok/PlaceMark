import Mongoose from "mongoose";

const { Schema } = Mongoose;

const reviewSchema = new Schema({
  amount: Number,
  method: String,
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const Review = Mongoose.model("Review", reviewSchema);