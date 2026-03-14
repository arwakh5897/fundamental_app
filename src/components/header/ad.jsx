import React from "react";

const Ad = () => {
  return (
    <div className="py-1 md:flex hidden">
        <marquee>
          <div className="flex gap-4 text-sm md:text-md font-medium">
              <h1>
                FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500
              </h1>
              <a
                href="#"
                className="underline font-semibold hover:opacity-80 transition"
              >
                Shop now
              </a>
            </div>
        </marquee>
    </div>
  );
};

export default Ad;