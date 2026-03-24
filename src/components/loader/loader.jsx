import React from "react";
import { useLoader } from "../../context/loaderContext";

const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="w-12 h-12 rounded-full animate-bounce">
        <img src="/assets/icons/fevicon.png" alt="Loading" />
      </div>
    </div>
  );
};

export default Loader;