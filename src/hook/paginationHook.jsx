import React,{ useState } from "react";

export const usePagination = ({ allItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const visibleProducts = allItems.slice(0, currentPage * itemsPerPage);

  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const resetPagination = () => setCurrentPage(1);

  return {
    currentPage,
    totalPages,
    visibleProducts,
    loadMore,
    resetPagination,
  };
};