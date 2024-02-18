import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
  tagTypes: [
    "Create",
    "Assign",
    "Delete",
    "AdminCreate",
    "DeleteAdmin",
    "DeleteDepartment",
    "CreateIntern",
    "DeleteIntern",
  ],
  endpoints: () => ({}),
});

export default api;
