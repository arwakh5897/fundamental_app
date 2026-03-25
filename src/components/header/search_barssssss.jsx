import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center border border-primary rounded-lg px-3 py-1 w-full md:w-1/3 ml-auto bg-background dark:bg-background-dark">
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-primary mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
        />
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-transparent focus:outline-none text-text dark:text-text-light placeholder-gray-400"
      />

      {/* Button */}
      <button className="ml-2 bg-menu-buttons hover:bg-primary-light text-white px-3 py-1 rounded-lg transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;