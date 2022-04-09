import React from "react";
import { Link } from "react-router-dom";
import styles from './Styles/register.module.css'
import Base from "../Base";

const Register = () => {
  return (
    <Base>
      <div className={styles.register}>
        <div className={styles.container}>
          <div
            className={`${styles["form-container"]} ${styles["register-container"]}`}
          >
            <form className={styles.register_form}>
              <h1 className={`${styles.register_title}`}>Register</h1>
              <input type="text" name="name" placeholder="Username" />
              <input name="email" placeholder="Email" type="email" />
              <input name="password" placeholder="Password" type="password" />
              <button className={`${styles.register_btn}`}>register</button>
            </form>
          </div>
          <div className={styles["reg-overlay-container"]}>
            <div className={styles.overlay}>
              <div
                className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
                style={{padding: 0}}
              >
                <h1 className={styles.register_title}>
                  Already have an account?
                </h1>
                <p className={styles.register_desc}>
                  To keep connected with us please login with your personal info
                </p>
                <Link to="/login"><button className={styles.login_btn}>Sign In</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Register;
