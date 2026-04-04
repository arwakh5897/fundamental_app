import React from "react";

const Brands = () => {
  const brandsData = [
    { img: "/assets/images/brand1.png" },
    { img: "/assets/images/brand2.png" },
    { img: "/assets/images/brand3.png" },
    { img: "/assets/images/brand4.png" },
  ];

  const loopData = [...brandsData, ...brandsData]; // must duplicate

  return (
    <section className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Our Brands
        </h1>
        <p className="mt-3 max-w-xl mx-auto">
          We collaborate with top-tier brands to bring you the best skincare experience.
        </p>
      </div>

      {/* Moving Strip */}
      <div className="relative marquee-wraper overflow-hidden">
        <div className="marquee-track flex w-max">
          {loopData.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[40px] md:min-w-[300px] mx-0 md:mx-6"
            >
              <img
                src={brand.img}
                alt="brand"
                className="h-28 md:h-42 object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;