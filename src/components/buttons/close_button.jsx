import React from "react";

const CloseButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-gray-700 hover:text-gray-900 text-lg hover:cursor-pointer transition ${className}`}
    >
      ✕
    </button>
  );
};

export default CloseButton;