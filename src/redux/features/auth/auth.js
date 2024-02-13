import api from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.status,
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
