import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setServers,
  setChannels,
  setCurrentServer,
  setCurrentChannel,
  setMessages,
  sendMessage,
} from "../features/appSlice";
import io from "socket.io-client";

const host = "http://localhost:8000";

export const SocketContext = createContext();

export const useWebsocket = () => useContext(SocketContext);

export function SocketManager({ children }) {
  const [socket] = useState(io.connect(host));
  const [nsSocket, setNsSocket] = useState(io.connect(host + "/csgo"));
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("namespacesList", (data) => {
      dispatch(setServers(data));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    nsSocket.emit("joinRoom", "General");

    nsSocket.on("namespaceData", (nsData) => {
      dispatch(setChannels(nsData.rooms));
      dispatch(setCurrentServer(nsData.title));
    });

    nsSocket.on("messageToClients", (msg) => {
      dispatch(sendMessage(msg));
    });

    nsSocket.on("roomData", ({ title, messages }) => {
      dispatch(setMessages(messages));
      dispatch(setCurrentChannel(title));
      // scroll to the last message sent
    });
  }, [nsSocket, dispatch]);

  const updateSocket = (endpoint) => {
    nsSocket.close();
    setNsSocket(io.connect(host + endpoint));
  };

  const value = {
    socket,
    nsSocket,
    updateSocket,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}
