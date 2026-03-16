import React from "react";
import Card from "../card/card";

const Ance = () => {
    return (
        <div>
      <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
            ANCE
            <span className="font-bold mx-2">ESSENTIALS</span>
        </div>
               <img className="w-full"src="assets/images/banner2.png"/>
      <div className="flex flex-wrap flex-row justify-center gap-8 p-4 overflow-x-auto">
        {Array.from({ length: 6 }).map((_, index) => (
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