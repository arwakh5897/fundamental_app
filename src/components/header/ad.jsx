import React from "react";

const Ad = () => {
  return (
    <div className="py-2 flex text-xs md:text-sm  font-medium">
        <marquee behavior="scroll" direction="left">
          <div className="flex gap-4">
              <span>FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
              <a href="#" className="underline font-semibold hover:opacity-80 transition">
                Shop now
              </a>
            </div>
        </marquee>
    </div>
  );
};

export default Ad;