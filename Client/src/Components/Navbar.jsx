import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";

export default function Navbar() {
  let navigate = useNavigate();

  const [tokenChecker, setTokenChecker] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenChecker(false);
    }
    console.log("Hi");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };

  useEffect(() => {
    checkToken();
  }, [tokenChecker]);

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
            {!tokenChecker ? (
              <>
                <li className="nav-link-items">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        {tokenChecker ? (
          <>
            <div className="nav-btn-wrapper">
              <Link to="/login">
                <button className="btn nav-btn sign-in-btn">Sign In</button>
              </Link>
              <Link to="/register">
                <button className="btn nav-btn">Create Account</button>
              </Link>
              <button
                className="btn nav-btn menu-btn"
                onClick={() => setShowMenu(!showMenu)}
              >
                Menu
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="nav-btn-wrapper">
              <button className="btn nav-btn sign-in-btn" onClick={logout}>
                Sign Out
              </button>

              <button
                className="btn nav-btn menu-btn"
                onClick={() => setShowMenu(!showMenu)}
              >
                Menu
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
