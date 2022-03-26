import React, { useState } from "react";
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
                        <li className="nav-link-items"><a href="#">Home</a></li>
                        <li className="nav-link-items"><a href="#">About</a></li>
                        <li className="nav-link-items"><a href="#">Features</a></li>
                    </ul>
                </div>
                <div className="nav-btn-wrapper">
                    <button className="btn nav-btn sign-in-btn">Sign in</button>
                    <button className="btn nav-btn">Create Account</button>
                    <button className="btn nav-btn menu-btn" onClick={()=>setShowMenu(!showMenu)}>Menu</button>
                </div>
            </div>
        </nav>
    )
}