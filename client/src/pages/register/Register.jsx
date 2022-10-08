import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.scss";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "" || email === "") {
      setMsg(true);
      return;
    } else {
      setMsg(false);
      setError(false);
      try {
        const res = await axios.post("/api/v1/auth/register", {
          username,
          password,
          email,
        });
        console.log(res);
        res.data && window.location.replace("/login");
      } catch (error) {
        setError(true);
      }
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username ..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {msg === true ? (
        <span style={{ color: "red", marginTop: "10px" }}>
          Missing required parameter!
        </span>
      ) : error === true ? (
        <span style={{ color: "red", marginTop: "10px" }}>
          This account already exists, please give it another name
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
