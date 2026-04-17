import React from "react";

const CustomerCare = () => {
    return(
        <div className="text-lg flex justify-end">
             {/* <h2 className="font-bold pb-4">Customer Care</h2>
                <div className="flex flex-col text-sm md:text-lg gap-1">
                    <a href="/contact">Contact Us</a>
                    <a href="/faq">FAQ's</a>
                    <a href="refund-policy">Refund Policy</a>
                </div> */}
                        {/* EXPLORE */}
        <div className="mb-6 w-56">
          <p className="text-[11px] text-halfWhite mb-2 px-2 tracking-widest">
            Customer Care
          </p>

          <div className="space-y-2 bg-halfWhite p-2 rounded-2xl">

            <div
            //   onClick={() => setActiveMenu("concern")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>Contact Us</span>
            </div>

            <div
            //   onClick={() => setActiveMenu("type")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>FAQ's</span>
            </div>
                        <div
            //   onClick={() => setActiveMenu("type")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>Refund Policy</span>
            </div>
          </div>
        </div>
        </div>
    )
};
export default CustomerCare;