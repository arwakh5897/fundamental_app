import React from "react";
import SearchIcon from "./searchComponents/search_icon";

const SearchBar = ({darkLight})=>{
    return(
        <div>
            <SearchIcon darkLight={darkLight}/>
        </div>
    )
}
export default SearchBar;