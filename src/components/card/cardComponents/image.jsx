import React, { useState } from "react";

const CardImage = ({ image, hoverImage, title }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full lg:h-64 h-24 overflow-hidden relative bg-gray-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image 1 (main) */}
      <img
        src={image}
        alt={title || "product"}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-500 ease-in-out
          ${hover ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
        `}
      />

      {/* Image 2 (hover) */}
      <img
        src={hoverImage}
        alt={title || "product hover"}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-500 ease-in-out
          ${hover ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      />
    </div>
  );
};

export default CardImage;