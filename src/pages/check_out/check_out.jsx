import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import BillingForm from "../../components/check_out_Components/billingForm";
import OrderSummary from "../../components/check_out_Components/orderSummary";
import { useCartContext } from "../../context/cartContext";
import { useLocation } from "react-router-dom";
import OrderPopup from "../../components/check_out_Components/order_popup";

const CheckOut = () => {
  const [showModel , setShowModel ] = useState(false);
  const location = useLocation();
  const product = location.state?.productData;
  const {cart } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModel(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <Breadcrumb title="Checkout" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-4">

        {/* Billing */}
        <BillingForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {/* Summary */}
        <OrderSummary 
          cart={product ? [product] : cart} // Buy se product aya to array me wrap karo
          totalPrice={product ? product.discountedPrice * product.qty : 
            cart.reduce((total, item) => total + item.discountedPrice * item.qty, 0)
          }
        />
      </div>
      <OrderPopup 
      showModel={showModel}
      setShowModel={setShowModel}
      formData={formData}
      cart={cart}
      product={product}
      />
    </div>
  );
};

export default CheckOut;