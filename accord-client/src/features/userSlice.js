import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../configs/firebaseConfig";
import { signOut } from "firebase/auth";

const initialState = {
  user: {},
  isLoggedIn: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
      signOut(auth);
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
