// import React from "react";
// import Mood from "../mood/mood";
// import MenuItems from "./menuItems";
// import SearchBar from "./search";
// import SignIn from "./profile";
// import Cart from "./cart";
// import Logo from "./logo";
// const Menu = () => {
//     return (
//         <div className="sticky top-0 left-0 z-50 w-full flex bg-buttons hover-bg-buttons gap-4 lg:p-4 py-2 px-4 lg:justify-around justify-between items-center ">
//             <a href="/" className="lg:order-1 order-2"> <Logo/></a>
//             <div className="order-1 lg:order-2">   <MenuItems/></div>
           
//             <div className="order-3 flex gap-4">
//             {/* <SearchBar/> */}
//             <Mood/>
//             <SignIn/>
//             <Cart/>
//             </div>
//         </div>
//     )
// }
// export default Menu;

import React, { useEffect, useState } from "react";
import MenuItems from "./menuItems";
import Logo from "./logo";
import ModeHook from "../../hook/modeHook";

const Menu = () => {

  return (
    <div
      className={`sticky top-0 left-0 z-50 w-full flex bg-menu gap-4 p-3 lg:py-2 lg:px-4 
        lg:justify-around justify-between items-center
        transition-all duration-500 ease-in-out
      `}
    >
      <a href="/" className="lg:order-1 order-2"> <Logo/></a>

      <div className="order-1 lg:order-2">
        <MenuItems />
      </div>

      <div className="order-3">
       <ModeHook/>
      </div>
    </div>
  );
};

export default Menu;