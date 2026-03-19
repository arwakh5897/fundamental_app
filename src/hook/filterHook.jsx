import { useState, useMemo } from "react";

const useFilter = ({ allItems }) => {
  const [sortType, setSortType] = useState("default");

  const sortedProducts = useMemo(() => {
    return [...allItems].sort((a, b) => {
      switch (sortType) {
        case "a-z":
          return a.name.localeCompare(b.name);

        case "z-a":
          return b.name.localeCompare(a.name);

        case "price-low-high":
          return a.price - b.price;

        case "price-high-low":
          return b.price - a.price;

        case "date-old-new":
          return new Date(a.Date) - new Date(b.Date);

        case "date-new-old":
          return new Date(b.Date) - new Date(a.Date);

        default:
          return 0;
      }
    });
  }, [allItems, sortType]);

  return { sortedProducts, sortType, setSortType };
};

export default useFilter;