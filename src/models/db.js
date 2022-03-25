import { userMemStore } from "./mem/user-mem-store.js";
import { categoryMemStore } from "./mem/category-mem-store.js";
import { placenameMemStore } from "./mem/placename-mem-store.js";

export const db = {
  userStore: null,
  categoryStore: null,
  placenameStore: null,

  init() {
    this.userStore = userMemStore;
    this.categoryStore = categoryMemStore;
    this.placenameStore = placenameMemStore;
  },
};