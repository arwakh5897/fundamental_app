import React from "react";

const AddButton = ({ onAdd }) => {

  return (
      <button
        onClick={onAdd}
        className="bg-buttons hover-bg-buttons text-xs text-foreground-secondary rounded hover:cursor-pointer py-2 px-4 transition"
      >
        Add to Cart
      </button>
  );
};

export default AddButton;