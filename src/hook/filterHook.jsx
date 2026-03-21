import { useState, useMemo } from "react";

const useFilter = ({ allItems = [] }) => {
  const [sortType, setSortType] = useState("default");

  const sortedProducts = useMemo(() => {
    if (!Array.isArray(allItems)) return [];

    // Remove invalid items
    const validItems = allItems.filter(item => item && typeof item === "object");

    return [...validItems].sort((a, b) => {
      switch (sortType) {
        case "a-z":
          return (a.title || "").localeCompare(b.title || "");
        case "z-a":
          return (b.title || "").localeCompare(a.title || "");
        case "price-low-high":
          return (a.discountedPrice || 0) - (b.discountedPrice || 0);
        case "price-high-low":
          return (b.price || 0) - (a.price || 0);
        case "rating-high-low":
          return (b.rating?.rate || 0) - (a.rating?.rate || 0);
        case "discount-high-low":
          return (b.discount || 0) - (a.discount || 0);
        default:
          return 0;
      }
    });
  }, [allItems, sortType]);

  return { sortedProducts, sortType, setSortType };
};

export default useFilter;