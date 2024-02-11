import api from "../../api/apiSlice";

const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllAdmin: build.query({
      query: () => "/admin",
      providesTags: ["Assign"],
    }),
  }),
});

export const { useGetAllAdminQuery } = adminApi;
