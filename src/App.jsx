import React, { useEffect } from "react";
import Lenis from "lenis";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Ad from "./components/header/ad";
import Menu from "./components/header/menu";
import ProductsPage from "./pages/productsPage";
import Footer from "./components/footer/footer";

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
            <Route path="/pages/productsPage" element={<ProductsPage />} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;