import React, { useState } from "react";
import axios from "axios";
// import { Button, Form, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);

      try {
        const response = await axios.post('http://localhost:5000/api/users/login', {
          email,
          password,
        });

        // Save JWT token to localStorage
        localStorage.setItem('token', response.data.token);
        setLoading(false);
        // Redirect user to the home page or wherever you want after successful login
        window.location.href = '/'; // Example: Redirect to homepage
      } catch (err) {
        setLoading(false);
        setError(err.response?.data?.message || 'Login failed');
      }
    } else {
      setError('Please fill in both fields');
    }
  };
return (
  <div className="login-container">
  <h2>Login</h2>
  {error && <div className="error">{error}</div>}
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit" disabled={loading}>
      {loading ? 'Logging in...' : 'Login'}
    </button>
  </form>
</div>
  );
};

export default Login;


