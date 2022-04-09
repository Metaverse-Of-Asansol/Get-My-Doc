import React from "react";
import './Styles/Home.css'
import Base from "../Base";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Base>
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-text-body dislay-1">get your all docs in one place</h1>
          <p className="hero-text-bottom">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            illo quasi.
          </p>
          <Link to="/register"><button className="btn">Sign Up</button></Link>
        </div>
        <div className="hero-img">
            <img className="folder-img" src="/assets/folder.png" alt="hero-image" />
            <img className="Figures fig1" src="/assets/illusFigure3.png" alt="figure1" />
            <img className="Figures fig2" src="/assets/illusFigure4.png" alt="figure2" />
        </div>
      </section>
    </Base>
  );
};

export default Home;
