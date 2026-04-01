import React from "react";
import { menuData } from "../menu_dropdown/menu_data";

const Concern = () => {

  return (
    <div id="ShopByConcern" className="bg-buttons ">
      <div className="text-2xl lg:text-4xl text-center py-4">
        SHOP BY
        <span className="font-bold mx-2">CONCERN</span>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 py-4 px-6 mx-auto text-center">
        {menuData.concerns.map((item, index) => (
          <a key={index} href={item.link} className="bg-background text-sm font-bold lg:font-medium lg:text-xl p-2 cursor-pointer hover:scale-105 transition">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Concern;