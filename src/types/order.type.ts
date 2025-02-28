import { IBike } from ".";


export type IOrder = {
  _id: string;
  email: string;
  product: IBike;
  quantity: number;
  totalPrice: number;
  createdAt: string;
  transactionId?: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "canceled";
}