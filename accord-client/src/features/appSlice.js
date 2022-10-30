import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servers: [],
  channels: [],
  currentServer: "CS:GO",
  currentChannel: "General",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setServers: (state, action) => {
      state.servers = action.payload;
    },
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
    setCurrentServer: (state, action) => {
      state.currentServer = action.payload;
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
  },
});

export const { setServers, setChannels, setCurrentServer, setCurrentChannel } =
  appSlice.actions;

export default appSlice.reducer;
