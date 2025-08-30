import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [account, setAccount] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h1 className="login-title">Welcone</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">* Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Confirm the password"
              value={account.email}
              onChange={handleChange}
              required
            />
            <p>You typed: {account.email}</p>
            {account.email == "" && (
              <p style={{ color: "red" }}>⚠️ Email is required!</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password">* Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
              onChange={handleChange}
              value={account.password}
              required
            />
            {account.password == "" && (
              <p style={{ color: "red" }}>⚠️ Password is required!</p>
            )}
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="create-account">
          Don't have an account?{" "}
          <Link to="/create-account">
            <span className="create-account-link">Create an Account.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
