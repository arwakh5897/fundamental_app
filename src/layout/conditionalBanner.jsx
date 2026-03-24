import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/banners/banner";

const ConditionalBanner = ()=>{
    const locaion = useLocation();

    const hidenPaths = ["/pages/add_to_cart"]
    if(hidenPaths.includes(locaion.pathname)) return null;
    return<Banner/>;
}
export default ConditionalBanner;