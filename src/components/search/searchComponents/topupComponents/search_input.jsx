import React from "react";

const SearchInput = ({query, setQuery, handleSearch})=>{
    return(
      <div className="flex items-center gap-2 border border-color rounded-lg px-3 py-2 transition">
        <input
          type="text"
          className="w-full outline-none text-sm"
          placeholder="Search products..."
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          onKeyDown={(e)=> e.key === "Enter" && handleSearch()}
        />
        <img
          className="w-5 h-5 opacity-60"
          src="/assets/icons/search.png"
          alt="search"
          onClick={handleSearch}
        />
      </div>
    )
}
export default SearchInput;