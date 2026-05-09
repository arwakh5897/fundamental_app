// import React, { useState, useEffect } from "react";
// import { ChevronLeftIcon } from "@heroicons/react/24/solid";

// const LeftArrow = ({ scrollRef }) => {
//   const [hidden, setHidden] = useState(true);

//   const handleScroll = () => {
//     if (!scrollRef?.current) return;
//     setHidden(scrollRef.current.scrollLeft <= 5);
//   };

//   const scrollLeft = () => {
//     if (!scrollRef?.current) return;

//     const container = scrollRef.current;

//     // 👉 Scroll by exact container width (stable on all screens)
//     const gap = window.innerWidth >= 1024 ? 64 : window.innerWidth >= 640 ? 8 : -64;
//     const scrollAmount = container.clientWidth 
//     + gap
//     ;

//     container.scrollBy({
//       left: -scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (!scrollRef?.current) return;

//     const container = scrollRef.current;
//     handleScroll();

//     container.addEventListener("scroll", handleScroll);

//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollRef]);

//   if (hidden) return null;

//   return (
//     <div className="absolute left-1 z-10 flex">
//       <button
//         onClick={scrollLeft}
//         className="bg-buttons hover-bg-buttons p-1 lg:p-2 rounded-full transition"
//       >
//         <ChevronLeftIcon className="lg:w-5 lg:h-5 w-4 h-4" />
//       </button>
//     </div>
//   );
// };

// export default LeftArrow;

import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const LeftArrow = ({ swiper }) => {
  if (!swiper || swiper.isBeginning) return null;

  return (
    <div className="absolute left-1 z-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-buttons hover-bg-buttons
        p-1 sm:p-2 rounded-full transition"
      >
        <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default LeftArrow;