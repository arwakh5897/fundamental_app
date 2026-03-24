import React from "react";

const Color = () => {
  return (
    <div className="space-y-4">
      {/* Color */}
      <div className="flex items-center gap-16">
        <h4 className="text-sm font-medium">color</h4>

        <button className="flex items-center justify-between w-full border-1 border-gray-400 px-3 py-2">
          <span>brown</span>
          <img
            className="w-4 h-4"
            src="/assets/icons/arrow-down.png"
            alt=""
          />
        </button>
      </div>

    </div>
  );
};

export default Color;