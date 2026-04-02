import React from "react";
import { menuData } from "./menu_data";
import MenuDropDown from "./menu_dropdown";
import MobileSidebarContent from "../header/menu_items_components/mobile_sidebar_content";

const ConcernDropDown = ({ setOpen}) => {
    const data = menuData.concerns;
    return (
        <>
            <MenuDropDown data={data} setOpen={setOpen} />
            <MobileSidebarContent data={data}/>
        </>
    );
};
export default ConcernDropDown;