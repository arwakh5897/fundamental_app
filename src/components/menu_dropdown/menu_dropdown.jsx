import React from "react";
import {Link} from "react-router-dom";

const MenuDropDown = ({ setOpen , data }) => {
    return (
        <div>
            <ul className="absolute left-0 top-full w-56 overflow-y-auto scrollbar-hide border-color bg-dropdown rounded-xs z-10">
                {data.map((item, index) => (
                <li key={index}>
                    <Link
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-xs border-b border-gray-200 hover-bg-dropdown cursor-pointer"
                    >
                    {item.name}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
};
export default MenuDropDown;




