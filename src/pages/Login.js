// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { useAuth } from '../context/AuthProvider';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Use the login function from the Auth context
    const navigate = useNavigate();  // Create a navigate instance
  
    const handleLogin = async (e) => {
      e.preventDefault();
      
      // Call the login function from AuthProvider to authenticate the user
      try {
        await login(username, password); // This could be an API call or some validation logic
        // Navigate to the dashboard after successful login
        navigate('/dashboard/active-orders');  // Using navigate instead of window.location.href
      } catch (error) {
        // Handle login error (e.g., invalid credentials)
        console.error('Login failed:', error);
      }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <form onSubmit={handleLogin} className="w-1/3 bg-white dark:bg-gray-800 p-6 shadow-md rounded">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>
            
            <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded"
              required
            />
    
            <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded"
              required
            />
    
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Login
            </button>
          </form>
        </div>
      );
    
}

export default Login;
