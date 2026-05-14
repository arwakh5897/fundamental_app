import React from "react";

const CartDescription = ({ description = "" }) => {
 
  const myDescription = description.split(" ");
  const shortDescription = myDescription.length > 40 ? myDescription.slice(0, 40).join(" ") + "..." : description;
  return (
    <div>
      <p className="text-xs lg:text-sm whitespace-pre-line">{shortDescription}</p>
    </div>
  );
};

export default CartDescription;