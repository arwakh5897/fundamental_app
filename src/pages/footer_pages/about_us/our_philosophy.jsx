import React from "react";

const OurPhilosophy = () => {
  return (
    <div className="bg-background text-foreground">

      {/* HERO */}
          <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">Our Philosophy</h1>


      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 text-xs lg:text-sm lg:px-10 py-10">

        {/* INTRO */}
        <div className="text-center mb-10">
          <h2 className="text-lg lg:text-2xl font-semibold text-heading">
            What We Stand For
          </h2>
          <p className="mt-3 text-extraGray leading-7 max-w-2xl mx-auto">
            Our philosophy is built on a simple foundation — quality, trust, and
            continuous innovation. Every product we offer reflects our commitment
            to delivering value beyond expectations.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-card p-6 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Quality First</h3>
            <p className="text-sm text-extraGray leading-6">
              We prioritize excellence in every detail, ensuring products that
              meet the highest standards.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Customer Focus</h3>
            <p className="text-sm text-extraGray leading-6">
              Our customers are at the center of everything. Their satisfaction
              defines our success.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border-color hover:shadow-md transition">
            <h3 className="font-semibold text-heading mb-2">Innovation</h3>
            <p className="text-sm text-extraGray leading-6">
              We continuously evolve to bring better experiences, smarter
              solutions, and modern designs.
            </p>
          </div>

        </div>

        {/* SECOND SECTION */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-card p-6 rounded-xl border-color">
            <h3 className="font-semibold text-heading mb-2">Transparency</h3>
            <p className="text-sm text-extraGray leading-6">
              We believe in honest communication and clear practices — no hidden
              surprises.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border-color">
            <h3 className="font-semibold text-heading mb-2">Continuous Growth</h3>
            <p className="text-sm text-extraGray leading-6">
              Improvement is a journey. We learn, adapt, and grow with every step.
            </p>
          </div>

        </div>

        {/* IMPACT BLOCK */}
        <div className="mt-14 bg-halfWhite rounded-2xl p-6 lg:p-10 text-center">
          <h2 className="text-lg lg:text-2xl font-semibold text-heading mb-3">
            Our Promise
          </h2>
          <p className="text-extraGray max-w-2xl mx-auto leading-7">
            We are committed to delivering products and experiences that reflect
            our values. Every choice we make is guided by integrity, quality,
            and the trust our customers place in us.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurPhilosophy;