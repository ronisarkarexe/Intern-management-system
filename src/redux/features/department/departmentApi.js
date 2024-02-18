import api from "../../api/apiSlice";
import { token } from "../../utils";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllDepartments: build.query({
      query: () => ({
        url: "/department",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["Create", "Assign", "DeleteDepartment"],
    }),
    createDepartment: build.mutation({
      query: (data) => ({
        url: "/department",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["Create"],
    }),
    assignAdmin: build.mutation({
      query: ({ id, data }) => ({
        url: `/department/${id}/assign-admin`,
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["Assign"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `/department/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["DeleteDepartment"],
    }),
  }),
});

export const {
  useGetAllDepartmentsQuery,
  useCreateDepartmentMutation,
  useAssignAdminMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
