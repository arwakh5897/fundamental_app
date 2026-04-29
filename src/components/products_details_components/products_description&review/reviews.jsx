import React from "react";

const Reviews = ({ products }) => {
  const reviews = products?.reviews || [];

  return (
    <div id="reviews" className="space-y-4">
      
      {reviews.length === 0 ? (
        // 🔥 No Reviews Case
        <div className="text-center text-halfGray text-sm py-4">
          No Reviews Yet
        </div>
      ) : (
        // ✅ Reviews List
        reviews.map((review, index) => (
          <div
            key={index}
            className="border-b rounded-xl p-3 shadow-sm bg-card"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-semibold text-sm">{review.name}</h4>
              <span className="text-xs text-halfBlack">{review.date}</span>
            </div>

            {/* Rating */}
            <div className="text-green text-xs mb-1">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)} {/* optional empty stars */}
            </div>

            {/* Comment */}
            <p className="text-xs whitespace-pre-line">
              {review.comment}
            </p>
          </div>
        ))
      )}

    </div>
  );
};

export default Reviews;