// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Implement login logic here
      const response = await axios.post('http://your-backend-url/api/auth/login', loginData);
      console.log(response.data); // Handle the response (e.g., store token in state, redirect user, etc.)
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={loginData.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={loginData.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
