// import React from 'react';
import React, { useState } from "react";
import "../styles/Loginpage.css";
import logo from "../assets/images/logo.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loginpage() {
  const [isLogin, setIsLogin] = useState(true);
  // const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // firstName: "",
    // lastName: "",
    username: "",
    email: "",
    password: "",
    rememberPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleToggleViewPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleToggleLoginSignup = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your validation and registration/login logic here
    // For example, you can check if the required fields are filled and validate email/password
  };

  return (
    <div className="loginpage">
      <div className="loginpage-content">
        <div className="login-box">
          {/* Sign Up */}
          <img src={logo} alt="Logo" />

          <h2>{isLogin ? "Login" : "Sign Up"}</h2>

          {/* {!isLogin && (
            <>
              <input
                type="text"
                name="firstName"
                className="Name"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                />
              <input
                type="text"
                name="lastName"
                className="Name"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </>
          )} */}

          {!isLogin && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <div className="password-input">
            <input
              // type={showPassword ? "text" : "password"}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {/* <i
              className={`password-toggle ${
                showPassword ? "fas fa-eye-slash" : "fas fa-eye"
              }`}
              onClick={handleToggleViewPassword}
            /> */}
          </div>

          {isLogin && (
            <label>
              <input
                type="checkbox"
                name="rememberPassword"
                checked={formData.rememberPassword}
                onChange={handleInputChange}
              />
              Remember me
            </label>
          )}

          <button type="submit" className="button" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <div className="toggle-link" onClick={handleToggleLoginSignup}>
            {isLogin ? "Not a member? Sign Up" : "Already have an account? Login"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
