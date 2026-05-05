import React from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

const OrderSummary = ({ cart, totalPrice ,finalTotal , shippingCost }) => {
  // const shippingCost = totalPrice >= 2500 ? 0 : 130;
  // const finalTotal = totalPrice + shippingCost;

  return (
    <div className="rounded-2xl border  border-gray-100 shadow-sm p-6 h-fit sticky top-16 space-y-6">

      {/* Header */}
      <h2 className="text-xl font-semibold border-b pb-3">
        Order Summary
      </h2>

      {/* 🛒 Products */}
      <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
        {cart.map((item, index) => (
          <div key={index} className="flex gap-3">

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 object-contain border rounded-lg"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-2">
                {item.title}
              </p>
              <p className="text-xs text-fullGray">
                Qty: {item.qty}
              </p>
            </div>

            {/* Price */}
            <div className="text-sm font-semibold">
              Rs.
              {formatCurrency (item.discountedPrice * item.qty|| 0)}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t"></div>

      {/* 💰 Pricing */}
      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-fullGray">Subtotal</span>
          <span>Rs.{formatCurrency (totalPrice)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-fullGray">Shipping</span>
          <span className={shippingCost === 0 ? "text-green-600 font-medium" : ""}>
            {shippingCost === 0 ? "Free" : `Rs.${shippingCost}`}
          </span>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t"></div>

      {/* 🧾 Total */}
      <div className="flex justify-between items-center text-lg font-semibold">
        <span>Total</span>
        <span className="">
          Rs.{formatCurrency (finalTotal)}
        </span>
      </div>

      {/* 🚀 Free Shipping Hint */}
      {shippingCost > 0 && (
        <div className="bg-gray-100 text-xs p-2 rounded-lg text-gray-600 text-center">
          Add Rs.{formatCurrency(2500 - totalPrice)} more for FREE delivery 🚚
        </div>
      )}
    </div>
  );
};

export default OrderSummary;