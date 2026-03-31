import React, { useState } from "react";
import DropDownButton from "../../buttons/dropdownButton";

const Size = ({ sizes, selectedSize, onSelectSize }) => {
  const [currentSize, setCurrentSize] = useState(selectedSize || "");

  const handleSelect = (size) => {
    setCurrentSize(size);
    if (onSelectSize) {
      onSelectSize(size); // ✅ call the parent handler
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <h4 className="w-24 text-sm font-medium">Size</h4>
        <DropDownButton
          buttons={sizes}
          title={currentSize || "Select Size"}
          onClick={handleSelect} // ✅ make sure DropDownButton triggers this
        />
      </div>
    </div>
  );
};

export default Size;