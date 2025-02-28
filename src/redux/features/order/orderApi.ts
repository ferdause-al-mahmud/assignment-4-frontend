/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { IOrder } from "@/types/order.type";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => "/orders",
      transformResponse: (res: any) => {
        return res.data;
      },
    }),
    getUserOrder: builder.query({
      query: (email: string) => `/orders/${email}`,
      transformResponse: (res: any) => {
        return res.data;
      },
    }),
    getSingleOrder: builder.query({
      query: (id: string) => `/orders/${id}`,
    }),
    updateOrder: builder.mutation({
      query: (obj: { body: Partial<IOrder>; id: string }) => ({
        url: `/orders/${obj?.id}`,
        method: "PUT",
        body: obj?.body,
      }),
    }),
  }),
});

export const {
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
  useGetUserOrderQuery,
} = orderApi;
