import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
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
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">* Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
              required
            />
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
