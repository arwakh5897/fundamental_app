import React from "react";

const CustomerCare = () => {
    return(
        <div className="text-lg">
             <h2 className="font-bold pb-4">Customer Care</h2>
                <div className="flex flex-col gap-1">
                    <a href="/contact">Contact Us</a>
                    <a href="/faq">FAQ's</a>
                    <a href="refund-policy">Refund Policy</a>
                </div>
        </div>
    )
};
export default CustomerCare;