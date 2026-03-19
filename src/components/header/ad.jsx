import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Ad = () => {
  return (
    <div className="py-2 text-xs md:text-sm  font-medium">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} className="mySwiper"   >
        <SwiperSlide >
          <div className="flex flex-row gap-4 justify-center">
              <span>FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
              <a href="/pages/shop_all" className="underline font-semibold hover:opacity-80 transition">
                Shop now
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-4 justify-center">
            <span>RAMADAN SALE - UP TO 50% OFF</span>
            <a href="#ramadan" className="underline font-semibold hover:opacity-80 transition">
              Shop now
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex gap-4 justify-center">
            <span>NEW ARRIVALS JUST DROPPED</span>
            <a href="#new_arrival" className="underline font-semibold hover:opacity-80 transition">
              Explore
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ad;