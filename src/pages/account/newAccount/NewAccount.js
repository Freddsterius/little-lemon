import React, { useState } from "react";
import "./newAccount.css";

const NewAccount = () => {
  const [newAccount, setNewAccount] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setNewAccount({ ...newAccount, [event.target.name]: event.target.value });
  };

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
                name="firstName"
                id="first-name"
                placeholder="First Name..."
                value={newAccount.firstName}
                onChange={changeHandler}
                required
              />
              <p>You typed: {newAccount.firstName}</p>
              {newAccount.firstName == "" && (
                <p style={{ color: "red" }}>⚠️ First Name is required!</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="last-name">* Last Name</label>
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Last Name..."
                value={newAccount.lastName}
                onChange={changeHandler}
                required
              />
              <p>You typed: {newAccount.lastName}</p>
              {newAccount.lastName == "" && (
                <p style={{ color: "red" }}>⚠️ Last Name is required!</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phone-number"
                placeholder="Phone Number (optional)..."
                value={newAccount.phoneNumber}
                onChange={changeHandler}
              />
              <p>You typed: {newAccount.phoneNumber}</p>
            </div>

            <div className="input-group">
              <label htmlFor="email">* Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email..."
                value={newAccount.email}
                onChange={changeHandler}
                required
              />
              <p>You typed: {newAccount.email}</p>{" "}
              {newAccount.email == "" && (
                <p style={{ color: "red" }}>⚠️ Email is required!</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="password">* Create Password</label>
              <input
                type="password"
                name="createPassword"
                id="password"
                placeholder="Create a password..."
                value={newAccount.createPassword}
                onChange={changeHandler}
                required
              />
              <p>You typed: {newAccount.createPassword}</p>
              {newAccount.createPassword == "" && (
                <p style={{ color: "red" }}>⚠️ Password is required!</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="password">* Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="password"
                placeholder="Confirm the password..."
                value={newAccount.confirmPassword}
                onChange={changeHandler}
                required
              />
              <p>You typed: {newAccount.confirmPassword}</p>
              {newAccount.confirmPassword != newAccount.createPassword && (
                <p style={{ color: "red" }}>⚠️Password don't match!</p>
              )}
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
