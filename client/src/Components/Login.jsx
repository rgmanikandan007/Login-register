import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email === "" || password === ""){
      setErr("Please Enter field")
    } else {
      setErr("")
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email :</label>
        <input type="email" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/>
        <span style={{color:"red", fontSize:"12px"}}>{err}</span>
        <label>Password :</label>
        <input type="password" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)}/>
        <span style={{color:"red", fontSize:"12px"}}>{err}</span>
        <p>Don't have an account? <Link to="/register">Sign-up</Link></p>
        <button className="login-btn" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
