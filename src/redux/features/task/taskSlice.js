import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks == action.payload;
    },
  },
});

export const { addTasks } = taskSlice.actions;

export default taskSlice.reducer;
