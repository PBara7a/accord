import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servers: [],
  channels: [],
  messages: [],
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
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setCurrentServer: (state, action) => {
      state.currentServer = action.payload;
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  setServers,
  setChannels,
  setMessages,
  setCurrentServer,
  setCurrentChannel,
  sendMessage,
} = appSlice.actions;

export default appSlice.reducer;
