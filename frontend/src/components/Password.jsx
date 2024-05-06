

import React, { useState } from 'react';
import axios from 'axios';

function PasswordCreation() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('/api/set-password/', { password });
      console.log(response.data);
      // Handle successful password creation (e.g., redirect to login page)
    } catch (error) {
      console.error(error.response.data);
      setError('Password creation failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <button type="submit">Set Password</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default PasswordCreation;
