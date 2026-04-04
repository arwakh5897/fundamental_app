import React from "react";

const Ad = () => {
  return (
    <div className="py-2 overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="md:mx-36 mx-12  text-xs ">FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
          <span className="md:mx-36 mx-12  text-xs">FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
          {/* duplicate again for seamless loop */}
          <span className="md:mx-36 mx-12  text-xs">FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
          <span className="md:mx-36 mx-12  text-xs">FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
        </div>
      </div>
    </div>
  );
};

export default Ad;