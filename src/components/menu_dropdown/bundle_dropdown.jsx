import React from "react";
import { menuData } from "./menu_data";
import MenuDropDown from "./menu_dropdown";

const BundleDropDown = ({ setOpen }) => {
    const data = menuData.bundles;
    return (
            <MenuDropDown data={data} setOpen={setOpen}/>
    );
};
export default BundleDropDown;