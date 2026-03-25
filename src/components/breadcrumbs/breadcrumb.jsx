import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <nav className="flex md:hidden py-2 items-center text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        <li>
          <a href="/" className="hover:text-red-300 transition-colors font-medium">
            Home
          </a>
        </li>
        <li>
          <span className="text-gray-400 text-xl">{'>'}</span>
        </li>
        <li className="text-highlighted font-semibold">{title}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;