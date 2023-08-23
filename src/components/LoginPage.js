// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="search-form-container">
      <div className="form-container">
        {isLoginForm ? (
          <form className="search-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log In</button>
            <button type="button" onClick={toggleForm}>Sign Up</button>
            <Link to="/search" className="guest-link">
              Continue as a Guest
            </Link>
          </form>
        ) : (
          <form className="search-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="text" placeholder="Address" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telephone" />
            <button type="submit">Sign Up</button>
            <button type="button" onClick={toggleForm}>Log In</button>
            <Link to="/search" className="guest-link">
              Continue as a Guest
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
