// const fp = require("fastify-plugin");
// module.exports = fp(async function (fastify, opts, done) {
//   fastify.decorate("authenticate", function (request, reply) {
//     try {
//       console.log("yolo");
//       request.jwtVerify();
//       request.valid = true;
//     } catch (err) {
//       reply.send({ error: "User not authenticated" });
//     }
//   });
// });

// module.exports = function (request, reply) {
//   try {
//     request.jwtVerify();
//     request.valid = true;
//   } catch (err) {
//     reply.send({ error: "User not authenticated" });
//   }
// };
