import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, arunas, testCategories } from "../fixtures.js";

suite("Category API tests", () => {

  let user = null;  

  setup(async () => {
    await placemarkService.deleteAllCategories();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    arunas.userid = user._id;
  });

  teardown(async () => {});

  test("create category", async () => {
  });

  test("delete a category", async () => {
  });

  test("create multiple categories", async () => {
  });

  test("remove non-existant category", async () => {
  });
});