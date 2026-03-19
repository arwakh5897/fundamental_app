import React from "react";

const CardRating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="text-xs flex">

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
        {/* ({rating}) */}
        </div>
)
};
export default CardRating;