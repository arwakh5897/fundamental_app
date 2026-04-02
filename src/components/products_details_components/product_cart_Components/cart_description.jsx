import React from "react";

const CartDescription = ({ description }) => {
 
  const myDescription = description.split(" ");
  const shortDescription = myDescription.length > 100 ? myDescription.slice(0, 100).join(" ") + "..." : description;
  return (
    <div>
      <p className="text-xs lg:text-sm whitespace-pre-line">{shortDescription}</p>
    </div>
  );
};

export default CartDescription;