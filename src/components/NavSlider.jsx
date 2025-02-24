import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../components/style.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img3.jpg';
import img3 from '../assets/img2.jpg';
import { GoArrowRight } from "react-icons/go";

const slides = [
  {
    image: img1,
    title: "Welcome to Our Store",
    subtitle: "Your One-Stop Destination for Sports Gear",
    description: "Browse a wide selection of premium-quality sports accessories, from gear to apparel, for all your sporting needs.",
  },
  {
    image: img3,
    title: "Top-Quality Equipment",
    subtitle: "Upgrade Your Game with the Best Gear",
    description: "Discover top-rated sports equipment, designed for athletes of all levels. Performance and durability guaranteed.",
  },
  {
    image: img2,
    title: "Exclusive Deals & Offers",
    subtitle: "Get the Best Discounts on Sports Accessories",
    description: "Enjoy limited-time deals on premium sports brands. Shop now and elevate your sports experience!",
  },
];

const NavSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide index
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              className="object-cover w-full lg:max-h-[700px] md:max-h-[500px] h-[400px]"
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
            
            {/* Animated Text and Button - Only appears when slide is active */}
            {activeIndex === index && (
              <motion.div
                key={index} // Forces re-animation on slide change
                className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-gray-100 lg:text-5xl md:text-3xl text-2xl font-bold mb-2">
                  {slide.title}
                </h2>
                <h3 className="text-white lg:text-3xl lg:my-4 md:text-xl text-lg font-medium mb-2">
                  {slide.subtitle}
                </h3>
                <p className="text-orange-400 text-wrap lg:text-xl lg:mt-6 md:text-base text-sm max-w-2xl mb-4">
                  {slide.description}
                </p>
                
                {/* Animated "Shop Now" Button */}
                <motion.a
                  href="/shop" // Change this to your shop link
                  className="bg-white text-black flex lg:my-6 items-center gap-2 font-semibold px-6 py-4 rounded-full lg:text-xl md:text-lg text-base hover:bg-gray-200 transition duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }} // Delayed animation
                >
                  Shop Now <GoArrowRight className="text-green-500 text-3xl " />
                </motion.a>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NavSlider;
