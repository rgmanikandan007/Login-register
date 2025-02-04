import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {console.log(result)
      if(result.data === "Success"){
        navigate("/home")
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password :</label>
        <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
        <p>Don't have an account? <Link to="/register">Sign-up</Link></p>
        <button className="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
