import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <h2>Sign up</h2>
      <form>
        <label>Username :</label>
        <input type="text" placeholder="Enter Username" />
        <label>Email :</label>
        <input type="email" placeholder="Enter Email" />
        <label>Password :</label>
        <input type="password" placeholder="Enter Password" />
        <p>Already have an account? <Link to="/">Login</Link></p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
