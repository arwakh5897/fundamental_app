import React from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

const OrderPopup = ({
  showModel,
  setShowModel,
  formData,
  cart,
  product,
}) => {
  if (!showModel) return null;

  const items = product ? [product] : cart;
  const navigate = useNavigate();

  const total = product
    ? product.discountedPrice * product.qty
    : cart.reduce(
        (total, item) => total + item.discountedPrice * item.qty,
        0
      );

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={() => setShowModel(false)}
    >
      <div
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-green-500 text-white p-5 text-center">
          <h2 className="text-2xl font-bold">🎉 Order Confirmed</h2>
          <p className="text-sm opacity-90">
            Thank you! Your order has been placed successfully.
          </p>
        </div>

        <div className="p-6 space-y-5">

          {/* Customer Info */}
          <div className="hidden md:flex flex-col bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Customer Details
            </h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Email:</span> {formData.email}</p>
              <p><span className="font-medium">Phone:</span> {formData.phone}</p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {formData.address}, {formData.city}
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">
              Order Summary
            </h3>

            <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg"
                >
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Qty: {item.qty}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    Rs {formatCurrency(item.discountedPrice * item.qty)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-lg font-semibold text-gray-800">
              Total Amount
            </span>
            <span className="text-xl font-bold text-green-600">
              Rs {formatCurrency(total)}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowModel(false)}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Close
            </button>

            <button
              onClick={() => {
                setShowModel(false);
                navigate("/pages/shop_all");
              }}
              className="w-full bg-buttons text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;