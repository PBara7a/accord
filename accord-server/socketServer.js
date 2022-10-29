const express = require("express");
const app = express();
const socketio = require("socket.io");

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(`${socket.id} has just connected`);

  socket.emit("namespacesList", { message: "Connected to server" });
});
