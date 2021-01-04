import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assests/Icons/x.svg";
import { ReactComponent as MenuIcon } from "../../assests/Icons/menu.svg";

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
            <a href="#">{/* <Logo className="logo" /> */}</a>
          </div>

          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">ABOUT</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">CONTACT</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">BLOG</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="#">SIGN-IN</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="" className="sign-up">
                SIGN-UP
              </a>
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
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
          </a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
