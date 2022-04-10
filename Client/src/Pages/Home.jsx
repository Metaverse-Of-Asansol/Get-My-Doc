import React, {useEffect, useState} from "react";
import './Styles/Home.css'
import Base from "../Base";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();
  const [tokenChecker, setTokenChecker] = useState(false);
  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      setTokenChecker(true);
    }else{
      // setTokenChecker()
      navigate("/");

    }
  }

  useEffect(() => {
    tokenCheker();
  }, [tokenChecker]);
  return (
    <Base>
      <section className="hero">
        <div className="hero-text">
          <h2 className="hero-text-body dislay-1">Get Your Docs All at One Place </h2>
          <h2 className="hero-text-body dislay-2">Everything Personalized</h2>
          <p className="hero-text-bottom">
          Keep you documents Portable, Accesible and Secure !
          </p>
          {console.log("7777777", tokenChecker)}
          {tokenChecker ? (<></>) : (
            <>
            <Link to="/register"><button className="btnsign">Create Your Account</button></Link>
            </>
          )}
          
        </div>
        <div className="hero-img">
            <img className="folder-img" src="https://res.cloudinary.com/sahebcloud/image/upload/v1649603214/documents-animate_pkwl2h.svg" alt="hero-image" />
        </div>
      </section>
    </Base>
  );
};

export default Home;
