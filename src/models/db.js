// Database used for local testing
// import { userMemStore } from "./mem/user-mem-store.js";
// import { categoryMemStore } from "./mem/category-mem-store.js";
// import { placenameMemStore } from "./mem/placename-mem-store.js";

// JSON Store
import { userJsonStore } from "./json/user-json-store.js";
import { categoryJsonStore } from "./json/category-json-store.js";
import { placenameJsonStore } from "./json/placename-json-store.js";


export const db = {
  userStore: null,
  categoryStore: null,
  placenameStore: null,

  init() {
    // this.userStore = userMemStore;
    this.userStore = userJsonStore;
    // this.categoryStore = categoryMemStore;
    this.categoryStore = categoryJsonStore;
    // this.placenameStore = placenameMemStore;
    this.placenameStore = placenameJsonStore;
  },
};