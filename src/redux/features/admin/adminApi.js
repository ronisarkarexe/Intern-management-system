import api from "../../api/apiSlice";
import { token } from "../../utils";

const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllAdmin: build.query({
      query: () => ({
        url: "/admin",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: [
        "Assign",
        "AdminCreate",
        "DeleteAdmin",
        "DeleteDepartment",
      ],
    }),
    createAdmin: build.mutation({
      query: (data) => ({
        url: "/admin",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["AdminCreate"],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["DeleteAdmin"],
    }),
    getSingleAdmin: build.query({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useGetAllAdminQuery,
  useCreateAdminMutation,
  useDeleteAdminMutation,
  useGetSingleAdminQuery,
} = adminApi;
