import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <p>Header</p>
      <Outlet />
      <p>Footer</p>
    </div>
  );
};

export default Layout;
