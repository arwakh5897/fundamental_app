import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
        "Discover premium sneakers & fashion essentials crafted for comfort and everyday wear.",
      button: "Shop Sneakers",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070",
      tag: "NEW ARRIVALS",
      title: "Upgrade Your Wardrobe",
      subtitle:
        "Fresh streetwear collection with trending outfits for every season.",
      button: "Explore Fashion",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
      tag: "EXCLUSIVE DEALS",
      title: "Premium Audio Collection",
      subtitle:
        "Experience unbeatable sound quality with stylish wireless headphones.",
      button: "Buy Now",
    },
  ];

  return (
    <div className="w-full px-3 md:px-6 py-5">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        speed={1400}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="rounded-[30px] overflow-hidden shadow-2xl"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[320px] md:h-[650px] overflow-hidden group">
              
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[5000ms]"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

              {/* Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 md:px-20 max-w-3xl text-white">
                  
                  {/* Tag */}
                  <span
                    className="inline-block px-4 py-2 rounded-full text-xs md:text-sm
                    tracking-[4px] font-semibold uppercase
                    bg-white/10 backdrop-blur-md border border-white/20"
                  >
                    {banner.tag}
                  </span>

                  {/* Main Heading */}
                  <h1 className="mt-5 text-4xl md:text-7xl font-black leading-tight">
                    {banner.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-5 text-sm md:text-xl text-gray-200 leading-7 max-w-2xl">
                    {banner.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <button
                      onClick={() => navigate("/pages/shop_all")}
                      className="px-8 py-3 rounded-full text-white font-semibold
                      bg-gradient-to-r from-[rgb(193,172,160)] to-[rgb(140,110,100)]
                      hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      {banner.button}
                    </button>

                    <button
                      onClick={() => navigate("/pages/shop_all")}
                      className="px-8 py-3 rounded-full border border-white/30
                      bg-white/10 backdrop-blur-md text-white font-semibold
                      hover:bg-white hover:text-black transition-all duration-300"
                    >
                      View Collection
                    </button>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-300">
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