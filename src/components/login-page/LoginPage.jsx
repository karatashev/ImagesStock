import React from "react";
import "./LoginPage.css"
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const LoginPage = () => {
  return (
    <>
    <form>
      <h1>Join our stock community!</h1>
      <h4>Download free photos and videos powered by the best photographers</h4>
        <div className="inputs-container">
        <div className="field">
          <label>USERNAME</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username here . . ."
          />
        </div>
        <div className="field">
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password here . . ."
          />
        </div>
        </div>
        <Link to="/images">
          <button className="login-button">LOG IN</button>
        </Link>
    </form>
    <Footer />
    </>
  );
};

export default LoginPage;
