import React from "react";
import Card from "../card/card";


const CardAndTitle = ({ title }) => {
    return (
        <div>
            <div className="bg-menu-buttons text-4xl  text-center py-4">
                {title}
            </div>
            <Card />
        </div>
    )
}
export default CardAndTitle;