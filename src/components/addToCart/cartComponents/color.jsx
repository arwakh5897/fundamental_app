import React from "react";
import DropDownButton from "../../buttons/dropdownButton";

const Color = () => {
  const Colors = [
      "Brown",
      "Blue",
      "Red",
  ]
  return (
    <div className="space-y-4">
      {/* Color */}
      <div className="flex items-center">
        <h4 className="w-24 text-sm font-medium">Color</h4>
        <DropDownButton buttons={Colors} title={"Select Color"}/>
      </div>

    </div>
  );
};

export default Color;