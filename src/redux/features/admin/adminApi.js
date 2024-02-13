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
      providesTags: ["Assign"],
    }),
  }),
});

export const { useGetAllAdminQuery } = adminApi;
