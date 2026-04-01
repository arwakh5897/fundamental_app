import React,{useState} from "react";
import DropDownButton from "../../buttons/dropdownButton";

const Color = ({ colors , selectedColor , onSelectColor }) => {
  const [ currentColor, setCurrentColor] = useState(selectedColor || "");
  const handleSelect = (color) => {
    setCurrentColor(color);
    if (onSelectColor) {
      onSelectColor(color);
    }
  };
  return (
    <div className="space-y-4">
      {/* Color */}
      <div className="flex items-center">
        <h4 className="w-24 text-sm font-medium">Color</h4>
        <DropDownButton 
        buttons={colors} 
        title={currentColor || "Select Color"} 
        onClick={handleSelect}
        />
      </div>

    </div>
  );
};

export default Color;