import React from "react";
import { menuData } from "./menu_data";
import MenuDropDown from "./menu_dropdown";

const TypeDropDown = ({ setOpen }) => {
    const data = menuData.types;
    return (
            <MenuDropDown data={data} setOpen={setOpen}/>
    );
};
export default TypeDropDown;