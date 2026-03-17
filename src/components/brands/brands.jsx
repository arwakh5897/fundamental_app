import React from "react";

const Brands = () => {
    const brandsData = [
        { img: "/assets/images/brand1.png" },
        { img: "/assets/images/brand2.png" },
        { img: "/assets/images/brand3.png" },
        { img: "/assets/images/brand4.png" }
    ];
    return (
        <div className="p-4">
        <div className="text-center p-4 ">
           <h1 className="text-3xl">OUR BRANDS VALUE </h1> 
            <p className="py-4">
              Welcome to Fundamentals, where skincare meets fun! Born from a love for all things glowy, we’re here to transform your skincare routine into something you eagerly look forward to. Our mission? To bring you hybrid skincare products with dual-action formulas that deliver the best of both worlds—instant gratification and long term benefits. Let’s glow and grow together!    
            </p> 
           <div className="flex ">
            {brandsData.map((brand, index) => (
                <img
                    key={index}
                    className="w-1/4"
                    src={brand.img}
                    alt=""
                />
            ))}
           </div>
        </div>
        </div>
    )
}
export default Brands;

