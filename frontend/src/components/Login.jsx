import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login/', { username, password });
      console.log(response.data);
      // Handle successful login (e.g., redirect)
    } catch (error) {
      console.error(error.response.data);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"  placeholder='Enter Your user name'  value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password"  placeholder="Enter your Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit"   >Login</button>
      {error && <div>{error}</div>}
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </form>
  );
}

export default Login;
