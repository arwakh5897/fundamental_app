import React from "react";

const Ad = () => {
  const AllText = [
    {
      name:"FREE SHIPPING ON ALL ORDERS ABOVE Rs. 2,500",
      btn_text:"Shop now",
    }
  ];
  const loopData = [...AllText, ...AllText, ...AllText, ...AllText,  ]
  return (
    <div className="py-2 overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee marquee-track">
          {loopData.map((item,index)=>(
          <section key={index} className="flex md:mx-36 2xl:mx-80 mx-12 gap-4 text-[5px] md:text-xs">
            <span >{item.name}</span>
            <a className="underline" href="/pages/shop_all">{item.btn_text}</a>
          </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ad;