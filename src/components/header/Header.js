import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleClass = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="headers">
      <div className={`topnav ${toggle && "responsive"}`} id="myTopnav">
        <NavLink className="links" to="/home">
          Home
        </NavLink>

        <NavLink className="links" to="/portfolio">
          Portfolio
        </NavLink>

        <NavLink className="links" to="/blog">
          Blog
        </NavLink>

        <NavLink className="links" to="/contact">
          Contact
        </NavLink>

        <NavLink className="links" to="/cv">
          CV
        </NavLink>

        <div className="burger" onClick={toggleClass}>
          <div className={`bar1 ${toggle && "change"}`}></div>
          <div className={`bar2 ${toggle && "change"}`}></div>
          <div className={`bar3 ${toggle && "change"}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
