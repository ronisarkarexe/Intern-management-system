import api from "../../api/apiSlice";
import { token } from "../../utils";

const taskApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllTask: build.query({
      query: () => ({
        url: "/task",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["CreateTask", "DeleteTask"],
    }),
    createTask: build.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["CreateTask"],
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["DeleteTask"],
    }),
  }),
});

export const {
  useGetAllTaskQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
