import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Styles/register.module.css";
import Base from "../Base";
import axios from "axios";

const Register = () => {
  let navigate = useNavigate();

  const [registerdata, setRegisterdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
  }

  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      navigate("/");
    }
  }

  async function submit(e) {
    e.preventDefault();
    console.log("User Data Submitted");
    const userData = {
      name: registerdata.name,
      email: registerdata.email,
      password: registerdata.password,
      confirmPassword: registerdata.confirmPassword,
    };
    const { data } = await axios.post("/api/v1/register", userData, {
      withCredentials: true,
      crossorigin: true,
    });
    if (data.success) {
      console.log("User register successfully : ", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user.name);
      navigate("/dashboard");
    } else {
      console.log("Something went Wrong :", data);
      setRegisterdata({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  // console.log(registerdata);

  useEffect(() => {
    tokenCheker();
  }, []);

  return (
    <Base>
      <div className={styles.register}>
        <div className={styles.container}>
          <div
            className={`${styles["form-container"]} ${styles["register-container"]}`}
          >
            <form onSubmit={(e) => submit(e)} className={styles.register_form}>
              <h1 className={`${styles.register_title}`}>Register</h1>
              <input
                type="text"
                name="name"
                id="name"
                value={registerdata.name}
                onChange={(e) => handelChange(e)}
                placeholder="Username"
                required
                autoComplete="off"
              />
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
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={registerdata.confirmPassword}
                onChange={(e) => handelChange(e)}
                placeholder="Confirm Password"
              />
              <button className={`${styles.register_btn}`}>register</button>
            </form>
          </div>

          <div className={styles["reg-overlay-container"]}>
            <div className={styles.overlay}>
              <div
                className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
                style={{ padding: 0 }}
              >
                <h1 className={styles.register_title}>
                  Already have an account?
                </h1>
                <p className={styles.register_desc}>
                  To keep connected with us please login with your personal info
                </p>
                <Link to="/login">
                  <button className={styles.login_btn}>Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Register;
