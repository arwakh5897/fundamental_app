import React from "react";

const Ad = () => {
  return (
    <div className="py-2 overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee marquee-track">
          <section className="flex md:mx-36 mx-12 gap-4 text-xs">
            <span >FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
            <a className="underline" href="/pages/shop_all">Shop now</a>
          </section>

          <section className="flex md:mx-36 mx-12 gap-4 text-xs">
            <span >FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
            <a className="underline" href="/pages/shop_all">Shop now</a>
          </section>

          <section className="flex md:mx-36 mx-12 gap-4 text-xs">
            <span >FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
            <a className="underline" href="/pages/shop_all">Shop now</a>
          </section>

          <section className="flex md:mx-36 mx-12 gap-4 text-xs">
            <span >FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500</span>
            <a className="underline" href="/pages/shop_all">Shop now</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Ad;