
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaStore } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";

const Footer = () => {

  const [theme, setTheme] = useState(
      localStorage.getItem("theme") || "light"
    );
  
    const handleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
  
    useEffect(() => {
      const html = document.documentElement; // `html` ট্যাগে ক্লাস অ্যাড করবো
      if (theme === "dark") {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark"); // থিম সেভ করা
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [theme]);
  return (
    <div>
      <footer className=" relative w-full border-t bg-black p-8 ">
      <div onClick={handleTheme} className=" absolute left-[62%] md:left-[80%] lg:left-[90%] rounded-xl bg-sky-400 p-4 top-4">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
        <div className="container px-4 py-12 md:pt-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src={logo} alt="" className="md:w-32 w-20" srcset="" />
                {/* <span className="font-bold text-xl">Victory Zone</span> */}
              </Link>
              <p className="text-lg text-gray-300 text-balance">
                Your one-stop shop for quality products and excellent service.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white">Quick Links</h3>
              <ul className="space-y-2 text-lg *:text-gray-300">
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/order" className="hover:text-blue-600">
                    Order
                  </Link>
                </li>
                <li>
                  <Link href="/add-product" className="hover:text-blue-600">
                    Add Product
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white">Contact Us</h3>
              <ul className="space-y-2 text-lg *:text-gray-300">
                <li className="flex items-center gap-2">
                  <MdEmail className="h-5 w-5 text-gray-600" />
                  <span>contact@bdstore.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdPhone className="h-5 w-5 text-gray-600" />
                  <span>+880 123 456 789</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdLocationOn className="h-5 w-5 text-gray-600" />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-white">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-white p-2 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaFacebookF className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white p-2 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white p-2 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white p-2 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>


        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} BD Store. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
