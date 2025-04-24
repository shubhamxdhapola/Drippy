import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";
import { toast } from "sonner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products?.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formData.email.trim()) return toast.error("Email is required!")
    if(!formData.password.trim()) return toast.error("Password is required!")
    dispatch(loginUser(formData))
    .unwrap()
    .then(res => toast.success(res.message))
    .catch(err => toast.error(err.message))
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12">
        <form
          className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg border shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-3">Hey there!</h2>
          <p className="text-center mb-6 text-sm md:text-md">
            Enter your email and password to Login
          </p>
          <div className="mb-4 ">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleOnChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleOnChange}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={toggleShowPassword}
              type="button"
              className="absolute top-[50%] right-2.5 translate-y-[20%]"
            >
              {showPassword ? (
                <IoEyeOffSharp className="w-5 h-5" />
              ) : (
                <IoEye className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gr800 transition-all duration-300"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?&nbsp;
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500 underline hover:text-blue-700 duration-300"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
