const fp = require("fastify-plugin");
const fastifyIO = require("fastify-socket.io");

module.exports = fp(async function (fastify, opts) {
  fastify.register(fastifyIO, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "PUT", "POST", "DELETE", "UPDATE", "OPTIONS"],
      allowedHeaders: [
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization",
      ],
      credentials: true,
    },
  });
  fastify.ready().then(() => {
    fastify.io.on("connection", (socket) => {
      console.log("someone connected");
      socket.on("message-sent", (data) => {
        const { username, content, room, type } = data;
        socket.broadcast.to(room).emit("message-recieved", {
          username,
          content,
          room,
          type,
        });
      });

      socket.on("join-room", (data) => {
        socket.join(data.roomid);
        console.log(`${socket.id} joined room: ${data.roomid}`);
      });
    });
  });
});
