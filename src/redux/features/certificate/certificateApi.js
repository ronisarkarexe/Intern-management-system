import api from "../../api/apiSlice";
import { token } from "../../utils";

const certificateApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCertificates: build.query({
      query: () => ({
        url: "/certificate",
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["CreateCertificate", "DeleteCertificate"],
    }),
    createCertificate: build.mutation({
      query: (data) => ({
        url: "/certificate",
        method: "POST",
        body: data,
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["CreateCertificate"],
    }),
    deleteCertificate: build.mutation({
      query: (id) => ({
        url: `/certificate/${id}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["DeleteCertificate"],
    }),
  }),
});

export const {
  useGetAllCertificatesQuery,
  useCreateCertificateMutation,
  useDeleteCertificateMutation,
} = certificateApi;
