import React from "react";
import Card from "../card/card";
import ArrowButtons from "../buttons/arrowButtons";
import LeftArrow from "../buttons/leftArrow";
import RightArrow from "../buttons/rightArrow";

const MakeUpTitle = () => {
    return (
        <div>
        <div className="bg-menu-buttons text-2xl md:text-4xl  text-center py-4">
            MAKEUP  
            <span className="font-bold mx-2">MUST-HAVES</span>
        </div>
               <img className="w-full" src="assets/images/banner3.png"/>
     
      
      <div className="flex flex-col md:flex-wrap md:flex-row md:justify-center md:gap-2 gap-4 p-4 md:items-center overflow-x-auto">
          {/* <LeftArrow/> */}
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            title={`Ramadan Product ${index + 1}`}
            price={4900 + index * 100}
          />
        ))}
         {/* <RightArrow/> */}
      </div>
    </div>
   

    )
}
export default MakeUpTitle;

