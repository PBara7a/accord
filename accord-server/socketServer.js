const express = require("express");
const app = express();
const socketio = require("socket.io");
const namespaces = require("./data/seed");
const updateUsersInRoom = require("./utilities/updateUsersInRoom");

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

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on("connection", (nsSocket) => {
    nsSocket.emit("namespaceData", {
      title: namespace.nsTitle,
      rooms: namespace.rooms,
    });

    nsSocket.on("joinRoom", (roomToJoin) => {
      // room[0] is the socket's own room
      const roomToLeave = Array.from(nsSocket.rooms)[1];
      nsSocket.leave(roomToLeave);
      updateUsersInRoom(io, namespace, roomToLeave);

      nsSocket.join(roomToJoin);

      console.log(`${nsSocket.id} joined ${roomToJoin}`);

      const nsRoom = namespace.rooms.find(
        (room) => room.roomTitle === roomToJoin
      );

      nsSocket.emit("roomData", {
        title: nsRoom.roomTitle,
        messages: nsRoom.history,
      });

      updateUsersInRoom(io, namespace, roomToJoin);
    });

    nsSocket.on("newMessageToServer", (msg) => {
      const fullMsg = {
        text: msg.text,
        time: Date.now(),
        username: "pbara7a",
        avatar: "https://www.fillmurray.com/30/30",
      };

      const roomTitle = Array.from(nsSocket.rooms)[1];

      // find the correct room and send msg
      const nsRoom = namespace.rooms.find(
        (room) => room.roomTitle === roomTitle
      );
      nsRoom.addMessage(fullMsg);

      io.of(namespace.endpoint).to(roomTitle).emit("messageToClients", fullMsg);
    });
  });
});
