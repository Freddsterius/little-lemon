import React from "react";
import "./login.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <section className="login-little-lemon">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </section>
      <form onSubmit={handleSubmit} className="login-form">
        <h3 className="form-title">Sign in to collect points</h3>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <textarea
          rows={5}
          placeholder="Add a special request (optional)"
        ></textarea>
        <button type="submit" className="login-btn" disabled={true}>
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default Login;
