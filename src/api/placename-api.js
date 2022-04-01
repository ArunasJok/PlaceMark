import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, PlacenameSpec, PlacenameSpecPlus, PlacenameArraySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const placenameApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
        try {
            const placenames = await db.placenameStore.getAllPlacenames();
            return placenames;
          } catch (err) {
            return Boom.serverUnavailable("Database Error");
        }
    },
    tags: ["api"],
    response: { schema: PlacenameArraySpec, failAction: validationError },
    description: "Get all placenameApi",
    notes: "Returns all placenameApi",
  },

  findOne: {
    auth: false,
    async handler(request) {
        try {
            const placename = await db.placenameStore.getPlacenameById(request.params.id);
            if (!placename) {
              return Boom.notFound("No Placename with this id");
            }
            return placename;
          } catch (err) {
            return Boom.serverUnavailable("No Placename with this id");
        }
    },
    tags: ["api"],
    description: "Find a Placename",
    notes: "Returns a Placename",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PlacenameSpecPlus, failAction: validationError },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
        try {
            const placename = await db.placenameStore.addPlacename(request.params.id, request.payload);
            if (placename) {
              return h.response(placename).code(201);
            }
            return Boom.badImplementation("error creating placename");
          } catch (err) {
            return Boom.serverUnavailable("Database Error");
        }
    },
    tags: ["api"],
    description: "Create a placename",
    notes: "Returns the newly created placename",
    validate: { payload: PlacenameSpec },
    response: { schema: PlacenameSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
        try {
            await db.placenameStore.deleteAllPlacenames();
            return h.response().code(204);
          } catch (err) {
            return Boom.serverUnavailable("Database Error");
        }
    },
    tags: ["api"],
    description: "Delete all placenameApi",
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
        try {
            const placename = await db.placenameStore.getPlacenameById(request.params.id);
            if (!placename) {
              return Boom.notFound("No Placename with this id");
            }
            await db.placenameStore.deletePlacename(placename._id);
            return h.response().code(204);
          } catch (err) {
            return Boom.serverUnavailable("No Placename with this id");
        }
    },
    tags: ["api"],
    description: "Delete a placename",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};