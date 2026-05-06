import React from "react";
import Ad from "../components/header/ad";
import Menu from "../components/header/menu";
import Footer from "../components/footer/footer";
import ConditionalBanner from "./conditionalBanner";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="text-foreground bg-background">
      <Ad />
      <Menu />
      <ConditionalBanner />

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;