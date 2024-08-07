import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../util/utils";

const initialState = {
  user: getLocalStorage("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setValueUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { setValueUser } = authSlice.actions;

export default authSlice.reducer;
