import { Category } from "./category.js";
import { placenameMongoStore } from "./placename-mongo-store.js";

export const categoryMongoStore = {
  async getAllCategories() {
    const categories = await Category.find().lean();
    return categories;
  },

  async getCategoryById(id) {
    if (id) {
      const category = await Category.findOne({ _id: id }).lean();
      if (category) {
        category.placenames = await placenameMongoStore.getPlacenamesByCategoryId(category._id);
      }
      return category;
    }
    return null;
  },

  async addCategory(category) {
    const newCategory = new Category(category);
    const categoryObj = await newCategory.save();
    return this.getCategoryById(categoryObj._id);
  },

  async findByTitle(title) {
    const category = await Category.findOne({
      title,      
    });
    return category;
  },

  async getUserCategories(id) {
    const category = await Category.find({ userid: id }).lean();
    return category;
  },

  async deleteCategoryById(id) {
    try {
      await Category.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllCategories() {
    await Category.deleteMany({});
  },

  async updateCategory(updatedCategory) {
    const category = await Category.findOne({ _id: updatedCategory._id });
    category.title = updatedCategory.title;
    category.img = updatedCategory.img;
    await category.save();
  },
};