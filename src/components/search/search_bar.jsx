import React from "react";
import SearchIcon from "./searchComponents/search_icon";
import { useLoaderData } from "react-router-dom";

const SearchBar = ({darkLight})=>{
    return(
        <div>
            <SearchIcon darkLight={darkLight}/>
        </div>
    )
}
export default SearchBar;