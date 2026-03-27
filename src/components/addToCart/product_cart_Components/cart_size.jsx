import React, { useState } from "react";
import DropDownButton from "../../buttons/dropdownButton";

const Size = () => {
    const sizes = [
    24,26,28,30,32,34
  ]

  return (
    <div className="space-y-4">
      {/* Color */}
      <div className="flex items-center">
        <h4 className="w-24 text-sm font-medium">Size</h4>
        <DropDownButton buttons={sizes} title={"Select Size"}/>
      </div>
      </div>
  );
};

export default Size;