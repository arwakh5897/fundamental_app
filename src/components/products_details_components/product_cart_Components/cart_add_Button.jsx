import React from "react";

const AddButton = ({ onAdd }) => {

  return (
      <button
        onClick={onAdd}
        className="bg-buttons hover-bg-buttons text-sm rounded hover:cursor-pointer font-semibold py-2 px-4 transition"
      >
        Add to Cart
      </button>
  );
};

export default AddButton;