import React from "react";
import Card from "../card/card";

const Ance = () => {
    return (
        <div>
        <div className="bg-menu-buttons text-2xl md:text-4xl  text-center py-4">
            ANCE
            <span className="font-bold mx-2">ESSENTIALS</span>
        </div>
               <img className="w-full"src="assets/images/banner2.png"/>
      <div className="flex flex-col md:flex-wrap md:flex-row md:justify-center md:gap-8 gap-4 p-4 overflow-x-auto">
        {Array.from({ length: 7 }).map((_, index) => (
          <Card
            key={index}
            title={`ANCE Essential ${index + 1}`}
            price={4900 + index * 100}
          />
        ))}
      </div>
    </div>
    )
}
export default Ance;