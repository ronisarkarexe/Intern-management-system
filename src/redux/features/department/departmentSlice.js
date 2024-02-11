import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departmentId: "",
};

export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    addDepartmentId: (state, action) => {
      state.departmentId = action.payload;
    },
    deleteFromStateId: (state) => {
      state.departmentId = "";
    },
  },
});

export const { addDepartmentId, deleteFromStateId } = departmentSlice.actions;

export default departmentSlice.reducer;
