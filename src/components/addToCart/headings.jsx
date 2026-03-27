import React, { useState } from "react";
import FullDescription from "./full_decription";
import Reviews from "./reviews";

const Headings = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Description" },
    { key: "reviews", label: "Reviews" },
  ];

  return (
    <div>
      <p className="h-[1px] w-full bg-menu-buttons"></p>

      {/* Tabs */}
      <div className="flex justify-center items-center gap-8 py-3 md:py-2">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <h1
              className={`text-lg md:text-2xl font-semibold transition-all duration-200
              ${activeTab === tab.key ? "text-heading" : "text-foreground"}`}
            >
              {tab.label}
            </h1>

            {/* Animated underline */}
            <span
              className={`h-[2px] mt-1 transition-all duration-500
              ${activeTab === tab.key ? "w-full bg-menu-buttons" : "w-0 bg-menu-buttons"}`
            }
            ></span>
          </div>
        ))}
      </div>

      <p className="h-[1px] w-full bg-menu-buttons"></p>

      {/* Content */}
      <div className="pt-6 px-2 md:pt-10 transition-all duration-300">
        {activeTab === "description" && <FullDescription />}
        {activeTab === "reviews" && <Reviews />}
      </div>
      <p className="h-[1px] mt-10 w-full bg-menu-buttons"></p>
    </div>
  );
};

export default Headings;