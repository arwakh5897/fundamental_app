import React from "react";

const AboutUs = () => {
    return(
        <div className="text-lg">
             <h2 className="font-bold pb-4">About Us</h2>
             <div className="flex flex-col gap-1">
             <a href="/our-story">Our Story</a>
             <a href="/sustainability">Sustainability</a>
             <a href="/philosophy">Our Philosophy</a>
             </div>

        </div>
    )
};
export default AboutUs;