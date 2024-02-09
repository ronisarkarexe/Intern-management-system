import api from "../../api/apiSlice";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllDepartments: build.query({
      query: () => "/department",
    }),
  }),
});

export const { useGetAllDepartmentsQuery } = departmentApi;
