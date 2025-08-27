import React from "react";
import "./newAccount.css";

const NewAccount = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="create-full-screen-container">
        <div className="create-container">
          <h1 className="create-title">Create an Account</h1>

          <form className="create-account-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="first-name">* First Name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name..."
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="last-name">* Last Name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name..."
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="Phone Number (optional)..."
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">* Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email..."
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">* Create Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create a password..."
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">* Confirm Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirm the password..."
                required
              />
            </div>

            <button type="submit" className="create-button">
              Create Account
            </button>
            <p className="note">Note: The fields with * are required!</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
