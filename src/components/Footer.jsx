
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaStore } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t bg-black py-8">
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
