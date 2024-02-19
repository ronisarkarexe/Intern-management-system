import api from "../../api/apiSlice";
import { token } from "../../utils";

const eventApi = api.injectEndpoints({
  endpoints: (build) => ({
    createEvent: build.mutation({
      query: (data) => ({
        url: "/event",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      transformResponse: (response) => response.message,
      invalidatesTags: ["CreateEvent"],
    }),
    getAllEvents: build.query({
      query: () => ({
        url: "/event",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["CreateEvent", "DeleteEvent"],
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `/event/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["DeleteEvent"],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetAllEventsQuery,
  useDeleteEventMutation,
} = eventApi;
