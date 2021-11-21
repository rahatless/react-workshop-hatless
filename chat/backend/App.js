const fastify = require("fastify")();
const mongoose = require("mongoose");

// fastify.register(require("fastify-cors"), {
//   origin: "http://localhost:3000",
//   methods: ["GET", "PUT", "POST", "DELETE", "UPDATE", "OPTIONS"],
//   allowedHeaders: [
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "X-Access-Token",
//     "Authorization",
//   ],
//   credentials: true,
// });

fastify.listen(8000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at: ${address}`);
});
