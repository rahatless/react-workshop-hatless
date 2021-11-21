const mongoose = require("mongoose");
const Room = require("../models/Room");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = async function routes(fastify) {
  fastify.route({
    method: "POST",
    url: "/",
    schema: {
      body: {
        username: { type: "string" },
        password: { type: "string" },
      },
    },
    response: {
      200: {
        username: { type: "string" },
      },
      400: {
        error: { type: "string" },
      },
    },
    handler: async function (request, reply) {},
  });
};
