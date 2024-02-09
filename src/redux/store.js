import { configureStore } from "@reduxjs/toolkit";
import internReducer from "./features/intern/internSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import api from "./api/apiSlice";

const store = configureStore({
  reducer: {
    intern: internReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
export default store;
