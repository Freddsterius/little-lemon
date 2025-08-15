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
          <input type="text" placeholder="* First Name" required />
          <p>First name is required</p>
        </div>

        <div>
          <input type="text" placeholder="* Last Name" required />
          <p>Last name is required</p>
        </div>

        <div>
          <input type="text" placeholder="Phone Number (optional)" />
        </div>

        <div>
          <input type="text" placeholder="* Email" required />
          <p>Email is required</p>
        </div>

        <div>
          <input type="password" placeholder="* Create a password" required />
          <p>Password is required (6 characters at least)</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="* Confirm the password"
            required
          />
          <p>To confirm the password is required</p>
        </div>

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
