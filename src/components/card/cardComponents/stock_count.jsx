import React from "react";

const CardStockCount = ({ stock }) => {
  let message = "";
  let colorClass = "";

  if (stock <= 0) {
    message = "Out of stock";
    colorClass = "text-red-500";
  } else if (stock <= 5) {
    message = `Hurry! Only ${stock} left`;
    colorClass = "text-orange-500 font-medium";
  } else {
    message = `${stock} items left`;
    colorClass = "text-reviews";
  }

  return (
    <div className="hidden lg:flex flex-col mt-1">
      <p className={`text-[10px] lg:text-xs ${colorClass}`}>
        {message}
      </p>
    </div>
  );
};

export default CardStockCount;