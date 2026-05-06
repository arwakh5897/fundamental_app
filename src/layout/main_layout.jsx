import React from "react";
import Ad from "../components/header/ad";
import Menu from "../components/header/menu";
import Footer from "../components/footer/footer";
import ConditionalBanner from "./conditionalBanner";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="text-foreground bg-background min-h-screen">
      <Ad />
      <Menu />
      <ConditionalBanner />

      {/* MAIN CONTENT */}
        <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;