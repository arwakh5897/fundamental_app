import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/banners/banner";

const ConditionalBanner = () => {
  const location = useLocation();

  const hidePaths = [
    "/pages/shopping_details",
    "/pages/checkout",
  ];

  // 🔥 dynamic route check
  const isProductDetails = location.pathname.startsWith("/pages/product_details/");

  if (hidePaths.includes(location.pathname) || isProductDetails) {
    return null;
  }

  return <Banner />;
};

export default ConditionalBanner;