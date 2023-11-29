import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../config/firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    setError('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Login successful');
        navigate('/home');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div style={containerStyle}>
      <h1>Login Page</h1>

      <div style={inputContainerStyle}>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div style={inputContainerStyle}>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>

      <div style={linkContainerStyle}>
        <Link to="/forgotPassword">Forgot Password?</Link>
        <Link to="/register">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '400px',
  margin: '50px auto',
  padding: '20px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const inputContainerStyle = {
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '12px',
  width: '100%',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

export default Login;
