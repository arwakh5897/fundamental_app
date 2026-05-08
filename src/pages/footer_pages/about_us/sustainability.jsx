import React from "react";

const Sustainability = () => {
  return (
    <div className="bg-background text-foreground">

      {/* HERO SECTION */}
          <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">Sustainability</h1>


      {/* CONTENT */}
      <div className="max-w-5xl text-xs lg:text-sm mx-auto px-4 lg:px-10 py-10">

        {/* INTRO */}
        <div className="text-center mb-10">
          <h2 className="text-lg lg:text-2xl font-semibold text-heading">
            Our Commitment
          </h2>
          <p className="mt-3 text-extraGray max-w-2xl mx-auto leading-7">
            We believe that growth and responsibility go hand in hand. Our mission is to
            minimize environmental impact while delivering quality products that people trust.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-card p-5 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Eco Packaging</h3>
            <p className="text-sm text-extraGray">
              Using recyclable and biodegradable materials to reduce waste.
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Responsible Sourcing</h3>
            <p className="text-sm text-extraGray">
              Partnering with suppliers who follow ethical and sustainable practices.
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Lower Emissions</h3>
            <p className="text-sm text-extraGray">
              Reducing our carbon footprint through optimized logistics and operations.
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Ethical Production</h3>
            <p className="text-sm text-extraGray">
              Ensuring fair labor practices and safe working environments.
            </p>
          </div>

        </div>

        {/* IMPACT SECTION */}
        <div className="mt-14 bg-halfWhite rounded-2xl p-6 lg:p-10 text-center">
          <h2 className="text-lg lg:text-2xl font-semibold text-heading mb-3">
            Our Impact
          </h2>
          <p className="text-extraGray max-w-2xl mx-auto leading-7">
            Every step we take is aimed at creating a positive impact on the planet.
            From reducing waste to promoting ethical production, we are committed to
            making sustainability a core part of our journey.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Sustainability;