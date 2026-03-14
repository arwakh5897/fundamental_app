import React, { useEffect } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Ad from "./components/header/ad";
import Menu from "./components/header/menu";

const App = () => {


  return (
    <div className="text-foreground bg-background">
      <Ad />
      <Menu />
      <Dashboard />
    </div>
  );
};

export default App;