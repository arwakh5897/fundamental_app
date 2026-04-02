import React,{useState} from "react";

const CardImage = ({ image, hoverImage, title }) => {
      const [hover,setHover] = useState(false);
    
    return (
      <div className="w-full lg:h-64 h-24">
        <img
          src={(hover ? hoverImage : image)}
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
          alt={title || "Product"}
          className="w-full h-full object-cover bg-image transition-transform duration-500 transform hover:scale-105 "
        />
      </div>
    )
}
export default CardImage;