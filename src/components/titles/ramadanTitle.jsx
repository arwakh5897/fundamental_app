import React from "react";
import Card from "../card/card";

const RamadanTitle = () => {
  return (
    <div>
      <div className="bg-menu-buttons text-4xl text-center py-4">
        RAMADAN
        <span className="font-bold mx-2">BLESSINGS</span>
      </div>

      <div className="flex flex-col md:flex-wrap md:flex-row md:justify-center md:gap-8 gap-4 p-4 overflow-x-auto">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card
            key={index}
            title={`Ramadan Product ${index + 1}`}
            price={4900 + index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default RamadanTitle;