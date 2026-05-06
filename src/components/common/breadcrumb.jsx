import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="bg-header border-bottom px-4 lg:px-10 py-3">

      <div className="text-sm text-extraGray flex items-center gap-2">

        <Link to="/" className="hover-text-highlighted">
          Home
        </Link>

        <span>/</span>

        <Link to="/pages/products" className="hover-text-highlighted">
          Products
        </Link>

        <span>/</span>

        <span className="text-heading font-medium">
          {title}
        </span>

      </div>

      {/* TITLE */}
      <h1 className="text-lg lg:text-2xl font-semibold mt-2 text-heading">
        {title}
      </h1>

    </div>
  );
};

export default Breadcrumb;