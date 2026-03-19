import React from "react";

const CardTitle = ({ title }) => {
    return (
        <h3 className="md:text-lg text-xs flex-wrap font-semibold">
          {title || "Card Title"}
        </h3>
    )
}
export default CardTitle;