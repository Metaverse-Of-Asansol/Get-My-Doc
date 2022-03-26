import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

export default function Navbar(){
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className="nav">
            <div className="navContent">
                <div className="logo">
                    <img src="/assets/logos/logo.svg" alt="logo" />
                </div>
                <div className="nav-link-wrapper">
                    <ul className={showMenu ? "nav-link-list h-fit-tran" : "nav-link-list"}>
                        <li className="nav-link-items"><Link to="/">Home</Link></li>
                        <li className="nav-link-items"><Link to="/aboutus">About</Link></li>
                        <li className="nav-link-items"><Link to="/features">Features</Link></li>
                    </ul>
                </div>
                <div className="nav-btn-wrapper">
                    <button className="btn nav-btn sign-in-btn"><Link to="/login">Sign in</Link></button>
                    <button className="btn nav-btn"><Link to="/register">Create Account</Link></button>
                    <button className="btn nav-btn menu-btn" onClick={()=>setShowMenu(!showMenu)}>Menu</button>
                </div>
            </div>
        </nav>
    )
}