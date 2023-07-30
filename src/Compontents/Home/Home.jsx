import React from "react";
import "./home.css";
import homeLogo from "../../img/homeLogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="info">
        <img src={homeLogo} alt="" />
        <h4>...Welcome to this site for Timepass...</h4>
      </div>

      <div className="btns">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
