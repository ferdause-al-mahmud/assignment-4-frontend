/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((el: { name: string; value: string }) =>
            params.append(el.name, el.value)
          );
        }
        return {
          url: "/bikes",
          method: "GET",
          params,
        };
      },
      providesTags: ["Bike"],
      transformResponse: (response: { data: any; totalItems: number }) => {
        console.log("API Response:", response); // Debugging
        return {
          bikes: response.data, // Paginated bikes
          totalItems: response.totalItems, // Total count of bikes
        };
      },
    }),
    getSingleBike: builder.query({
      query: (id: string) => `/bikes/${id}`,
    }),
    deleteBike: builder.mutation({
      query: (id: string) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
    }),
    updateBike: builder.mutation({
      query: (payload: { id: string; data: any }) => ({
        url: `/bikes/${payload.id}`,
        method: "PUT",
        body: payload.data,
      }),
    }),
    createBike: builder.mutation({
      query: (body) => ({
        url: "/bikes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Bike"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useCreateBikeMutation,
  useGetSingleBikeQuery,
  useDeleteBikeMutation,
  useUpdateBikeMutation,
} = bikeApi;
