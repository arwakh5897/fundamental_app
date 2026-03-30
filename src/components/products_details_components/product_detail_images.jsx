import React, { useState } from "react";
import ImageZoom from "../zoom/imageZoom";

const ProductDetailImages = ({thumbnail}) => {
  const images = [
    "/assets/images/banner.png",
    "/assets/images/banner1.png",
    "/assets/images/banner2.png",
    "/assets/images/banner3.png",
  ];
  const [activeImage, setActiveImage] = useState(thumbnail);
      return(
        <div className="w-full">
          {/* <div className="h-screen lg:h-auto"> */}
            <div className="aspect-[6/5] lg:aspect-[4/3]">
                <ImageZoom src={activeImage} alt="" />
            </div>
            {/* </div> */}
            <div className="flex py-6 gap-2 overflow-auto scrollbar-hide"> 
                {images.map((item,index)=>(
                  <img
                  key={index}
                  onClick={()=>setActiveImage(item)}
                  className="w-16 h-16 lg:w-28 lg:h-28 bg-image object-contain"
                  src={item}
                  alt="image"
                   />
                ))}
            </div>
        </div>
      )
}
export default ProductDetailImages;