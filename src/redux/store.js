import { configureStore } from "@reduxjs/toolkit";
import internReducer from "./features/intern/internSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import api from "./api/apiSlice";
import departmentReducer from "./features/department/departmentSlice";
import authReducer from "./features/auth/authSlice";
import profileReducer from "./features/profile/profileSlice";

const store = configureStore({
  reducer: {
    user: profileReducer,
    auth: authReducer,
    department: departmentReducer,
    intern: internReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
export default store;
