import React from "react";
import OAuthButtons from "./OAuthButtons";
import {motion} from "framer-motion";

const LoginLeft = () => {
    return(
        <motion.div
        className="login-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{duration: 0.5}}
        >
            <h2 className="brand">Travel Lanka</h2>

            <h3>Welcome Back</h3>
            <p className="subtext">Sign in to continue your Sri Lankan adventure</p>

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
      <div className="password-field">
        <input type="password" placeholder="***********" />
        <span className="eye-icon">👁️</span>
      </div>
        
        <div className="forgot">
        <a href="#">Forgot password?</a>
      </div>

      <button className="btn signin">Sign In</button>

      <OAuthButtons />

      <div className="footer-links">
        <p>Don’t have an account? <a href="#">Sign up</a></p>
        <a href="#">Terms & Conditions</a>
      </div>
      
    </motion.div>
  );
};

export default LoginLeft;