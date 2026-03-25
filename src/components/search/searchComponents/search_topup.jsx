import React, { useState } from "react";
import SearchSuggestions from "./topupComponents/search_suggestions";
import SearchInput from "./topupComponents/search_input";
import SearchTitle from "./topupComponents/search_title&button";
import { useNavigate } from "react-router-dom";

const SearchTopUp = ({ handleClick }) => {
  const navigate = useNavigate();
  const [query , setQuery] = useState("");

  const handleSearch = ()=>{
    if(!query.trim()) return;

    const existingSearch = JSON.parse(localStorage.getItem ("recentSearchs")) || [];
    const updated = [query, ...existingSearch.filter(item => item !==query)].slice(0,5);
    localStorage.setItem("recentSearchs" , JSON.stringify(updated));

    navigate(`/pages/shop_all?search=${query}`);
    handleClick();
  }
  return (
    <div className="absolute z-50 top-12 right-0 w-52 md:w-[420px] bg-menu-buttons shadow-xl rounded-xl p-4 border border-gray-200">      
      {/* Header */}
      <SearchTitle handleClick={handleClick}/>

      {/* Search Input */}
      <SearchInput
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />


      {/* Optional: Recent / Suggestions */}
      <SearchSuggestions handleClick={handleClick}/>
    </div>
  );
};

export default SearchTopUp;