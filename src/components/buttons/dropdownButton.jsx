import React, { useState, useRef } from "react";
import useClickOutside from "../../hook/click_outside_hook";

const DropDownButton = ({ buttons = [], title, onClick }) => {
  const [active, setActive] = useState(title);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useClickOutside(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="relative h-auto flex flex-col items-center w-full border border-color px-3 py-2"
    >
      <button
        className="flex w-full text-sm justify-between text-heading"
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
        <ul className="absolute left-0 mt-7.5 overflow-y-auto scrollbar-hide w-full border-color bg-background z-10">
          {buttons.length === 0 ? (
            <li className="px-3 py-2 text-sm text-gray-400">
              No options
            </li>
          ) : (
            buttons.map((item, index) => (
              <li
                key={index}
                className="px-3 text-sm py-2 bg-hover-color cursor-pointer"
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                  onClick?.(item); // ✅ call parent callback
                }}
              >
                {item}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default DropDownButton;