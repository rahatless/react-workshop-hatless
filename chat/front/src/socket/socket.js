import io from "socket.io-client";
let socket = null;

export default function getSocket() {
  console.log(socket);
  if (socket === null) {
    console.log("happens once");
    socket = io("http://localhost:8000");
    return socket;
  }
  return socket;
}
