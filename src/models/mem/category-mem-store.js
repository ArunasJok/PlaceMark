import { v4 } from "uuid";
import { placenameMemStore } from "./placename-mem-store.js";

let categories = [];

export const categoryMemStore = {
  async getAllCategories() {
    return categories;
  },

  async getUserCategories(userid) {
    return categories.filter((category) => category.userid === userid);
  },

  async addCategory(category) {
    category._id = v4();
    categories.push(category);
    return category;
  },

  async getCategoryById(id) {
    const list = categories.find((category) => category._id === id);
    if (list) {
      list.placenames = await placenameMemStore.getPlacenamesByCategoryId(list._id);
      return list;
    }
    return null;
  },

  async deleteCategoryById(id) {
    const index = categories.findIndex((category) => category._id === id);
    if (index !== -1) categories.splice(index, 1);
  },

  async deleteAllCategories() {
    categories = [];
  },
};