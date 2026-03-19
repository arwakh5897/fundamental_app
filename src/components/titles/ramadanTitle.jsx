import React, { useRef } from "react";
import Card from "../card/card";
import LeftArrow from "../buttons/leftArrow";
import RightArrow from "../buttons/rightArrow";

const RamadanTitle = () => {
  const scrollReference = useRef(null);
  return (
    <div id="ramadan">
      <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
        RAMADAN
        <span className="font-bold mx-2">BLESSINGS</span>
      </div>
        <div className="relative flex items-center p-4">
        <LeftArrow scrollRef={scrollReference} />
          <div ref={scrollReference} 
          className="flex flex-row scrollbar-hide overflow-x-auto scroll-smooth md:gap-8 gap-4 py-4">
            {Array.from({ length: 18 }).map((_, index) => (
              <div key={index} className="flex-shrink-0">
              <Card
                title={`Ramadan Product ${index + 1}`}
                image={"/assets/images/banner1.png"}
                price={4900 + index * 100}
              />
              </div>
            ))}
          </div>
       <RightArrow scrollRef={scrollReference} />
       </div>
    </div>
  );
};

export default RamadanTitle;