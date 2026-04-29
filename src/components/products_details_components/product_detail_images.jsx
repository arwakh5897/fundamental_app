import React, { useState, useEffect , useRef } from "react";
import ImageZoom from "../zoom/imageZoom";

const ProductDetailImages = ({ thumbnail, subImages = [] }) => {
  const [activeImage, setActiveImage] = useState(thumbnail);
  const imgRef = useRef([]);

  // 🔥 FIX: jab thumbnail change ho to image update karo
  useEffect(() => {
    setActiveImage(thumbnail);
  }, [thumbnail]);

  const handleClick = (item , index) => {
    setActiveImage(item);

    imgRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })

  };

  return (
    <div className="w-full">
      <div className="aspect-[6/5] lg:aspect-[4/3]">
        <ImageZoom src={activeImage} />
      </div>

      <div className="flex py-6 gap-2 overflow-auto scrollbar-hide">
        {subImages.map((item, index) => (
          <img
            key={index}
            ref={(e)=>(imgRef.current[index] = e)}
            onClick={() => handleClick(item, index)}
            className="w-16 h-16 lg:w-28 lg:h-28 bg-image hover:cursor-pointer rounded object-contain"
            src={item}
            alt="image"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailImages;