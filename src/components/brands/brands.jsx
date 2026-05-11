import React from "react";

const Brands = () => {
  const brandsData = [

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },

  ];

  const loopData = [...brandsData, ...brandsData,...brandsData,...brandsData,...brandsData,...brandsData,];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#d9c5bb]/20 blur-3xl rounded-full" />

      {/* heading */}
      <div className="relative text-center mb-16 px-4">
        <p className="uppercase tracking-[6px] text-xs text-gray-400 mb-5">
          Global Partners
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight ">
          Brands We Trust
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-500 leading-8 text-sm md:text-base">
          Collaborating with iconic brands to deliver premium beauty and
          skincare experiences.
        </p>
      </div>

      {/* marquee */}
      <div className="relative marquee-wrapper">
        {/* left fade */}
        {/* <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent" /> */}

        {/* right fade */}
        {/* <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent" /> */}

        <div className="marquee-track py-4 flex items-center gap-20 md:gap-28">
          {loopData.map((brand, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center
                min-w-[180px] md:min-w-[340px]
                h-[100px] md:h-[130px]
                rounded-3xl
                border border-gray-100
                bg-white/70
                backdrop-blur-xl
                shadow-sm
                hover:shadow-xl
                transition-all duration-500
                group
              "
            >
              <img
                src={brand.img}
                alt="brand"
                className="
                  h-10 md:h-26
                  w-auto
                  object-contain
                  grayscale
                  opacity-40
                  group-hover:opacity-100
                  group-hover:grayscale-0
                  group-hover:scale-110
                  transition-all duration-700 ease-out
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;