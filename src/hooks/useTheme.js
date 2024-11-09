// src/hooks/useTheme.js

import { useEffect, useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' // Check the saved theme in localStorage
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Apply dark mode class globally
      localStorage.setItem('theme', 'dark'); // Save the theme to localStorage
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark mode class
      localStorage.setItem('theme', 'light'); // Save the theme to localStorage
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useTheme;
