import React, { useState, useRef, useEffect } from "react";

const DropDownButton = ({ buttons, title }) => {
  const [active, setActive] = useState(title);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 👇 Outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
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
        <ul className="absolute left-0 mt-8 overflow-y-auto scrollbar-hide w-full border-color bg-white z-10">
          {buttons.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
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
  );
};

export default DropDownButton;