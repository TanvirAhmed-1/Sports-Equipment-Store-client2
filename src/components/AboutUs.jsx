import React from "react";
import { FaUsers, FaTrophy, FaHeart, FaShoppingCart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About EquiSports
        </h1>

        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At EquiSports, we are passionate about empowering athletes and
            sports enthusiasts with the best equipment and apparel. Our mission
            is to provide high-quality, affordable, and innovative sports gear
            that helps you perform at your best, no matter your skill level.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Dedicated Community
            </h3>
            <p className="text-gray-600">
              Join a community of passionate athletes and sports lovers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Top-Quality Gear
            </h3>
            <p className="text-gray-600">
              We offer only the best equipment from trusted brands.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer-Centric
            </h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaShoppingCart className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Shopping
            </h3>
            <p className="text-gray-600">
              Enjoy a seamless and secure shopping experience.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-[#F4F8D3] shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-semibold text-gray-800 my-10">
          Privacy Policy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Additional Terms & Conditions
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 mb-4 text-lg">
                  By using our services and purchasing from our store, you agree
                  to comply with the following additional terms:
                </p>
                <ul className="space-y-4 text-black">
                  <li>
                    <strong>Privacy Policy:</strong> We value your privacy. Your
                    personal information will never be shared with third parties
                    without your consent.
                  </li>
                  <li>
                    <strong>Shipping Terms:</strong> We offer worldwide
                    shipping. Delivery times vary depending on location, and
                    customers are responsible for any customs fees or import
                    taxes.
                  </li>

                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">
                Return & Refund Policy
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 mb-4">
                  We offer a 30-day return policy. If you are not completely
                  satisfied with your purchase, you may return the product in
                  its original condition for a full refund.
                </p>
                <ul className="space-y-2 text-black">
                  <li>- Return within 30 days of purchase</li>
                  <li>- Product must be unused and in original packaging</li>
                  <li>
                    - Refund will be processed to the original payment method
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4 text-black">
                  <li className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-lg">Credit Card</span>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-lg">PayPal</span>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-lg">Bank Transfer</span>
                  </li>
                </ul>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-6">
                  Proceed to Checkout
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
