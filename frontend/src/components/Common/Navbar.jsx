import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/paginationSlice";

const Navbar = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const navRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNavDrawerOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resetCurrentPage = () => dispatch(setCurrentPage(1));

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const toggleCartDrawer = () => setCartDrawerOpen(!cartDrawerOpen);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-3 py-4 sm:px-6">
        {/* Logo Left */}
        <div data-aos="fade-right" onClick={resetCurrentPage}>
          <Link to="/" className="text-xl sm:text-2xl font-medium logo">
            Drippy
          </Link>
        </div>
        {/* Center - Navigations Links */}
        <div
          className="hidden md:flex space-x-6 items-center"
          data-aos="fade-up"
        >
          <Link
            to="/collections/all?gender=Men"
            className={`
              ${
                location.search === "?gender=Men"
                  ? "text-drippy-green hover:text-green-700"
                  : "text-gray-700 hover:text-black"
              } text-sm font-medium uppercase       
            `}
            onClick={resetCurrentPage}
          >
            Men
          </Link>

          <Link
            to="/collections/all?gender=Women"
            className={`
              ${
                location.search === "?gender=Women"
                  ? "text-drippy-green hover:text-green-700"
                  : "text-gray-700 hover:text-black"
              } text-sm font-medium uppercase      
            `}
            onClick={resetCurrentPage}
          >
            Women
          </Link>

          <Link
            to="/collections/all?category=Top Wear"
            className={`
              ${
                location.search === "?category=Top%20Wear"
                  ? "text-drippy-green hover:text-green-700"
                  : "text-gray-700 hover:text-black"
              } text-sm font-medium uppercase
            `}
            onClick={resetCurrentPage}
          >
            Top wear
          </Link>

          <Link
            to="/collections/all?category=Bottom Wear"
            className={`
              ${
                location.search === "?category=Bottom%20Wear"
                  ? "text-drippy-green hover:text-green-700"
                  : "text-gray-700 hover:text-black"
              } text-sm font-medium uppercase       
            `}
            onClick={resetCurrentPage}
          >
            Bottom wear
          </Link>
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="inline-block px-3 rounded-full border border-gray-600 text-sm text-gray-700 font-medium py-1 hover:bg-drippy-green hover:border-drippy-green hover:text-white duration-300 transition-all"
              onClick={resetCurrentPage}
            >
              Admin Panel
            </Link>
          )}
        </div>
        {/* Right - Icons */}
        <div className="flex items-center space-x-4" data-aos="fade-left">
          <Link
            to="/profile"
            className="hover:text-black tooltip"
            data-tip="Profile"
          >
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            className="relative hover:text-black tooltip"
            data-tip="Cart"
            onClick={toggleCartDrawer}
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-3 bg-drippy-green text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button className="md:hidden" onClick={toggleNavDrawer}>
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer
        cartDrawerOpen={cartDrawerOpen}
        toggleCartDrawer={toggleCartDrawer}
        setCartDrawerOpen={setCartDrawerOpen}
      />

      {/* Mobile Navigation */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-5/6 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 md:hidden
        ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleNavDrawer}
            className="tooltip tooltip-left"
            data-tip="Close"
          >
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className={`
                ${
                  location.search === "?gender=Men"
                    ? "text-drippy-green hover:text-green-700"
                    : "text-gray-700 hover:text-black"
                } block`}
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className={`
                ${
                  location.search === "?gender=Women"
                    ? "text-drippy-green hover:text-green-700"
                    : "text-gray-700 hover:text-black"
                } block`}
            >
              Women
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className={`
                ${
                  location.search === "?category=Top%20Wear"
                    ? "text-drippy-green hover:text-green-700"
                    : "text-gray-700 hover:text-black"
                } block`}
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className={`
                ${
                  location.search === "?category=Botom%20Wear"
                    ? "text-drippy-green hover:text-green-700"
                    : "text-gray-700 hover:text-black"
                } block`}
            >
              Bottom Wear
            </Link>
            {user && user.role === "admin" && (
              <Link
                to="/admin"
                onClick={toggleNavDrawer}
                className="inline-block px-3 rounded-full border border-gray-600 text-sm text-gray-700 font-medium py-1 hover:bg-drippy-green hover:border-drippy-green hover:text-white duration-300 transition-all"
              >
                Admin Panel
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
