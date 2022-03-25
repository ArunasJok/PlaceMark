import { v4 } from "uuid";

let placenames = [];

export const placenameMemStore = {
  async getAllPlacenames() {
    return placenames;
  },

  async addPlacename(categoryId, placename) {
    placename._id = v4();
    placename.categoryid = categoryId;
    placenames.push(placename);
    return placename;
  },

  async getPlacenamesByCategoryId(id) {
    return placenames.filter((placename) => placename.categoryid === id);
  },

  async getPlacenameById(id) {
    return placenames.find((placename) => placename._id === id);
  },

  async getCategoryPlacenames(categoryId) {
    return placenames.filter((placename) => placename.categoryid === categoryId);
  },

  async deletePlacename(id) {
    const index = placenames.findIndex((placename) => placename._id === id);
    placenames.splice(index, 1);
  },

  async deleteAllPlacenames() {
    placenames = [];
  },

  async updatePlacename(placename, updatedPlacename) {
    placename.title = updatedPlacename.title;
    placename.location = updatedPlacename.location;
    placename.description = updatedPlacename.description;
  },
};