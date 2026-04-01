import React from "react";
import { menuData } from "./menu_data";
import MenuDropDown from "./menu_dropdown";

const ConcernDropDown = ({ setOpen}) => {
    const data = menuData.concerns;
    return (
            <MenuDropDown data={data} setOpen={setOpen} />
    );
};
export default ConcernDropDown;