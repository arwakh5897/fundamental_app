import React from "react";

const CloseButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-lg hover:rotate-90 hover:cursor-pointer transition ${className}`}
    >
      ✕
    </button>
  );
};

export default CloseButton;