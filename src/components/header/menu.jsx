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
  const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // mobile pe scroll ignore karo
  //     if (window.innerWidth > 768) return;

  //     if (window.scrollY > lastScrollY) {
  //       setShow(false); // scroll down → hide
  //     } else {
  //       setShow(true); // scroll up → show
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <div
      className={`sticky top-0 left-0 z-50 w-full flex bg-menu gap-4 lg:p-3 py-2 px-4 
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