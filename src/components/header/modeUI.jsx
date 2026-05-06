import React from "react";
import useModeHook from "../../hook/modeHook";
import Mood from "../mood/mood";
import SearchBar from "../search/searchComponents/search_icon";
import SignIn from "./profile";
import Cart from "./cart";

const ModeUI =()=>{
    const {isDark , setIsDark} = useModeHook();
    return(
        <div className="flex gap-2 md:gap-4">
            <button
            onClick={() => setIsDark(!isDark)}
            className=" hover:cursor-pointer lg:flex hidden"
            >
                    <Mood darkLight={isDark} />          
            </button>
                    <SearchBar darkLight={isDark} />
                    <SignIn darkLight={isDark} />
                    <Cart darkLight={isDark} />
        </div>
    )
}
export default ModeUI;