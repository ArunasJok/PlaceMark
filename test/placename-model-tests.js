import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testCategories, testPlacenames, ievute, arunas, mountain, testUsers } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("Placename Model tests", () => {

  let ievuteList = null;

  setup(async () => {
    db.init("mongo");
    await db.categoryStore.deleteAllCategories();
    await db.placenameStore.deleteAllPlacenames();
    ievuteList = await db.categoryStore.addCategory(ievute);
    for (let i = 0; i < testPlacenames.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPlacenames[i] = await db.placenameStore.addPlacename(ievuteList._id, testPlacenames[i]);
    }
  });

  test("create single placename", async () => {
    const arunasList = await db.categoryStore.addCategory(arunas);
    const placename = await db.placenameStore.addPlacename(arunasList._id, mountain)
    assert.isNotNull(placename._id);
    assertSubset (mountain, placename);
  });

  test("get multiple placenames", async () => {
    const placenames = await db.placenameStore.getPlacenamesByCategoryId(ievuteList._id);
    assert.equal(testPlacenames.length, testPlacenames.length)
  });

  test("delete all placenames", async () => {
    const placenames = await db.placenameStore.getAllPlacenames();
    assert.equal(testPlacenames.length, placenames.length);
    await db.placenameStore.deleteAllPlacenames();
    const newPlacenames = await db.placenameStore.getAllPlacenames();
    assert.equal(0, newPlacenames.length);
  });

  test("get a placename - success", async () => {
    const arunasList = await db.categoryStore.addCategory(arunas);
    const placename = await db.placenameStore.addPlacename(arunasList._id, mountain)
    const newPlacename = await db.placenameStore.getPlacenameById(placename._id);
    assertSubset (mountain, newPlacename);
  });

  test("delete One placename - success", async () => {
    await db.placenameStore.deletePlacename(testPlacenames[0]._id);
    const placenames = await db.placenameStore.getAllPlacenames();
    assert.equal(placenames.length, testCategories.length - 1);
    const deletedPlacename = await db.placenameStore.getPlacenameById(testPlacenames[0]._id);
    assert.isNull(deletedPlacename);
  });

  test("get a placename - bad params", async () => {
    assert.isNull(await db.placenameStore.getPlacenameById(""));
    assert.isNull(await db.placenameStore.getPlacenameById());
  });

  test("delete one placename - fail", async () => {
    await db.placenameStore.deletePlacename("bad-id");
    const placenames = await db.placenameStore.getAllPlacenames();
    assert.equal(placenames.length, testCategories.length);
  });
});