import React from "react";

const CartReviews = ({ rating = 4.5, totalReviews = 120 }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-reviews text-lg">
        {"★".repeat(Math.floor(rating))}
        {"☆".repeat(5 - Math.floor(rating))}
      </div>
      <span className="text-sm text-gray-600">
        {rating} ({totalReviews} reviews)
      </span>
    </div>
  );
};

export default CartReviews;