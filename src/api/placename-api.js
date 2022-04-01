import Boom from "@hapi/boom";
import { db } from "../models/db.js";

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
  },

  findOne: {
    auth: false,
    async handler(request) {
        try {
            const placename = await db.placenameStore.getPlacenameById(request.params.id);
            if (!placename) {
              return Boom.notFound("No track with this id");
            }
            return placename;
          } catch (err) {
            return Boom.serverUnavailable("No track with this id");
        }
    },
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
  },
};