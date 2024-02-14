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
      providesTags: ["Assign, AdminCreate"],
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
  }),
});

export const { useGetAllAdminQuery, useCreateAdminMutation } = adminApi;
