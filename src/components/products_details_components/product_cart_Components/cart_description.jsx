import React, { useState } from "react";

const CartDescription = ({ description }) => {
  const [readMore, setReadMore] = useState(false);

  // Split words
  const words = description.split(" ");
  const shortDescription =
    words.length > 100 ? words.slice(0, 100).join(" ") + "..." : description;

  return (
    <div className="text-xs lg:text-sm whitespace-pre-line">
      <p>{readMore ? description : shortDescription}</p>
      
      {words.length > 100 && (
        <button
          className="text-blue-500 underline ml-1 text-xs"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default CartDescription;