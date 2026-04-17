import React from "react";

const AvailableStock =({ stock})=> {
    return(
        <div className="flex text-sm text-green">
            <span>In Stock ({stock} available)</span>
        </div>
    )
}
export default AvailableStock;