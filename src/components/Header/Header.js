import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assests/Icons/x.svg";
import { ReactComponent as MenuIcon } from "../../assests/Icons/menu.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="nav-left">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="#">
              <img src={require("../../assests/images/header_logo.jpg")} />
            </a>
          </div>

          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/">Home</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/allNews">All News</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
      <ul className="nav-right">
        <li onClick={closeMobileMenu}>
          <a href="#">
            <i className="fa fa-bell-o" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-search form-control-feedback"></span>
          </a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
