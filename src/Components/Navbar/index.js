import React from "react";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import "./navbar.css";
import CartIconOne from "../../Assets/Icons/CartIcon";
const Navbar = () => {
  const start = (
    <Link to="/">
      {/* <img src={CompanyLogo} alt="Logo" className="navbar-logo" /> */}
    </Link>
  );

  const end = (
    <div className="navbar-icons">
      <CartIconOne />
      <CartIconOne />
    </div>
  );
  const items = [
    { label: "Home", url: "/" },
    { label: "Group Schedule", url: "/schedule" },
    { label: "Events", url: "/events" },
    { label: "Coaches", url: "/coaches" },
    { label: "School Programs", url: "/programs" },
    { label: "Instructions", url: "/instructions" },
    { label: "Contact Us", url: "/contact" },
  ];

  return (
    <div className="navbar-container">
      <Menubar
        start={start}
        model={items}
        end={end}
        className="custom-navbar"
      />
    </div>
  );
};
export default Navbar;
