// src/components/DarkModeToggle.js
import React from 'react';

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="flex justify-end p-4">
      <label className="mr-2 text-gray-900 dark:text-white">Dark Mode</label>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 bg-gray-300 dark:bg-gray-600 rounded"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default DarkModeToggle;
