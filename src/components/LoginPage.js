// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';



function LoginPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // store token in local storage
      localStorage.setItem('token', data.token);
      navigate('/search');

    } else {
      // Handle unsuccessful login (e.g., display an error message).
      console.log('error');
    }
  };

  return (
    <div className="search-form-container">
      <div className="form-container">
        {isLoginForm ? (
          <form className="search-form">
            <input type="text" placeholder="username" value={username} onChange={handleUsernameChange}/>
            <input type="password"  placeholder="password" value={password} onChange={handlePasswordChange}/>
            <button onClick={(e) => handleLogin(e)}  type="submit">Log In</button>
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
