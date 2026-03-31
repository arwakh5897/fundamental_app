import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <nav
      className="flex lg:justify-end py-2 text-sm items-center"
      aria-label="Breadcrumb"
    >
      <div className="space-x-2">
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