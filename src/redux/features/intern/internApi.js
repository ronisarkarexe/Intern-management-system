import api from "../../api/apiSlice";
import { token } from "../../utils";

const internApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllInterns: build.query({
      query: () => ({
        url: "/intern",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["CreateIntern", "DeleteIntern"],
    }),
    createIntern: build.mutation({
      query: (data) => ({
        url: "/intern",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["CreateIntern"],
    }),
    deleteIntern: build.mutation({
      query: (id) => ({
        url: `/intern/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["DeleteIntern"],
    }),
  }),
});

export const {
  useGetAllInternsQuery,
  useCreateInternMutation,
  useDeleteInternMutation,
} = internApi;
