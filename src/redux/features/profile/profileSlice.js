import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = profileSlice.actions;

export default profileSlice.reducer;
