import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";

const db = new Low(new JSONFile("./src/models/json/placenames.json"));
db.data = { placenames: [] };

export const placenameJsonStore = {
  async getAllPlacenames() {
    await db.read();
    return db.data.placenames;
  },

  async addPlacename(categoryId, placename) {
    await db.read();
    placename._id = v4();
    placename.categoryid = categoryId;
    db.data.placenames.push(placename);
    await db.write();
    return placename;
  },

  async getPlacenamesByCategoryId(id) {
    await db.read();
    return db.data.placenames.filter((placename) => placename.categoryid === id);
  },

  async getPlacenameById(id) {
    await db.read();
    return db.data.placename.find((placename) => placename._id === id);
  },

  async deletePlacename(id) {
    await db.read();
    const index = db.data.placenames.findIndex((placename) => placename._id === id);
    db.data.placenames.splice(index, 1);
    await db.write();
  },

  async deleteAllPlacenames() {
    db.data.placenames = [];
    await db.write();
  },

  async updatePlacename(placename, updatedPlacename) {
    placename.title = updatedPlacename.title;
    placename.location = updatedPlacename.location;
    placename.description = updatedPlacename.description;
    await db.write();
  },
};