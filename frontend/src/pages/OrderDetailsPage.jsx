import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrderDetails } from "../redux/slices/orderSlice";
import formatTimestamp from "../utils/formatDateAndTime";
import { Loader } from "lucide-react";
import ErrorPage from "../components/Common/ErrorPage";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

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
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6"> Order Details </h2>
      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order Info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-md sm:text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {`${formatTimestamp(orderDetails.createdAt)
                  .split(",")
                  .splice(0, 3)
                  .join(",")} • ${formatTimestamp(orderDetails.createdAt)
                  .split(",")
                  .pop()}`}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  (orderDetails.status === "Delivered" && "bg-green-100 text-green-700" ||
                  orderDetails.status === "Processing" &&"bg-yellow-100 text-yellow-700" ||
                  orderDetails.status === "Cancelled" && "bg-red-100 text-red-700" ||
                  orderDetails.status === "Shipped" && "bg-blue-100 text-blue-700"
                  )
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {/* {orderDetails.isDelivered ? "Delivered" : "Pending"} */}
                {orderDetails.status}
              </span>
            </div>
          </div>

          {/* Customer, Payment , Shipping Info */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2"> Payment Info</h4>
              <p>Payement Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2"> Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
          {/* Product List */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4"> Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="py-2 px-4 whitespace-nowrap">Image</th>
                  <th className="py-2 px-4 whitespace-nowrap">Name</th>
                  <th className="py-2 px-4 whitespace-nowrap">Unit Price</th>
                  <th className="py-2 px-4 whitespace-nowrap">Quantity</th>
                  <th className="py-2 px-4 whitespace-nowrap">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 whitespace-nowrap">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap">
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">
                      ₹{item.price.toLocaleString()}
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap">{item.quantity}</td>
                    <td className="py-2 px-4 whitespace-nowrap">₹{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Back to Orders Link */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            Back to my orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
