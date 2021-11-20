import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="" />
          <h1>P&P Pizza</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
