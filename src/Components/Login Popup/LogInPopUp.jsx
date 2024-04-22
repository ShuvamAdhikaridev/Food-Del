import React, { useState } from "react";
import "./LogInPopUP.css";
import { assets } from "../../assets/assets";

const LogInPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="Login-Popup">
      <form className="login-popup-container">
        <div className="login-popup-tittle">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text " placeholder="Your name" required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Login" ? "Login" : "Create a Account"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to theterms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account?
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogInPopUp;
