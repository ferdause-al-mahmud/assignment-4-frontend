import { useGetAdminDataQuery } from "@/redux/features/user/userApi";
import { IBike } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useGetAllOrderQuery } from "@/redux/features/order/orderApi";
import { IOrder } from "@/types/order.type";
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import BikeTable from "@/components/table/BikeTable";
import OrderTable from "@/components/table/OrderTable";

const AdminDashboard = () => {
  const { data } = useGetAdminDataQuery(null);
  console.log(data);
  const { data: BikeData, refetch } = useGetAllBikesQuery(null);
  const { data: orders = [], refetch: OrderRefetch } =
    useGetAllOrderQuery(null);
  const bikes = BikeData?.bikes || [];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">
            {data?.data?.totalUser}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Bike</h2>
          <p className="text-3xl font-bold text-yellow-600">
            {data?.data?.totalBike}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Order</h2>
          <p className="text-3xl font-bold text-green-600">
            {/* {data?.data?.totalRevenew[0]?.price} */}
            {data?.data?.totalOrder}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Revenu</h2>
          <p className="text-3xl font-bold text-red-600">
            $ {data?.data?.totalRevenue?.[0]?.price}
          </p>
        </div>
      </div>
      {/* Bikes */}

      <div className="mt-12 mb-16 ">
        <div className="flex mb-5  justify-between items-center">
          <h2 className=" font-medium text-3xl">Bikes</h2>
          <Link to={"/dashboard/bikes"}>
            <Button>View All Bike</Button>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="overflow-x-auto">
            {bikes && bikes?.length !== 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Brand
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      In Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bikes?.slice(0, 3)?.map((car: IBike) => (
                    <BikeTable refetch={refetch} key={car?._id} car={car} />
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="py-16">
                <h1 className="text-center font-medium text-xl">
                  No Bike Available
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Orders */}
      <div className="mt-12 mb-16 ">
        <div className="flex mb-5  justify-between items-center">
          <h2 className=" font-medium text-3xl">Orders</h2>
          <Link to={"/dashboard/orders"}>
            <Button>View All Orders</Button>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="overflow-x-auto">
            {orders && orders?.length !== 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Id
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders?.slice(0, 3)?.map((el: IOrder) => (
                    <OrderTable
                      refetch={OrderRefetch}
                      key={el?._id}
                      order={el}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="py-16">
                <h1 className="text-center font-medium text-xl">
                  No Order Available
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
