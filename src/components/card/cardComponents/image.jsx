import React,{useState} from "react";

const CardImage = ({ image, title }) => {
      const [hover,setHover] = useState(false);
    
    return (
      <div className="w-full md:h-64 h-24">
        <img
          src={image || (hover ? "/assets/images/banner1.png" : "/assets/images/banner2.png")}
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
          alt={title || "Product"}
          className="w-full h-full object-contain transition-transform duration-500 transform hover:scale-105 "
        />
      </div>
    )
}
export default CardImage;