import api from "../../api/apiSlice";
import { token } from "../../utils";

const internApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllInterns: build.query({
      query: () => ({
        url: "/department",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useGetAllInternsQuery } = internApi;
