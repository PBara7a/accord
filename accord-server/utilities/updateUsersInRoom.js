const updateUsersInRoom = async (socket, namespace, roomToJoin) => {
  const clients = await socket
    .of(namespace.endpoint)
    .in(roomToJoin)
    .allSockets();

  const numberOfClients = Array.from(clients).length;

  socket
    .of(namespace.endpoint)
    .in(roomToJoin)
    .emit("updateMembers", numberOfClients);
};

module.exports = updateUsersInRoom;
