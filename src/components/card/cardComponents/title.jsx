import React from "react";

const CardTitle = ({ title }) => {
    return (
        <h3 className="md:text-lg text-xs line-clamp-1 font-semibold">
          {title || "Card Title"}
        </h3>
    )
}
export default CardTitle;