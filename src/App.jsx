import React, { useEffect } from "react";
import Lenis from "lenis";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Ad from "./components/header/ad";
import Menu from "./components/header/menu";
import ProductsPage from "./pages/shop_all";
import Footer from "./components/footer/footer";
import ShopAll from "./pages/shop_all";
import ByType from "./pages/by_type";
import ByConcern from "./pages/by_Concern";
import ByBundle from "./pages/by_bundle";
import Accessories from "./pages/accessories";
import MakeUp from "./pages/make_up";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <div className="text-foreground bg-background">
        <Ad />
        <Menu />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pages/shop_all" element={<ShopAll />} />
            <Route path="/pages/by_type" element={<ByType />} />
            <Route path="/pages/by_concern" element={<ByConcern />} />
            <Route path="/pages/by_bundle" element={<ByBundle />} />
            <Route path="/pages/accessories" element={<Accessories />} />
            <Route path="/pages/make_up" element={<MakeUp/>}/>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;