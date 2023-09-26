import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import artic from '../../images/artic logo.png'

function Header() {
  return (
    <header className='App-header'>
      <div className='App-logo'>
        <NavLink to='/showcase-project' style={{ color: "inherit", textDecoration: "inherit" }}>
          {/* <img src ={artic} className="bear-img"></img> */}
          <h1>l o o k e r </h1>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
