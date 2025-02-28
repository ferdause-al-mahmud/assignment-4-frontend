import { IOrder } from "@/types/order.type";
const statusStyles = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  canceled: "bg-red-100 text-red-800",
};

import TrackOrderModal from "@/components/modal/TrackOrderModal";
import { useState } from "react";

const UserOrderTable = ({ order }: { order: IOrder }) => {
  const [open, setOpen] = useState(false);
  return (
    <tr>
      <td className="px-4 py-2 whitespace-nowrap">
        <div className="flex flex-col   text-sm gap-2 ">
          <span>{order?.transactionId || order?._id}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {order?.product?.brand}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {order?.product?.name}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {order?.product?.category}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {order?.quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className={`text-sm  text-gray-900`}>$ {order?.totalPrice}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            
                        ${statusStyles[order?.status]}
                             `}
        >
          {order?.status || "pending"}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <TrackOrderModal status={order?.status} setOpen={setOpen} open={open} />
      </td>
    </tr>
  );
};

export default UserOrderTable;
