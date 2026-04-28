import React from "react";

const CardRating = ({ rating }) => {
    const totalStars = 5;

   return (
        <div className="flex text-highlighted justify-between items-center">
        <div className="text-sm md:text-lg">
            {[...Array(totalStars)].map((item,index)=>{
                const strNumber = index + 1;
                if (rating >= strNumber){
                    return <span key={index}>★</span>
                }
                else if (rating >= strNumber - 0.5){
                    return <span key={index}>☆</span>
                }
                else {
                    return <span key={index} className="text-gray-300">★</span>
                }
            })}
        </div> 
            <div className="text-[11px] md:text-sm font-semibold pl-2">
                ({rating})
            </div>
    </div>
)
};
export default CardRating;