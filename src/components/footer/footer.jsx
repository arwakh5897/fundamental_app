import React from "react";
import AboutUs from "./footer_components/about_us";
import CustomerCare from "./footer_components/customer_care";
import CopyRight from "./footer_components/copy_right";
import FollowUs from "./footer_components/follow_us";
import ProductsLinks from "./footer_components/products_links";


const Footer = () => {
    return (
        <footer className="bg-menu-buttons pt-0 md:pt-8 p-4">
            <div className="flex flex-col pt-6 pb-8 md:py-8 md:flex-row gap-8 md:text-start justify-around">
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