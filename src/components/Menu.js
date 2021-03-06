import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/menu.css";

function Menu() {
  const location = useLocation();
  const [menuOpen, toggleMenu] = useState(false);

  useEffect(() => toggleMenu(false), [location]);



  /* Menu button is uncommented below : onClick */

  return (
    <>
      <div
        className={`menu-icon__container${menuOpen ? " menu-open" : ""}`}
        /* onClick={() => toggleMenu(!menuOpen)} */ >   
        <div className="menu-icon">
          <div />
          <div />
          <div />
        </div>
        <span className={`menu-icon-circle${menuOpen ? "" : " menu-open"}`} />
      </div>

      <div className={`menu-list-container${menuOpen ? " menu-open" : ""}`}>
        <div className="menu-list">
          <Link to="/" className="menu-item">
            <div className="menu-item__title">Home</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Start fresh</div>
          </Link>
          <Link to="/work" className="menu-item">
            <div className="menu-item__title">Work</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Some of my projects</div>
          </Link>
          <Link to="/about" className="menu-item">
            <div className="menu-item__title">About</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Me, myself and I</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
