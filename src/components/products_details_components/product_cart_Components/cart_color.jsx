import React from "react";
import DropDownButton from "../../buttons/dropdownButton";

const Color = ({ colors }) => {
  return (
    <div className="space-y-4">
      {/* Color */}
      <div className="flex items-center">
        <h4 className="w-24 text-sm font-medium">Color</h4>
        <DropDownButton buttons={colors} title={"Select Color"}/>
      </div>

    </div>
  );
};

export default Color;