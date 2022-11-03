import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setServers,
  setChannels,
  setCurrentServer,
  setCurrentChannel,
  setMessages,
  sendMessage,
  setMembersInChannel,
} from "../features/appSlice";
import io from "socket.io-client";

const host = "http://localhost:8000";

export const SocketContext = createContext();

export const useWebsocket = () => useContext(SocketContext);

export function SocketManager({ children }) {
  const [socket] = useState(io.connect(host));
  const [nsSocket, setNsSocket] = useState(io.connect(host + "/csgo"));
  const dispatch = useDispatch();
  const effectRan = useRef(false);

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

      // workaround strict mode, making sure the messageToClient listener is set when we join a namespace
      effectRan.current = false;
    });

    nsSocket.on("roomData", ({ title, messages }) => {
      dispatch(setMessages(messages));
      dispatch(setCurrentChannel(title));
    });

    nsSocket.on("updateMembers", (numberOfMembers) => {
      dispatch(setMembersInChannel(numberOfMembers));
    });

    // workaround strict mode firing this twice
    if (!effectRan.current) {
      nsSocket.on("messageToClients", (msg) => {
        dispatch(sendMessage(msg));
      });

      return () => (effectRan.current = true);
    }
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
