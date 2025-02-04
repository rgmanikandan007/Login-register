import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {username,email,password})
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="register-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>Username :</label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email :</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
