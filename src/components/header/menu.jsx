import React, { useEffect, useState } from "react";
import Mood from "../mood/mood";
import MenuItems from "./menuItems";
import SearchBar from "./search";
import SignIn from "./profile";
import Cart from "./cart";
import Logo from "./logo";
const Menu = () => {
    const [show , setShow]= useState(false)

    useEffect(()=>{
       setTimeout(() => {
        setShow(true);
       }, 100);
    },[]);
    return (
        <div className={`sticky transform transition-transform duration-500 top-0 left-0 z-50 w-full flex bg-menu-buttons gap-4 md:p-4 py-2 px-4 md:justify-center justify-between items-center ${show ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-5'} `}>
            <div className="md:order-1 order-2 "> <Logo/></div>
            <div className="order-1 md:order-2">   <MenuItems/></div>
           
            <div className="order-3 flex gap-4">
            {/* <SearchBar/> */}
            <Mood/>
            <SignIn/>
            <Cart/>
            </div>
        </div>
    )
}
export default Menu;