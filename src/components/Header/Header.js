import React from "react";
import "./Header.css";
import artic from '../../images/artic logo.png'

function Header() {
    return (
      <header className='App-header'>
        <div className='App-logo'>
          <img src ={artic} className="bear-img"></img>
          <h1>l o o k e r </h1>
        </div>
      </header>
    );
  }
  
  export default Header;