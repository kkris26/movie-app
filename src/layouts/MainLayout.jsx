import ThemeOrder from "daisyui/functions/themeOrder";
import React from "react";
import ThemeToggle from "../components/Button/ThemeToggle";

const MainLayout = ({ children }) => {
  return <div className="">{children}
  <ThemeToggle/>
  </div>;
};

export default MainLayout;
