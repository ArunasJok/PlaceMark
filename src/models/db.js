// Memory Store
import { userMemStore } from "./mem/user-mem-store.js";
import { categoryMemStore } from "./mem/category-mem-store.js";
import { placenameMemStore } from "./mem/placename-mem-store.js";

// JSON Store
import { userJsonStore } from "./json/user-json-store.js";
import { categoryJsonStore } from "./json/category-json-store.js";
import { placenameJsonStore } from "./json/placename-json-store.js";

// Mongo Store
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { categoryMongoStore } from "./mongo/category-mongo-store.js";
import { placenameMongoStore } from "./mongo/placename-mongo-store.js";
import { reviewMongoStore } from "./mongo/review-mongo-store.js";

export const db = {
  userStore: null,
  categoryStore: null,
  placenameStore: null,
  reviewStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.categoryStore = categoryJsonStore;
        this.placenameStore = placenameJsonStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        this.categoryStore = categoryMongoStore;
        this.placenameStore = placenameMongoStore;
        this.reviewStore = reviewMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.categoryStore = categoryMemStore;
        this.placenameStore = placenameMemStore;
        this.reviewStore = reviewMongoStore;
    }
  },
};