import React from "react";
import Card from "../card/card";

const MakeUpTitle = () => {
    return (
        <div>
        <div className="bg-menu-buttons text-2xl md:text-4xl  text-center py-4">
            MAKEUP  
            <span className="font-bold mx-2">MUST-HAVES</span>
        </div>

          <img className="w-full" src="assets/images/banner3.png"/>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 items-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card
              key={index}
              title={`Ramadan Product ${index + 1}`}
              price={4900 + index * 100}
            />
          ))}
        </div>
    </div>
  )
}
export default MakeUpTitle;

