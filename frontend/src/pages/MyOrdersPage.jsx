import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserOrders } from "../redux/slices/orderSlice.js";
import formatTimestamp from "../utils/formatDateAndTime.js";
import { Loader } from "lucide-react";
import ErrorPage from "../components/Common/ErrorPage.jsx";

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader className="text-gray-900 animate-spin" size={30} />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <ErrorPage />;
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6"> My Orders </h2>
      <div className="relative shadow-md sm:rounded-lg overflow-auto">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3 whitespace-nowrap">Image</th>
              <th className="py-2 px-4 sm:py-3 whitespace-nowrap">Order ID</th>
              <th className="py-2 px-4 sm:py-3 whitespace-nowrap">Created</th>
              <th className="py-2 px-4 sm:py-3 whitespace-nowrap">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3 whitespace-nowrap">Items</th>
              <th className="py-2 px-4 sm:py-3 whitespace-nowrap">Price</th>
              <th className="py-2 px-4 sm:py-3 whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 lg:py-4 px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className=" py-3 md:py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className=" py-3 md:py-4 px-4 whitespace-nowrap">
                    {`${formatTimestamp(order.createdAt)
                      .split(",")
                      .slice(1, 3)}`}
                  </td>
                  <td className=" py-3 md:py-4 px-4 whitespace-nowrap">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className=" py-3 md:py-4 px-4 whitespace-nowrap">
                    {order.orderItems.length}
                  </td>
                  <td className=" py-3 md:py-4 px-4 whitespace-nowrap">
                    ₹{order.totalPrice.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
