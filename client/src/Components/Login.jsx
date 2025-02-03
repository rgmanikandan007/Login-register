import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Username :</label>
        <input type="text" placeholder="Enter Username" />
        <label>Password :</label>
        <input type="password" placeholder="Enter Password" />
        <p>Don't have an account? <Link to="/register">Sign-up</Link></p>
        <button className="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
