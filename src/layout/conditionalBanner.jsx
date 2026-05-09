import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ConditionalBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hidePaths = [
    "/pages/shopping_details",
    "/pages/user-profile",
    "/pages/order-tracking",
    "/pages/edit-profile",
    "/pages/checkout",
  ];

  const isProductDetails = location.pathname.startsWith(
    "/pages/product_details/"
  );

  if (hidePaths.includes(location.pathname) || isProductDetails) {
    return null;
  }

  const banners = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
      tag: "LIMITED OFFER",
      title: "Step Into Modern Style",
      subtitle:
        "Premium sneakers & fashion essentials designed for comfort.",
      button: "Shop Now",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
      tag: "NEW ARRIVALS",
      title: "Upgrade Your Wardrobe",
      subtitle:
        "Fresh streetwear collection with trending outfits.",
      button: "Explore",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
      tag: "EXCLUSIVE DEALS",
      title: "Premium Audio Collection",
      subtitle:
        "Experience powerful sound with stylish headphones.",
      button: "Buy Now",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="overflow-hidden shadow-sm"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[420px] lg:h-[620px] overflow-hidden group">
              
              {/* Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-4 sm:px-6 md:px-10 lg:px-20 max-w-3xl text-white">
                  
                  {/* Tag */}
                  <span
                    className="inline-block px-3 py-1.5 rounded-full
                    text-[10px] sm:text-xs md:text-sm
                    tracking-[2px] sm:tracking-[4px]
                    font-semibold uppercase
                    bg-white/10 backdrop-blur-md border border-white/20"
                  >
                    {banner.tag}
                  </span>

                  {/* Heading */}
                  <h1
                    className="mt-3 sm:mt-5
                    text-2xl sm:text-4xl md:text-5xl lg:text-7xl
                    font-black leading-tight"
                  >
                    {banner.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="mt-3 sm:mt-5
                    text-xs sm:text-sm md:text-lg lg:text-xl
                    text-gray-200 leading-5 sm:leading-7
                    max-w-xl"
                  >
                    {banner.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-5 sm:mt-7">
                    <button
                      onClick={() => navigate("/pages/shop_all")}
                      className="px-5 sm:px-7 py-2.5 sm:py-3
                      rounded-full text-xs sm:text-sm md:text-base
                      font-semibold 
                      bg-buttons
                      hover-bg-buttons
                      hover:scale-105 transition-all duration-300"
                    >
                      {banner.button}
                    </button>
                  </div>

                  {/* Features */}
                  <div
                    className="hidden sm:flex flex-wrap gap-4 lg:gap-6
                    mt-6 lg:mt-10 text-xs md:text-sm text-gray-300"
                  >
                    <span>✔ Premium Quality</span>
                    <span>✔ Fast Delivery</span>
                    <span>✔ Secure Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ConditionalBanner;
