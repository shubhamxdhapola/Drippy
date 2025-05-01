import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice.js";
import formatTimestamp from "../utils/formatDateAndTime.js";

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [checkout])

  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [checkout, dispatch, navigate]);

  const calulateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return splitDate(orderDate);
  };

  const splitDate = (timestamp) => {
    return formatTimestamp(timestamp).split(",").slice(0, 3).join(",");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white overflow-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-emerald-700 mb-6">
        Thank You for Your Order!
      </h1>
      {checkout && (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col md:flex-row justify-between mb-20">
            {/* Order ID and Date */}
            <div className="flex flex-col">
              <h2 className="text-md sm:text-xl font-semibold">
                Order ID : {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date : {splitDate(checkout.createdAt)}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 mt-4 md:mt-0">
                Delivered By :{" "}
                {calulateEstimateDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* Ordered Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">₹{item.price * item.quantity}</p>
                  <p className="text-sm text-gray-500">Qty : {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Payment Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery Address</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
