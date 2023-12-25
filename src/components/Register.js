import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = () => {
    // Implement your validation logic here
    // For example, check if the fields are not empty
    return (
      registrationData.username.trim() !== '' &&
      registrationData.email.trim() !== '' &&
      registrationData.password.trim() !== ''
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Implement registration logic here
      const response = await axios.post('/api/auth/register', registrationData);
      console.log(response.data); // Handle the response (e.g., show success message, redirect user, etc.)
    } catch (error) {
      console.error('Registration failed:', error);

      if (error.response) {
        // The request was made, but the server responded with an error
        setError(error.response.data.message || 'Registration failed.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={registrationData.username} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={registrationData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={registrationData.password} onChange={handleChange} />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;
