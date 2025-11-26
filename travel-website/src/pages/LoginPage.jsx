import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "../pages/HomePage"
import "../styles/LoginPage.css"; 
import loginImage from "../assets/login-bg.jpg"; 

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Simulated login success
    navigate("/Home", { replace: true });
  };

  return (
    <div className="login-wrapper">

      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* LEFT SIDE */}
        <div className="login-left">
          <h1 className="logo">Travel Lanka</h1>
          <h2 className="brand">Welcome Back 👋</h2>
          <p className="subtext">Sign in to continue your journey</p>

          <form onSubmit={handleLogin}>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? "🙈" : "👁️"}
              </span>
            </div>

            <p className="forgot">Forgot Password?</p>

            <button className="btn signin" type="submit">
              Sign In
            </button>

            <div className="oauth-row">
              <button className="oauth-btn">Google</button>
              <button className="oauth-btn">Facebook</button>
            </div>
          </form>

          <p className="footer-links">
            Don’t have an account?
            <a href="/register"> <p className ="create-one">Create one</p></a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="login-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={loginImage} className="right-img" alt="travel" />

          {/* Floating Tags */}

          

        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
