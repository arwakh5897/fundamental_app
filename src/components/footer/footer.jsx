import React from "react";
import AboutUs from "./about_us";
import CustomerCare from "./customer_care";
import CopyRight from "./copy_right";
import FollowUs from "./follow_us";
import ProductsLinks from "./products_links";


const Footer = () => {
    return (
        <footer className="bg-menu-buttons pt-8 p-4">
            <div className="flex flex-col py-8 md:flex-row gap-8 md:text-start justify-around">
                <AboutUs/>
                <CustomerCare/>
                <ProductsLinks/>
                <FollowUs/>
            </div>
            <div className="h-0.5 my-6 bg-white"></div>
            <CopyRight/>
        </footer>
    );
};
export default Footer;