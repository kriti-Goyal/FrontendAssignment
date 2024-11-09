// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ActiveOrders from './pages/ActiveOrders';
import CompletedOrders from './pages/CompletedOrders';
import DarkModeToggle from './components/DarkModeToggle';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for the saved theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Update the class on the root element for dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen">
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="active-orders" element={<ActiveOrders />} />
          <Route path="completed-orders" element={<CompletedOrders />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
