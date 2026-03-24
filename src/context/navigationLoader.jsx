import React, { useEffect, useState } from "react";
import { useLoader } from "./loaderContext";
import { useLocation } from "react-router-dom";

const RouteLoader = ()=>{
   const location = useLocation();
   const {showLoader, hideLoader} = useLoader();

   useEffect(()=>{
    showLoader();

    const timer = setTimeout(() => {
      hideLoader();
    }, 2000);
    return()=> clearTimeout(timer);
   },[location]);
   
   return null;
}
export default RouteLoader;