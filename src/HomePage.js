import React from "react";
import { useNavigate } from "react-router-dom";
import BoidsBackground from "./BoidsBackground";
import "./App.css";
import logo from "./logo.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <BoidsBackground/>
      <div className="container">
    
        <div className="content-box">
          {/* Left Side - Logo */}
          <div className="left-section">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          {/* Right Side - Text Content */}
          <div className="right-section">
            <h1>Lariat.app</h1>
            <p>Designed for attorneys, built for everyone.</p>
            <button className="learn-more" onClick={() => navigate("/learn-more")}>
              Learn more
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;