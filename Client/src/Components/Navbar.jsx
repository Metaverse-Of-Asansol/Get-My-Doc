import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className="navContent">
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" />
          <p className="logo-text">Get My Docs</p>
        </div>
        <div className="nav-link-wrapper">
          <ul
            className={showMenu ? "nav-link-list h-fit-tran" : "nav-link-list"}
          >
            <li className="nav-link-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link-items">
              <Link to="/aboutus">About</Link>
            </li>
            <li className="nav-link-items">
              <Link to="/features">Features</Link>
            </li>
          </ul>
        </div>
        <div className="nav-btn-wrapper">
          <Link to="/login">
            <button className="btn nav-btn sign-in-btn">Sign in</button>
          </Link>
          <Link to="/register">
            <button className="btn nav-btn">Create Account</button>
          </Link>
          <button
            className="btn nav-btn menu-btn"
            onClick={() => setShowMenu(!showMenu)}>
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
