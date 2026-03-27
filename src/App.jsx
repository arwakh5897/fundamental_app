import React, { useEffect } from "react";
import useLenis from "./hook/lenisHook";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Ad from "./components/header/ad";
import Menu from "./components/header/menu";
import Footer from "./components/footer/footer";
import ShopAll from "./pages/dashboard/shop_all";
import ByType from "./pages/dashboard/by_type";
import ByConcern from "./pages/dashboard/by_Concern";
import ByBundle from "./pages/dashboard/by_bundle";
import Accessories from "./pages/dashboard/accessories";
import MakeUp from "./pages/dashboard/make_up";
import { LoaderProvider } from "./context/loaderContext";
import Loader from "./components/loader/loader";
import RouteLoader from "./context/navigationLoader";
import ConditionalBanner from "./layout/conditionalBanner";

import OurStory from "./pages/footer_pages/about_us/our_story";
import Sustainability from "./pages/footer_pages/about_us/sustainability";
import OurPhilosophy from "./pages/footer_pages/about_us/our_philosophy";
import ContactUs from "./pages/footer_pages/customer_care/contact_us";
import FAQ from "./pages/footer_pages/customer_care/faqs";
import RefundPolicy from "./pages/footer_pages/customer_care/refund_policy";

import ProductDetails from "./pages/product_details/product_details";

import SignIn from "./pages/auth/sign_in";
import SignUp from "./pages/auth/sign_up";

const App = () => {
  useLenis();

  return (
    <LoaderProvider>
      <Loader/>
    <BrowserRouter>
     <RouteLoader/>
      <div className="text-foreground bg-background">
        <Ad />
        <Menu />
        <
          ConditionalBanner/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />

                                  {/*  Header Routes  */}
            <Route path="/pages/shop_all" element={<ShopAll />} />
            <Route path="/pages/by_type" element={<ByType />} />
            <Route path="/pages/by_concern" element={<ByConcern />} />
            <Route path="/pages/by_bundle" element={<ByBundle />} />
            <Route path="/pages/accessories" element={<Accessories />} />
            <Route path="/pages/make_up" element={<MakeUp/>}/>
            <Route path="/pages/product_details" element={<ProductDetails/>}/>

                                  {/*  Footer Routes  */}
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/philosophy" element={<OurPhilosophy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

          </Routes>
          
        <Footer/>
      </div>
    </BrowserRouter>
    </LoaderProvider>
  );
};

export default App;