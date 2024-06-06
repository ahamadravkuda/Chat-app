const express = require("express");
const http = require("http");
const { Socket } = require("socket.io-client");
const Server = require("socket.io").Server;

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("connected");
  socket.on("chat", (chat) => {
    io.emit("chat", chat);
  });
  socket.on("disconnected", () => {
    console.log("disconnected");
  });
});

server.listen("2000", () => {
  console.log("running on 2000 PORT");
});
