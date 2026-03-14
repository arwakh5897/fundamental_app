import React from "react";

const Concern = () => {

  const concerns = [
    "Concern 1",
    "Concern 2",
    "Concern 3",
    "Concern 4",
    "Concern 5",
    "Concern 6",
    "Concern 7",
    "Concern 8",
  ];

  return (
    <div id="ShopByConcern" className="bg-menu-buttons ">
      <div className="text-2xl md:text-4xl text-center py-4">
        SHOP BY
        <span className="font-bold mx-2">CONCERN</span>
      </div>

      <div className="grid grid-cols-4 gap-4 py-4 px-6 mx-auto text-center">
        {concerns.map((item, index) => (
          <a key={index} className="bg-background text-sm font-bold md:font-medium md:text-xl px-4 py-2 cursor-pointer hover:scale-105 transition">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Concern;