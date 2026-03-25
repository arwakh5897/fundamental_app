import React, { useEffect, useState } from "react";
import { useLoader } from "./loaderContext";
import { useLocation } from "react-router-dom";

const RouteLoader = ()=>{
   const location = useLocation();
   const {showLoader, hideLoader} = useLoader();

   useEffect(()=>{
    const handleRouteChange = async()=>{
      showLoader();

      await new Promise((item)=>setTimeout(item,1500));
      hideLoader();
    };
    handleRouteChange();
    showLoader();
   
    // const timer = setTimeout(() => {

    //   hideLoader();
    // }, 1000);
    // return()=> clearTimeout(timer);
   },[location.pathname]);
   
   return null;
}
export default RouteLoader;