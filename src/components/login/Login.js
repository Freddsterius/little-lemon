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
        <div>
          <input
            type="text"
            placeholder="* First Name"
            aria-label="First Name"
            required
          />
          <small>First name is required</small>
        </div>

        <div>
          <input
            type="text"
            placeholder="* Last Name"
            aria-label="Last Name"
            required
          />
          <small>Last name is required</small>
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone Number (optional)"
            aria-label="Phone Number"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="* Email"
            aria-label="Email"
            required
          />
          <small>Email is required</small>
        </div>

        <div>
          <input
            type="password"
            placeholder="* Create a password"
            aria-label="Password"
            required
          />
          <small>Password is required (6 characters at least)</small>
        </div>

        <div>
          <input
            type="password"
            placeholder="* Confirm the password"
            aria-label="Password"
            required
          />
          <small>To confirm the password is required</small>
        </div>

        <textarea
          rows={5}
          placeholder="Add a special request (optional)"
          aria-label="Special Request"
        ></textarea>

        <button
          type="submit"
          className="login-btn"
          aria-label="Submit Form"
          disabled={true}
        >
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default Login;
