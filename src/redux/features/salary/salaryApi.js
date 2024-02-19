import api from "../../api/apiSlice";
import { token } from "../../utils";

const salaryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllSalary: build.query({
      query: () => ({
        url: "/salary",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["CreateSalary", "DeleteSalary"],
    }),
    createSalary: build.mutation({
      query: (data) => ({
        url: "/salary",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["CreateSalary"],
    }),
    deleteSalary: build.mutation({
      query: (id) => ({
        url: `/salary/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["DeleteSalary"],
    }),
  }),
});

export const {
  useGetAllSalaryQuery,
  useCreateSalaryMutation,
  useDeleteSalaryMutation,
} = salaryApi;
