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
import { LoaderProvider } from "./context/loaderContext";

const App = () => {
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,              // ← higher = more "floaty" / delayed stop (try 1.0–1.6)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // very popular easing (expo-out like)
    // easing: (t) => 1 - Math.pow(1 - t, 3),          // alternative: cubic-out, bit snappier
    smoothWheel: true,
    wheelMultiplier: 0.9,       // ← slightly slower mouse wheel feel (default 1)
    smoothTouch: true,         // ← important: disable on mobile → prevents weird jitter / over-scroll
    normalizeWheel: true,       // helps consistency across devices
  });

  // Optional: listen to scroll events if you later add GSAP / parallax
  // lenis.on('scroll', (e) => { console.log(e); });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Cleanup (good practice)
  return () => {
    lenis.destroy();
  };
}, []);

  return (
    <LoaderProvider>
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
    </LoaderProvider>
  );
};

export default App;