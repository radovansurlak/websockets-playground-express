const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = app.listen(8080);

const io = socketIO(server, {
  cors: true,
  origins: ["*:*"],
});
io.on("connection", (socket) => {
  io.emit("message", "connected");
  socket.on("newMessage", (data) => {
    io.emit("message", data);
  });
});
