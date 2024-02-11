import api from "../../api/apiSlice";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllDepartments: build.query({
      query: () => "/department",
      providesTags: ["Create", "Assign", "Delete"],
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
    assignAdmin: build.mutation({
      query: ({ id, data }) => ({
        url: `/department/${id}/assign-admin`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["Assign"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `/department/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["Delete"],
    }),
  }),
});

export const {
  useGetAllDepartmentsQuery,
  useCreateDepartmentMutation,
  useAssignAdminMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
