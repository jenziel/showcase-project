import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <header className='App-footer'>
      <NavLink to='/credits'>✽ credits ✽</NavLink>
    </header>
  );
}

export default Footer;
