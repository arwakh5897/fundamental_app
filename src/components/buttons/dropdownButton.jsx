import React, { useState, useRef, useEffect } from "react";
import ClickOutside from "./click_ouside_close";


const DropDownButton = ({ buttons, title }) => {
  const [active, setActive] = useState(title);
  const [open, setOpen] = useState(false);

  return (
    <ClickOutside onClickOutside={()=>setOpen(false)}>
    <div
      // ref={dropdownRef}
      className="relative h-auto flex flex-col items-center w-full border border-color px-3 py-2"
    >
      <button
        className="flex w-full justify-between"
        onClick={() => setOpen(!open)}
      >
        {active}
        <img
          className="w-4 h-4"
          src="/assets/icons/arrow-down.png"
          alt=""
        />
      </button>

      {open && (
        <ul className="absolute left-0 mt-8 overflow-y-auto scrollbar-hide w-full border-color bg-background z-10">
          {buttons.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 bg-hover-color cursor-pointer"
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </ClickOutside>
  );
};

export default DropDownButton;