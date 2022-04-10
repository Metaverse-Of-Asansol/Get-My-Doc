import React from "react";
import './Styles/Home.css'
import Base from "../Base";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Base>
      <section className="hero">
        <div className="hero-text">
          <h2 className="hero-text-body dislay-1">Get Your Docs All at One Place </h2>
          <h2 className="hero-text-body dislay-2">Everything Personalized</h2>
          <p className="hero-text-bottom">
          Keep you documents portable, accesible and secure!
          </p>
          <Link to="/register"><button className="btn">Sign Up</button></Link>
        </div>
        <div className="hero-img">
            <img className="folder-img" src="https://res.cloudinary.com/sahebcloud/image/upload/v1649603214/documents-animate_pkwl2h.svg" alt="hero-image" />
            {/* <img className="Figures fig1" src="/assets/illusFigure3.png" alt="figure1" /> */}
            <img className="Figures fig2" src="/assets/illusFigure4.png" alt="figure2" />
        </div>
      </section>
    </Base>
  );
};

export default Home;
