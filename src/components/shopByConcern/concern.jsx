import React from "react";
import { menuData } from "../menu_dropdown/menu_data";

const Concern = () => {

  return (
    <div id="ShopByConcern" className="bg-sidebar rounded mx-2 lg:mx-4">
      <div className="text-2xl lg:text-4xl text-center pt-4">
        SHOP BY
        <span className="font-bold mx-2">CONCERN</span>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 py-12 px-6 mx-auto text-center">
        {menuData.concerns.map((item, index) => (
          <a key={index} href={item.link} className="bg-menu-gradiant text-foreground rounded font-semibold lg:font-medium text-sm lg:text-lg p-2 cursor-pointer hover:scale-105 transition">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Concern;