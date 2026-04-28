import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import useLenis from "./hook/lenisHook";
import ToastContext from "./context/toastContext";

import Dashboard from "./pages/dashboard/dashboard";
import ShopAll from "./pages/dashboard/shop_all";
import Accessories from "./pages/dashboard/accessories";
import MakeUp from "./pages/dashboard/make_up";
import ProductDetails from "./pages/product_details/product_details";
import ShoppingDetails from "./pages/shopping_details/shopping_details";

import { LoaderProvider } from "./context/loaderContext";
import Loader from "./components/loader/loader";
import RouteLoader from "./context/navigationLoader";
import { CartProvider } from "./context/cartContext";
import ScrollToTop from "./hook/scrollToTop";

import OurStory from "./pages/footer_pages/about_us/our_story";
import Sustainability from "./pages/footer_pages/about_us/sustainability";
import OurPhilosophy from "./pages/footer_pages/about_us/our_philosophy";
import ContactUs from "./pages/footer_pages/customer_care/contact_us";
import FAQ from "./pages/footer_pages/customer_care/faqs";
import RefundPolicy from "./pages/footer_pages/customer_care/refund_policy";

import SignIn from "./pages/auth/sign_in";
import SignUp from "./pages/auth/sign_up";

import MainLayout from "./layout/main_layout";
import CheckOut from "./pages/check_out/check_out";

import Casual from "./pages/by_concern/causal";
import PartyWear from "./pages/by_concern/partywear";
import Formal from "./pages/by_concern/formal";
import Sports from "./pages/by_concern/sports";
import Outdoor from "./pages/by_concern/outdoor";
import Lightweight from "./pages/by_concern/lightweight";
import Flat from "./pages/by_concern/flat";
import Waterproof from "./pages/by_concern/waterproof";

import UserProfile from "./pages/user_profile/user_profle";
import OrderStatus from "./pages/order_status/order_status";

const App = () => {
  useLenis();

  return (
    <BrowserRouter>
     <ScrollToTop/>
      <CartProvider>
      <LoaderProvider>
        <Loader/>
          <RouteLoader/>
           <ToastContext/>
            <div className="text-foreground bg-background scrollbar-hide">
                <Routes>
                    <Route element={<MainLayout />} >
                      <Route path="/" element={<Dashboard />} />

                                            {/*  Header Routes  */}
                      <Route path="/pages/shop_all" element={<ShopAll />} />
                      <Route path="/pages/accessories" element={<Accessories />} />
                      <Route path="/pages/make_up" element={<MakeUp/>}/>

                      <Route path="/pages/user-profile" element={<UserProfile/>}/>
                      <Route path="/pages/order-tracking" element={<OrderStatus/>}/>

                                            {/*  Extra Pages Routes  */}
                      <Route path="/pages/product_details/:id" element={<ProductDetails/>}/>
                      <Route path="/pages/shopping_details" element={<ShoppingDetails/>}/>
                      <Route path="/pages/checkout" element={<CheckOut/>}/>

                                            {/*  Concern Routes  */}
                      <Route path="/concern/casual-wear" element={<Casual/>} />
                      <Route path="/concern/formal-wear" element={<Formal/>} />
                      <Route path="/concern/sports-performance" element={<Sports/>} />
                      <Route path="/concern/outdoor-hiking" element={<Outdoor/>} />
                      <Route path="/concern/lightweight" element={<Lightweight/>} />
                      <Route path="/concern/flat-feet" element={<Flat/>} />
                      <Route path="/concern/waterproof" element={<Waterproof/>} />
                      <Route path="/concern/party-wear" element={<PartyWear/>} />

                                            {/*  Footer Routes  */}
                      <Route path="/our-story" element={<OurStory />} />
                      <Route path="/sustainability" element={<Sustainability />} />
                      <Route path="/philosophy" element={<OurPhilosophy />} />
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/refund-policy" element={<RefundPolicy />} />
                    </Route>
                  
                                          {/* Auth Routes */}
                      <Route path="/login" element={<SignIn/>} />
                      <Route path="/signup" element={<SignUp/>} />

                </Routes>
              </div>
          </LoaderProvider>
       </CartProvider>
    </BrowserRouter>

  );
};

export default App;