import React, { useState } from 'react';
import axios from 'axios';

function OTPVerification() {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify-otp/', { otp });
      console.log(response.data);
      // Handle successful OTP verification (e.g., proceed to password creation)
    } catch (error) {
      console.error(error.response.data);
      setError('OTP verification failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} placeholder="Enter OTP" />
      <button type="submit">Verify OTP</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default OTPVerification;
