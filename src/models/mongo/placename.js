import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placenameSchema = new Schema({
  title: String,
  location: String,
  description: String,
  categoryid: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const Placename = Mongoose.model("Placename", placenameSchema);