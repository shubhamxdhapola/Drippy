import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { toast } from "sonner";
import { apiClient } from "../../utils/apiClient";
import { Loader2 } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiClient.post("/api/subscribe", { email });
      toast.success("Subscribed Successfully!");
      setEmail("");
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="md:mx-auto" data-aos="fade-right">
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="mb-6 text-gray-600 font-medium text-sm">
            {" "}
            Sign up and get 10% on your first order.
          </p>

          {/* Newsletter Form */}
          <form className="flex" onSubmit={handleOnSubmit}>
            <input
              type="email"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:border-none focus:ring-2 focus:ring-gray-500 translate-all"
            />
            <button
              type="submit"
              className={`${
                loading ? "bg-gray-800" : "bg-black"
              } text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all`}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Support Links */}
        <div className="md:mx-auto" data-aos="fade-right">
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow us */}
        <div className="md:mx-auto" data-aos="fade-left">
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 duration-300"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 duration-300"
            >
              <RiTwitterXLine className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 duration-300"
            >
              <FaFacebookSquare className="h-5 w-5" />
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Call Us</p>
            <p>
              <FiPhoneCall className="inline-block mr-2 " />
              <a
                href="tel:+919322663609"
                target="_blank"
                className="hover:text-gray-700"
              >
                +91 93226 63609
              </a>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-sm">Email Us</p>
            <p>
              <MdEmail className="inline-block mr-2 " />
              <a
                href="mailto:shubhamdhapola153@gmail.com"
                target="_blank"
                className="hover:text-gray-700"
              >
                shubhamdhapola143@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-600 text-sm tracking-tighter text-center">
          &copy; 2025, Drippy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
