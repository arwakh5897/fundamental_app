// import React from "react";

// const Breadcrumb = ({ title }) => {
//   return (
//     <nav
//       className="md:hidden py-2 text-sm text-gray-600"
//       aria-label="Breadcrumb"
//     >
//       <ol className="inline-flex flex-wrap items-center space-x-2">
//         <li className="flex-shrink-0">
//           <a
//             href="/"
//             className="hover:text-red-300 transition-colors font-medium"
//           >
//             Home
//           </a>
//         </li>
//         <li className="flex-shrink-0">
//           <span className="text-gray-400 text-xl">{">"}</span>
//         </li>
//         <li className="font-semibold text-red-400 break-words max-w-full">
//           {title}
//         </li>
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumb;

import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <nav
      className="flex md:hidden py-2 text-sm items-center"
      aria-label="Breadcrumb"
    >
      <div className="space-x-2 py-4">
          <span>
          <a
            href="/"
            className="transition-colors text-highlighted hover-text-highlighted font-medium"
          >
            Home
          </a>
          </span>
          <span className=" ">{">"}</span>
          <span className="font-semibold">{title}</span>
    </div>
    </nav>
  );
};

export default Breadcrumb;