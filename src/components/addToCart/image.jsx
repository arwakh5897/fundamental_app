import React, { useState } from "react";

const Images = () => {
  const images = [
    "/assets/images/banner.png",
    "/assets/images/banner1.png",
    "/assets/images/banner2.png",
    "/assets/images/banner3.png",
  ];
  const [activeImage, setActiveImage] = useState(images[0]);
      return(
        <div className="w-full">
            <div className="w-full aspect-auto md:aspect-[4/3]">
                <img className="w-full h-full object-cover" src={activeImage} alt="" />
            </div>
            <div className="flex py-6 px-2 gap-2 overflow-auto scrollbar-hide"> 
                {images.map((item,index)=>(
                  <img
                  key={index}
                  onClick={()=>setActiveImage(item)}
                  className="w-16 h-16 md:w-28 md:h-28 object-cover"
                  src={item}
                  alt="image"
                   />
                ))}
            </div>
        </div>
      )
}
export default Images;