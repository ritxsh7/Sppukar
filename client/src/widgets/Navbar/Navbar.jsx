import React, { useEffect } from "react";
import "./Navbar.css";

//routers
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar text-white flex px-6 py-4">
      <div className="navbar--items justify-between w-[100%] flex gap-4 md:items-center">
        <div className="navbar--logo flex flex-col">
          {/* <img alt="logo"></img> */}
          <NavLink to="/">
            <h2 className="text-2xl md:text-3xl mt-2">SppuKar</h2>
          </NavLink>
        </div>
        <div className="hidden md:block">
          <NavLink to="/upload-files">
            <h3>Upload Material</h3>
          </NavLink>
          <NavLink to="/">
            <h3>About Authors</h3>
          </NavLink>
        </div>
        <NavLink to="/">
          <h3 className="md:ml-[60vw] primary-btn">Sign In</h3>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
