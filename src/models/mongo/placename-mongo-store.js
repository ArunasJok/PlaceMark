import { Placename } from "./placename.js";

export const placenameMongoStore = {
    async getAllPlacenames() {
      const placenames = await Placename.find().lean();
      return placenames;
    },
  
    async addPlacename(categoryId, placename) {
      placename.categoryid = categoryId;
      const newPlacename = new Placename(placename);
      const placenameObj = await newPlacename.save();
      return this.getPlacenameById(placenameObj._id);
    },
  
    async getPlacenamesByCategoryId(id) {
      const placenames = await Placename.find({ categoryid: id }).lean();
      return placenames;
    },
  
    async getPlacenameById(id) {
      if (id) {
        const placename = await Placename.findOne({ _id: id }).lean();
        return placename;
      }
      return null;
    },
  
    async deletePlacename(id) {
      try {
        await Placename.deleteOne({ _id: id });
      } catch (error) {
        console.log("bad id");
      }
    },
  
    async deleteAllPlacenames() {
      await Placename.deleteMany({});
    },
  
    async updatePlacename(placename, updatedPlacename) {
      placename.title = updatedPlacename.title;
      placename.location = updatedPlacename.location;
      placename.description = updatedPlacename.description;
      await placename.save();
    },
  };