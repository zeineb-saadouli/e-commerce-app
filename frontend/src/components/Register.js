import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
      });

      localStorage.setItem('token', response.data.token); // Save the JWT token to localStorage
      setSuccess('Registration successful!');
      setError(''); // Clear errors
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
      setSuccess(''); // Clear success messages
    }
  };

  return (
    <div className="register-container">
    <h2>Créer un compte</h2>

    {/* Affichage des messages d'erreur ou de succès */}
    {error && <div className="error">{error}</div>}
    {success && <div className="success">{success}</div>}

    <form onSubmit={handleRegister}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </form>

    {/* Lien vers la page de connexion */}
    <p className="text-center mt-3">
      Vous avez déjà un compte ? <a href="/login">Se connecter</a>
    </p>
  </div>
  );
};

export default Register;