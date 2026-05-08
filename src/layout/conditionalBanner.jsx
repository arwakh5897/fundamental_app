import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

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
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070",
      title: "Big Sale",
      subtitle: "Up to 50% Off On Premium Products",
      button: "Shop Now",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2070",
      title: "New Arrivals",
      subtitle: "Fresh Collection Just Dropped",
      button: "Explore",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
      title: "Exclusive Deals",
      subtitle: "Limited Time Offers Available",
      button: "Grab Deal",
    },
  ];

  return (
    <div className="w-full px-2 md:px-4 py-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-3xl overflow-hidden shadow-sm"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[280px] md:h-[520px] group overflow-hidden">
              
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[4000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 md:px-20">
                <div className="max-w-2xl text-white animate-fadeIn">
                  
                  <p className="uppercase tracking-[5px] text-sm md:text-base text-gray-300 mb-3">
                    Trending Collection
                  </p>

                  <h2 className="text-4xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
                    {banner.title}
                  </h2>

                  <p className="mt-4 text-base md:text-xl text-gray-200 leading-relaxed">
                    {banner.subtitle}
                  </p>

                  <button
                    onClick={() => navigate("/pages/shop_all")}
                    className="mt-8 px-8 py-3 rounded-full text-white font-semibold text-lg
                    bg-gradient-to-r from-[rgb(193,172,160)] to-[rgb(140,110,100)]
                    hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    {banner.button}
                  </button>
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