// import React, { useEffect, useState } from "react";
// import { ChevronRightIcon } from "@heroicons/react/24/solid";

// const RightArrow = ({ scrollRef }) => {
//   const [hidden, setHidden] = useState(false);

//   const handleScroll = () => {
//     if (!scrollRef?.current) return;

//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//     // Hide when fully scrolled right
//     setHidden(scrollLeft + clientWidth >= scrollWidth - 5);
//   };

//   const scrollRight = () => {
//     if (!scrollRef?.current) return;

//     const container = scrollRef.current;

//     // 👉 stable scroll (same as LeftArrow fix)
//     const gap = window.innerWidth >= 1024 ? 64 : window.innerWidth >= 640 ? 8 : -64;
//     const scrollAmount = container.clientWidth 
//     + gap
//     ;

//     container.scrollBy({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (!scrollRef?.current) return;

//     const container = scrollRef.current;

//     handleScroll();

//     container.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleScroll);

//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, [scrollRef]);

//   if (hidden) return null;

//   return (
//     <div className="absolute right-1 z-10 flex">
//       <button
//         onClick={scrollRight}
//         className="bg-buttons hover-bg-buttons lg:p-2 p-1 rounded-full hover:opacity-80 transition"
//       >
//         <ChevronRightIcon className="lg:w-5 lg:h-5 w-4 h-4" />
//       </button>
//     </div>
//   );
// };

// export default RightArrow;

import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const RightArrow = ({ swiper }) => {
  if (!swiper || swiper.isEnd) return null;

  return (
    <div className="absolute right-1 z-10">
      <button
        onClick={() => swiper.slideNext()}
        className="bg-buttons hover-bg-buttons
        p-1 sm:p-2 rounded-full transition"
      >
        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default RightArrow;