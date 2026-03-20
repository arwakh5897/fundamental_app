import React, { useState, useEffect } from "react";

const Loader = () => {

  return (
    <div className="fixed inset-0 flex justify-center items-center h-64">
      <div className="w-12 h-12 rounded-full animate-bounce">
        <img src="/assets/icons/fevicon.png" alt="Loading" />
      </div>
    </div>
  );
};
export default Loader;