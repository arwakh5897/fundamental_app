import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import BillingForm from "../../components/check_out_Components/billingForm";
import OrderSummary from "../../components/check_out_Components/orderSummary";
import { useCartContext } from "../../context/cartContext";
import { useLocation } from "react-router-dom";
// import { placeOrder } from "../../api/data";
import OrderPopup from "../../components/check_out_Components/order_popup";
import { useAuth } from "../../context/authContext";
import useToast from "../../../utils/useToast";
import axios from "axios";


const CheckOut = () => {
  const { success , error } = useToast();
  const [showModel , setShowModel ] = useState(false);
  const location = useLocation();
  const product = location.state?.productData;
  const {cart } = useCartContext();

  const totalPrice= product ? product.discountedPrice * product.qty : cart.reduce((total, item) => total + item.discountedPrice * item.qty, 0);
 
  const shippingCost = totalPrice >= 2500 ? 0 : 130;
  const finalTotal = totalPrice + shippingCost;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    payment_method: "COD",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const finalCart = product ? [product] : cart;
  
  const items = finalCart.map((item) => ({
    product_id: item.id,
    quantity: item.qty,
    price: item.discountedPrice || item.price,
    size: item.selectedSize,
    color: item.selectedColor,
    category: item.category,
  }));

  const orderData = {
    customer_name: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    city: formData.city,
    province: formData.province,
    zip: formData.zip,
    payment_method: formData.payment_method,
    total_price: finalTotal,
    items,
  };
// alert(JSON.stringify(orderData, null, 2));
  try {
    const response = await placeOrder(orderData);

    console.log("API RESPONSE:", response);

    if (response?.status) {
      setShowModel(true);      
      success("Order placed successfully!");
    } else {
      error("Order failed");
    }
  } catch (err) {
    error("Something went wrong");
  }
};
const handleJazzCash = async () => {
    const order = await placeOrder({
    ...formData,
    total_price: finalTotal,
    payment_method: "JazzCash",
    items: cart,
  });
  
  const res = await axios.post(
    "http://127.0.0.1:8000/api/jazzcash/payment",
    {
      amount: finalTotal,
    }
  );

  const form = document.createElement("form");
  form.method = "POST";
  form.action = res.data.action_url;

  Object.keys(res.data.data).forEach((key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = res.data.data[key];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};

const { user } = useAuth();

useEffect(()=>{
  if(user){
    setFormData((prev)=>({
      ...prev,
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      city: user.city || "",
      province: user.province || "",
      zip: user.zip_code || "",
      address: user.address || "",
    }))
  }
}, [user]);
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Breadcrumb title="Checkout" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-4">

        {/* Billing */}
        <BillingForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleJazzCash={handleJazzCash}
        />

        {/* Summary */}
        <OrderSummary 
          cart={product ? [product] : cart} // Buy se product aya to array me wrap karo
          totalPrice={totalPrice}
          finalTotal= {finalTotal}
          shippingCost ={shippingCost}
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