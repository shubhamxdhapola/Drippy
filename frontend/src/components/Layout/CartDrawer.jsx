import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import CartContents from "../Cart/CartContents";
import { useEffect, useRef } from "react";

const CartDrawer = ({ cartDrawerOpen, toggleCartDrawer, setCartDrawerOpen }) => {
  
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;
  const cartRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if(cartRef.current && !cartRef.current.contains(e.target)) {
        setCartDrawerOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return() => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div
      ref={cartRef}
      className={`fixed top-0 right-0 w-5/6 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 
      ${cartDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button className="tooltip tooltip-left" onClick={toggleCartDrawer} data-tip="Close">
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart && cart?.products?.length > 0 ? (
          <CartContents cart={cart} userId={userId} guestId={guestId} />
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
      </div>

      {/* Checkout button fixed at bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        {cart && cart?.products?.length > 0 && (
          <>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Checkout
            </button>
            <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
              Shipping, taxes, and discount codes are calculated at checkout.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
