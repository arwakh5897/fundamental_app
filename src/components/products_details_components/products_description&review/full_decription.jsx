import React, { useEffect, useState } from "react";

const FullDescription =({ products})=>{

    return(
        <div id="description" className="text-sm whitespace-pre-line">
            <p>{products?.description}</p>
        </div>
    )
}
export default FullDescription;