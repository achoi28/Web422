import { useAtom } from 'jotai';
import { userAtom } from './useAtom';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const setToken = (token) => {
  if (isBrowser) {
    localStorage.setItem('access_token', token);
  }
};

const getToken = () => {
  if (isBrowser) {
    return localStorage.getItem('access_token');
  }
  return null;
};

const readToken = () => {
  try {
    const token = getToken();
    return token ? jwtDecode(token) : null;
  } catch (err) {
    console.error('Error decoding token:', err);
    return null;
  }
};

const removeToken = () => {
  if (isBrowser) {
    localStorage.removeItem('access_token');
  }
};

export const isAuthenticated = () => {
  const token = getToken();
  return token ? true : false;
};

export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);
  const [authStatus, setAuthStatus] = useState(isAuthenticated());
  const router = useRouter();

  useEffect(() => {
    setAuthStatus(isAuthenticated());
  }, [user]);

  const login = async ({ email, password }) => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // Correct payload structure
    });

    if (response.ok) {
      const result = await response.json();
      setToken(result.token);
      setUser(result.user); // Assuming the response contains user data
      setAuthStatus(true);
      router.push('/'); // Redirect to home page
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    removeToken();
    setAuthStatus(false);
    router.push('/login'); // Redirect to login page after logout
  };

  return {
    user,
    login,
    logout,
    isAuthenticated: authStatus,
  };
};
