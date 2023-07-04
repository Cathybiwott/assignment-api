import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Add code to validate the login credentials
    // and show the success message to the user
    // and navigate to the products page
    if (username === 'admin' && password === 'password') {
      setSuccessMessage('Login successful!');
      history.push('/products');
    } else {
      setSuccessMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
