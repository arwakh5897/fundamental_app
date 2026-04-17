import React from "react";

const AboutUs = () => {
    return(
        <div className="text-lg ">
             {/* <h2 className="font-bold pb-4">About Us</h2>
             <div className="flex text-sm md:text-lg flex-col gap-1">
             <a href="/our-story">Our Story</a>
             <a href="/sustainability">Sustainability</a>
             <a href="/philosophy">Our Philosophy</a>
             </div> */}
        {/* EXPLORE */}
        <div className="mb-6 w-56">
          <p className="text-[11px] text-halfWhite mb-2 px-2 tracking-widest">
            About Us
          </p>

          <div className="space-y-2 bg-halfWhite p-2 rounded-2xl">

            <div
            //   onClick={() => setActiveMenu("concern")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>Our Story</span>
            </div>

            <div
            //   onClick={() => setActiveMenu("type")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>Sustainability</span>
            </div>
                        <div
            //   onClick={() => setActiveMenu("type")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>Our Philosophy</span>
            </div>
          </div>
        </div>
        </div>
    )
};
export default AboutUs;