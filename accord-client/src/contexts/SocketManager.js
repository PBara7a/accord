import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setServers,
  setChannels,
  setCurrentServer,
  setCurrentChannel,
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
    nsSocket.on("namespaceData", (nsData) => {
      dispatch(setChannels(nsData.rooms));
      dispatch(setCurrentServer(nsData.title));
    });
  }, [nsSocket, dispatch]);

  const updateSocket = (endpoint) => {
    nsSocket.close();
    setNsSocket(io.connect(host + endpoint));
  };

  const joinChannel = (endpoint) => {
    nsSocket.emit("joinRoom", endpoint);
    dispatch(setCurrentChannel(endpoint));
  };

  const value = {
    socket,
    nsSocket,
    updateSocket,
    joinChannel,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}
