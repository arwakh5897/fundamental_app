import React from "react";

const CardRating = ({ rating }) => {
    const totalStars = 5;

   return (
    <div>
        <div className="flex text-highlighted font-semibold  items-center">

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
            <div className="text-xs pl-1">
                ({rating})
            </div>
        </div>
    </div>
)
};
export default CardRating;