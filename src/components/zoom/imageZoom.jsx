import React, { useState } from "react";

const ImageZoom = ({ src }) => {
  const [zoomStyle, setZoomStyle] = useState({
    transform: "scale(1)",
    transformOrigin: "center",
  });

  const handleZoom = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transform: "scale(2)",
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
    });
  };

  return (
    <div
      className="w-full h-full overflow-hidden"
      onMouseMove={handleZoom}
      onMouseLeave={handleLeave}
    >
      <img
        src={src}
        alt="zoom"
        className="w-full h-full object-contain transition-transform duration-200 ease-out"
        style={zoomStyle}
      />
    </div>
  );
};

export default ImageZoom;