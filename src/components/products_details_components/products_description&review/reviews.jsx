import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Ali Khan",
      rating: 5,
      comment: "Amazing product! Quality bohat zabardast hai, highly recommended.",
      date: "2 April 2026",
    },
    {
      name: "Zain",
      rating: 4,
      comment: "Product acha hai lekin delivery thori late thi.",
      date: "1 April 2026",
    },
    {
      name: "Ahmed Raza",
      rating: 3,
      comment: "Average experience, quality theek hai but price thori high lagi.",
      date: "30 March 2026",
    },
    {
      name: "Nomi",
      rating: 5,
      comment: "Loved it! Bilkul same as shown, definitely buy again.",
      date: "28 March 2026",
    },
  ];

  return (
    <div id="reviews" className="space-y-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="border rounded-xl p-3 shadow-sm bg-background-card"
        >
          {/* Top */}
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-semibold text-sm">{review.name}</h4>
            <span className="text-xs text-gray-400">{review.date}</span>
          </div>

          {/* Rating */}
          <div className="text-yellow-500 text-xs mb-1">
            {"⭐".repeat(review.rating)}
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