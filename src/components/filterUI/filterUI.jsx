import React, { useState, useRef, useEffect } from "react";
import { useLoader } from "../../context/loaderContext";
import FilterTrigger from "./filterComponents/filterTrigger";
import FilterDropdown from "./filterComponents/filterDropdown";

const FilterUI = ({ sortType, setSortType }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const { showLoader, hideLoader } = useLoader();

  const buttons = [
    { label: "Default", value: "default" },
    { label: "Best Selling", value: "bestSelling" },
    { label: "Alphabetically: A-Z", value: "a-z" },
    { label: "Price: Low to High", value: "price-low-high" },
    { label: "Price: High to Low", value: "price-high-low" },
    { label: "Date: Old to New", value: "date-old-new" },
    { label: "Date: New to Old", value: "date-new-old" },
  ];

  const activeLabel =
    buttons.find((btn) => btn.value === sortType)?.label || "Default";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSortClick = async (value) => {
    showLoader();
    setOpen(false);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // smoother UX

    setSortType(value);
    hideLoader();
  };

  return (
    <div ref={ref} className="relative w-fit text-xs md:text-sm">
      <FilterTrigger
        activeLabel={activeLabel}
        open={open}
        setOpen={setOpen}
      />

      {open && (
        <FilterDropdown
          buttons={buttons}
          sortType={sortType}
          onSelect={handleSortClick}
        />
      )}
    </div>
  );
};

export default FilterUI;