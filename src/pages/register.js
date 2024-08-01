// pages/register.js
import { useState } from 'react';
import { useAuth } from '../useAuth';
import { useRouter } from 'next/router';
import "@/styles/login.module.css"

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, isAuthenticated } = useAuth();
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      setError(null);
      await register({ email, password });
      router.push('/');
    } catch (err) {
      setError('Error during registration');
    }
  };

  if (isAuthenticated) {
    return <p>Registered successfully!</p>;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Register Information</h1>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <button className="button" type="submit">Register</button>
          {error && <p>{error}</p>}
        </form>
        <div className="footer">
          <a href="/login">Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
