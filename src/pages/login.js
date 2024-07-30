import { useState } from 'react';
import { useAuth } from '../useAuth';
import { useRouter } from 'next/router';
import "@/styles/login.module.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useAuth();
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await login({ email, password });
      router.push('/'); // Redirect to home page after successful login
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  if (isAuthenticated) {
    return <p>Logged in!</p>; // Or redirect to another page
  }

  return (
    <div className="login-container">
      <div className='login-box'>
    <form className='login-form' onSubmit={handleSubmit}>
      <h1>login information</h1>
      <input
        type="email"
        className='input-field'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        className='input-field'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className='button' type="submit">Login</button>
      {error && <p>{error}</p>}
      <br/>
      <br/>
    </form>
    </div>
    </div>
  );
};
export default LoginPage;

