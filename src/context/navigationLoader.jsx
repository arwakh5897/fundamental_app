import React, { useEffect } from "react";
import { useLoader } from "./loaderContext";
import { useLocation } from "react-router-dom";

const RouteLoader = () => {
  const location = useLocation();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();

    // small delay sirf smoothness ke liye (optional)
    const timer = setTimeout(() => {
      hideLoader();
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default RouteLoader;