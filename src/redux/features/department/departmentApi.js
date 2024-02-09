import api from "../../api/apiSlice";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllDepartments: build.query({
      query: () => "/department",
      providesTags: ["Create"],
    }),
    createDepartment: build.mutation({
      query: (data) => ({
        url: "/department",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["Create"],
    }),
  }),
});

export const { useGetAllDepartmentsQuery, useCreateDepartmentMutation } =
  departmentApi;
