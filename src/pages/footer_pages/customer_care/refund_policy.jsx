import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-background text-foreground">

      {/* HERO */}
       

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 text-xs lg:text-sm lg:px-10 py-10">

        {/* INTRO */}
        <div className="text-center mb-10">
          <h2 className="text-lg lg:text-2xl font-semibold text-heading">
            Easy Returns & Refunds
          </h2>
          <p className="mt-3 text-extraGray leading-7">
            We want you to shop with confidence. If something isn’t right,
            we offer a simple refund and exchange policy to ensure your satisfaction.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-card border-color rounded-xl p-6 lg:p-8 space-y-6">

          <div>
            <h3 className="font-semibold text-heading mb-2">
              1. Eligibility for Refund
            </h3>
            <p className="text-extraGray text-sm leading-6">
              Products can be refunded or exchanged within 7 days of delivery if
              they are damaged, defective, or not as described.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-heading mb-2">
              2. Product Condition
            </h3>
            <p className="text-extraGray text-sm leading-6">
              Items must be unused, in original packaging, and in the same
              condition as received.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-heading mb-2">
              3. Required Proof
            </h3>
            <p className="text-extraGray text-sm leading-6">
              A valid proof of purchase (order ID or receipt) is required for
              processing any refund or exchange request.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-heading mb-2">
              4. Refund Processing Time
            </h3>
            <p className="text-extraGray text-sm leading-6">
              Once approved, refunds are processed within 5–7 working days
              through the original payment method.
            </p>
          </div>

        </div>

        {/* NOTE SECTION */}
        <div className="mt-10 bg-halfWhite p-5 rounded-xl text-center">
          <p className="text-sm text-extraGray">
            💡 Please note: Shipping charges are non-refundable.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;