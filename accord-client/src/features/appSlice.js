import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const initialState = {
  endpoints: [],
  channels: [],
  nsSocket: io.connect("http://localhost:8000/csgo"),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setEndpoints: (state, action) => {
      state.endpoints = action.payload;
    },
    setChannelData: (state, action) => {
      state.channels = action.payload;
    },
    connectToServer: (state, action) => {
      if (state.nsSocket) state.nsSocket.close();
      state.nsSocket = io.connect(`http://localhost:8000${action.payload}`);
    },
  },
});

export const { setEndpoints, setChannelData, connectToServer } =
  appSlice.actions;

export default appSlice.reducer;
