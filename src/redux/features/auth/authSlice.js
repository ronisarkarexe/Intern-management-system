import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAccessTokenId: (state, action) => {
      state.accessToken = action.payload;
    },
    deleteAccessTokenFromState: (state) => {
      state.accessToken = "";
    },
  },
});

export const { addAccessTokenId, deleteAccessTokenFromState } =
  authSlice.actions;

export default authSlice.reducer;
