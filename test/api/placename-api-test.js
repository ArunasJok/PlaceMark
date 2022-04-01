import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, arunas, testCategories, testPlacenames, mountain } from "../fixtures.js";

suite("Placename API tests", () => {
  let user = null;
  let hikingList = null;

  setup(async () => {
    await placemarkService.deleteAllCategories();
    await placemarkService.deleteAllUsers();
    await placemarkService.deleteAllPlacenames();
    user = await placemarkService.createUser(maggie);
    arunas.userid = user._id;
    hikingList = await placemarkService.createCategory(arunas)
  });

  teardown(async () => {});

  test("create a placename", async () => {
    const returnedPlacename = await placemarkService.createPlacename(hikingList._id, mountain);
    assertSubset(mountain, returnedPlacename);
  });

  test("create Multiple placenames", async () => {
    for (let i = 0; i < testPlacenames.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await placemarkService.createPlacename(hikingList._id, testPlacenames[i]);
      }
      const returnedPlacenames = await placemarkService.getAllPlacenames();
      assert.equal(returnedPlacenames.length, testPlacenames.length);
      for (let i = 0; i < returnedPlacenames.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        const placename = await placemarkService.getPlacename(returnedPlacenames[i]._id);
        assertSubset(placename, returnedPlacenames[i]);
      }
  });

  test("Delete Placename", async () => {
    for (let i = 0; i < testPlacenames.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await placemarkService.createPlacename(hikingList._id, testPlacenames[i]);
      }
      let returnedPlacenames = await placemarkService.getAllPlacenames();
      assert.equal(returnedPlacenames.length, testPlacenames.length);
      for (let i = 0; i < returnedPlacenames.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        const placename = await placemarkService.deletePlacename(returnedPlacenames[i]._id);
      }
      returnedPlacenames = await placemarkService.getAllPlacenames();
      assert.equal(returnedPlacenames.length, 0);
  });

  test("test denormalised category", async () => {
    for (let i = 0; i < testPlacenames.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await placemarkService.createPlacename(hikingList._id, testPlacenames[i]);
      }
      const returnedCategory = await placemarkService.getCategory(hikingList._id);
      assert.equal(returnedCategory.placenames.length, testPlacenames.length);
      for (let i = 0; i < testPlacenames.length; i += 1) {
        assertSubset(testPlacenames[i], returnedCategory.placenames[i]);
      }
  });
});