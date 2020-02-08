import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Header.scss";

const Header = props => {
  const [toggle, setToggle] = useState(false);
  const [toPrint, setToprint] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cv") {
      setToprint(true);
    } else {
      setToprint(false);
    }
  }, [location]);

  const printPage = () => {
    window.print();
  };
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

        <NavLink className="links" to="/cv">
          CV
        </NavLink>
        {toPrint && <button onClick={printPage}>Print</button>}

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
