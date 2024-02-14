import api from "../../api/apiSlice";
import { token } from "../../utils";

const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfileInfo: build.query({
      query: () => ({
        url: "/view-profile",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useGetProfileInfoQuery } = profileApi;
