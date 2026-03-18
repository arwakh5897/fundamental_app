import React from "react";

const Ad = () => {
  return (
    <div className="py-2 flex text-sm md:text-md font-medium">
        <marquee behavior="scroll" direction="right" scrollamount="5">
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