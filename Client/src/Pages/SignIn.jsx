import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Styles/signin.module.css'
import Base from "../Base";
import axios from "axios";

const SignIn = () => {
  let navigate = useNavigate();

  const [registerdata, setRegisterdata] = useState({
    email: "",
    password: "",
  });

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
  }

  async function submit(e) {
    e.preventDefault();
    console.log("User Data Submitted");
    const userData = {
      email: registerdata.email,
      password: registerdata.password,
    };
    const { data } = await axios.post("/api/v1/login", userData, {
      withCredentials: true,
      crossorigin: true,
    });
    if (data.success) {
      console.log("User loggedin successfully : ", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user.name);
      navigate("/dashboard");
    } else {
      console.log("Something went Wrong :", data);
      setRegisterdata({
        email: "",
        password: "",
      });
    }
  }


  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      navigate("/");
    }
  }


  useEffect(() => {
    tokenCheker()
  }, [])
  
  return (
    <Base>
      <div className={styles.login}>
        <div className={styles.container}>
          <div
            className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
          >
            <form onSubmit={(e) => submit(e)} className={styles.login_form}>
              <h1 className={styles.login_title}>Sign in</h1>
              <input 
                type="email"
                name="email"
                id="email"
                value={registerdata.email}
                onChange={(e) => handelChange(e)}
                placeholder="Email"
                required
                autoComplete="off"
               />
              <input 
                type="password"
                name="password"
                id="password"
                value={registerdata.password}
                onChange={(e) => handelChange(e)}
                placeholder="Password"
                required
                autoComplete="off"
               />
              <a href="#" className={styles.forgot_pass}>
                Forgot your password?
              </a>
              <button className={styles.login_btn}>Sign In</button>
            </form>
          </div>
          <div className={styles["overlay-container"]}>
            <div className={styles.overlay}>
              <div
                className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
              >
                <h1 className={styles.login_title}>Don't have an account?</h1>
                <p className={styles.login_desc}>
                  Register and start your journey with us
                </p>
                <Link to="/register"><button className={styles.register_btn}>Sign Up</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default SignIn;
