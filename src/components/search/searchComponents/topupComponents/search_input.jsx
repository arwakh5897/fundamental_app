import React from "react";
import { SearchIcon } from "lucide-react";

const SearchInput = ({query, setQuery, handleSearch})=>{
    return(
      <div className="flex items-center gap-2 border border-color rounded-lg px-3 py-2 transition">
        <input
          type="text"
          className="w-full outline-none text-sm text-foreground-secondary"
          placeholder="Search products..."
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          onKeyDown={(e)=> e.key === "Enter" && handleSearch()}
        />
        <SearchIcon 
        className="w-5 h-5 opacity-60 hover:cursor-pointer"
        onClick={handleSearch}
        />
      </div>
    )
}
export default SearchInput;