import React from "react";

const Reviews = ({ products }) => {
  return (
    <div id="reviews" className="space-y-4">
      {products.reviews.map((review, index) => (
        <div
          key={index}
          className="border-b rounded-xl p-3 shadow-sm bg-background-card"
        >
          {/* Top */}
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-semibold text-sm">{review.name}</h4>
            <span className="text-xs text-gray-400">{review.date}</span>
          </div>

          {/* Rating */}
          <div className="text-green-400 text-xs mb-1">
            {"★".repeat(review.rating)}
          </div>

          {/* Comment */}
          <p className="text-xs text-gray-600 whitespace-pre-line">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;