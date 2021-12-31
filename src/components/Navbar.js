import React, { useState } from "react";
import logo from "../images/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [display, setDisplay] = useState(false);
  const checkBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", checkBackground);
  const displayNav = () => {
    setDisplay(!display);
  };
  return (
    <>
      <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" style={{ position: "relative" }}>
          <span className="nav-icons" style={{ zIndex: "1" }}>
            <i
              onClick={displayNav}
              className={display ? "fas fa-times" : "fas fa-bars"}
              style={{ fontSize: "1.5rem", color: "#666" }}
            ></i>
          </span>
          {display && (
            <nav
              className="navbar"
              style={{
                height: "300px",
                width: "150px",
                top: "-3rem",
                zIndex: "-99",
                marginLeft: "-6rem",
                position: "absolute",
              }}
            >
              <ul
                className="menu"
                style={{
                  display: "block",
                }}
              >
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Fearures</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">UI SS</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </nav>
          )}
        </label>
        <ul className="menu">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Fearures</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">UI SS</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
