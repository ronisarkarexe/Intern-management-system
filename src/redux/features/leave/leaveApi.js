import api from "../../api/apiSlice";
import { token } from "../../utils";

const leaveApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllLeave: build.query({
      query: () => ({
        url: "/intern-leave",
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["CreateLeaveApi", "DeleteLeave", "UpdateLeaveApi"],
    }),
    createLeave: build.mutation({
      query: (data) => ({
        url: "/intern-leave",
        method: "POST",
        body: data,
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["CreateLeaveApi"],
    }),
    deleteLeave: build.mutation({
      query: (id) => ({
        url: `/intern-leave/${id}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["DeleteLeave"],
    }),
    updateLeave: build.mutation({
      query: ({ id, data }) => ({
        url: `/intern-leave/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["UpdateLeaveApi"],
    }),
  }),
});

export const {
  useGetAllLeaveQuery,
  useCreateLeaveMutation,
  useDeleteLeaveMutation,
  useUpdateLeaveMutation,
} = leaveApi;
