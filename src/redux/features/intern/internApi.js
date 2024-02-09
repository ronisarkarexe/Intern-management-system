import api from "../../api/apiSlice";

const internApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllInterns: build.query({
      query: () => "/department",
    }),
  }),
});

export const { useGetAllInternsQuery } = internApi;
