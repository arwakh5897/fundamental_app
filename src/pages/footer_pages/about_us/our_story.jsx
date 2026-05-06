import React from "react";

const OurStory = () => {
  return (
    <div className="bg-background text-foreground">

      {/* HERO */}
          <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">Our Story</h1>


      {/* CONTENT */}
      <div className="max-w-5xl mx-auto text-xs lg:text-sm px-4 lg:px-10 py-10">

        {/* INTRO */}
        <div className="text-center mb-10">
          <h2 className="text-lg lg:text-2xl font-semibold text-heading">
            Where It All Began
          </h2>
          <p className="mt-3 text-extraGray leading-7 max-w-2xl mx-auto">
            Our journey started with a simple vision — to make high-quality products
            accessible without compromising on design or experience. What began as a
            small idea has now grown into a brand that people trust and return to.
          </p>
        </div>

        {/* STORY BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-card p-6 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Our Mission</h3>
            <p className="text-sm text-extraGray leading-6">
              To deliver products that combine quality, comfort, and style —
              while keeping the shopping experience simple, smooth, and reliable.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Our Vision</h3>
            <p className="text-sm text-extraGray leading-6">
              To become a brand people remember for trust and consistency —
              where every purchase feels worth it.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">What We Value</h3>
            <p className="text-sm text-extraGray leading-6">
              We believe in honesty, quality, and long-term relationships. Every
              decision we make revolves around customer satisfaction.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Our Growth</h3>
            <p className="text-sm text-extraGray leading-6">
              With every order, every review, and every returning customer — we
              continue to grow stronger and better.
            </p>
          </div>

        </div>

        {/* IMPACT / TRUST SECTION */}
        <div className="mt-14 bg-halfWhite rounded-2xl p-6 lg:p-10 text-center">
          <h2 className="text-lg lg:text-2xl font-semibold text-heading mb-3">
            Built on Trust
          </h2>
          <p className="text-extraGray max-w-2xl mx-auto leading-7">
            We are more than just a store — we are a community. Our focus has
            always been to create a shopping experience that feels reliable,
            enjoyable, and worth coming back to.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurStory;