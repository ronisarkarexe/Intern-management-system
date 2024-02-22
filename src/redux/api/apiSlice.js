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
    "CreateEvent",
    "DeleteEvent",
    "CreateSalary",
    "DeleteSalary",
    "CreateTask",
    "DeleteTask",
    "CreateLeave",
    "DeleteLeave",
    "CreateCertificate",
    "DeleteCertificate",
    "UpdateTaskStatus",
  ],
  endpoints: () => ({}),
});

export default api;
