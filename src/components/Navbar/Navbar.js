import React, { useState } from "react";
import "./Navbar.css";
import {Link } from "react-router-dom";
import logo_png from "../assets/img/landing/logo_png.png";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton'

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="row">
          <MobileMenu />
          <div className="header-logo">
            <Link to="/">
              <img src={logo_png} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="header-mid-menu">
            <nav className="main-nav">
              <ul>
                <li className="menu-item">
                  <Link to={`accommodation`}>Accommodation</Link>
                </li>
                <li className="menu-item">
                  <Link to={`explore`}>Explore locations</Link>
                </li>
                <li className="menu-item">
                  <Link to={`Explore`}>Enlist property</Link>
                </li>
                <IconButton className="icnbtn">
                  <AccountCircleIcon className='account_icon'/>
                </IconButton>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
