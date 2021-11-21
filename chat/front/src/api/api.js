import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 60000,
  withCredentials: true,
});

export const login = (body) =>
  client.post("/login", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getAllRooms = () => client.get("/rooms");
export const getJoinedRooms = (username) => client.get(`rooms/u/${username}`);
export const getRoom = (roomid) => client.get(`/rooms/${roomid}`);
export const createRoom = (body) =>
  client.post("/rooms", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const joinRoom = (body) =>
  client.post("/rooms/join", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const signup = (body) =>
  client.post("/users/create", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
