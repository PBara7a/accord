const express = require("express");
const app = express();
const socketio = require("socket.io");
const namespaces = require("./data/seed");

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(`${socket.id} has just connected`);

  const nsData = namespaces.map((ns) => {
    return {
      img: ns.img,
      namespaceTitle: ns.nsTitle,
      endpoint: ns.endpoint,
    };
  });

  socket.emit("namespacesList", nsData);
});
