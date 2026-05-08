import React, { useState } from "react";

const faqs = [
  {
    question: "How can I place an order?",
    answer: "Simply browse products, add them to your cart, and proceed to checkout."
  },
  {
    question: "What payment methods are available?",
    answer: "We accept Cash on Delivery as well as secure online payments."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 3-5 working days depending on your location."
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Yes, we offer easy returns and exchanges within a limited time period."
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="bg-background text-foreground">

      {/* HERO */}
        <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">FAQs</h1>


      {/* FAQ CONTENT */}
      <div className="max-w-4xl mx-auto px-4 text-xs lg:text-sm lg:px-10 py-10">

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border-color rounded-xl overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 flex justify-between items-center"
              >
                <span className="font-medium text-heading">
                  {faq.question}
                </span>

                <span className="text-lg">
                  {active === index ? "-" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {active === index && (
                <div className="px-4 pb-4 text-extraGray text-sm leading-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* EXTRA HELP */}
        <div className="mt-12 bg-halfWhite p-6 rounded-xl text-center">
          <h2 className="text-lg font-semibold text-heading mb-2">
            Still need help?
          </h2>
          <p className="text-extraGray text-sm mb-3">
            Our support team is always here for you.
          </p>
          <a
            href="/contact"
            className="bg-buttons hover-bg-buttons px-5 py-2 rounded-lg text-sm"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;