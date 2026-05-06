// import React, { useEffect, useState } from "react";
// import MenuItems from "./menuItems";
// import Logo from "./logo";
// import ModeUI from "./modeUI";

// const Menu = () => {

//   return (
//     <div
//       className={`sticky top-0 left-0 z-50 w-full flex bg-menu gap-4 p-3 lg:px-0 lg:py-0 
//         lg:justify-around justify-between items-center
//         transition-all duration-500 ease-in-out
//       `}
//     >
//       <a href="/" className="order-3 lg:order-1">
//        <Logo/>
//       </a>

//       <div className="order-1 lg:order-2">
//         <MenuItems />
//       </div>

//       <div className="order-3">
//        <ModeUI/>
//       </div>
//     </div>
//   );
// };

// export default Menu;

import React, { useEffect, useState } from "react";
import MenuItems from "./menuItems";
import Logo from "./logo";
import ModeUI from "./modeUI";

const Menu = () => {

  return (
    <div
      className={`sticky top-0 left-0 z-50 w-full flex bg-menu shadow-2xl gap-4 p-3 lg:px-0 lg:py-0 
        lg:justify-around justify-between items-center
        transition-all duration-500 ease-in-out
      `}
    >
      <a href="/" className="order-3 lg:order-1">
       <Logo/>
      </a>

      <div className="order-1 lg:order-2">
        <MenuItems />
      </div>

      <div className="order-3">
       <ModeUI/>
      </div>
    </div>
  );
};

export default Menu;