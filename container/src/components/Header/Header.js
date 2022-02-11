import React from "react";
import "./Header.scss";
import logo from "../../assets/img/logo-on-white-bg.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} />
      <h1>Welcome to Crash Course</h1>
    </div>
  );
}

export default Header;
